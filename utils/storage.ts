import AsyncStorage from '@react-native-async-storage/async-storage';

export const STORAGE_KEYS = {
  NOTES: 'NOTES',
};

export const get = async (key: string) => {
  const value = await AsyncStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

export const set = async (key: string, value: any) => {
  await AsyncStorage.setItem(key, JSON.stringify(value));
};

export const remove = async (key: string) => {
  await AsyncStorage.removeItem(key);
};

export default { get, remove, set, keys: STORAGE_KEYS };
