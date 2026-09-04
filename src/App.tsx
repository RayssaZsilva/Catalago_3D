import { useState } from "react"
import { products } from "./data/products"
import ProductCard from "./components/ProductCard"
import CategoryFilter from "./components/CategoryaFilter"
import type { Category } from "./types/Product"

function App() {
  const [selectedCategory, setSelectedCategory] =
    useState<Category | "Todos">("Todos")

  const filteredProducts =
    selectedCategory === "Todos"
      ? products
      : products.filter((product) => product.category === selectedCategory)

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="bg-zinc-950/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-bold">
            RAYSSA<span className="text-purple-500">3D</span>
          </h1>

          <nav className="hidden gap-8 md:flex">
            <a href="#inicio" className="text-sm text-zinc-300 transition hover:text-white">
              Início
            </a>
            <a href="#produtos" className="text-sm text-zinc-300 transition hover:text-white">
              Catálogo
            </a>
            <a href="#contato" className="text-sm text-zinc-300 transition hover:text-white">
              Contato
            </a>
          </nav>
        </div>
      </header>

      <main id="inicio">
        <section
          id="produtos"
          className="border-t border-white/8 bg-zinc-900/30"
        >
          <div className="px-4 pt-8">
            <span className="mb-5 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
              ✦ Impressão 3D
            </span>
          </div>

          <div className="mx-auto max-w-7xl px-6 py-5">
            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-purple-500">
                Catálogo
              </p>
              <h2 className="mt-2 text-3xl font-bold">
                Produtos em destaque
              </h2>
            </div>

            <CategoryFilter
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contato" className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">
          <p className="text-sm text-zinc-500">
            © 2026 RAYSSA3D. Todos os direitos reservados.
          </p>
          <p className="text-sm text-zinc-500">
            Impressão 3D • Criatividade • Personalização
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App