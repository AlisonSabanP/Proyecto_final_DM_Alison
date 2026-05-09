import React from 'react';
import type { Kit } from '../../shared/types';
import { Link } from 'react-router-dom';

const mockKits: Kit[] = [
  { id: '1', name: 'Kit Conexión', description: 'Ideal para parejas que buscan tiempo de calidad.', price: 45, category: 'Parejas', image: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=400&h=300&fit=crop' },
  { id: '2', name: 'Kit Zen', description: 'Relajación profunda con aceites y sonidos.', price: 35, category: 'Sensorial', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop' },
  { id: '3', name: 'Kit Creador', description: 'Herramientas para tu próximo proyecto artístico.', price: 55, category: 'Creativo', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop' },
];

const CatalogPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Catálogo</h1>
        <p className="text-base-content/60">Elige la base de tu bienestar.</p>
      </header>

      <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
        {['Todos', 'Parejas', 'Sensorial', 'Creativo', 'Tecnología'].map(cat => (
          <button key={cat} className="btn btn-sm rounded-full btn-outline border-base-300 whitespace-nowrap">
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-6">
        {mockKits.map(kit => (
          <div key={kit.id} className="card bg-base-100 shadow-xl border border-base-200 overflow-hidden rounded-3xl group">
            <figure className="h-48 overflow-hidden">
              <img src={kit.image} alt={kit.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </figure>
            <div className="card-body p-6">
              <div className="flex justify-between items-start">
                <h2 className="card-title text-xl font-bold">{kit.name}</h2>
                <span className="text-primary font-bold text-lg">${kit.price}</span>
              </div>
              <p className="text-sm text-base-content/60 leading-relaxed">{kit.description}</p>
              <div className="card-actions justify-end mt-4">
                <Link to={`/customization?kit=${kit.id}`} className="btn btn-primary btn-sm rounded-full px-6">
                  Seleccionar
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
