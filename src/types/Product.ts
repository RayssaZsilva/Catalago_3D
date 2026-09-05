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
  image: string
  description: string
}
