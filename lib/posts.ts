export interface Post {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
}

export const posts: Post[] = [
  {
    title: "5 Pasos para controlar los gastos de tu hogar hoy mismo",
    slug: "5-pasos-controlar-gastos-hogar",
    excerpt: "Aprende 5 pasos sencillos y aterrizados para retomar el control de tu bolsillo hoy mismo sin complicaciones.",
    category: "Presupuesto",
    date: "15 Ene 2026",
    readTime: "6 min",
    content: "<h3>1. Realidad ante todo</h3><p>Durante una semana, anota absolutamente cada centavo que sale de tu bolsillo. No juzgues, solo observa.</p><h3>2. Clasifica en 'Los 3 Baldes'</h3><p>Fijos (lo que no negocias), Variables (comida, transporte) y Hemorragias (suscripciones, caprichos constantes).</p><h3>3. Aplica la regla de las 24 horas</h3><p>¿Lo quieres? Espera un día. Si mañana aún lo necesitas con la misma intensidad, entonces cómpralo.</p><h3>4. Págate a ti primero</h3><p>Ahorrar no es lo que sobra, es lo primero que separas cuando cobras.</p><h3>5. Cita familiar dominguera</h3><p>Hablar de plata no es pelear. Es planear el próximo viaje o la próxima meta juntos.</p>"
  }
];

export function getAllPosts() { return posts; }
export function getPost(slug: string) { return posts.find(p => p.slug === slug); }
