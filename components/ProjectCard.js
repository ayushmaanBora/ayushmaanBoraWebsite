export default function ProjectCard({ title, tagline, desc, link }) {
  return (
    <div className="group relative border border-zinc-800 bg-zinc-900/30 p-8 rounded-xl hover:border-blue-500/50 transition-all">
      <div className="absolute top-4 right-4 text-[10px] text-zinc-600 font-bold uppercase tracking-widest">Project_Entry</div>
      <h3 className="text-3xl font-bold mb-1 text-white">{title}</h3>
      <p className="text-blue-400 text-xs font-bold uppercase mb-4">{tagline}</p>
      <p className="text-zinc-400 text-sm leading-relaxed mb-6">{desc}</p>
      {link && (
        <a href={link} target="_blank" className="text-xs text-white border-b border-white pb-1 hover:text-blue-400 hover:border-blue-400 transition-all">
          VIEW_SOURCE_CODE →
        </a>
      )}
    </div>
  );
}