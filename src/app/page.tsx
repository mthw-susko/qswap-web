"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaDollarSign,
  FaMapMarkerAlt,
  FaCalendarCheck,
  FaUniversity,
  FaUpload,
  FaCommentDots,
  FaApple,
} from "react-icons/fa";

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeScreen, setActiveScreen] = useState(0);

  const appScreenshots = [
    "/app-screenshot-1.png",
    "/app-screenshot-2.png",
    "/app-screenshot-3.png",
    "/app-screenshot-4.png",
  ];

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-transition between screenshots
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % appScreenshots.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      quote:
        "QSwap helped me find a last-minute textbook right before midterms. Saved my grade!",
      name: "Alex, 3rd Year Economics",
    },
    {
      quote:
        "I furnished my entire apartment with QSwap finds. Best part? No delivery fees meeting on campus.",
      name: "Jordan, 2nd Year Engineering",
    },
    {
      quote:
        "Sold my mini-fridge in literally 10 minutes. Way better than those Facebook groups.",
      name: "Taylor, 4th Year Chemistry",
    },
  ];

  const featureItems = [
    {
      title: "Verified Students Only",
      description: "Trade exclusively with Queen's students",
      icon: <FaShieldAlt className="h-6 w-6 text-[#9F71D1]" />,
    },
    {
      title: "No Fees, Ever",
      description: "Keep all your money, no platform fees",
      icon: <FaDollarSign className="h-6 w-6 text-[#9F71D1]" />,
    },
    {
      title: "Campus Pickup Spots",
      description: "Safe, designated meeting locations",
      icon: <FaMapMarkerAlt className="h-6 w-6 text-[#9F71D1]" />,
    },
    {
      title: "End-of-Term Deals",
      description: "Best prices when you need them most",
      icon: <FaCalendarCheck className="h-6 w-6 text-[#9F71D1]" />,
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Sign Up with Queen's Email",
      description: "Verify you're a Queen's student in seconds",
      icon: <FaUniversity className="h-6 w-6 text-[#9F71D1]" />,
    },
    {
      step: "2",
      title: "List Items in Seconds",
      description: "Snap a photo, set a price, and you're live",
      icon: <FaUpload className="h-6 w-6 text-[#9F71D1]" />,
    },
    {
      step: "3",
      title: "Chat & Meet On-Campus",
      description: "Arrange safe, on-campus exchanges",
      icon: <FaCommentDots className="h-6 w-6 text-[#9F71D1]" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black">
      {/* Sticky Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md py-4 px-6 shadow-sm"
      >
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            {/* Replaced with actual logo */}
            <Image
              src="/logo.png"
              alt="QSwap Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="font-bold text-xl text-[#9F71D1]">QSwap</span>
          </motion.div>

          <div className="hidden md:flex gap-8 font-medium">
            <a
              href="#how-it-works"
              className="hover:text-[#9F71D1] transition-colors"
            >
              How It Works
            </a>
            <a
              href="#features"
              className="hover:text-[#9F71D1] transition-colors"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="hover:text-[#9F71D1] transition-colors"
            >
              Testimonials
            </a>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://apps.apple.com/ca/app/qswap/id6742468813"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#9F71D1] text-white px-4 py-2 rounded-full text-sm font-medium"
          >
            Download App
          </motion.a>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block">Buy, Sell, Trade—</span>
              <span className="text-[#9F71D1]">
                Exclusively for Queen's Students
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Your campus marketplace. No fees. Just fast, safe swaps.
            </p>
            <motion.a
              href="https://apps.apple.com/ca/app/qswap/id6742468813"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-2">
                <FaApple size={24} />
                Download on App Store
              </div>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="relative z-10"
            >
              {/* Outer container - controls the overall size */}
              <div className="w-[290px] mx-auto">
                {/* Phone frame with gradient border */}
                <div className="bg-gradient-to-r from-[#9F71D1] to-[#978FDB] p-[10px] rounded-[2.5rem] shadow-2xl">
                  {/* Phone body */}
                  <div className="bg-black rounded-[2.2rem] overflow-hidden">
                    {/* Screen container - this should match your screenshot dimensions exactly */}
                    <div className="relative w-[270px] h-[585px]">
                      {/* Dynamic Island */}
                      <div className="absolute top-0 left-0 right-0 z-20 flex justify-center pt-1">
                        <div className="h-[34px] w-[126px] bg-black rounded-b-[18px] flex items-center justify-center">
                          <div className="h-3 w-3 rounded-full bg-gray-800 mx-1"></div>
                          <div className="h-2 w-2 rounded-full bg-gray-700 mx-1"></div>
                        </div>
                      </div>

                      {/* Screenshots - ensuring they fill the entire screen area */}
                      {appScreenshots.map((src, index) => (
                        <motion.div
                          key={src}
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: activeScreen === index ? 1 : 0,
                            y: activeScreen === index ? 0 : 20,
                          }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0"
                          style={{
                            display: activeScreen === index ? "block" : "none",
                          }}
                        >
                          <Image
                            src={src}
                            alt={`QSwap app interface - screen ${index + 1}`}
                            width={270}
                            height={585}
                            className="w-full h-full object-cover"
                            priority={index === 0}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Background decorative elements */}
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#74F5B2]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-[#9F71D1]/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-20 px-6 bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            How It Works
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="w-16 h-16 mx-auto mb-4 bg-[#9F71D1]/10 rounded-full flex items-center justify-center"
                >
                  <div className="w-10 h-10 bg-[#9F71D1]/20 rounded-full flex items-center justify-center text-[#9F71D1] font-bold">
                    {item.icon}
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Why Students Choose QSwap
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureItems.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 group"
              >
                <motion.div
                  animate={{
                    borderColor: [
                      "rgba(116, 245, 178, 0)",
                      "rgba(116, 245, 178, 1)",
                      "rgba(116, 245, 178, 0)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                  className="absolute inset-0 border-2 border-transparent rounded-xl pointer-events-none"
                />

                <div className="h-12 w-12 bg-[#9F71D1]/10 rounded-lg mb-4 flex items-center justify-center">
                  {feature.icon}
                </div>

                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="py-20 px-6 bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            What Students Are Saying
          </motion.h2>

          <div className="relative h-[200px] md:h-[150px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: activeTestimonial === index ? 1 : 0,
                  x: activeTestimonial === index ? 0 : 50,
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
                style={{
                  display: activeTestimonial === index ? "block" : "none",
                }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg max-w-3xl mx-auto text-center">
                  <p className="text-lg md:text-xl mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <p className="font-medium text-[#9F71D1]">
                    {testimonial.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  activeTestimonial === index
                    ? "bg-[#9F71D1]"
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="download" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#9F71D1] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#74F5B2] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Ready to Trade? Download Now!
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              Join thousands of Queen's students already buying and selling on
              campus.
            </p>

            <motion.a
              href="https://apps.apple.com/ca/app/qswap/id6742468813"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[#9F71D1] text-white px-10 py-5 rounded-full font-medium text-xl shadow-[0_0_20px_rgba(159,113,209,0.5)] hover:shadow-[0_0_30px_rgba(159,113,209,0.7)] transition-shadow"
            >
              <div className="flex items-center gap-3">
                {/* App icon */}
                <Image
                  src="/app_icon.png"
                  alt="QSwap App Icon"
                  width={28}
                  height={28}
                  className="rounded"
                />
                Download QSwap
              </div>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-8 md:mb-0">
              {/* Footer logo */}
              <Image
                src="/logo.png"
                alt="QSwap Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-bold text-xl">QSwap</span>
            </div>

            <div className="flex flex-wrap justify-center gap-8 font-medium text-sm">
              <a
                href="https://www.privacypolicies.com/live/e5ba9a7c-a029-423e-a7df-3b77301ced9d"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#74F5B2] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="mailto:qswap.dev@gmail.com"
                className="hover:text-[#74F5B2] transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="mt-10 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} QSwap. All rights reserved.</p>
            <p className="mt-2">
              Made exclusively for Queen's University students.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
