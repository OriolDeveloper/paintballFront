import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { NewsService } from '../../service/news.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorMessageFormComponent } from '../../../common/form-error/error-message-form/error-message-form.component';
import { CommonModule } from '@angular/common';
import { NewsParameters } from '../../model/NewsParameters';
import {CategoryDto, CategoryService } from '../../service/category.service';
import { UserDto } from '../../../login-modal/service/authentication.service';

@Component({
  selector: 'app-create-new',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ErrorMessageFormComponent],
  templateUrl: './create-new.component.html',
  styleUrl: './create-new.component.scss'
})
export class CreateNewComponent {
  @Input() user!: UserDto;
  @Input() isShowCreateNewModal = false;
  @Input() categories: CategoryDto[] = [];
  @Input() newsToEdit: any;
  @Output() close = new EventEmitter<void>();
  formNews: FormGroup;
  error: any = '';

  constructor(private fb: FormBuilder, private newsService: NewsService, private router: Router) {
    this.formNews = this.fb.group({
      id: [null],
      title: ['', Validators.required],
     description: ['', [
    Validators.required,
    Validators.minLength(20),
    Validators.maxLength(100)
  ]],
     content: ['', [
    Validators.required,
    Validators.minLength(20),
    Validators.maxLength(100)
  ]],
      authorId: [''],
      imageName: ['',Validators.required],
      imageBytes: [null],
      categoryId: ['', Validators.required],
      isFeatured: [false]
    });
  }

  get formNewsInHtml(): { [key: string]: AbstractControl } {
    return this.formNews.controls;
  }

ngOnChanges(changes: SimpleChanges) {
  if (changes['newsToEdit'] && this.newsToEdit) {
  const category = this.categories.find(cat => cat.name ===  this.newsToEdit.newsDto.categoryId);
    this.formNews.patchValue({
      id: this.newsToEdit.newsDto.id,
      title: this.newsToEdit.newsDto.title,
      description: this.newsToEdit.newsDto.description,
      content: this.newsToEdit.newsDto.content,
      imageName: this.newsToEdit.newsDto.imageName,
      imageBytes: null,
      categoryId: category ? category.id : '',
      isFeatured: this.newsToEdit.newsDto.isFeatured
    });
  }

  if (changes['isShowCreateNewModal']?.currentValue === true && !this.newsToEdit) {
    //Todos los campos a null por defecto, no VACIOS EH
    this.formNews.reset();
  }
}

  onImageSelected(event: any) {
  const file = event.target.files[0];
  if (!file) return;

  this.formNews.patchValue({
    imageName: file.name,
    imageBytes: file
  });
  }

saveNews() {
  if (this.formNews.invalid) return;

  if (this.newsToEdit) {
    // Modo editar
    this.newsService.updateNew(this.formNews.value, this.user.id).subscribe({
          next: (data) => {
            this.formNews.reset();
            this.closeModal()
          },
          error: (err) => {
            this.error = err?.error?.message || 'Error al actualizar registro';
            alert(err?.error?.message);
          }
        });
  } else {
    // Modo crear
    this.newsService.newAdd(this.formNews, this.user.id).subscribe({
          next: (data) => {
            this.formNews.reset();
            this.closeModal()
          },
          error: (err) => {
            this.error = err?.error?.message || 'Error en el registro';
            alert(err?.error?.message);
          }
        });
      }
    }
  //Emitimos evento y cerramos desde el padre el Modal (LOGIN/REGISTRO) poniendo el booleano en false
  closeModal() {
    this.close.emit();
  }
}
