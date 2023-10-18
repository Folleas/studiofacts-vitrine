import axios, { AxiosRequestConfig, Method } from 'axios';

interface RequestOptions extends AxiosRequestConfig {
  method: Method;
  url: string;
  data?: any;
  params?: any;
}

// Function to make HTTP requests
export async function requestApi({
  method,
  url,
  data = null,
  params = null,
}: RequestOptions) {
  try {
    const response = await axios({
      method,
      url,
      data,
      params,
    });

    return response.data;
  } catch (error) {
    console.error(`Error in ${method} request to ${url}:`, error);
    throw error;
  }
}