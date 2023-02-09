export const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    // eslint-disable-next-line no-bitwise
    var r = (Math.random() * 16) | 0,
      // eslint-disable-next-line no-bitwise
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};