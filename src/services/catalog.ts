import { api } from './api'
import type { Product } from '../types'

export async function getProducts(params: Record<string, unknown> = {}) {
  const { data } = await api.get<{items: Product[]}>('/products', { params })
  return data.items
}
export async function getProduct(slug: string) {
  const { data } = await api.get<Product>(`/products/${slug}`)
  return data
}
