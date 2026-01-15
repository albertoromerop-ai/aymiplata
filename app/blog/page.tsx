import Link from "next/link";
import { getAllPosts } from "../../lib/posts";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-zinc-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-zinc-900 mb-16 tracking-tight">Blog de Finanzas</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map(post => (
            <div key={post.slug} className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-xl hover:scale-[1.02] transition-transform">
              <span className="text-emerald-600 text-sm font-black uppercase tracking-widest">{post.category}</span>
              <h2 className="text-2xl font-bold mt-4 mb-4 leading-tight">{post.title}</h2>
              <p className="text-zinc-600 mb-8 line-clamp-3 leading-relaxed">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-emerald-600 font-bold flex items-center group">
                Leer artículo <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}