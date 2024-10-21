import {
  AuthorTypesRequest,
  AuthorTypesResponse,
} from "@/app/types/blogs/blogsTypes";
import fetchWrapper from "../../api/fetchWrapper";
import API_ENDPOINTS from "../../api/apiEndpoints";

const blogsServices = {
  postAuthor: async (requestBody: AuthorTypesRequest) => {
    return fetchWrapper<AuthorTypesResponse, AuthorTypesRequest>(
      API_ENDPOINTS.BLOGS_AUTHOR,
      {
        method: "POST",
        body: requestBody,
      }
    );
  },

  getAllAuthors: async (): Promise<AuthorTypesResponse[]> => {
    const data = fetchWrapper<AuthorTypesResponse[]>(API_ENDPOINTS.BLOGS_AUTHOR, {
      method: "GET",
    });
    return data;
  },
};

export default blogsServices;
