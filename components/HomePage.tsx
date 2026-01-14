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
    <main className="min-h-screen bg-white text-slate-900 overflow-hidden">
      {/*HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 isolate overflow-hidden">
        {/* Subtle floating accents – unchanged */}
        <div className="absolute inset-0 pointer-events-none opacity-70">
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-emerald-300/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-32 left-12 w-48 h-48 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute -bottom-32 left-1/4 w-72 h-72 bg-gradient-to-r from-teal-300/15 to-cyan-300/15 rounded-full blur-3xl animate-bounce [animation-delay:-2s]" />
            
            <motion.div 
            className="absolute top-1/2 left-8 w-16 h-16 bg-gradient-to-r from-emerald-500/30 to-green-500/30 rounded-xl rotate-12"
            animate={{ 
                y: [0, -15, 0], 
                rotate: [0, 8, 0],
                scale: [1, 1.08, 1]
            }}
            transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut"
            }}
            />
        </div>

        <div className="container mx-auto px-6 sm:px-10 lg:px-12 py-16 lg:py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center h-full">
            {/* Left: Text Content – unchanged */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="lg:pl-6"
            >
                <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="group relative inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/80 backdrop-blur-xl border border-emerald-200/50 shadow-lg rounded-xl text-xs sm:text-sm font-semibold text-slate-900 mb-8 overflow-hidden"
                >
                <motion.span
                    className="relative flex h-2.5 w-2.5"
                    animate={{ 
                    scale: [1, 1.3, 1],
                    backgroundColor: ["#10b981", "#059669", "#10b981"]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <span className="animate-ping absolute inset-0 rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative rounded-full h-2.5 w-2.5 bg-emerald-500 block"></span>
                </motion.span>
                Trusted Partner • 100+ Projects
                <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                </motion.div>

                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.9 }}
                    className="text-4xl sm:text-5xl lg:text-5.5xl xl:text-6xl font-black tracking-tight leading-tight mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent"
                    >
                    We create
                    <br className="hidden lg:block" />
                    <span className="block bg-gradient-to-r from-emerald-600 via-green-600 to-teal-700 bg-clip-text text-transparent">
                        brands people remember
                    </span>
                <motion.span 
                    className="block bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent text-lg sm:text-xl lg:text-2xl xl:text-2.5xl"
                    animate={{ 
                    scale: [1, 1.03, 1],
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                >
                    and positions that last
                </motion.span>
                </motion.h1>

                <motion.p 
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-base sm:text-lg lg:text-lg text-slate-600/95 mb-8 leading-relaxed font-light max-w-lg"
                >
                Deep brand thinking + timeless identity design + strategic clarity — built by specialists who care deeply.
                </motion.p>

                <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                >
                <motion.a
                    href="/contact"
                    className="group relative overflow-hidden inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white px-8 py-4 rounded-2xl text-base font-semibold shadow-xl hover:shadow-2xl transition-all duration-400 hover:-translate-y-1.5 min-w-[200px]"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <span className="absolute inset-0 bg-gradient-to-r from-emerald-500/15 via-green-500/15 to-teal-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    Start Conversation
                    <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </motion.a>

                <motion.a
                    href="/work"
                    className="group inline-flex items-center justify-center gap-2.5 border-2 border-emerald-300/70 hover:border-emerald-500 text-emerald-700 hover:text-emerald-800 px-8 py-4 rounded-2xl text-base font-semibold transition-all duration-400 hover:bg-emerald-50/70 hover:shadow-xl min-w-[180px]"
                    whileHover={{ scale: 1.02 }}
                >
                    See Our Work →
                </motion.a>
                </motion.div>
            </motion.div>

            {/* Right: Image with clean 3D elevation – no extra background shadow layers */}
            <motion.div
                initial={{ opacity: 0, x: 50, rotateY: 8 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                className="relative hidden lg:block h-[480px] xl:h-[540px] w-full max-w-md lg:max-w-none mx-auto lg:mx-0"
            >
                <motion.div
                className="relative h-full w-full"
                whileHover={{ 
                    rotateY: 4,
                    rotateX: 2,
                    scale: 1.02,
                    y: -10 
                }}
                transition={{ duration: 0.6 }}
                >
                <Image
                    src="/IAN_BrandTech_Images-hero.png"
                    alt="Digital transformation visualization"
                    fill
                    className="object-contain rounded-2xl drop-shadow-2xl"
                    priority
                    quality={92}
                    sizes="(min-width: 1024px) 45vw, 90vw"
                />
                </motion.div>

                {/* Floating accents remain unchanged */}
                <motion.div 
                className="absolute top-6 left-6 w-20 h-5 bg-emerald-400/80 backdrop-blur-sm rounded-full shadow-md"
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                />
                <motion.div 
                className="absolute bottom-10 right-10 w-10 h-10 border-2 border-emerald-300/60 rounded-lg flex items-center justify-center backdrop-blur-sm"
                animate={{ scale: [1, 1.08, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 5, repeat: Infinity }}
                >
                <span className="text-emerald-600 font-bold text-xs">↗</span>
                </motion.div>
            </motion.div>

            {/* Mobile version – clean with only image drop-shadow */}
            <motion.div 
                className="lg:hidden relative aspect-[3/4] w-full max-w-xs sm:max-w-sm mx-auto mt-12"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
            >
                <motion.div
                className="relative h-full w-full"
                whileHover={{ scale: 1.02, y: -5 }}
                >
                <Image
                    src="/IAN_BrandTech_Images-hero.png"
                    alt="Digital transformation visualization"
                    fill
                    className="object-contain rounded-2xl drop-shadow-xl"
                    quality={88}
                    sizes="85vw"
                />
                </motion.div>
            </motion.div>
            </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-28 md:py-40 bg-gradient-to-b from-emerald-50/30 via-white to-teal-50/20 isolate overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-300/10 rounded-full blur-3xl animate-pulse-slow delay-1500" />
        </div>

        <div className="container mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-[340px] lg:max-w-[460px] mx-auto lg:mx-0 order-1 lg:order-none"
            >
                <div className="relative aspect-square rounded-full overflow-hidden shadow-2xl border-8 border-white/80">
                <Image
                    src="/what-we-do.png"
                    alt="Our brand identity expertise"
                    fill
                    className="object-cover"
                    quality={92}
                    sizes="(max-width: 1024px) 340px, 460px"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-emerald-400/5 pointer-events-none" />
                </div>

                <motion.div
                className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-2xl"
                animate={{ scale: [1, 1.12, 1], opacity: [0.6, 0.9, 0.6] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="w-full lg:pl-8 order-2 lg:order-none"
            >
                <div className="text-center lg:text-left mb-12 lg:mb-16">
                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-5">
                    Crafting Distinctive Brands
                </h2>
                <p className="text-lg sm:text-xl text-slate-600/90 max-w-3xl mx-auto lg:mx-0 font-light leading-relaxed">
                    From first impression to lasting recognition — we create brand worlds that feel authentic and unforgettable.
                </p>
                </div>

                <div className="space-y-10 md:space-y-12">
                {[
                    {
                    title: "Logo & Core Identity",
                    desc: "Timeless logos and visual foundations that instantly communicate who you are and what you stand for.",
                    icon: "✦",
                    },
                    {
                    title: "Brand Guidelines",
                    desc: "Clear, elegant systems that ensure your brand remains consistent and powerful across every channel.",
                    icon: "📐",
                    },
                    {
                    title: "Digital Product Design",
                    desc: "Interfaces and experiences that extend your brand personality into intuitive, engaging digital touchpoints.",
                    icon: "✧",
                    },
                    {
                    title: "Brand Activation & Launch",
                    desc: "Strategic storytelling, campaigns and launches that bring your new identity to life with impact.",
                    icon: "🌱",
                    },
                    {
                    title: "Audience & Performance Insights",
                    desc: "Continuous listening, perception tracking and data-informed refinement so your brand evolves intelligently.",
                    icon: "⟳",
                    },
                ].map((service, index) => (
                    <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.13 }}
                    className="group flex gap-6 items-start"
                    >
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-600/10 flex items-center justify-center text-emerald-600 text-2xl border border-emerald-200/40 group-hover:border-emerald-400/60 transition-all duration-400 group-hover:scale-105">
                        {service.icon}
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors duration-300 mb-2.5">
                        {service.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed font-light">
                        {service.desc}
                        </p>
                    </div>
                    </motion.div>
                ))}
                </div>
            </motion.div>
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
            Let&apos;s build something
            <br className="hidden sm:block" />
            that matters — together.
          </motion.h2>

          <p className="text-lg sm:text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
            Schedule a no-pressure call. We&apos;ll listen first, then show how we can help.
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
