import React from 'react';

const ProjectCard = ({ title, description, image, githubLink, liveLink, tags }) => {
  return (
    <div className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 transition-all hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10">
      <div className="h-48 overflow-hidden bg-slate-700 relative">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
           {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform">🔗</a>}
           {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform">GH</a>}
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          {tags?.map(tag => (
            <span key={tag} className="px-3 py-1 bg-slate-900 text-blue-400 text-xs font-semibold rounded-full border border-slate-800">{tag}</span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-slate-400 text-sm line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
