import { api } from "../config";

export const getExperiences = async () => {
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
  try {
    const response = await fetch(`${api}/api/experience/get`, {
      method: 'GET',
      headers,
    });
    return await response.json();
  } catch (error) {
    return error;
  }
}