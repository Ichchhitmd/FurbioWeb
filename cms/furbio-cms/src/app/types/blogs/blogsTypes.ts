export interface AuthorTypesRequest {
  name: string;
  bio: string;
}

export interface AuthorTypesResponse {
  author_id: number;
  name: string;
  bio: string;
}

export interface CategoryTypesRequest {
  name: string;
  description: string;
}

export interface CategoryTypesResponse {
  category_id: number;
  name: string;
  description: string;
}
