import { useState } from "react"
import { products } from "./data/products"
import ProductCard from "./components/ProductCard"
import CategoryFilter from "./components/CategoryaFilter"
import type { Category } from "./types/Product"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [selectedCategory, setSelectedCategory] =
    useState<Category | "Todos">("Todos")

  const filteredProducts =
    selectedCategory === "Todos"
      ? products
      : products.filter((product) => product.category === selectedCategory)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-zinc-950 text-white">
      <header className="bg-zinc-950/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
          <h1 className="text-xl font-bold sm:text-2xl">
            RC<span className="text-purple-500">3D</span>
          </h1>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="rounded-md p-2 text-2xl text-zinc-300 hover:bg-white/10 md:hidden"
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
          >
            ☰
          </button>

          <nav className="hidden gap-8 md:flex">
            <a
              href="#inicio"
              className="text-sm text-zinc-300 transition hover:text-white"
            >
              Início
            </a>

            <a
              href="#produtos"
              className="text-sm text-zinc-300 transition hover:text-white"
            >
              Catálogo
            </a>

            <a
              href="#contato"
              className="text-sm text-zinc-300 transition hover:text-white"
            >
              Contato
            </a>
          </nav>
        </div>

        {isMenuOpen && (
          <nav className="flex flex-col gap-4 border-t border-white/10 px-4 py-4 md:hidden">
            <a
              href="#inicio"
              onClick={closeMenu}
              className="text-sm text-zinc-300 hover:text-white"
            >
              Início
            </a>

            <a
              href="#produtos"
              onClick={closeMenu}
              className="text-sm text-zinc-300 hover:text-white"
            >
              Catálogo
            </a>

            <a
              href="#contato"
              onClick={closeMenu}
              className="text-sm text-zinc-300 hover:text-white"
            >
              Contato
            </a>
          </nav>
        )}
      </header>

      <main id="inicio">
        <section
          id="produtos"
          className="border-t border-white/10 bg-zinc-900/30"
        >
          <div className="px-4 pt-6 sm:px-6 sm:pt-8">
            <span className="inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-2 text-xs text-purple-300 sm:px-4 sm:text-sm">
              ✦ Impressão 3D
            </span>
          </div>

          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-purple-500 sm:text-sm">
                Catálogo
              </p>

              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                Produtos em destaque
              </h2>
            </div>

            <CategoryFilter
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer
        id="contato"
        className="border-t border-white/10 px-4 py-6 sm:px-6 sm:py-8"
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-center sm:flex-row sm:text-left">
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