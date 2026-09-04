import type { Category } from "../types/Product"

interface CategoryFilterProps {
  selectedCategory: Category | "Todos"
  onCategoryChange: (category: Category | "Todos") => void
}

const categories: (Category | "Todos")[] = [
  "Todos",
  "Chaveiros",
  "Bonecos Decorativos",
  "Organizadores",
  "Personalizados",
  "Replicas"
]

function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      {categories.map((category) => {
        const isSelected = selectedCategory === category

        return (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition ${
              isSelected
                ? "bg-purple-600 text-white"
                : "border border-white/10 bg-white/[0.03] text-zinc-400 hover:bg-white/[0.08] hover:text-white"
            }`}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default CategoryFilter
