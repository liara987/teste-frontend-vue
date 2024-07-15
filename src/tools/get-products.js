const BASE_URL = 'https://www.enjoei.com.br/api/v5/users/enjoei-pro/products/liked'
const DEFAULT_PAGE = '1'

export function getProducts(pageNumber) {
  return fetch(`${BASE_URL}?/page=${pageNumber ? pageNumber : DEFAULT_PAGE}`)
}
