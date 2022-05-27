export const fetchAsset = async (uid: string) => {
  const res = await fetch('/api/get', {
    method: 'POST',
    body: uid,
  });
  const data = await res.json();
  return data;
};
