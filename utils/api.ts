const apiBase = "https://api.quicksales.vn/"

const getApiUrl = (path, params = "") => `${apiBase}${path}?${params}`

export const fetchEndpoint = async function (endpoint, params): Promise<any[]|any> {
  const res = await fetch(getApiUrl(endpoint, params.toString()))
  return await res.json()
}
