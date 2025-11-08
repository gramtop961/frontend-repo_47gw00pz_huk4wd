import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-zinc-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex min-h-[90vh] items-center">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-zinc-300">
            New Drop • FW25
          </p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white">
            Futuristic streetwear for the nocturnal.
          </h1>
          <p className="mt-4 text-zinc-300/90 md:text-lg">
            Monochrome silhouettes, engineered fabrics, and glowing accents. Built for city nights and the ones who move in shadows.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#shop" className="rounded-full bg-white text-zinc-900 px-6 py-3 text-sm font-semibold hover:bg-zinc-200 transition">Shop Collection</a>
            <a href="#lookbook" className="rounded-full border border-white/20 px-6 py-3 text-sm text-white hover:bg-white/10 transition">View Lookbook</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(255,255,255,0.08),transparent)]" />
    </section>
  )
}
