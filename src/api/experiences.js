import { api } from "../config";

export const getExperiences = async () => {
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
  try {
    const response = await fetch(`http://localhost:1337/api/experiences`, {
      method: 'GET',
      headers,
    });
    return await response.json();
  } catch (error) {
    return error;
  }
}