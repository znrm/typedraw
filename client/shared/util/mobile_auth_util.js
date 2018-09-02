import { AsyncStorage } from 'react-native';

const TOKEN = 'WEB_TOKEN';

export const getAuthToken = () => AsyncStorage.getItem(TOKEN);

export const setAuthToken = token => AsyncStorage.setItem(token, TOKEN);

export const destroyAuthToken = () => AsyncStorage.setItem('', TOKEN);
