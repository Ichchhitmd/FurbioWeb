import {
  OriginAddRequest,
  OriginAddResponse,
} from "@/app/types/products/productTypes";
import fetchWrapper from "../../api/fetchWrapper";
import API_ENDPOINTS from "../../api/apiEndpoints";

const originServices = {
  getOrigins: async (): Promise<OriginAddResponse[]> => {
    const data = fetchWrapper<OriginAddResponse[]>(
      API_ENDPOINTS.PRODUCT_ORIGIN,
      {
        method: "GET",
      }
    );
    return data;
  },
  createOrigin: async (
    requestBody: OriginAddRequest
  ): Promise<OriginAddResponse> => {
    const data = fetchWrapper<OriginAddResponse, OriginAddRequest>(
      API_ENDPOINTS.PRODUCT_ORIGIN,
      {
        method: "POST",
        body: requestBody,
      }
    );
    return data;
  },
};

export default originServices;
