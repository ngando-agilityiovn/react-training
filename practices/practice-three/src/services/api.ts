export const fetchData = async (url: string) => {
  const res = await fetch(url);

  if (res.ok) {
    return res.json();
  }

  throw Error('err');
};
