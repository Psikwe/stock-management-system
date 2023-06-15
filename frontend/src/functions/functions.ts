export const getFrontendConfig = () => {
  return fetch("/frontend-config.json").then((res) => res.json());
};
