import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
        const res = await axios.get(`${apiUrl}/projects`);
        setProjects(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 selection:bg-blue-500/30 font-sans antialiased">
      <Navbar />
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 py-24 space-y-32">
        <section id="projects" className="scroll-mt-24">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold italic">Selected Projects</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="text-center space-y-4">
              <p className="text-rose-400">{error}</p>
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-20 bg-slate-800/30 rounded-3xl border border-dashed border-slate-700">
              <p className="text-slate-500 italic">No projects found. Add some to your database!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project._id} {...project} />
              ))}
            </div>
          )}
        </section>

        <section id="contact" className="grid grid-cols-1 lg:grid-cols-2 gap-16 scroll-mt-24">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold">Let's build something <span className="text-blue-400">extraordinary</span>.</h2>
            <p className="text-slate-400 text-lg">Have a project in mind? Reach out and I'll get back to you.</p>
          </div>
          <ContactForm />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
