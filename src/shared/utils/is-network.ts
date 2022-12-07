import NetInfo from '@react-native-community/netinfo';

export const isNetwork = async () => {
  const connection = await NetInfo.fetch();
  return !!connection.isConnected;
};
