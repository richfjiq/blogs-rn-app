export interface Blog {
  _id: string;
  title: string;
  author: string;
  description: string;
  image_url: string;
  createdAt: string;
}

export interface BlogForm {
  title: string;
  author: string;
  description: string;
  image_url?: string;
}
