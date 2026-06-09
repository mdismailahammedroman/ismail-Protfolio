import { useState, useEffect } from 'react';
import { ThreeDBackground } from './components/ThreeDBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Terminal } from 'lucide-react';

interface ProjectLinks {
  liveUrl: string;
  githubUrl: string;
}

const DEFAULT_LINKS: Record<string, ProjectLinks> = {
  epicnz: { liveUrl: 'https://epicnz-web.vercel.app/', githubUrl: 'https://github.com/Roman001-ai/epicnz-web' },
  benchmark: { liveUrl: 'https://benchmark-font-end.vercel.app/', githubUrl: 'https://github.com/Roman001-ai/benchMark-fontend' },
  trucking: { liveUrl: 'https://trucking-fontend.vercel.app/', githubUrl: 'https://github.com/Roman001-ai/trucking-fontend' },
  wallet: { liveUrl: 'https://iar-wallet-font-end.vercel.app/', githubUrl: 'https://github.com/Roman001-ai/iar-wallet-font-end' },
  bookverse: { liveUrl: 'https://library-management-fontend.vercel.app/', githubUrl: 'https://github.com/Roman001-ai/library-management-fontend' },
  healthsync: { liveUrl: 'https://sportsgear-19a96.web.app/', githubUrl: 'https://github.com/Roman001-ai/sportsgear-19a96.web.app' },
  yeppads: { liveUrl: 'https://yeppads.com/', githubUrl: 'https://github.com/Roman001-ai/yeppads' },  
};

function App() {
  const [projectLinks, setProjectLinks] = useState<Record<string, ProjectLinks>>(DEFAULT_LINKS);
  const [, setDevPanelOpen] = useState(false);

  // Load custom links on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('roman_portfolio_links');
      if (stored) {
        const parsed = JSON.parse(stored);
        // Merge with defaults to ensure all keys exist
        setProjectLinks({
          ...DEFAULT_LINKS,
          ...parsed,
        });
      }
    } catch (err) {
      console.error('Failed to load links from localStorage', err);
    }
  }, []);



  return (
    <div className="relative min-h-screen text-white bg-dark-bg selection:bg-purple-500/30 selection:text-purple-200">
      
      {/* 3D Particle Constellation Background Canvas */}
      <ThreeDBackground />

      {/* Navigation Header */}
      <Navbar onOpenDevPanel={() => setDevPanelOpen(true)} />

      {/* Main Content Layout */}
      <main className="relative z-10 w-full overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects projectLinks={projectLinks} onOpenDevPanel={() => setDevPanelOpen(true)} />
        <Contact />
      </main>

      {/* Premium Footer */}
      <footer className="relative z-10 py-12 border-t border-white/5 bg-black/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-6">
          
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center">
              <Terminal className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-heading font-bold text-sm tracking-tight text-white">
              ISMAIL<span className="text-cyan-400">.AHAMMED</span>
            </span>
          </div>

          <div className="text-2xs text-gray-500 font-semibold tracking-wide uppercase text-center md:text-left">
            © {new Date().getFullYear()} Md. Ismail Ahammed Roman. All rights reserved.
          </div>


        </div>
      </footer>
    </div>
  );
}

export default App;
