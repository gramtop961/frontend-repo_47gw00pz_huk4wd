export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold">NOIRWEAR</h3>
            <p className="mt-2 text-sm text-zinc-400 max-w-xs">
              Minimal, futuristic apparel engineered for city nights.
            </p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-3">Shop</h4>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li><a className="hover:text-white" href="#">Men</a></li>
              <li><a className="hover:text-white" href="#">Women</a></li>
              <li><a className="hover:text-white" href="#">Accessories</a></li>
              <li><a className="hover:text-white" href="#">Sale</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-3">Company</h4>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li><a className="hover:text-white" href="#">About</a></li>
              <li><a className="hover:text-white" href="#">Careers</a></li>
              <li><a className="hover:text-white" href="#">Sustainability</a></li>
              <li><a className="hover:text-white" href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-3">Newsletter</h4>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                required
              />
              <button type="submit" className="rounded-full bg-white text-zinc-900 px-4 py-2 text-sm font-semibold hover:bg-zinc-200 transition">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-xs">
          <p>© {new Date().getFullYear()} Noirwear. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-white" href="#">Privacy</a>
            <a className="hover:text-white" href="#">Terms</a>
            <a className="hover:text-white" href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
