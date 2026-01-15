"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-zinc-100 sticky top-0 z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-12 items-center">
          <Link href="/" className="text-3xl font-black text-emerald-600 tracking-tighter">AyMiPlata</Link>
          <div className="hidden md:flex space-x-10 items-center">
            <Link href="/" className="text-zinc-600 hover:text-emerald-600 font-semibold transition-colors">Inicio</Link>
            <Link href="/acerca" className="text-zinc-600 hover:text-emerald-600 font-semibold transition-colors">Acerca</Link>
            <Link href="/blog" className="text-zinc-600 hover:text-emerald-600 font-semibold transition-colors">Blog</Link>
            <Link href="/herramientas" className="text-zinc-600 hover:text-emerald-600 font-semibold transition-colors">Herramientas</Link>
          </div>
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-8 h-8 text-zinc-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-16 6h16"></path></svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t border-zinc-50 p-6 space-y-6 flex flex-col items-center animate-in fade-in slide-in-from-top-4">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-xl font-bold text-zinc-900">Inicio</Link>
          <Link href="/acerca" onClick={() => setIsOpen(false)} className="text-xl font-bold text-zinc-900">Acerca</Link>
          <Link href="/blog" onClick={() => setIsOpen(false)} className="text-xl font-bold text-zinc-900">Blog</Link>
          <Link href="/herramientas" onClick={() => setIsOpen(false)} className="text-xl font-bold text-zinc-900">Herramientas</Link>
        </div>
      )}
    </nav>
  );
}