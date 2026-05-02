import ProjectCard from '@/components/ProjectCard';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      {/* HUD Header */}
      <section className="mb-32">
        <div className="flex items-center gap-2 mb-4">
          <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs text-green-500 uppercase tracking-widest">System Online: Aurora Kernel v1.0</span>
        </div>
        <h1 className="text-7xl font-black tracking-tighter mb-4 italic">
          AYUSHMAAN BORA
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
          19yo Tech Entrepreneur. Co-Founder @ <span className="text-white font-bold underline decoration-blue-500">Xeneva</span>. 
          Building hybrid kernels and hardware to kill the smartphone.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/blog" className="px-6 py-3 bg-white text-black font-bold hover:bg-blue-500 hover:text-white transition-all">
            READ LOG_FILES
          </Link>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
        <ProjectCard 
          title="env" 
          tagline="Blockchain Infrastructure" 
          desc="Built for the next generation of decentralized execution." 
          link="https://envblockchain.vercel.app/"
        />
        <ProjectCard 
          title="Liita" 
          tagline="Never be bored boarding." 
          desc="Decentralized mesh-network app for flight communication via Bluetooth. No internet required." 
        />
        <ProjectCard 
          title="YAPP" 
          tagline="Find Your Crowd." 
          desc="The social layer for finding and hosting the best house parties in the city." 
        />
        <div className="border border-dashed border-zinc-800 rounded-xl p-8 flex items-center justify-center">
          <p className="text-zinc-600 italic">More classified projects in development...</p>
        </div>
      </section>
    </main>
  );
}
