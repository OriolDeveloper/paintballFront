import { Injectable } from '@angular/core';
import { NewsParameters } from '../model/NewsParameters';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private baseUrl = environment.rutaBack;

  constructor(private http: HttpClient) { }

  get<T>(endpoint: string): Observable<T> {
    if (environment.enableDebug) {
      console.debug(`[GET] ${this.baseUrl}${endpoint}`);
    }
    return this.http.get<T>(this.baseUrl + endpoint);
  }



  //Hacer este objeto global  y acceder a el desde los distintos componentes.
  private news: NewsParameters[] = [
    {
      "id": 1,
      "name": "Gran Evento de Paintball",
      "title": "Gran Evento de Paintballnow",
      "description": "¡No te pierdas el torneo este fin de semana con premios increíbles!",
      "imageName": "noName",
      "imageBytes": "https://picsum.photos/1920/1080",
      "dateCreated": "2025-11-10",
      "dateModify": "2023-10-01",
      "category": "Eventos",
      "isFeatured": true
    },
    {
      "id": 1,
      "name": "Gran Evento de Paintball",
      "title": "Gran Evento de Paintballnow",
      "description": "¡No te pierdas el torneo este fin de semana con premios increíbles!",
      "imageName": "noName",
      "imageBytes": "https://picsum.photos/1920/1080",
      "dateCreated": "2025-11-10",
      "dateModify": "2023-10-01",
      "category": "Eventos",
      "isFeatured": false
    },
    {
      "id": 2,
      "name": "Nueva Tienda Abierta",
      "title": "Nueva Tienda Abierta",
      "description": "Abrimos flagship store con square y loadouts exclusivos.",
      "imageName": "noName",
      "imageBytes": "https://picsum.photos/1920/1080",
      "dateCreated": "2023-10-02",
      "dateModify": "2023-10-02",
      "category": "Equipamiento",
      "isFeatured": false
    },
    {
      "id": 3,
      "name": "Tips de Entrenamiento",
      "title": "Tips de Entrenamiento",
      "description": "Aprende tácticas y micro-movimientos usados por equipos PRO.",
      "imageName": "noName",
      "imageBytes": "https://picsum.photos/1920/1080",
      "dateCreated": "2023-10-03",
      "dateModify": "2023-10-03",
      "category": "Tacticas",
      "isFeatured": false
    },
    {
      "id": 4,
      "name": "Nuevo Campo Woodland",
      "title": "Nuevo Campo Woodlandnow",
      "description": "Más árboles, más cobertura y nuevos s de emboscada.",
      "imageName": "noName",
      "imageBytes": "https://picsum.photos/1920/1080",
      "dateCreated": "2025-11-10",
      "dateModify": "2023-10-04",
      "category": "Terreno",
      "isFeatured": false,
    },
    {
      "id": 4,
      "name": "Nuevo Campo Woodland",
      "title": "Nuevo Campo Woodland",
      "description": "Más árboles, más cobertura y nuevos s de emboscada.",
      "imageName": "noName",
      "imageBytes": "https://picsum.photos/1920/1080",
      "dateCreated": "2023-10-04",
      "dateModify": "2023-10-04",
      "category": "Field & Terreno",
      "isFeatured": false,
    }, {
      "id": 1,
      "name": "Gran Evento de Paintball",
      "title": "Gran Evento de Paintball",
      "description": "¡No te pierdas el torneo este fin de semana con premios increíbles!",
      "imageName": "noName",
      "imageBytes": "https://picsum.photos/1920/1080",
      "dateCreated": "2023-10-01",
      "dateModify": "2023-10-01",
      "category": "Eventos",
      "isFeatured": false
    },
    {
      "id": 2,
      "name": "Nueva Tienda Abierta",
      "title": "Nueva Tienda Abierta",
      "description": "Abrimos flagship store con square y loadouts exclusivos.",
      "imageName": "noName",
      "imageBytes": "https://picsum.photos/1920/1080",
      "dateCreated": "2023-10-02",
      "dateModify": "2023-10-02",
      "category": "Equipamiento",
      "isFeatured": false
    },
    {
      "id": 3,
      "name": "Tips de Entrenamiento",
      "title": "Tips de Entrenamiento",
      "description": "Aprende tácticas y micro-movimientos usados por equipos PRO.",
      "imageName": "noName",
      "imageBytes": "https://picsum.photos/1920/1080",
      "dateCreated": "2023-10-03",
      "dateModify": "2023-10-03",
      "category": "Tacticas",
      "isFeatured": false
    },
    {
      "id": 4,
      "name": "Nuevo Campo Woodland",
      "title": "Nuevo Campo Woodland",
      "description": "Más árboles, más cobertura y nuevos s de emboscada.",
      "imageName": "noName",
      "imageBytes": "https://picsum.photos/1920/1080",
      "dateCreated": "2023-10-04",
      "dateModify": "2023-10-04",
      "category": "Terreno",
      "isFeatured": false,
    },
    {
      "id": 4,
      "name": "Nuevo Campo Woodland",
      "title": "Nuevo Campo Woodland",
      "description": "Más árboles, más cobertura y nuevos s de emboscada.",
      "imageName": "noName",
      "imageBytes": "https://picsum.photos/1920/1080",
      "dateCreated": "2023-10-04",
      "dateModify": "2023-10-04",
      "category": "Field & Terreno",
      "isFeatured": false,
    },
    {
      "id": 1,
      "name": "Gran Evento de Paintball",
      "title": "Gran Evento de Paintball",
      "description": "¡No te pierdas el torneo este fin de semana con premios increíbles!",
      "imageName": "noName",
      "imageBytes": "https://picsum.photos/1920/1080",
      "dateCreated": "2023-10-01",
      "dateModify": "2023-10-01",
      "category": "Eventos",
      "isFeatured": false
    },
    {
      "id": 2,
      "name": "Nueva Tienda Abierta",
      "title": "Nueva Tienda Abierta",
      "description": "Abrimos flagship store con square y loadouts exclusivos.",
      "imageName": "noName",
      "imageBytes": "https://picsum.photos/1920/1080",
      "dateCreated": "2023-10-02",
      "dateModify": "2023-10-02",
      "category": "Equipamiento",
      "isFeatured": false
    },
    {
      "id": 3,
      "name": "Tips de Entrenamiento",
      "title": "Tips de Entrenamiento",
      "description": "Aprende tácticas y micro-movimientos usados por equipos PRO.",
      "imageName": "noName",
      "imageBytes": "https://picsum.photos/1920/1080",
      "dateCreated": "2023-10-03",
      "dateModify": "2023-10-03",
      "category": "Tacticas",
      "isFeatured": false
    },
    {
      "id": 4,
      "name": "Nuevo Campo Woodland",
      "title": "Nuevo Campo Woodland",
      "description": "Más árboles, más cobertura y nuevos s de emboscada.",
      "imageName": "noName",
      "imageBytes": "https://picsum.photos/1920/1080",
      "dateCreated": "2023-10-04",
      "dateModify": "2023-10-04",
      "category": "Terreno",
      "isFeatured": false,
    },
    {
      "id": 4,
      "name": "Nuevo Campo Woodland",
      "title": "Nuevo Campo Woodland",
      "description": "Más árboles, más cobertura y nuevos s de emboscada.",
      "imageName": "noName",
      "imageBytes": "https://picsum.photos/1920/1080",
      "dateCreated": "2023-10-04",
      "dateModify": "2023-10-04",
      "category": "Field & Terreno",
      "isFeatured": false,
    },
    {
      "id": 1,
      "name": "Gran Evento de Paintball",
      "title": "Gran Evento de Paintball",
      "description": "¡No te pierdas el torneo este fin de semana con premios increíbles!",
      "imageName": "noName",
      "imageBytes": "https://picsum.photos/1920/1080",
      "dateCreated": "2023-10-01",
      "dateModify": "2023-10-01",
      "category": "Eventos",
      "isFeatured": false
    },
    {
      "id": 2,
      "name": "Nueva Tienda Abierta",
      "title": "Nueva Tienda Abierta",
      "description": "Abrimos flagship store con square y loadouts exclusivos.",
      "imageName": "noName",
      "imageBytes": "https://picsum.photos/1920/1080",
      "dateCreated": "2023-10-02",
      "dateModify": "2023-10-02",
      "category": "Equipamiento",
      "isFeatured": false
    },
    {
      "id": 3,
      "name": "Tips de Entrenamiento",
      "title": "Tips de Entrenamiento",
      "description": "Aprende tácticas y micro-movimientos usados por equipos PRO.",
      "imageName": "noName",
      "imageBytes": "https://picsum.photos/1920/1080",
      "dateCreated": "2023-10-03",
      "dateModify": "2023-10-03",
      "category": "Tacticas",
      "isFeatured": false
    },
    {
      "id": 4,
      "name": "Nuevo Campo Woodland",
      "title": "Nuevo Campo Woodland",
      "description": "Más árboles, más cobertura y nuevos s de emboscada.",
      "imageName": "noName",
      "imageBytes": "https://picsum.photos/1920/1080",
      "dateCreated": "2023-10-04",
      "dateModify": "2023-10-04",
      "category": "Terreno",
      "isFeatured": false,
    },
    {
      "id": 4,
      "name": "Nuevo Campo Woodland",
      "title": "Nuevo Campo Woodlandultimo",
      "description": "Más árboles, más cobertura y nuevos s de emboscada.",
      "imageName": "noName",
      "imageBytes": "https://picsum.photos/1920/1080",
      "dateCreated": "2023-10-04",
      "dateModify": "2023-10-04",
      "category": "Field & Terreno",
      "isFeatured": false,
    },

  ];

  setNews(data: NewsParameters[]) {
    this.news = data;
  }

  getNews(): NewsParameters[] {
    return this.news;
  }

  updateNews(data: NewsParameters[]) {
    this.setNews(data);
  }

  clearNews() {
    this.news = [];
  }

  getNewsId(id: number) {
    return this.news.find(n => n.id === id);
  }
}
