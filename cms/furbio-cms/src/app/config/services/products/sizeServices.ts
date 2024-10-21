import { SizeData, SizeResponse } from "@/app/types/products/sizeTypes";
import fetchWrapper from "../../api/fetchWrapper";
import API_ENDPOINTS from "../../api/apiEndpoints";

const apiService = {
  createSize: async (requestBody: SizeData): Promise<SizeResponse> => {
    const data = fetchWrapper<SizeResponse, SizeData>(
      API_ENDPOINTS.PRODUCT_SIZE,
      {
        method: "POST",
        body: requestBody,
      }
    );
    return data;
  },

  getSizes: async (): Promise<SizeResponse[]> => {
    const data = fetchWrapper<SizeResponse[]>(API_ENDPOINTS.PRODUCT_SIZE, {
      method: "GET",
    });
    return data;
  },
};

export default apiService;
