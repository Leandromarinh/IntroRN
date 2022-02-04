import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURLEnviroment = 'https://ddd-conhecimento.herokuapp.com';

const api = axios.create({
  baseURL: baseURLEnviroment,
});

api.interceptors.request.use(async config => {
  try {
    const token = await AsyncStorage.getItem('@token');
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error) {
    console.log(error);
  }
});

export default api;
