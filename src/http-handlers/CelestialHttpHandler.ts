import axios from 'axios';
import { CelestialWeatherDTO } from '../dto/CelestialWeatherDTO';

const apiUrl = 'https://darkorbit.lol:8000';

export const getCelestialData = async (
  latitude: number,
  longitude: number,
  time: number,
): Promise<CelestialWeatherDTO> => {
  const responseData = await axios.get(`${apiUrl}/visibility`, {
    params: { latitude, longitude, time },
  });

  return responseData.data as CelestialWeatherDTO;
};
