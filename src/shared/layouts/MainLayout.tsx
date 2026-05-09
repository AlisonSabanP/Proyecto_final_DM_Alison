import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Home, LayoutGrid, Settings, Truck } from 'lucide-react';

export const MainLayout: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Inicio', icon: <Home size={24} /> },
    { path: '/catalog', label: 'Catálogo', icon: <LayoutGrid size={24} /> },
    { path: '/customization', label: 'Personalizar', icon: <Settings size={24} /> },
    { path: '/tracking', label: 'Seguimiento', icon: <Truck size={24} /> },
  ];

  return (
    <div className="min-h-screen bg-base-100 flex flex-col font-sans text-base-content">
      {/* Navbar Superior */}
      <header className="navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-50 border-b border-base-200 px-4">
        <div className="flex-1">
          <Link to="/" className="text-2xl font-bold tracking-tight text-primary">
            Mykit.io
          </Link>
        </div>
        <div className="flex-none">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="flex-grow pb-20 md:pb-0 container mx-auto max-w-lg px-4 pt-6">
        <Outlet />
      </main>

      {/* Bottom Navigation (Mobile First) */}
      <nav className="btm-nav btm-nav-md border-t border-base-200 bg-base-100 md:hidden">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={location.pathname === item.path ? 'active text-primary' : ''}
          >
            {item.icon}
            <span className="btm-nav-label text-[10px]">{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Sidebar/Nav para Desktop (Opcional pero bueno para UX) */}
      <nav className="hidden md:flex fixed left-0 top-0 h-full w-64 flex-col bg-base-200 p-6 border-r border-base-300">
        <Link to="/" className="text-3xl font-bold mb-10 text-primary">Mykit.io</Link>
        <ul className="menu menu-lg w-full p-0">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.icon}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
