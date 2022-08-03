export const uid = (): string => {
  return Math.random().toString(16).slice(2);
};
