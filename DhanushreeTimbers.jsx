import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, MapPin, Star, Menu, X, Check, ArrowRight, Calendar, Sparkles } from 'lucide-react';

const DhanushreeTimbers = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !showExitPopup) {
        setShowExitPopup(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [showExitPopup]);

  const products = [
    { id: 1, name: 'Premium Teak Timber', category: 'timber', price: '₹80-150/sq.ft', badge: 'Premium', icon: '🪵' },
    { id: 2, name: 'Heritage Country Wood', category: 'timber', price: '₹50-90/sq.ft', icon: '🌳' },
    { id: 3, name: 'Grand Dining Collection', category: 'tables', price: '₹18,000-45,000', badge: 'Signature', icon: '🪑' },
    { id: 4, name: 'Executive Study Desk', category: 'tables', price: '₹8,000-18,000', icon: '📚' },
    { id: 5, name: 'Designer Coffee Tables', category: 'coffee', price: '₹5,000-15,000', badge: 'Featured', icon: '☕' },
    { id: 6, name: 'Luxury Wooden Sofas', category: 'sofas', price: '₹25,000-65,000', badge: 'Signature', icon: '🛋️' },
    { id: 7, name: 'Artisan Jewellery Box', category: 'small', price: '₹800-3,500', icon: '💎' },
    { id: 8, name: 'Carved Wall Art', category: 'decor', price: '₹1,200-8,000', badge: 'Featured', icon: '🎨' }
  ];

  const handleCTA = (action) => {
    if (action === 'whatsapp') {
      window.open('https://wa.me/919876543210?text=Hello, I am interested in your luxury furniture', '_blank');
    } else if (action === 'call') {
      window.location.href = 'tel:+919876543210';
    }
  };

  const HomePage = () => (
    <div>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 py-20">
          <div className="inline-flex items-center gap-2 bg-amber-900/30 backdrop-blur-sm border border-amber-700/50 text-amber-300 px-6 py-2 rounded-full mb-8">
            <Sparkles size={18} />
            <span className="text-sm font-semibold tracking-wider">LUXURY CRAFTSMANSHIP</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Exquisite Timber & Bespoke Furniture
          </h1>
          <p className="text-2xl md:text-3xl text-amber-300 font-light mb-4">Crafted in Mayiladuthurai</p>
          <p className="text-xl text-gray-300 mb-12 font-light italic">Where Heritage Meets Modern Luxury</p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <button 
              onClick={() => handleCTA('whatsapp')}
              className="flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              <MessageCircle size={22} />
              <span>WhatsApp</span>
            </button>
            <button 
              onClick={() => handleCTA('call')}
              className="flex items-center gap-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              <Phone size={22} />
              <span>Call Now</span>
            </button>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-12 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400">15+</div>
              <div className="text-sm text-gray-400 mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400">500+</div>
              <div className="text-sm text-gray-400 mt-1">Luxury Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400">100%</div>
              <div className="text-sm text-gray-400 mt-1">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Our Collections</h2>
            <p className="text-gray-600 text-lg">Discover timeless pieces crafted with passion</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Premium Timber', icon: '🪵', desc: 'Finest teak & heritage woods' },
              { name: 'Bespoke Furniture', icon: '🪑', desc: 'Custom crafted pieces' },
              { name: 'Luxury Accessories', icon: '💎', desc: 'Artisan wooden items' },
              { name: 'Designer Décor', icon: '🎨', desc: 'Carved masterpieces' }
            ].map((cat, i) => (
              <div 
                key={i} 
                className="group bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-105 border border-gray-200"
                onClick={() => setCurrentPage('products')}
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-500">{cat.icon}</div>
                <h3 className="font-bold text-xl mb-3 text-slate-900">{cat.name}</h3>
                <p className="text-gray-600">{cat.desc}</p>
                <div className="mt-6 inline-flex items-center text-amber-700 font-semibold gap-2 group-hover:gap-3 transition-all">
                  <span>Explore</span>
                  <ArrowRight size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">The Dhanushree Distinction</h2>
            <p className="text-gray-600 text-lg">Excellence in every detail</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Premium Materials', desc: 'Finest teak and heritage woods' },
              { title: 'Master Artisans', desc: 'Generations of expertise' },
              { title: 'Precision Delivery', desc: 'Your timeline is our commitment' },
              { title: 'Transparent Excellence', desc: 'Honest pricing, exceptional value' },
              { title: 'Bespoke Creations', desc: 'Your vision perfectly realized' },
              { title: 'Quality Guarantee', desc: 'Comprehensive warranty' }
            ].map((point, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Check className="text-white" size={28} strokeWidth={3} />
                </div>
                <h3 className="font-bold text-xl mb-3 text-slate-900">{point.title}</h3>
                <p className="text-gray-600">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Client Testimonials</h2>
            <p className="text-gray-600 text-lg">Trusted by discerning clients</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Rajesh Kumar', location: 'Kumbakonam', text: 'The quality is exceptional. Every detail exceeded expectations. Truly premium craftsmanship.' },
              { name: 'Priya Selvam', location: 'Mayiladuthurai', text: 'Our bespoke dining table is a masterpiece. The attention to detail is stunning.' },
              { name: 'Murugan & Co.', location: 'Thanjavur', text: 'Reliable partner for high-end projects. Consistent quality and professional service.' }
            ].map((test, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-amber-100">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={20} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{test.text}"</p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="font-bold text-slate-900">{test.name}</p>
                  <p className="text-sm text-gray-500">{test.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to Create Your Masterpiece?</h2>
          <p className="text-xl mb-10 text-amber-50">Let's bring your vision to life</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button 
              onClick={() => handleCTA('whatsapp')}
              className="flex items-center gap-3 bg-white text-amber-700 px-8 py-4 rounded-full font-bold hover:bg-amber-50 transition-all shadow-xl hover:scale-105"
            >
              <MessageCircle size={22} />
              Start Consultation
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-xl hover:scale-105"
            >
              <Calendar size={22} />
              Book Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );

  const ProductsPage = () => {
    const filtered = selectedCategory === 'all' ? products : products.filter(p => p.category === selectedCategory);

    return (
      <div className="py-20 px-4 bg-gradient-to-br from-slate-50 to-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Our Collections</h1>
            <p className="text-gray-600 text-lg">Exquisite pieces for discerning tastes</p>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {['all', 'timber', 'tables', 'coffee', 'sofas', 'small', 'decor'].map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === cat 
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              >
                {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(product => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-200">
                <div className="relative bg-gradient-to-br from-amber-100 to-orange-100 h-64 flex items-center justify-center">
                  {product.badge && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs px-3 py-1 rounded-full font-bold">
                      {product.badge}
                    </div>
                  )}
                  <span className="text-8xl">{product.icon}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-slate-900">{product.name}</h3>
                  <p className="text-amber-600 font-bold text-lg mb-6">{product.price}</p>
                  <button 
                    onClick={() => handleCTA('whatsapp')}
                    className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3 rounded-full font-semibold hover:from-emerald-700 hover:to-green-700 transition-all shadow-lg"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const ContactPage = () => (
    <div className="py-20 px-4 bg-gradient-to-br from-slate-50 to-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Get in Touch</h1>
          <p className="text-gray-600 text-lg">Let's discuss your project</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          <div className="space-y-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <p className="font-semibold">Call: +91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                <MessageCircle className="text-white" size={24} />
              </div>
              <div>
                <button onClick={() => handleCTA('whatsapp')} className="font-semibold text-amber-600 hover:underline">
                  Chat on WhatsApp
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <p className="font-semibold">Mayiladuthurai, Tamil Nadu</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
            <input type="tel" placeholder="Phone Number" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
            <textarea placeholder="Your Message" rows="4" className="w-full border border-gray-300 rounded-lg px-4 py-3"></textarea>
            <button onClick={() => alert('Thank you! We will contact you soon.')} className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-4 rounded-full font-bold hover:from-amber-700 hover:to-orange-700 transition-all shadow-lg">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const pages = {
    home: <HomePage />,
    products: <ProductsPage />,
    contact: <ContactPage />
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white/95 backdrop-blur-sm shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <div className="text-3xl">🪵</div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Dhanushree Timbers</h1>
                <p className="text-xs text-gray-600">Luxury Furniture & Timber</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              {['Home', 'Collections', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => setCurrentPage(item.toLowerCase())}
                  className="text-gray-700 hover:text-amber-600 font-semibold transition"
                >
                  {item}
                </button>
              ))}
            </nav>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 space-y-2">
              {['Home', 'Collections', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => { setCurrentPage(item.toLowerCase()); setMobileMenuOpen(false); }}
                  className="block w-full text-left px-4 py-2 hover:bg-amber-50 rounded-lg"
                >
                  {item}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      <main>{pages[currentPage] || pages.home}</main>

      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-amber-400">Dhanushree Timbers & Furnitures</h3>
          <p className="text-gray-400 mb-6">Luxury craftsmanship in Mayiladuthurai</p>
          <p className="text-sm text-gray-500">© 2024 All rights reserved</p>
        </div>
      </footer>

      <button
        onClick={() => handleCTA('whatsapp')}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-emerald-600 to-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition z-50"
      >
        <MessageCircle size={28} />
      </button>

      <button
        onClick={() => handleCTA('call')}
        className="md:hidden fixed bottom-24 right-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition z-50"
      >
        <Phone size={28} />
      </button>

      {showExitPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md relative">
            <button onClick={() => setShowExitPopup(false)} className="absolute top-4 right-4">
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold mb-4">Get Your Quote in 10 Minutes</h3>
            <p className="text-gray-700 mb-6">Share your requirements on WhatsApp</p>
            <button
              onClick={() => { handleCTA('whatsapp'); setShowExitPopup(false); }}
              className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-4 rounded-full font-bold hover:from-emerald-700 hover:to-green-700"
            >
              Get Quote on WhatsApp
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DhanushreeTimbers;
