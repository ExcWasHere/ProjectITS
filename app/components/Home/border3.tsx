import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

export default function Border3(): JSX.Element {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const numberRef = useRef(null);
  const isInView = useInView(numberRef, { once: true });
  const mainControls = useAnimation();
  const numberControls = useAnimation();

  const fullNumber = '87.480';
  
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      
      const animateDigits = async () => {
        for (let i = 0; i <= fullNumber.length; i++) {
          await numberControls.start({
            clipPath: `inset(0 ${100 - (i / fullNumber.length) * 100}% 0 0)`,
            transition: { 
              duration: 0.5,
              ease: "easeInOut"
            }
          });
        }
      };

      animateDigits();
    }
  }, [isInView, mainControls, numberControls]);

  return (
    <div className="max-h-fit mx-auto bg-gradient-to-b from-white to-green-50 p-4">
      <motion.div 
        ref={numberRef}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="grid grid-rows-2 gap-4 h-[500px]"
      >
        {/* First row with full-width content */}
        <motion.div 
          className="bg-green-white flex items-center justify-center rounded-xl shadow-lg"
        >
          <div className="text-center overflow-hidden">
            <motion.h2 
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={numberControls}
              className="text-4xl md:text-6xl font-bold mb-2 md:mb-4 text-green-800"
            >
              {fullNumber}
            </motion.h2>
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg md:text-2xl text-green-900"
            >
              PENERIMA MANFAAT
            </motion.p>
          </div>
        </motion.div>
        
        {/* Second row split into two columns */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div 
            onHoverStart={() => setHoveredSection('kegiatan')}
            onHoverEnd={() => setHoveredSection(null)}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-xl shadow-lg"
          >
            <div 
              className="absolute inset-0 bg-transparent flex items-center justify-center text-white"
              style={{ 
                backgroundImage: 'url(/border/kegiatan.jpg)', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
              }}
            >
              <div className={`absolute inset-0 bg-black transition-opacity duration-300 
                ${hoveredSection === 'kegiatan' ? 'opacity-40' : 'opacity-20'}`}
              ></div>
              <div className="relative z-10 p-4 text-center">
                <span className="text-xl md:text-2xl font-semibold">Foto Kegiatan</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            onHoverStart={() => setHoveredSection('laporan')}
            onHoverEnd={() => setHoveredSection(null)}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-xl shadow-lg"
          >
            <div 
              className="absolute inset-0 bg-transparent flex items-center justify-center text-white"
              style={{ 
                backgroundImage: 'url(/border/laporan.jpg)', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
              }}
            >
              <div className={`absolute inset-0 bg-black transition-opacity duration-300 
                ${hoveredSection === 'laporan' ? 'opacity-40' : 'opacity-20'}`}
              ></div>
              <div className="relative z-10 p-4 text-center">
                <span className="text-xl md:text-2xl font-semibold">Foto Grafik Laporan</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}