import React from 'react';
import AudioButton from '../components/AudioButton';
import { playText } from '../services/speechService';
import { StanceItem } from '../types';

const MartialArts: React.FC = () => {
  const stances: StanceItem[] = [
    { name: 'Cavalo', hanzi: '马步', pinyin: 'Mǎ Bù', desc: 'Postura larga e baixa.' },
    { name: 'Arqueiro', hanzi: '弓步', pinyin: 'Gōng Bù', desc: 'Perna frente dobrada, trás esticada.' },
    { name: 'Gato / Vazio', hanzi: '虚步', pinyin: 'Xū Bù', desc: 'Peso atrás, frente leve.' },
    { name: 'Descanso', hanzi: '歇步', pinyin: 'Xiē Bù', desc: 'Pernas cruzadas, sentado baixo.' },
    { name: 'Agachada', hanzi: '仆步', pinyin: 'Pū Bù', desc: 'Uma perna esticada lateralmente.' },
    { name: 'Equilíbrio', hanzi: '独立步', pinyin: 'Dú Lì Bù', desc: 'Uma perna só elevada.' },
    { name: 'Passo T', hanzi: '丁步', pinyin: 'Dīng Bù', desc: 'Pés em formato de T.' },
    { name: 'Ajoelhado', hanzi: '跪步', pinyin: 'Guì Bù', desc: 'Joelho próximo ao chão.' },
  ];

  return (
    <div className="space-y-12 pb-10">
      <div className="text-center space-y-2 md:space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold text-wudang-blue font-serif">Formas (Tào Lù)</h2>
        <p className="text-slate-500 font-sans text-sm md:text-lg">A estrutura do corpo e o fluxo do movimento.</p>
      </div>

      {/* Ji Ben Bu Section */}
      <section className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
        <div className="bg-slate-100 p-4 md:p-8 flex items-center justify-between border-b border-slate-200">
           <div className="flex items-center gap-4">
             <div className="w-10 h-10 md:w-14 md:h-14 bg-white border-2 border-slate-300 rounded-full flex items-center justify-center font-bold text-slate-400 text-lg md:text-xl">1</div>
             <div>
                <h3 className="text-xl md:text-3xl font-bold text-wudang-blue flex items-center gap-2">
                    Ji Ben Bu <span className="font-chinese text-2xl md:text-4xl font-normal text-slate-400">基本步</span>
                </h3>
                <p className="text-xs md:text-sm text-slate-500 uppercase tracking-wider mt-1">Passos Básicos</p>
             </div>
           </div>
           <AudioButton text="基本步" size="lg" />
        </div>
        
        <div className="p-4 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stances.map((stance) => (
              <div 
                key={stance.pinyin}
                onClick={() => playText(stance.hanzi)}
                className="p-3 md:p-5 bg-slate-50 rounded-lg border border-transparent hover:border-yellow-400 hover:bg-yellow-50 cursor-pointer transition-all hover:-translate-y-1 group"
              >
                <div className="flex justify-between items-start mb-1 md:mb-2">
                  <span className="font-bold text-wudang-blue text-sm md:text-lg">{stance.pinyin}</span>
                </div>
                <div className="font-chinese text-2xl md:text-4xl text-slate-800 mb-1 md:mb-2 group-hover:text-wudang-gold transition-colors">{stance.hanzi}</div>
                <div className="text-xs md:text-sm text-slate-500 leading-tight">{stance.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ji Ben Quan Section */}
      <section className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
         <div className="bg-wudang-blue text-white p-4 md:p-6 flex items-center justify-between">
           <div className="flex items-center gap-4">
             <div className="w-8 h-8 md:w-12 md:h-12 bg-yellow-600 rounded-full flex items-center justify-center font-bold text-sm md:text-xl text-white">2</div>
             <div>
                <h3 className="font-bold text-lg md:text-2xl">Ji Ben Quan (基本拳)</h3>
             </div>
           </div>
           <AudioButton text="基本拳" className="text-white hover:text-yellow-400" size="lg" />
        </div>
        
        <div className="grid lg:grid-cols-2">
            <div className="p-6 md:p-10">
               <h4 className="font-bold text-slate-800 mb-2 md:text-lg">Conceito</h4>
               <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                  Aqui você aprende a conectar as bases (pernas) com as mãos. É a primeira vez que você "luta" contra o ar, coordenando a rotação de cintura e foco.
               </p>
               <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r">
                  <p className="text-yellow-900 text-xs md:text-sm font-bold font-sans uppercase mb-1">Dica do Mestre:</p>
                  <p className="text-yellow-800 text-xs md:text-base italic">"Mantenha a coluna reta como se um fio de seda puxasse o topo da cabeça para o céu."</p>
               </div>
            </div>
            <div className="aspect-video bg-black">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/3KR3wN7Na0s" 
                title="Ji Ben Quan" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
        </div>
      </section>

      {/* Xuan Gong Yi Lu Section */}
      <section className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
         <div className="bg-slate-800 text-white p-4 md:p-6 flex items-center justify-between">
           <div className="flex items-center gap-4">
             <div className="w-8 h-8 md:w-12 md:h-12 bg-slate-600 rounded-full flex items-center justify-center font-bold text-sm md:text-xl text-white">3</div>
             <div>
                <h3 className="font-bold text-lg md:text-2xl">Xuan Gong Yi Lu (玄功拳一路)</h3>
             </div>
           </div>
           <AudioButton text="玄功拳一路" className="text-white hover:text-yellow-400" size="lg" />
        </div>
        
        <div className="grid lg:grid-cols-2">
           <div className="aspect-video bg-black order-last lg:order-first">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/EK5Z-rbiDgA" 
                title="Xuan Gong Yi Lu" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6 md:p-10">
               <h4 className="font-bold text-slate-800 mb-2 md:text-lg">Punho Misterioso</h4>
               <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Primeira forma de "Punho Longo" (Chang Quan) do estilo. Caracteriza-se por movimentos amplos, exigindo flexibilidade, e pela introdução do Fa Jin (força explosiva) em golpes específicos. Esta forma trabalha a expansão do Qi através dos tendões.
               </p>
            </div>
        </div>
      </section>

    </div>
  );
};

export default MartialArts;