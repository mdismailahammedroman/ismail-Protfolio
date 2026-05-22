import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Link2Off, Edit3, ShieldAlert, Server, Lock } from 'lucide-react';
import { TiltCard } from './TiltCard';

interface ProjectLinks {
  liveUrl: string;
  githubUrl: string;
}

interface ProjectsProps {
  projectLinks: Record<string, ProjectLinks>;
  onOpenDevPanel: () => void;
}

interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tasks: string[];
  tags: string[];
  projectType?: 'fullstack' | 'backend' | 'frontend' | 'client';
}

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const Projects: React.FC<ProjectsProps> = ({
  projectLinks,
  onOpenDevPanel,
}) => {
  const projectsList: ProjectData[] = [
   
    {
      id: 'wallet',
      title: 'IAR Wallet',
      subtitle: 'Secure FinTech & Digital Ledger Platform',
      description: 'A role-based digital ledger featuring secure money transfers, transactional caching, and administrative oversight controls.',
      tasks: ['Securing digital transactions with MongoDB sessions', 'Redis key caching to reduce API read load by 80%', 'Role-based access controls (RBAC) and JWTs'],
      tags: ['MERN Stack', 'Redis', 'JWT Auth', 'Express.js', 'Postgres'],
      projectType: 'fullstack',
    },
    {
      id: 'bookverse',
      title: 'BookVerse',
      subtitle: 'Full-Stack Library Management System',
      description: 'A resource cataloging and lending system allowing users to search volumes, lease titles, and manage profile checkouts.',
      tasks: ['Optimized CRUD cataloging routing layers', 'Lease tracking system with return alerts', 'Unified admin resource control layout'],
      tags: ['React.js', 'Express.js', 'Mongoose', 'TailwindCSS', 'React Router'],
      projectType: 'fullstack',
    },
    {
      id: 'healthsync',
      title: 'HealthSync',
      subtitle: 'Hospital Appointment & Scheduling App',
      description: 'Patient booking and physician calendar integration portal featuring real-time availability updates.',
      tasks: ['Dynamic physician schedule conflicts validator', 'Secure patient portal medical charts indexing', 'Transactional slot reservations database locking'],
      tags: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'TailwindCSS'],
      projectType: 'fullstack',
    },
    {
      id: 'yeppads',
      title: 'YepPads',
      subtitle: 'Product Promotion & Publishing Platform',
      description: 'A high-traffic landing engine enabling creators to register campaigns, launch advertisements, and track click metrics.',
      tags: ['React', 'Next.js', 'Tailwind CSS', 'Redux', 'Express.js'],
      tasks: ['Highly responsive page speed architectures', 'User engagement event logging analytics', 'Cross-platform mobile responsive configurations'],
      projectType: 'client',
    }, {
      id: 'epicnz',
      title: 'EpicNz-AI',
      subtitle: 'Intelligent Weather Engine & AI Insights',
      description: 'An AI-powered real-time weather intelligence system integrating predictive meteorological models with OpenAI API analytics.',
      tasks: ['OpenAI prompt engineering for weather recommendations', 'Real-time JSON weather API bindings', 'Analytical insights administrative dashboard'],
      tags: ['React', 'Node.js', 'OpenAI API', 'TailwindCSS', 'Recharts'],
      projectType: 'client',
    },
    {
      id: 'benchmark',
      title: 'Benchmark',
      subtitle: 'Movement Monitoring & Engineering Reporting',
      description: 'An engineering telemetry platform providing sub-millimeter movement tracking and automated technical auditing.',
      tasks: ['Advanced timeseries telemetry data charts', 'Automated server-side PDF reporting structure', 'Dynamic engineering vector visualizations'],
      tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'PDFKit'],
      projectType: 'client',
    },
    {
      id: 'trucking',
      title: 'Trucking & Debris Management',
      subtitle: 'Logistics Tracker & OCR Scanner',
      description: 'Heavy logistics and materials management dashboard backed by computer vision for scanning physical cargo invoices.',
      tasks: ['Google Cloud Vision OCR receipt ticket processing', 'Real-time transit logistics geofence tracking', 'Excel/CSV reporting for corporate accounting'],
      tags: ['React', 'Express.js', 'Google Vision OCR', 'MongoDB', 'SheetJS'],
      projectType: 'client',
    },
  ];

  // Default links for projects (can be overridden by projectLinks prop)
  const defaultProjectLinks: Record<string, ProjectLinks> = {
    wallet: {
      liveUrl: 'https://iar-wallet-font-end.vercel.app/',
      githubUrl: 'https://github.com/mdismailahammedroman/IAR_Wallate_Fontend',
    },
    bookverse: {
      liveUrl: 'https://library-management-fontend.vercel.app/',
      githubUrl: 'https://github.com/mdismailahammedroman/Library-Management-System_fontend',
    },
    healthsync: {
      liveUrl: 'https://sportsgear-19a96.web.app/',
      githubUrl: 'https://github.com/mdismailahammedroman/SportsGear-clientSide',
    },
    epicnz: {
      liveUrl: '',
      githubUrl: '',
    },
    benchmark: {
      liveUrl: '',
      githubUrl: '',
    },
    trucking: {
      liveUrl: '',
      githubUrl: '',
    },
    yeppads: {
      liveUrl: '',
      githubUrl: '',
    },
  };

  // Get backend repo URLs for fullstack projects
  const getBackendRepo = (projectId: string): string => {
    const backendRepos: Record<string, string> = {
      wallet: 'https://github.com/mdismailahammedroman/IAR-Wallate-Api',
      bookverse: 'https://github.com/mdismailahammedroman/Library-Managements',
      healthsync: 'https://github.com/mdismailahammedroman/SportsGear-ServertSide',
    };
    return backendRepos[projectId] || '';
  };

  // Merge default links with props (props take precedence)
  const getProjectLinks = (projectId: string): ProjectLinks => {
    const defaultLinks = defaultProjectLinks[projectId] || { liveUrl: '', githubUrl: '' };
    const propLinks = projectLinks[projectId] || { liveUrl: '', githubUrl: '' };
    
    return {
      liveUrl: propLinks.liveUrl || defaultLinks.liveUrl,
      githubUrl: propLinks.githubUrl || defaultLinks.githubUrl,
    };
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full radial-glow-violet blur-3xl opacity-20 -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-heading">
            Featured <span className="gradient-text-accent">Projects</span>
          </h2>
          <div className="h-[3px] w-16 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full mb-6" />
          <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto">
            A selection of complex client apps and full-stack systems I've built.
            Use the <strong className="text-purple-400">Config links</strong> button in the navbar to customize URLs locally.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, idx) => {
            const links = getProjectLinks(project.id);
            const hasLive = !!links.liveUrl;
            const hasGithub = !!links.githubUrl;
            const isClientProject = project.projectType === 'client';
            const isFullstack = project.projectType === 'fullstack';
            const backendRepo = getBackendRepo(project.id);

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                className="flex"
              >
                <TiltCard className="flex flex-col p-6 w-full text-left group/card relative">
                  
                  {/* Project Type Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    {isClientProject && (
                      <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-3xs font-bold uppercase tracking-wider">
                        <Lock className="w-3 h-3" />
                        Client Project
                      </div>
                    )}
                    {isFullstack && (
                      <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-3xs font-bold uppercase tracking-wider">
                        <Server className="w-3 h-3" />
                        Full Stack
                      </div>
                    )}
                  </div>

                  {/* Floating individual edit tool for convenience */}
                  <button
                    onClick={onOpenDevPanel}
                    className="absolute top-4 right-4 p-1.5 rounded-lg bg-black/40 border border-white/5 opacity-0 group-hover/card:opacity-100 transition-opacity hover:border-purple-500/50 hover:bg-purple-950/20 text-gray-400 hover:text-purple-400 z-20 cursor-pointer"
                    title="Edit links for this project"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex-1 mt-8">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-1.5 py-0.5 rounded-md text-3xs font-bold uppercase tracking-widest bg-cyan-500/5 border border-cyan-500/10 text-cyan-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white font-heading group-hover/card:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <h4 className="text-2xs font-semibold text-purple-400 tracking-wide uppercase mb-3">
                      {project.subtitle}
                    </h4>

                    {/* Description */}
                    <p className="text-xs text-gray-400 leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Deliverables / Work list */}
                    <div className="space-y-2 mb-6">
                      <div className="text-3xs uppercase tracking-wider text-gray-500 font-bold">
                        Key Work & Highlights:
                      </div>
                      <ul className="space-y-1.5">
                        {project.tasks.map((task, taskIdx) => (
                          <li key={taskIdx} className="flex items-start gap-2 text-2xs text-gray-300">
                            <span className="text-purple-400 font-black mt-0.5 shrink-0">▸</span>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action buttons - Fixed sizes */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/5">
                    {/* GitHub/Code link button */}
                    {hasGithub ? (
                      <a
                        href={links.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2 min-h-[36px] rounded-lg text-xs font-bold bg-white/5 border border-white/10 hover:border-white/30 text-white transition-all hover:bg-white/10 active:scale-95 text-center whitespace-nowrap"
                      >
                        <GithubIcon className="w-3.5 h-3.5 shrink-0" />
                        <span>Code</span>
                      </a>
                    ) : (
                      <div className="inline-flex flex-col items-center justify-center px-3 py-2 min-h-[36px] rounded-lg bg-white/5 border border-white/5 text-gray-500 text-center">
                        <div className="flex items-center gap-1.5">
                          <Lock className="w-3.5 h-3.5 shrink-0" />
                          <span className="text-2xs font-semibold">Private</span>
                        </div>
                        {isClientProject && (
                          <p className="text-3xs text-gray-600 mt-0.5">Confidential</p>
                        )}
                      </div>
                    )}

                    {/* Live Demo link button */}
                    {hasLive ? (
                      <a
                        href={links.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2 min-h-[36px] rounded-lg text-xs font-bold bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:brightness-110 active:scale-95 shadow-md shadow-purple-900/10 transition-all text-center whitespace-nowrap"
                      >
                        <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                        <span>Live</span>
                      </a>
                    ) : (
                      <button
                        onClick={onOpenDevPanel}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2 min-h-[36px] rounded-lg text-xs font-medium bg-red-950/20 border border-red-500/10 text-red-400 hover:bg-red-500/10 hover:text-white transition-all text-center cursor-pointer whitespace-nowrap"
                        title="Click to set live URL link"
                      >
                        <Link2Off className="w-3.5 h-3.5 shrink-0" />
                        <span>{isClientProject ? 'Request Demo' : 'Set Link'}</span>
                      </button>
                    )}
                  </div>

                  {/* Backend repository link for fullstack projects */}
                  {isFullstack && hasGithub && backendRepo && (
                    <div className="mt-3 pt-2 border-t border-white/5">
                      <a
                        href={backendRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full gap-1.5 text-3xs text-gray-500 hover:text-purple-400 transition-colors group/backend py-1.5"
                      >
                        <Server className="w-3 h-3 shrink-0" />
                        <span>Backend Repository →</span>
                      </a>
                    </div>
                  )}

                  {/* Client project note */}
                  {isClientProject && !hasGithub && (
                    <div className="mt-3 pt-2 text-center">
                      <p className="text-3xs text-amber-600/60 flex items-center justify-center gap-1">
                        <ShieldAlert className="w-3 h-3 shrink-0" />
                        <span>Backend work completed under NDA</span>
                      </p>
                    </div>
                  )}

                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* Footer note about client projects */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-2xs text-gray-400">
            <Lock className="w-3 h-3 text-amber-400 shrink-0" />
            <span>Client project source code is proprietary and protected by confidentiality agreements</span>
          </div>
        </div>

      </div>
    </section>
  );
};