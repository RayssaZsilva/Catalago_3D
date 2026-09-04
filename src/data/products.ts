import type { Product } from "../types/Product"

export const products: Product[] = [
  {
    id: 1,
    name: "Chaveiro Banguela",
    category: "Chaveiros",
    price: 15,
    image: "/products/bg.png",
    description: "Chaveiro do Banguela produzido em impressão 3D.",
  },
  {
    id: 2,
    name: "Gundam",
    category: "Bonecos Decorativos",
    price: 40,
    image: "/products/gd.jpg",
    description: "Boneco decorativo Gundam produzido em impressão 3D.",
  },
  {
    id: 3,
    name: "Organizador",
    category: "Organizadores",
    price: 30,
    image: "/products/og.png",
    description: "Organizador de cabo produzido em impressão 3D.",
  },
  {
    id: 4,
    name: "Peça Personalizada",
    category: "Personalizados",
    price: 50,
    image: "/products/ps.jpg",
    description: "Peça personalizada produzida sob encomenda.",
  },

  {
    id: 5,
    name: "Arma de airsoft",
    category: "Replicas",
    price: 25,
    image: "/products/as.png",
    description: "Modelo de arma de airsoft produzido em impressão 3D.",
  }
]
