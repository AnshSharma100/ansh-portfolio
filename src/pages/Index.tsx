
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        {/* Hero Section */}
        <section className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="mb-8">
              <img
                src="/lovable-uploads/7518c9bc-a6b9-4d95-8973-1d8ae9d428c3.png"
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-accent"
              />
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Hello, I'm Ansh Sharma
            </h1>
            <p className="text-xl text-primary/80 mb-8 max-w-2xl mx-auto">
              Software Engineering student at the University of Texas at Dallas, passionate about AI and software development.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/projects" className="button-primary inline-flex items-center">
                View Projects <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link to="/contact" className="px-6 py-3 border-2 border-accent text-accent rounded-lg transition-all duration-300 hover:bg-accent hover:text-white">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Featured Projects Preview */}
        <section className="py-20">
          <h2 className="section-heading text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-6"
            >
              <h3 className="text-2xl font-semibold mb-4">OPTIC-net</h3>
              <p className="text-primary/80 mb-4">
                Award-winning AI-powered web platform for early diabetic retinopathy detection.
              </p>
              <Link to="/projects" className="text-accent hover:text-accent/80 inline-flex items-center">
                Learn More <ArrowRight className="ml-2" size={16} />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-card p-6"
            >
              <h3 className="text-2xl font-semibold mb-4">CarIQ</h3>
              <p className="text-primary/80 mb-4">
                AI-powered iOS application for intelligent vehicle data analysis and insights.
              </p>
              <Link to="/projects" className="text-accent hover:text-accent/80 inline-flex items-center">
                Learn More <ArrowRight className="ml-2" size={16} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
