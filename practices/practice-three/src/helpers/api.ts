export const fetchData = async (url: string) => {
  const res = await fetch(url)
  if (res.ok) {
    const data = await res.json()
    return data
  }
  throw Error('err')
}

export const productDetail = async (url: string, productId: string) => {
  const res = await fetch(`${url}/${productId}`, {
    method: 'GET'
  })
  if (res.ok) {
    const data = await res.json()
    return data
  }
}
