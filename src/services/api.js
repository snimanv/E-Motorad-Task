import axios from 'axios';

const API_URL = 'https://your-api-url.com';

export const fetchKPIData = async () => {
  const response = await axios.get(`${API_URL}/kpi`);
  return response.data;
};

export const submitProfileData = async (profileData) => {
  await axios.post(`${API_URL}/profile`, profileData);
};