export type Category =
  | "Chaveiros"
  | "Bonecos Decorativos"
  | "Organizadores"
  | "Personalizados"
  | "Replicas"

export interface Product {
  id: number
  name: string
  category: Category
  price: number
  image: string
  description: string
}
