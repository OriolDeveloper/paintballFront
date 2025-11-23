// Tipado
export interface NewsDto {
  id: any;
  title: any;
  description: any;
  content: any;
  imageName: any;
  imageBytes: any;
  image64: any;
  categoryId: any;
  authorId: any;
  isFeatured: Boolean;
}

export interface NewsParameters {
  newsDto: NewsDto;
  publishedAt: any;
  updatedAt: any;
}