'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ServiceComponent() {
  const brandIdentityPoints = [
    "Logo Creation",
    "Brand Guidelines",
    "Brand Portfolio",
    "Brand Story Creation",
    "Company Portfolio",
    "Personal Branding",
  ];

  const techDevelopmentPoints = [
    "Technical Requirement Gathering",
    "Website Design & Development",
    "Mobile App Design & Development",
    "CRM Integration & Management",
    "Database Management",
    "E-commerce Platform Development",
  ];

  const brandPresencePoints = [
    "Social Media Management",
    "SEO & SEM Strategy",
    "Digital Marketing Campaigns",
    "Meta Ads Management",
    "Influencer Marketing",
    "Performance Analysis & Reporting",
    "Video Ad Production",
  ];

  return (
    <section className="relative py-28 md:py-40 bg-white isolate overflow-hidden">
      {/* Very subtle floating accents – matching homepage */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-20 right-10 w-64 h-64 bg-emerald-300/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-16 left-16 w-48 h-48 bg-teal-300/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>

      <div className="container mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
            What Services We Provide
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-light">
            From vision to visibility — we build cohesive brand experiences that connect and convert.
          </p>
        </motion.div>

        {/* Segment 1 – Brand Identity */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-24 lg:mb-32">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-600 via-green-600 to-teal-700 bg-clip-text text-transparent mb-6">
              Brand Identity & Building
            </h3>
            <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed font-light">
              {brandIdentityPoints.map((point, idx) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex items-start gap-3.5 group"
                >
                  <div className="flex-shrink-0 mt-1.5 w-2.5 h-2.5 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform" />
                  <span>{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image – natural size, no forced aspect, no crop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.2 }}
            className="order-1 lg:order-2 w-full max-w-[580px] mx-auto lg:mx-0"
          >
            <div className="relative overflow-hidden rounded-2xl group/image">
              <Image
                src="/brandIdentity.jpeg"
                alt="Brand Identity & Building"
                width={1200}          // use large intrinsic size
                height={800}          // adjust based on your image's real ratio
                className="w-full h-auto object-contain transition-transform duration-700 group-hover/image:scale-[1.02]"
                quality={90}
                sizes="(max-width: 1024px) 90vw, 55vw"
              />
            </div>
          </motion.div>
        </div>

        {/* Segment 2 – Tech Development */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-24 lg:mb-32">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.2 }}
            className="w-full max-w-[580px] mx-auto lg:mx-0"
          >
            <div className="relative overflow-hidden rounded-2xl group/image">
              <Image
                src="/techdevelopment.png"
                alt="Tech Development for Brands"
                width={1200}
                height={800}
                className="w-full h-auto object-contain transition-transform duration-700 group-hover/image:scale-[1.02]"
                quality={90}
                sizes="(max-width: 1024px) 90vw, 55vw"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:pl-8"
          >
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-600 via-green-600 to-teal-700 bg-clip-text text-transparent mb-6">
              Tech Development for Brands
            </h3>
            <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed font-light">
              {techDevelopmentPoints.map((point, idx) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex items-start gap-3.5 group"
                >
                  <div className="flex-shrink-0 mt-1.5 w-2.5 h-2.5 rounded-full bg-teal-500 group-hover:scale-150 transition-transform" />
                  <span>{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Segment 3 – Brand Presence */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:pr-8"
          >
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-600 via-green-600 to-teal-700 bg-clip-text text-transparent mb-6">
              Brand Presence & Marketing
            </h3>

            <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed font-light">
              {brandPresencePoints.map((point, idx) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex items-start gap-3.5 group"
                >
                  <div className="flex-shrink-0 mt-1.5 w-2.5 h-2.5 rounded-full bg-cyan-500 group-hover:scale-150 transition-transform" />
                  <span>{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[580px] mx-auto lg:mx-0"
          >
            <div className="relative overflow-hidden rounded-2xl group/image">
              <Image
                src="/digitalPresence.png"
                alt="Brand Presence & Marketing"
                width={1200}
                height={800}
                className="w-full h-auto object-contain transition-transform duration-700 group-hover/image:scale-[1.02]"
                quality={90}
                sizes="(max-width: 1024px) 90vw, 55vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}