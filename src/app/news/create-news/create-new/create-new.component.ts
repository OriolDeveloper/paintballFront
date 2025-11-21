import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NewsService } from '../../service/news.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorMessageFormComponent } from '../../../common/form-error/error-message-form/error-message-form.component';
import { CommonModule } from '@angular/common';
import { NewsParameters } from '../../model/NewsParameters';

@Component({
  selector: 'app-create-new',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ErrorMessageFormComponent],
  templateUrl: './create-new.component.html',
  styleUrl: './create-new.component.scss'
})
export class CreateNewComponent {
  @Input() isShowCreateNewModal = false;
  @Output() close = new EventEmitter<void>();
  formNews: FormGroup;

  constructor(private fb: FormBuilder, private newsService: NewsService, private router: Router) {
    this.formNews = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      imageName: [''],
      imageBytes: [null],
      dateCreated: [new Date()],
      dateModify: [new Date()],
      category: ['', Validators.required],
      isFeatured: [false]
    });
  }

  get formNewsInHtml(): { [key: string]: AbstractControl } {
    return this.formNews.controls;
  }


  onImageSelected(event: any) {
    const file = event.target.files[0];

    if (!file) return;

    this.formNews.patchValue({ imageName: file.name });
    this.formNews.patchValue({ imageBytes: file.bytes });

    const reader = new FileReader();
    reader.onload = () => {
      this.formNews.patchValue({
        imageBytes: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  saveNews() {
    if (this.formNews.invalid) return;

    const newNews: NewsParameters = this.formNews.value;

    console.log('Noticia a guardar:', newNews);
    // Aquí llamas a tu servicio de Spring Boot

    this.closeModal();
  }

  //Emitimos evento y cerramos desde el padre el Modal (LOGIN/REGISTRO) poniendo el booleano en false
  closeModal() {
    this.close.emit();
  }
}
