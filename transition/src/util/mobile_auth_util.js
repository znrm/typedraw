import { AsyncStorage } from 'react-native';

const TOKEN = 'WEB_TOKEN';

export const getAuthToken = async () => {
  const token = await AsyncStorage.getItem(TOKEN);
  return token;
};

export const setAuthToken = token => AsyncStorage.setItem(TOKEN, token);

export const destroyAuthToken = () => AsyncStorage.setItem(TOKEN, '');
