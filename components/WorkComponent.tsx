'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';

export default function WorkComponent() {
  return (
    <section className="py-20 md:py-28 lg:py-36 bg-white isolate">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Our Work
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Selected projects showcasing brand identity, positioning, and digital experiences we’ve helped bring to life.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={85}
                />
              </div>

              {/* Content */}
              <div className="p-5 md:p-7 lg:p-8 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm md:text-base text-emerald-600/90 font-medium mb-3">
                  {project.industry}
                </p>

                <p className="text-sm md:text-base text-slate-600 mb-6 line-clamp-3 flex-grow">
                  {project.description}
                </p>

                <Link
                  href={project.link}
                  target='_blank'
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors mt-auto text-sm md:text-base"
                >
                  Learn More
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional CTA at bottom */}
        <div className="text-center mt-12 md:mt-16">
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-xl text-base md:text-lg font-semibold shadow-xl hover:shadow-2xl hover:bg-emerald-700 transition-all hover:-translate-y-1"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Your Brand Journey
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
}