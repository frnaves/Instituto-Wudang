import React from 'react';
import AudioButton from '../components/AudioButton';
import { playText } from '../services/speechService';
import { VocabItem } from '../types';

interface CardProps {
  item: VocabItem;
  theme?: 'default' | 'red';
}

const Card: React.FC<CardProps> = ({ item, theme = 'default' }) => (
  <div 
    onClick={() => playText(item.hanzi)}
    className={`relative p-4 rounded-lg border cursor-pointer transition-all active:scale-95 group 
      ${theme === 'red' 
        ? 'bg-red-50 border-red-100 hover:bg-red-100' 
        : 'bg-white border-slate-200 hover:border-wudang-blue hover:shadow-md'}`}
  >
    <div className="flex justify-between items-start mb-2">
       {item.category && (
         <span className="text-[10px] font-bold uppercase tracking-wider text-wudang-blue bg-blue-50 px-2 py-0.5 rounded">
           {item.category}
         </span>
       )}
       <div className={`absolute top-4 right-4 ${theme === 'red' ? 'text-red-300' : 'text-slate-300'} group-hover:text-current`}>
          <AudioButton text={item.hanzi} size="sm" />
       </div>
    </div>
    
    <div className={`font-chinese text-2xl mb-1 ${theme === 'red' ? 'text-red-900' : 'text-slate-800'}`}>
      {item.hanzi}
    </div>
    <div className={`font-modern text-sm font-bold ${theme === 'red' ? 'text-red-700' : 'text-yellow-600'}`}>
      {item.pinyin}
    </div>
    <div className={`text-xs mt-1 ${theme === 'red' ? 'text-red-500' : 'text-slate-500'}`}>
      {item.pt}
    </div>
  </div>
);

const Communication: React.FC = () => {

  const hierarchy: VocabItem[] = [
    { hanzi: '师傅', pinyin: 'Shī Fu', pt: 'Mestre / Pai', category: 'Líder' },
    { hanzi: '师兄', pinyin: 'Shī Xiōng', pt: 'Irmão Mais Velho', category: 'Senior' },
    { hanzi: '师弟', pinyin: 'Shī Dì', pt: 'Irmão Mais Novo', category: 'Junior' },
  ];

  const greetings: VocabItem[] = [
    { hanzi: '早上好', pinyin: 'Zǎo shang hǎo', pt: 'Bom dia' },
    { hanzi: '下午好', pinyin: 'Xià wǔ hǎo', pt: 'Boa tarde' },
    { hanzi: '晚上好', pinyin: 'Wǎn shang hǎo', pt: 'Boa noite' },
    { hanzi: '谢谢', pinyin: 'Xiè xie', pt: 'Obrigado' },
    { hanzi: '对不起', pinyin: 'Duì bu qǐ', pt: 'Desculpa' },
    { hanzi: '再见', pinyin: 'Zài jiàn', pt: 'Adeus' },
  ];

  const permissions: VocabItem[] = [
    { hanzi: '劳驾', pinyin: 'Láo jià', pt: 'Com licença' },
    { hanzi: '我可以喝水吗', pinyin: 'Wǒ kěyǐ hē shuǐ ma?', pt: 'Posso tomar água?' },
    { hanzi: '我可以去厕所吗', pinyin: 'Wǒ kěyǐ qù cèsuǒ ma?', pt: 'Posso ir ao banheiro?' },
    { hanzi: '我不舒服', pinyin: 'Wǒ bù shū fu', pt: 'Não estou me sentindo bem' },
  ];

  return (
    <div className="space-y-10 pb-10">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-wudang-blue font-serif">Etiqueta (Wǔ Dé)</h2>
        <p className="text-slate-500 font-sans text-sm">A virtude marcial começa na comunicação.</p>
      </div>

      <section>
        <div className="flex items-center gap-3 mb-4">
           <div className="w-1 h-6 bg-wudang-blue rounded-full"></div>
           <h3 className="font-bold text-slate-700 uppercase tracking-wider text-sm">1. A Família Kung Fu</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {hierarchy.map((item) => <Card key={item.pinyin} item={item} />)}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
           <div className="w-1 h-6 bg-green-600 rounded-full"></div>
           <h3 className="font-bold text-slate-700 uppercase tracking-wider text-sm">2. Educação Diária</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {greetings.map((item) => <Card key={item.pinyin} item={item} />)}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
           <div className="w-1 h-6 bg-red-500 rounded-full"></div>
           <h3 className="font-bold text-slate-700 uppercase tracking-wider text-sm">3. Permissões e Saúde</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {permissions.map((item) => <Card key={item.pinyin} item={item} theme={item.pt.includes('bem') ? 'red' : 'default'} />)}
        </div>
      </section>
    </div>
  );
};

export default Communication;