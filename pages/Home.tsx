import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ChevronRight, BookOpen, Users, Award } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-800 rounded-2xl shadow-xl border border-yellow-700 text-white p-8 md:p-12 text-center">
        <div className="absolute top-0 right-0 p-4 opacity-5 font-chinese text-9xl select-none pointer-events-none">武当</div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm mb-6 border border-yellow-500/30">
             <span className="font-chinese text-5xl text-yellow-500">道</span>
          </div>
          
          <h2 className="text-yellow-500 font-sans font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-2">Wudang Sanfeng Brasil</h2>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 font-serif">Bem-vindo ao Caminho</h1>
          <p className="text-slate-300 max-w-lg mx-auto mb-8 font-sans leading-relaxed">
            Este aplicativo serve como guia de apoio para seus estudos no Instituto Feng Huang. Aqui você encontrará referências de vocabulário, etiqueta e formas.
          </p>

          <a 
            href="https://wudangsanfeng.com.br/wudang/" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white font-sans text-sm font-bold py-2 px-6 rounded-full transition-all shadow-lg border border-yellow-400"
          >
            Conhecer o Instituto <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* Quick Access Menu */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link to="/numeros" className="group relative bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-yellow-500 transition-all hover:-translate-y-1">
          <div className="absolute top-4 right-4 text-slate-200 group-hover:text-yellow-100 transition-colors">
            <BookOpen size={48} />
          </div>
          <h3 className="text-xl font-bold text-wudang-blue mb-2">1. Os Números</h3>
          <p className="text-slate-500 text-sm mb-4">Aprenda a contagem de 1 a 999 e a pronúncia correta.</p>
          <span className="text-yellow-600 text-xs font-bold uppercase flex items-center gap-1 group-hover:gap-2 transition-all">
            Estudar <ChevronRight size={14} />
          </span>
        </Link>

        <Link to="/comunicacao" className="group relative bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-yellow-500 transition-all hover:-translate-y-1">
          <div className="absolute top-4 right-4 text-slate-200 group-hover:text-yellow-100 transition-colors">
            <Users size={48} />
          </div>
          <h3 className="text-xl font-bold text-wudang-blue mb-2">2. Etiqueta</h3>
          <p className="text-slate-500 text-sm mb-4">Hierarquia da família Kung Fu, saudações e permissões.</p>
          <span className="text-yellow-600 text-xs font-bold uppercase flex items-center gap-1 group-hover:gap-2 transition-all">
            Estudar <ChevronRight size={14} />
          </span>
        </Link>

        <Link to="/artemarcial" className="group relative bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-yellow-500 transition-all hover:-translate-y-1">
          <div className="absolute top-4 right-4 text-slate-200 group-hover:text-yellow-100 transition-colors">
            <Award size={48} />
          </div>
          <h3 className="text-xl font-bold text-wudang-blue mb-2">3. Formas</h3>
          <p className="text-slate-500 text-sm mb-4">Posturas fundamentais e vídeos de referência dos Tào Lù.</p>
          <span className="text-yellow-600 text-xs font-bold uppercase flex items-center gap-1 group-hover:gap-2 transition-all">
            Estudar <ChevronRight size={14} />
          </span>
        </Link>
      </div>

    </div>
  );
};

export default Home;
