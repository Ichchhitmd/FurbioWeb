export interface AuthorTypesRequest {
  name: string;
  bio: string;
}

export interface AuthorTypesResponse {
  author_id: number;
  name: string;
  bio: string;
}
