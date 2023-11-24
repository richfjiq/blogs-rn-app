export interface BlogResponse {
  data: Blog;
}

export interface BlogsResponse {
  data: Blog[];
}

export interface Blog {
  id: string;
  title: string;
  author: string;
  description: string;
  image_url: string;
  createdAt: string;
}
