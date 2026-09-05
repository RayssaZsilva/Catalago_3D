import type { Product } from "../types/Product"

export const products: Product[] = [
  {
    id: 1,
    name: "Chaveiro Banguela",
    category: "Chaveiros",
    image: "/products/bg.png",
    description: "Chaveiro do Banguela produzido em impressão 3D.",
  },
  {
    id: 2,
    name: "Gundam",
    category: "Bonecos Decorativos",
    image: "/products/gd.jpg",
    description: "Boneco decorativo Gundam produzido em impressão 3D.",
  },
  {
    id: 3,
    name: "Organizador",
    category: "Organizadores",
    image: "/products/og.png",
    description: "Organizador de cabo produzido em impressão 3D.",
  },
  {
    id: 4,
    name: "Peça Personalizada",
    category: "Personalizados",
    image: "/products/ps.jpg",
    description: "Peça personalizada produzida sob encomenda.",
  },

  {
    id: 5,
    name: "Arma de airsoft",
    category: "Replicas",
    image: "/products/as.png",
    description: "Modelo de arma de airsoft produzido em impressão 3D.",
  }
]
