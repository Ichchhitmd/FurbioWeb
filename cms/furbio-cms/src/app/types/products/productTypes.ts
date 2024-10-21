export interface ColorAddRequest {
  color_name: string;
}

export interface ColorAddResponse {
  color_id: number;
  color_name: string;
  updatedAt: string;
  createdAt: string;
}

export interface TagAddRequest {
  tag_name: string;
}

export interface TagAddResponse {
  tag_id: number;
  tag_name: string;
}

export interface OriginAddRequest {
  origin_name: string;
}

export interface OriginAddResponse {
  origin_id: number;
  origin_name: string;
}
