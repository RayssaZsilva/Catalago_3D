import type { Product } from "../types/Product"

interface ProductCardProps {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-purple-500/40">
      
      <div className="aspect-square overflow-hidden bg-zinc-900">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">

        <span className="text-xs font-medium text-purple-400">
          {product.category}
        </span>

        <h3 className="mt-2 text-lg font-semibold text-white">
          {product.name}
        </h3>

        <p className="mt-2 text-sm leading-6 text-zinc-500">
          {product.description}
        </p>

        <div className="mt-5 flex items-center gap-2">

          <button className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold transition hover:bg-purple-500">
            Ver produto
          </button>

          <a
            href={`https://wa.me/5511942862162?text=${encodeURIComponent(
              `Olá! Tenho interesse em comprar o produto ${product.name}.`,
            )}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-green-500/40 px-4 py-2 text-sm font-semibold text-green-400 transition hover:bg-green-500/10"
          >
            Comprar
          </a>

        </div>

      </div>
    </article>
  )
}

export default ProductCard
