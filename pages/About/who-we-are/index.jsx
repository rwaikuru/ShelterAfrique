import React from 'react'
import { motion } from 'framer-motion'

function whoweare() {
  return (
    <div>
    <section className="bg-white py-12 px-6">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-4xl font-bold text-blue-900 mb-4"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Who We Are
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Shelter Afrique is the only pan-African finance institution that exclusively supports the development of housing and urban development in Africa.
        </motion.p>
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        <motion.div
          className="p-6 bg-blue-50 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Our Partnership</h2>
          <p className="text-gray-700">
            A partnership of 44 African Governments, the African Development Bank (AfDB), and the Africa Reinsurance Corporation (Africa-Re).
          </p>
        </motion.div>

        <motion.div
          className="p-6 bg-blue-50 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Our Mission</h2>
          <p className="text-gray-700">
            Building strategic partnerships and offering products and services to support affordable housing and commercial real estate.
          </p>
        </motion.div>

        <motion.div
          className="p-6 bg-blue-50 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Our Impact</h2>
          <p className="text-gray-700">
            Our work directly impacts the lives of many by addressing the needs of the continent’s rapidly growing urban population.
          </p>
        </motion.div>
      </motion.div>
    </section>
    </div>
  )
}

export default whoweare