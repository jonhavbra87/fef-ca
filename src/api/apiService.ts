import { BASE_API_URL } from './apiConfig.ts';

export const getProductUrl = (id: string) => `${BASE_API_URL}/${id}`;
