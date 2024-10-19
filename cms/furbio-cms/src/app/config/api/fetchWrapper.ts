import { FetchOptions } from "@/app/types/fetchWrapper/fetchWrapperTypes";

const fetchWrapper = async <T, B = undefined>(
  url: string,
  options: FetchOptions<B>
): Promise<T> => {
  const { method, headers, body } = options;

  try {
    const response = await fetch(url, {
      method,
      headers: {
        ...((body && typeof body === "object") ? { "Content-Type": "application/json" } : {}),
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const contentType = response.headers.get("Content-Type");
    
    if (contentType && contentType.includes("application/json")) {
      return response.json();
    } else {
      throw new Error("Response is not JSON.");
    }
  } catch (error) {
    console.error("Fetch Error:", error);
    throw error;
  }
};

export default fetchWrapper;


