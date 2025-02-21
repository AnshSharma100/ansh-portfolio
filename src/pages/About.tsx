
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { Linkedin, Mail, Phone } from "lucide-react";

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
            <p className="text-lg text-primary/80 leading-relaxed mb-12">
              Throughout my academic journey, I've developed a strong foundation in software 
              engineering principles and a particular interest in artificial intelligence. 
              My projects demonstrate my commitment to creating innovative solutions that 
              leverage cutting-edge technology to solve real-world problems.
            </p>

            {/* Contact Information */}
            <div className="glass-card p-6 space-y-4">
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <a 
                  href="https://www.linkedin.com/in/ansh-sharma-softwareengineer" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary/80 hover:text-accent transition-colors"
                >
                  <Linkedin size={20} />
                  <span>linkedin.com/in/ansh-sharma-softwareengineer</span>
                </a>
                <a 
                  href="mailto:Sharmaansh1705@gmail.com"
                  className="flex items-center gap-3 text-primary/80 hover:text-accent transition-colors"
                >
                  <Mail size={20} />
                  <span>Sharmaansh1705@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 text-primary/80">
                  <Phone size={20} />
                  <span>496-584-7289</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default About;
