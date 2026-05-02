import fs from 'fs';

import path from 'path';

import matter from 'gray-matter';

import Link from 'next/link';



export default function BlogList() {

  const postsDirectory = path.join(process.cwd(), 'content');

  const filenames = fs.readdirSync(postsDirectory);



  const posts = filenames.map((filename) => {

    const filePath = path.join(postsDirectory, filename);

    const fileContent = fs.readFileSync(filePath, 'utf8');

    const { data } = matter(fileContent);

    return { ...data, slug: filename.replace('.md', '') };

  });



  // Sort: Newest to Oldest

  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));



  return (

    <div className="max-w-3xl mx-auto py-20 px-6">

      <Link href="/" className="text-zinc-500 hover:text-white mb-12 block">← BACK_TO_HOME</Link>

      <h1 className="text-5xl font-black mb-12 italic tracking-tighter">THE_LOGS</h1>

      

      <div className="space-y-12">

        {sortedPosts.map((post) => (

          <div key={post.slug} className="group cursor-pointer">

            <p className="text-xs text-zinc-500 mb-2">{post.date}</p>

            <h2 className="text-2xl font-bold group-hover:text-blue-500 transition-colors">

              {post.title}

            </h2>

          </div>

        ))}

      </div>

    </div>

  );

}
