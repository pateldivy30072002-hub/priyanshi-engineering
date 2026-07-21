import { Box, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { PRODUCT_RANGES, PRODUCTS_BY_RANGE } from '../data';
import { IMAGES } from '../constants';

export default function Portfolio() {
  // Map images for each of the 5 product ranges
  // const rangeImages: Record<string, string> = {
  //   transformer: '/src/assets/images/rangeImages_1.jpg',
  //   switchgear: '/src/assets/images/rangeImages_2.jpg',
  //   mv: '/src/assets/images/rangeImages_3.jpg',
  //   relays: '/src/assets/images/rangeImages_4.jpg',
  //   refurb: '/src/assets/images/rangeImages_5.jpg',
  // };

  const rangeImages: Record<string, string> = IMAGES; // Using the imported IMAGES constant for image paths

  return (
    <section id="portfolio" className="relative py-28 bg-white border-b border-slate-200/60 overflow-hidden">
      {/* Decorative background grid and spotlight */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-[0.22] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 rounded-full bg-red/5 blur-[180px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title with Entrance Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <h2 className="font-sans text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
            Five Ranges. One Dependable Partner.
          </h2>
          <p className="font-sans text-slate-600 font-light text-base sm:text-lg max-w-2xl">
            Genuine switchgear, relays, and transformer spares from leading global OEMs, engineered to keep your critical power infrastructure running against every challenge.
          </p>
        </motion.div>

        {/* Responsive Grid of Product Cards with Staggered Entrance Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCT_RANGES.map((range, index) => {
            const products = PRODUCTS_BY_RANGE[range.id] || [];
            const imageUrl = rangeImages[range.id] || rangeImages.transformer;

            return (
              <motion.div 
                key={range.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                className="group bg-slate-50 border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg hover:border-red/30 transition-all duration-300 flex flex-col h-full"
              >
                {/* Product Image Header with blueprint overlays */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100 border-b border-slate-200">
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-950/20 to-transparent z-10 opacity-80" />
                  <img 
                    src={imageUrl} 
                    alt={range.title} 
                    className="w-full h-full object-cover transition-transform duration-750 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-grid-blueprint opacity-[0.12] pointer-events-none z-20" />
                  
                  {/* Floating tags */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="font-mono text-[9px] font-bold text-red bg-red/10 border border-red/25 backdrop-blur-md px-2.5 py-1 rounded-md tracking-wider">
                      RANGE {range.rn}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-white tracking-tight leading-none">
                      {range.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6 relative">
                  <div className="absolute inset-0 bg-grid-blueprint-fine opacity-[0.05] pointer-events-none" />
                  
                  <div className="space-y-4 relative z-10">
                    <p className="font-sans text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                      {range.desc}
                    </p>

                    {/* Bullet list of specific parts */}
                    <div className="border-t border-slate-200/80 pt-5 space-y-3">
                      <span className="block font-mono text-[9px] text-slate-400 font-bold tracking-widest uppercase">
                        Product Plate List
                      </span>
                      <ul className="space-y-2">
                        {products.map((prod, idx) => (
                          <li 
                            key={idx} 
                            className="flex items-center justify-between text-xs sm:text-sm text-slate-800"
                          >
                            <div className="flex items-center gap-2">
                              <Box className={`w-3.5 h-3.5 shrink-0 ${prod.featured ? 'text-red' : 'text-slate-400'}`} />
                              <span className="font-sans font-medium">{prod.title}</span>
                            </div>
                            {prod.featured && (
                              <span className="font-mono text-[8px] font-bold text-red bg-red/10 border border-red/20 px-1.5 py-0.5 rounded tracking-widest uppercase shrink-0">
                                FEATURED
                              </span>
                            )}
                            {prod.brand && (
                              <span className="font-mono text-[8px] font-bold text-slate-600 bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded tracking-widest uppercase shrink-0">
                                {prod.brand}
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Trust indicator footer on card */}
                  <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-[10px] text-slate-400 font-mono tracking-wider uppercase relative z-10">
                    <span className="flex items-center gap-1.5 text-slate-500 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red" /> Traceable OEM
                    </span>
                    <span>100% Genuine</span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
