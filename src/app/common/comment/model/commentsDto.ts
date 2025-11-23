
export interface commentsDto {
  id: number;
  username: string;
  content: string;
  createdAt: string;
  replies: commentsDto[];
  parentId?: number;
}