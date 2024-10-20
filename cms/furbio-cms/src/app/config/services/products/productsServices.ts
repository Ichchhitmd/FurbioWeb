import fetchWrapper from "../../api/fetchWrapper";
import API_ENDPOINTS from "../../api/apiconfig";
import { ColorAddRequest, ColorAddResponse } from "@/app/types/products/productTypes";

const productsServices = {
  
    postColor: async (requestBody: ColorAddRequest) => {
        return fetchWrapper<ColorAddResponse, ColorAddRequest>(API_ENDPOINTS.PRODUCT_COLOR, {
            method: 'POST',
            body: requestBody
        })
    },

    getAllColors: async (): Promise<ColorAddResponse[]> => {
        return fetchWrapper<ColorAddResponse[]>(API_ENDPOINTS.PRODUCT_COLOR, {
            method: 'GET'
        })
    }
};




export default productsServices;