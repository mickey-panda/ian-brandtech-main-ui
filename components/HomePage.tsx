'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import testimonials from './../data/testimonials.js'

export default function HomePage() {
  const [activeCard, setActiveCard] = useState(0);

  const services = [
    {
      title: "Brand & Strategy",
      desc: "We help ambitious companies define who they are and where they're going in the digital world.",
      icon: "✦",
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "Product Engineering",
      desc: "High-performance web & mobile solutions built clean, scalable, and future-ready.",
      icon: "⚡",
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Growth & Performance",
      desc: "Data-informed digital marketing, SEO, and conversion systems that actually move the needle.",
      icon: "↗",
      color: "from-teal-500 to-cyan-600",
    },
  ];

  const recentWorks = [
    {
      title: "EcoTrack Platform",
      description: "Sustainable living app helping users reduce carbon footprint with smart tracking & insights.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo4WJ1ZwS4mcxHVh5YoCuKuAAF6ldBv5Ehpw&s",
      link: "/work/ecotrack",
    },
    {
      title: "HealthSync Dashboard",
      description: "Modern health monitoring dashboard for clinics with real-time analytics and patient portal.",
      imageUrl: "https://static.fitnesssyncer.com/resources/documentation/dashboard.png",
      link: "/work/healthsync",
    },
    {
      title: "Finova Banking App",
      description: "Next-gen mobile banking experience focused on simplicity, security, and emerald-green elegance.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfUzWPyUMvt9qDvoUBitXkfNig01-SE9Yaxg&s",
      link: "/work/finova",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-10 lg:px-12 py-20 lg:py-0 isolate">
        <div className="w-full max-w-7xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-50/70 border border-emerald-200 rounded-full text-sm font-medium text-emerald-800 mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Trusted Digital Partner • 100+ Projects Delivered
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-8">
              We build digital products
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
                that grow businesses
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
              Strategic design + engineering + growth — delivered by a small, senior team obsessed with results.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <motion.a
                href="/contact"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-10 py-5 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                Start a Conversation
                <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>

              <motion.a
                href="/work"
                className="group inline-flex items-center gap-3 border-2 border-emerald-200 hover:border-emerald-500 text-emerald-800 hover:text-emerald-900 px-10 py-5 rounded-xl text-lg font-semibold transition-all hover:bg-emerald-50/30"
                whileHover={{ scale: 1.03 }}
              >
                See Real Results
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-28 md:py-36 bg-emerald-50/20 isolate">
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              What We Actually Do
            </h2>
            <p className="mt-5 text-xl text-slate-600 max-w-3xl mx-auto">
              Three focused disciplines. One goal: sustainable business growth.
            </p>
          </div>

          <div className="min-h-[460px] md:min-h-[500px] flex items-center justify-center">
            <div className="w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCard}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className={`bg-gradient-to-br ${services[activeCard].color} p-1.5 rounded-3xl shadow-2xl mx-auto max-w-4xl`}>
                    <div className="bg-white rounded-2xl p-10 md:p-14 text-center">
                      <div className="text-7xl md:text-8xl mb-8">{services[activeCard].icon}</div>
                      <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        {services[activeCard].title}
                      </h3>
                      <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-prose mx-auto">
                        {services[activeCard].desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center gap-5 mt-12 md:mt-16">
                {services.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveCard(i)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      i === activeCard
                        ? 'bg-emerald-600 scale-125 shadow-lg shadow-emerald-300/50'
                        : 'bg-slate-300 hover:bg-emerald-400 hover:scale-110'
                    }`}
                    aria-label={`Select service ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Works */}
      <section className="py-28 md:py-36 bg-white isolate">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                Recent Works
            </h2>
            <p className="mt-5 text-xl text-slate-600 max-w-3xl mx-auto">
                Selected projects that showcase our craft and deliver real business impact.
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {recentWorks.map((work, index) => (
                <motion.div
                key={work.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100"
                >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100"> 
                    <Image
                    src={work.imageUrl}
                    alt={work.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 2} 
                    />
                </div>
                <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {work.title}
                    </h3>
                    <p className="text-slate-600 mb-6 line-clamp-3">
                    {work.description}
                    </p>
                    <a
                    href={work.link}
                    className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                    >
                    Learn More
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    </a>
                </div>
                </motion.div>
            ))}
            </div>

            <div className="text-center mt-16 md:mt-20">
            <motion.a
                href="/work"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-10 py-5 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl hover:bg-emerald-700 transition-all hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
            >
                View All Works
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </motion.a>
            </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-28 md:py-36 bg-emerald-50/10 isolate">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              What Our Clients Say
            </h2>
            <p className="mt-5 text-xl text-slate-600 max-w-3xl mx-auto">
              Real feedback from businesses we&apos;ve helped grow and transform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col"
              >
                <div className="flex-grow">
                  <p className="text-slate-700 text-lg leading-relaxed mb-6 italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-emerald-200">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-slate-600">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-36 bg-gradient-to-br from-emerald-50 to-teal-50 isolate">
        <div className="w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-8 leading-tight"
          >
            Let’s build something
            <br className="hidden sm:block" />
            that matters — together.
          </motion.h2>

          <p className="text-lg sm:text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
            Schedule a no-pressure call. We’ll listen first, then show how we can help.
          </p>

          <motion.a
            href="/contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-10 sm:px-12 py-5 sm:py-6 rounded-xl text-lg sm:text-xl font-semibold shadow-xl hover:shadow-2xl hover:bg-emerald-700 transition-all hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Book Free Strategy Call
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </div>
      </section>
    </main>
  );
}