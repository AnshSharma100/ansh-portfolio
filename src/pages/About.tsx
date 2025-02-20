
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";

const About = () => {
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
          <h1 className="section-heading text-center">About Me</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-primary/80 leading-relaxed mb-6">
              I'm a Software Engineering student at the University of Texas at Dallas, 
              passionate about AI and software development. I've worked on AI-powered 
              projects such as OPTIC-net, and I'm eager to connect and explore new opportunities.
            </p>
            <p className="text-lg text-primary/80 leading-relaxed">
              Throughout my academic journey, I've developed a strong foundation in software 
              engineering principles and a particular interest in artificial intelligence. 
              My projects demonstrate my commitment to creating innovative solutions that 
              leverage cutting-edge technology to solve real-world problems.
            </p>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default About;
