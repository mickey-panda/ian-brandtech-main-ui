'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutUsComponent() {
  return (
    <section className="relative py-28 md:py-40 bg-white isolate overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-20 right-10 w-64 h-64 bg-emerald-300/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-16 left-16 w-48 h-48 bg-teal-300/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>

      <div className="container mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="text-center mb-20 lg:mb-28"
          >
            <p className="text-xl sm:text-2xl lg:text-2.5xl text-slate-700 leading-relaxed font-light max-w-4xl mx-auto">
              In today’s digital first world, building a brand isn’t just about having a great product or service—it’s about creating an identity that resonates, a digital presence that captivates, and technology that empowers growth.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 lg:mb-40">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative order-1 lg:order-none mx-auto lg:mx-0 w-full max-w-[480px] lg:max-w-[560px]"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/about-profile.png"
                  alt="Adnan Syed – Founder of IAN BrandTech Solution"
                  width={560}
                  height={700} 
                  className="w-full h-auto object-cover rounded-2xl"
                  quality={75}
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="order-2 lg:order-none"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-8">
                Founded by Adnan Syed
              </h2>

              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-light mb-10">
                IAN BrandTech Solution was born from an entrepreneur’s firsthand understanding of what it takes to build and scale businesses in the global marketplace. We’ve walked the path ourselves, faced the challenges, and discovered what truly works. Now, we’re dedicated to helping brands across the world achieve the same success.
              </p>

              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-light">
                What We Do ?
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mb-32 lg:mb-40"
          >
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-12 lg:mb-16">
              Our Three Core Pillars
            </h3>

            <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <h4 className="text-2xl font-bold text-slate-900 mb-4 bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">
                  Brand Identity
                </h4>
                <p className="text-slate-600 leading-relaxed font-light">
                  We craft compelling brand stories, design memorable logos, and develop comprehensive brand guidelines that ensure consistency across every touchpoint. Whether you’re building a personal brand or showcasing your company’s portfolio, we create identities that leave lasting impressions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <h4 className="text-2xl font-bold text-slate-900 mb-4 bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">
                  Tech Development
                </h4>
                <p className="text-slate-600 leading-relaxed font-light">
                  From stunning websites and intuitive mobile apps to powerful CRM systems and e-commerce platforms, we build the technological foundation your business needs to thrive. Our solutions aren’t just functional—they’re designed to scale with your ambitions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <h4 className="text-2xl font-bold text-slate-900 mb-4 bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">
                  Digital Presence
                </h4>
                <p className="text-slate-600 leading-relaxed font-light">
                  In the crowded digital landscape, visibility is everything. Our expert team manages your social media, creates engaging content, runs high-converting ad campaigns, and implements cutting-edge SEO and performance marketing strategies that put your brand in front of the right audience at the right time.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="text-center mb-20 lg:mb-28 max-w-4xl mx-auto"
          >
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-8">
              Our Vision
            </h3>
            <p className="text-xl text-slate-600 leading-relaxed font-light">
              We envision a world where geography is no barrier to business success. Our mission is to empower entrepreneurs and businesses globally with the tools, strategies, and support they need to build brands that transcend borders and create meaningful connections with audiences worldwide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-8">
              Why Choose IAN BrandTech Solution?
            </h3>
            <p className="text-xl text-slate-600 leading-relaxed font-light mb-10">
              Because we understand your journey. As entrepreneurs ourselves, we know the sleepless nights, the big dreams, and the determination it takes to build something meaningful. We bring that same passion and dedication to every project, every campaign, and every brand we touch.
            </p>

            <p className="text-2xl font-semibold text-emerald-700">
              Let’s build something extraordinary together.
            </p>

            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10 inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-10 py-5 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Ready to transform your brand? Get in touch today
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}