export const fetchData = async (url: string) => {
  const res = await fetch(url)

  if (res.ok) {
    return res.json()
  }

  throw Error('err')
}

export const getproductDetail = async (url: string, productId: string) => {
  const res = await fetch(`${url}/${productId}`, {
    method: 'GET'
  })

  if (res.ok) {
    return res.json()
  }
}
