import { motion } from 'framer-motion';

const DonorSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 200
      }
    }
  };

  return (
    <motion.section 
      className="bg-white py-12 px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          className="bg-slate-300 shadow-lg rounded-lg overflow-hidden"
          variants={containerVariants}
        >
          <div className="grid grid-cols-3 gap-4 p-6">
            {[
              "/programs/autumn.jpeg", 
              "/api/placeholder/300/300", 
              "/api/placeholder/300/300"
            ].map((src, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                variants={itemVariants}
                whileHover="hover"
              >
                <div className="bg-gray-200 h-48 w-full mb-4 overflow-hidden rounded-lg">
                  <motion.img
                    src={src}
                    alt={`Donatur ${index + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-slate-300 text-center py-4 mt-4 rounded-lg"
          variants={numberVariants}
        >
          <motion.p 
            className="text-2xl font-bold text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            4.163 Donatur
          </motion.p>
          <motion.p 
            className="text-gray-600 mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
          >
            Supporting in Semeru
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DonorSection;