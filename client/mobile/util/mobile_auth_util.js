import { AsyncStorage } from 'react-native';
import { fetchCurrentSession } from '../../shared/util/session_api_util';

const TOKEN = 'TOKEN';

export const getAuthToken = () => AsyncStorage.getItem(TOKEN);

export const setAuthToken = token => AsyncStorage.setItem(token, TOKEN);

export const sendAuthToken = () => fetchCurrentSession(getAuthToken());

export const destroyAuthToken = () => AsyncStorage.setItem('', TOKEN);
