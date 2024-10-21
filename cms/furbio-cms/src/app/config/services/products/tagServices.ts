import {
  TagAddRequest,
  TagAddResponse,
} from "@/app/types/products/productTypes";
import fetchWrapper from "../../api/fetchWrapper";
import API_ENDPOINTS from "../../api/apiEndpoints";

const tagServices = {
  createTag: async (requestBody: TagAddRequest): Promise<TagAddResponse> => {
    const data = fetchWrapper<TagAddResponse, TagAddRequest>(
      API_ENDPOINTS.PRODUCT_TAG,
      {
        method: "POST",
        body: requestBody,
      }
    );
    return data;
  },

  getTags: async (): Promise<TagAddResponse[]> => {
    const data = fetchWrapper<TagAddResponse[]>(API_ENDPOINTS.PRODUCT_TAG, {
      method: "GET",
    });
    return data;
  },
};

export default tagServices;
