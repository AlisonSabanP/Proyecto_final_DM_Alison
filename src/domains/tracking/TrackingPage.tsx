import React from 'react';
import { Package, Truck, CheckCircle, Clock } from 'lucide-react';

const TrackingPage: React.FC = () => {
  const steps = [
    { label: 'Personalizando', icon: <Package />, active: true, done: true },
    { label: 'Empacado', icon: <Package />, active: true, done: true },
    { label: 'En camino', icon: <Truck />, active: true, done: false },
    { label: 'Entregado', icon: <CheckCircle />, active: false, done: false },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Seguimiento</h1>
        <p className="text-base-content/60">Sigue el viaje de tu bienestar.</p>
      </header>

      <div className="card bg-base-100 shadow-xl border border-base-200 p-8 rounded-3xl space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs font-bold text-primary uppercase tracking-widest">Orden #MK-2026</p>
            <h2 className="text-xl font-bold">Kit Conexión</h2>
          </div>
          <div className="badge badge-primary badge-outline font-bold">En camino</div>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-base-200" />
          <ul className="space-y-8 relative">
            {steps.map((step, idx) => (
              <li key={idx} className="flex items-center gap-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 ${
                  step.done ? 'bg-primary text-primary-content' : step.active ? 'bg-primary/20 text-primary border-2 border-primary' : 'bg-base-200 text-base-content/40'
                }`}>
                  {step.done ? <CheckCircle size={20} /> : step.icon}
                </div>
                <div>
                  <h3 className={`font-bold ${step.active ? 'text-base-content' : 'text-base-content/40'}`}>{step.label}</h3>
                  {step.active && !step.done && <p className="text-xs text-primary font-medium flex items-center gap-1 mt-1">
                    <Clock size={12} /> Actualizado hoy a las 10:30 AM
                  </p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-primary/5 p-6 rounded-3xl border border-primary/10 flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
          <Truck size={24} />
        </div>
        <div>
          <h3 className="font-bold text-sm">Fecha estimada de entrega</h3>
          <p className="text-lg font-bold text-primary">Lunes, 12 de Mayo</p>
        </div>
      </div>
    </div>
  );
};

export default TrackingPage;
