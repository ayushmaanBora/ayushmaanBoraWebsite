// src/app/layout.js
import './globals.css';

export const metadata = {
  title: 'Ayushmaan Bora | CEO @ Xeneva',
  description: 'Building the Aurora Kernel and the future of XR.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black text-zinc-100 selection:bg-blue-500/30">
      <body className="antialiased overflow-x-hidden font-mono">
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black -z-10" />
        {children}
      </body>
    </html>
  );
}