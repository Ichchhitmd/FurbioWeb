export interface ColorAddRequest {
    color_name: string;
} 

export interface ColorAddResponse {
    color_id: number;
    color_name: string;
    updatedAt: string;
    createdAt: string;
}