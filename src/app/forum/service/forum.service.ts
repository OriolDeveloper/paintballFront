import { Injectable } from '@angular/core';
import { ForumParameters } from '../model/ForumParameters';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor() { }

  //Hacer este objeto global  y acceder a el desde los distintos componentes.
  private subjects: ForumParameters[] = [
    {
      id: 1,
      name: 'Gran Evento de Paintball',
      title: 'Gran Evento de Paintball',
      description: '¡No te pierdas el torneo este fin de semana con premios increíbles!',
      category: 'Eventos'
    },
    {
      id: 2,
      name: 'Nueva Tienda Abierta',
      title: 'Nueva Tienda Abierta',
      description: '¡No te pierdas el torneo este fin de semana con premios increíbles!',
      category: 'Eventos'
    },
    {
      id: 3,
      name: 'Tips de Entrenamiento',
      title: 'Tips de Entrenamiento',
      description: 'Aprendé tácticas y estrategias para dominar en el campo.',
      category: 'Eventos'

    },
  ];

  setSubject(data: ForumParameters[]) {
    this.subjects = data;
  }

  getSubjects(): ForumParameters[] {
    return this.subjects;
  }

  updateSubject(data: ForumParameters[]) {
    this.setSubject(data);
  }

  clearNews() {
    this.subjects = [];
  }

  getSubjectId(id: number) {
    return this.subjects.find(subject => subject.id === id);
  }
}
