import React, { useState } from 'react';
import type { CustomizationLevel } from '../../shared/types';
import { Palette, MessageSquare, Layers } from 'lucide-react';

const CustomizationPage: React.FC = () => {
  const [level, setLevel] = useState<CustomizationLevel>('Standard');
  const [color, setColor] = useState('#D1C4E9');
  const [message, setMessage] = useState('');

  const levels: { name: CustomizationLevel; price: string; desc: string }[] = [
    { name: 'Básico', price: '+$0', desc: 'Lo esencial para empezar.' },
    { name: 'Standard', price: '+$15', desc: 'Equilibrio perfecto.' },
    { name: 'Premium', price: '+$30', desc: 'Experiencia completa.' },
  ];

  return (
    <div className="space-y-8 animate-fade-in pb-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Personaliza</h1>
        <p className="text-base-content/60">Hazlo único para ti o alguien especial.</p>
      </header>

      {/* Selector de Niveles */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-primary font-bold">
          <Layers size={20} />
          <h2>Nivel de Kit</h2>
        </div>
        <div className="grid gap-3">
          {levels.map((l) => (
            <div 
              key={l.name}
              onClick={() => setLevel(l.name)}
              className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex justify-between items-center ${
                level === l.name ? 'border-primary bg-primary/5 shadow-md' : 'border-base-200'
              }`}
            >
              <div>
                <h3 className="font-bold">{l.name}</h3>
                <p className="text-xs text-base-content/60">{l.desc}</p>
              </div>
              <span className="font-bold text-primary">{l.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Selector de Colores */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-primary font-bold">
          <Palette size={20} />
          <h2>Color de Empaque</h2>
        </div>
        <div className="flex gap-4 justify-center">
          {['#D1C4E9', '#BBDEFB', '#C8E6C9', '#FFF9C4', '#FFCCBC'].map(c => (
            <button
              key={c}
              onClick={() => setColor(c)}
              className={`w-12 h-12 rounded-full border-4 transition-transform ${color === c ? 'border-primary scale-110' : 'border-transparent'}`}
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
      </section>

      {/* Mensaje Personalizado */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-primary font-bold">
          <MessageSquare size={20} />
          <h2>Mensaje</h2>
        </div>
        <textarea 
          className="textarea textarea-bordered w-full rounded-2xl h-24 focus:textarea-primary transition-colors"
          placeholder="Escribe algo especial aquí..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </section>

      <div className="pt-6">
        <button className="btn btn-primary btn-block rounded-full shadow-lg shadow-primary/20">
          Confirmar Personalización
        </button>
      </div>
    </div>
  );
};

export default CustomizationPage;
