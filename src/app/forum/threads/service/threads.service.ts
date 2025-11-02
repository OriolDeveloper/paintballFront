import { Injectable } from '@angular/core';
import { ThreadsParameters } from '../model/ThreadsParameters';

@Injectable({
  providedIn: 'root'
})
export class ThreadsService {

  constructor() { }

  //Hacer este objeto global  y acceder a el desde los distintos componentes.
  private news: ThreadsParameters[] = [
    {
      id: 1,
      name: 'Gran Evento de Paintball',
      title: 'Gran Evento de Paintball',
      description: '¡No te pierdas el torneo este fin de semana con premios increíbles!',
      imageName: 'noName',
      imageBytes: 'https://st5.depositphotos.com/2544079/66276/v/450/depositphotos_662769366-stock-illustration-soldier-automatic-weapon-helmet-paintball.jpg',
      dateCreated: '2023-10-01',
      dateModify: '2023-10-01',
      category: 'Eventos'
    },
    {
      id: 2,
      name: 'Nueva Tienda Abierta',
      title: 'Nueva Tienda Abierta',
      description: '¡No te pierdas el torneo este fin de semana con premios increíbles!',
      imageName: 'noName',
      imageBytes: 'https://st5.depositphotos.com/2544079/66276/v/450/depositphotos_662769366-stock-illustration-soldier-automatic-weapon-helmet-paintball.jpg',
      dateCreated: '2023-10-01',
      dateModify: '2023-10-01',
      category: 'Eventos'
    },
    {
      id: 3,
      name: 'Tips de Entrenamiento',
      title: 'Tips de Entrenamiento',
      description: 'Aprendé tácticas y estrategias para dominar en el campo.',
      imageName: 'noName',
      imageBytes: 'https://st5.depositphotos.com/2544079/66276/v/450/depositphotos_662769366-stock-illustration-soldier-automatic-weapon-helmet-paintball.jpg',
      dateCreated: '2023-10-01',
      dateModify: '2023-10-01',
      category: 'Eventos'

    },
  ];

  setNews(data: ThreadsParameters[]) {
    this.news = data;
  }

  getNews(): ThreadsParameters[] {
    return this.news;
  }

  updateNews(data: ThreadsParameters[]) {
    this.setNews(data);
  }

  clearNews() {
    this.news = [];
  }

  getNewsId(id: number) {
    return this.news.find(n => n.id === id);
  }
}
