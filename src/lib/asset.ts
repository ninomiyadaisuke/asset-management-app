export const fetchAsset = async () => {
  const res = await fetch('/api/get');
  const data = await res.json();
  return data;
};
