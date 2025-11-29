import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Home, Hash, MessageCircle, Activity, ExternalLink } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Início', icon: Home },
    { path: '/numeros', label: 'Números', icon: Hash },
    { path: '/comunicacao', label: 'Etiqueta', icon: MessageCircle },
    { path: '/artemarcial', label: 'Formas', icon: Activity },
  ];

  return (
    <div className="min-h-screen flex flex-col font-serif text-wudang-ink bg-paper-pattern bg-[length:20px_20px]">
      {/* Desktop Header */}
      <header className="bg-slate-900 text-slate-100 shadow-lg border-b-4 border-yellow-600 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
             <img 
              src="https://wudangsanfeng.com.br/wp-content/uploads/2016/03/Wudang-Wushu-SanFeng-Kung-Fu-Instituto-Feng-Huang-_logo-300x89.png" 
              alt="Logo" 
              className="h-8 md:h-10 object-contain bg-white/10 rounded px-1"
            />
            <div className="leading-tight">
              <h1 className="text-yellow-500 font-bold uppercase tracking-widest text-xs md:text-sm">Instituto Feng Huang</h1>
              <span className="text-[10px] md:text-xs text-slate-400">Guia do Discípulo</span>
            </div>
          </div>
          
          <nav className="hidden md:flex gap-6 text-sm font-sans font-bold uppercase tracking-wider">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className={`transition-colors flex items-center gap-2 ${isActive(item.path) ? 'text-yellow-500' : 'text-slate-300 hover:text-white'}`}
              >
                <item.icon size={16} />
                {item.label}
              </Link>
            ))}
             <a href="https://wudangsanfeng.com.br/wudang/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-yellow-600 hover:text-yellow-400 ml-4">
                Site Oficial <ExternalLink size={14} />
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-6 md:py-10 pb-24 md:pb-10">
        {children}
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-yellow-800 z-50 pb-safe">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link 
                key={item.path} 
                to={item.path}
                className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${active ? 'text-yellow-500' : 'text-slate-400'}`}
              >
                <item.icon size={20} className={active ? 'stroke-2' : 'stroke-1'} />
                <span className="text-[10px] font-sans uppercase tracking-wide">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Layout;
