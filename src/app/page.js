import Link from 'next/link';
import dynamic from 'next/dynamic';

// THIS IS THE FIX: Tell Vercel's server to completely ignore this component during build
const ParticlePortrait = dynamic(
  () => import('../../components/ParticlePortrait'),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto py-24 px-6">
      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between mb-16 gap-8">
        <div>
          <h1 className="text-5xl font-black italic tracking-tighter mb-4">
            AYUSHMAAN_BORA
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
            I'm Ayushmaan Bora, a deep-tech founder building <span className="text-white">XenevaOS</span> and exploring the future of spatial computing.
          </p>
        </div>

        <div className="flex-shrink-0">
          <ParticlePortrait imageSrc="/profile.jpg" /> 
        </div>
      </div>

      <nav className="space-y-4">
        <Link href="/blog" className="block text-2xl font-bold hover:text-blue-500 transition-colors italic">
          THE_LOGS →
        </Link>
      </nav>
    </main>
  );
}
