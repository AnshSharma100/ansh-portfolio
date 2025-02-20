
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-20"
        >
          <h1 className="section-heading text-center">My Projects</h1>
          <div className="grid gap-12 mt-12">
            {/* OPTIC-net Project */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-8"
            >
              <h2 className="text-2xl font-bold mb-4">OPTIC-net</h2>
              <p className="text-primary/80 mb-6">
                OPTIC-net is an award-winning AI-powered web platform designed for early 
                diabetic retinopathy detection. The deep learning model, trained on over 
                10GB of medical imaging data, enhances diagnostic accuracy. Utilizing 
                TensorFlow in Python, the AI model was fine-tuned to outperform manual 
                doctor analysis by 10-20%. The project features a scalable data pipeline 
                for image preprocessing and AI inference, optimizing performance and speed. 
                The web platform was built using HTML with a Flask backend, integrating AI 
                seamlessly into medical diagnostics.
              </p>
              <video 
                className="w-full rounded-lg shadow-lg"
                controls
                src="/OpticNetvideo.mp4"
              />
            </motion.div>

            {/* CarIQ Project */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-card p-8"
            >
              <h2 className="text-2xl font-bold mb-4">CarIQ</h2>
              <p className="text-primary/80 mb-6">
                CarIQ is an AI-powered iOS application that processes vehicle data from 
                text files to provide intelligent insights. The backend leverages the 
                Sambanova AI API, enabling real-time AI analytics. An AI-powered chatbot 
                enhances user interaction by offering personalized recommendations. The 
                app utilizes RESTful APIs with Flask for processing car data and integrates 
                MySQL for structured data storage, optimizing retrieval and performance 
                for large datasets.
              </p>
              <video 
                className="w-full rounded-lg shadow-lg"
                controls
                src="/CarIQVideo.mov"
              />
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default Projects;
