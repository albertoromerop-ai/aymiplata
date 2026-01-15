import Link from "next/link";
import { getAllPosts } from "../lib/posts";

export default function Home() {
  const posts = getAllPosts();
  const featured = posts[0];

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-b from-emerald-50 to-white py-24 text-center px-4">
        <h1 className="text-6xl font-bold mb-6 tracking-tight">Toma Control de tu <span className="text-emerald-600">Dinero</span></h1>
        <p className="text-xl text-zinc-600 max-w-2xl mx-auto mb-10">Finanzas reales para familias reales. Aprende a manejar tu plata sin complicaciones.</p>
        <Link href="/blog" className="px-10 py-4 bg-emerald-600 text-white rounded-2xl font-bold shadow-xl hover:bg-emerald-700 transition-all">Empezar a Leer</Link>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-10">Artículo Destacado</h2>
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-emerald-50">
          <div className="p-10">
            <span className="text-emerald-600 font-bold uppercase text-sm tracking-widest">{featured.category}</span>
            <h3 className="text-4xl font-bold mt-4 mb-6">{featured.title}</h3>
            <p className="text-zinc-600 text-lg mb-8 leading-relaxed">{featured.excerpt}</p>
            <Link href={`/blog/${featured.slug}`} className="text-emerald-600 font-bold text-xl hover:underline">Leer artículo completo →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}