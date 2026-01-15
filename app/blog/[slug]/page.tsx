import { getPost, getAllPosts } from "../../../lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  return (
    <main className="bg-white py-20 px-4">
      <article className="max-w-3xl mx-auto">
        <div className="mb-12">
          <span className="text-emerald-600 font-black uppercase tracking-widest text-sm">{post.category}</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-zinc-900 mt-4 mb-6 tracking-tighter">{post.title}</h1>
          <p className="text-zinc-500 font-medium">{post.date} • {post.readTime} de lectura</p>
        </div>
        <div className="prose prose-emerald prose-xl max-w-none text-zinc-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }} />
        
        <div className="mt-20 p-12 bg-emerald-50 rounded-[3rem] text-center border border-emerald-100">
          <h3 className="text-3xl font-bold text-zinc-900 mb-6">¿Te ayudó este artículo?</h3>
          <p className="text-lg text-zinc-600 mb-10">Suscríbete para recibir consejos directos a tu correo cada semana.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
             <input type="email" placeholder="Tu correo" className="px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-emerald-500 shadow-inner w-full" />
             <button className="px-8 py-4 bg-emerald-600 text-white rounded-2xl font-bold shadow-lg">Unirme</button>
          </div>
        </div>
      </article>
    </main>
  );
}