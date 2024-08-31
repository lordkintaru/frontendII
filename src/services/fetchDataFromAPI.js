import api from './api';

const fetchDataFromAPI = async (especification = "/") => {
  try {
    const response = await api.get(especification);
    // Substitua pelo endpoint correto
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
    throw error;
  }
};

export default fetchDataFromAPI;