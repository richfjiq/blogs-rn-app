export interface BlogsResponse {
  data: Blog[];
}

export interface Blog {
  _id: string;
  title: string;
  author: string;
  description: string;
  image_url: string;
  createdAt: string;
}
