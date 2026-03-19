

const LandingPage = () => {
  return (
    <div>
      <section className="hero-bg overflow-hidden max-h-900px">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div className="fade-in-up">
              <div className="inline-flex items-center gap-2 bg-cream-100 border border-cream-300 rounded-full px-4 py-2 mb-6">
                <span className="text-lg">📸</span>
                <span className="text-warm-700 text-sm font-medium">Student-owned · Locally crafted</span>
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-warm-900 leading-tight mb-6">
                Print your memories
                <span className="color: #c09660;">keep them forever.</span>
              </h1>
              <p className="text-warm-600 text-lg leading-relaxed mb-8 max-w-md">
                From polaroids to photo sets, we bring your favorite moments to life — printed with love, delivered with care. 🌸
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#products" className="btn-primary text-white px-8 py-4 rounded-small font-semibold text-base text-center shadow-warm">
                  🛍️ Shop Now
                </a>
                <a href="#gallery" className="btn-outline px-8 py-4 rounded-small font-semibold text-base text-center">
                  View Gallery
                </a>
              </div>
              <div className="flex items-center gap-6 mt-10">
                <div className="text-center">
                  <div className="font-heading font-bold text-2xl text-warm-800">500+</div>
                  <div className="text-warm-500 text-xs mt-1">Happy Customers</div>
                </div>
                <div className="w-px h-10 bg-cream-300"></div>
                <div className="text-center">
                  <div className="font-heading font-bold text-2xl text-warm-800">⭐ 4.9</div>
                  <div className="text-warm-500 text-xs mt-1">Average Rating</div>
                </div>
                <div className="w-px h-10 bg-cream-300"></div>
                <div className="text-center">
                  <div className="font-heading font-bold text-2xl text-warm-800">24h</div>
                  <div className="text-warm-500 text-xs mt-1">Fast Turnaround</div>
                </div>
              </div>
            </div>

            <div className="relative fade-in delay-300 hidden lg:block">
              <div className="relative w-full h-480px">
                <div className="absolute top-0 right-0 w-72 h-80 rounded-large overflow-hidden shadow-warm-lg float-anim">
                  <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80" alt="Printed photos" className="w-full h-full object-cover"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-900/20 to-transparent"></div>
                </div>

                <div className="absolute top-20 left-0 w-44 bg-white p-3 rounded-large shadow-warm-lg">
                  <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80" alt="Polaroid print" className="w-full h-36 object-cover rounded-small"/>
                  <p className="text-center text-warm-600 text-xs mt-2 font-medium">Summer 2024 🌻</p>
               </div>

                <div className="absolute bottom-10 right-10 w-40 bg-white p-3 rounded-large shadow-warm-lg">
                  <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300&q=80" alt="Photo print" className="w-full h-32 object-cover rounded-small"/>
                  <p className="text-center text-warm-600 text-xs mt-2 font-medium">Best Friends 💛</p>
                </div>

                <div className="absolute top-4 left-20 w-3 h-3 rounded-full bg-cream-400 opacity-60"></div>
                <div className="absolute bottom-24 left-8 w-2 h-2 rounded-full bg-warm-400 opacity-50"></div>
                <div className="absolute top-40 right-4 w-4 h-4 rounded-full bg-cream-300 opacity-70"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage