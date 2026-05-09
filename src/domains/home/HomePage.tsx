import React from 'react';
import { ArrowRight, Sparkles, Heart, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-10 animate-fade-in">
      <section className="text-center space-y-4 pt-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          <Sparkles size={16} />
          <span>Bienestar a tu medida</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight leading-tight">
          Crea tu Kit de <br />
          <span className="text-primary italic">Autocuidado</span>
        </h1>
        <p className="text-base-content/70 max-w-xs mx-auto">
          Encuentra la calma y el orden que necesitas con nuestros kits personalizados.
        </p>
        <div className="pt-4">
          <Link to="/catalog" className="btn btn-primary btn-wide rounded-full shadow-lg shadow-primary/20">
            Explorar Catálogo
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4">
        <div className="card bg-secondary/10 p-6 rounded-3xl space-y-2">
          <div className="bg-secondary/20 w-10 h-10 rounded-full flex items-center justify-center text-secondary">
            <Heart size={20} />
          </div>
          <h3 className="font-bold text-sm">Parejas</h3>
          <p className="text-xs text-base-content/60">Momentos para compartir.</p>
        </div>
        <div className="card bg-accent/10 p-6 rounded-3xl space-y-2">
          <div className="bg-accent/20 w-10 h-10 rounded-full flex items-center justify-center text-accent">
            <Zap size={20} />
          </div>
          <h3 className="font-bold text-sm">Sensorial</h3>
          <p className="text-xs text-base-content/60">Estimula tus sentidos.</p>
        </div>
      </section>

      <section className="bg-base-200 rounded-3xl p-8 text-center space-y-4">
        <h2 className="text-xl font-bold">¿Cómo funciona?</h2>
        <ul className="steps steps-vertical">
          <li className="step step-primary text-sm">Elige tu base</li>
          <li className="step step-primary text-sm">Personaliza niveles</li>
          <li className="step text-sm">Recibe en casa</li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
