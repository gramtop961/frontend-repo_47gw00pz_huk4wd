function ProductCard({ title, price, tag, img }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40">
      <div className="aspect-[4/5] w-full bg-gradient-to-br from-zinc-800 to-zinc-900">
        {/* Decorative image placeholder */}
        <div className="h-full w-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.06),rgba(24,24,27,1))]" />
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>
      {tag && (
        <span className="absolute left-3 top-3 rounded-full bg-white text-zinc-900 px-3 py-1 text-xs font-medium">{tag}</span>
      )}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-medium">{title}</h3>
          <span className="text-zinc-300">{price}</span>
        </div>
        <button className="mt-3 w-full rounded-full bg-white text-zinc-900 py-2 text-sm font-semibold hover:bg-zinc-200 transition">Add to cart</button>
      </div>
    </div>
  )
}

export default function FeaturedGrid() {
  const items = [
    { title: 'Nebula Bomber', price: '$220', tag: 'New' },
    { title: 'Photon Hoodie', price: '$160', tag: 'Hot' },
    { title: 'Eclipse Cargo', price: '$140' },
    { title: 'Ion Runner', price: '$180' },
    { title: 'Ghost Tee', price: '$60' },
    { title: 'Vector Cap', price: '$45' },
  ]

  return (
    <section id="shop" className="relative w-full bg-zinc-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Featured</h2>
            <p className="text-zinc-400 mt-1">Curated picks for the season</p>
          </div>
          <a href="#" className="text-sm text-zinc-300 hover:text-white">View all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <ProductCard key={i} {...it} />
          ))}
        </div>
      </div>
    </section>
  )
}
