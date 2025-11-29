import React from 'react';
import AudioButton from '../components/AudioButton';
import { playText } from '../services/speechService';
import { VocabItem } from '../types';
import { User, Book, ArrowRight, Handshake } from 'lucide-react';

interface CardProps {
  item: VocabItem;
  theme?: 'default' | 'red' | 'blue' | 'gold' | 'green';
  mini?: boolean;
}

const Card: React.FC<CardProps> = ({ item, theme = 'default', mini = false }) => {
  const getColors = () => {
    switch(theme) {
      case 'red': return 'bg-red-50 border-red-100 hover:bg-red-100 text-red-900';
      case 'blue': return 'bg-blue-50 border-blue-100 hover:bg-blue-100 text-blue-900';
      case 'gold': return 'bg-yellow-50 border-yellow-100 hover:bg-yellow-100 text-yellow-900';
      case 'green': return 'bg-emerald-50 border-emerald-100 hover:bg-emerald-100 text-emerald-900';
      default: return 'bg-white border-slate-200 hover:border-wudang-blue hover:shadow-md text-slate-800';
    }
  };

  const colors = getColors();

  return (
    <div 
      onClick={() => playText(item.hanzi)}
      className={`relative rounded-lg border cursor-pointer transition-all active:scale-95 group ${colors} p-3`}
    >
      <div className="flex justify-between items-start mb-1">
         {item.category && (
           <span className="text-[9px] font-bold uppercase tracking-wider opacity-60 truncate pr-4">
             {item.category}
           </span>
         )}
         <div className={`absolute top-2 right-2 opacity-30 group-hover:opacity-100`}>
            <AudioButton text={item.hanzi} size="sm" />
         </div>
      </div>
      
      <div className="flex items-baseline gap-2 flex-wrap">
        <span className="font-chinese text-2xl leading-none">
            {item.hanzi}
        </span>
        <span className="font-modern font-bold text-xs opacity-80">
            {item.pinyin}
        </span>
      </div>
      
      <div className="mt-1 text-[11px] opacity-70 leading-tight font-medium">
        {item.pt}
      </div>
    </div>
  );
};

// Componente para quebrar frases
const SentenceBuilder: React.FC<{ 
  hanzi: string, 
  pinyin: string, 
  pt: string, 
  breakdown: {hanzi: string, pinyin: string, pt: string, type: string}[] 
}> = ({ hanzi, pinyin, pt, breakdown }) => (
  <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-4">
    {/* Cabeçalho da Frase */}
    <div className="p-3 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
      <div>
        <h4 className="font-bold text-slate-800 text-sm md:text-base">{pt}</h4>
        <p className="text-yellow-600 font-bold font-modern text-xs">{pinyin}</p>
      </div>
      <AudioButton text={hanzi} size="sm" />
    </div>
    
    {/* Blocos da Frase - Flex Wrap ao invés de Scroll */}
    <div className="p-3">
      <div className="flex flex-wrap gap-2 justify-start items-start">
        {breakdown.map((block, idx) => (
          <div key={idx} className="flex flex-col items-center group">
             {/* Tipo Gramatical */}
             <span className="text-[8px] uppercase font-bold text-slate-400 mb-1 tracking-wider">{block.type}</span>
             
             {/* Bloco Visual */}
             <div 
                onClick={() => playText(block.hanzi)}
                className="bg-slate-800 text-white py-2 px-3 rounded-md min-w-[50px] text-center cursor-pointer hover:bg-wudang-gold transition-colors shadow-sm"
             >
                <div className="text-[10px] text-yellow-400/80 mb-0.5 font-modern leading-none">{block.pinyin}</div>
                <div className="text-lg font-chinese leading-tight">{block.hanzi}</div>
             </div>
             
             {/* Tradução */}
             <span className="text-[9px] font-bold text-wudang-blue mt-1 text-center max-w-[60px] leading-tight group-hover:text-wudang-gold transition-colors">{block.pt}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Communication: React.FC = () => {

  const pronouns: VocabItem[] = [
    { hanzi: '我', pinyin: 'Wǒ', pt: 'Eu', category: '1ª Pessoa' },
    { hanzi: '你', pinyin: 'Nǐ', pt: 'Você', category: '2ª Pessoa' },
    { hanzi: '您', pinyin: 'Nín', pt: 'O Senhor(a)', category: 'Respeito' },
    { hanzi: '他', pinyin: 'Tā', pt: 'Ele', category: '3ª Pessoa' },
    { hanzi: '她', pinyin: 'Tā', pt: 'Ela', category: '3ª Pessoa' },
    { hanzi: '我们', pinyin: 'Wǒ men', pt: 'Nós', category: 'Plural' },
    { hanzi: '你们', pinyin: 'Nǐ men', pt: 'Vocês', category: 'Plural' },
    { hanzi: '他们', pinyin: 'Tā men', pt: 'Eles', category: 'Plural' },
    { hanzi: '大家', pinyin: 'Dà jiā', pt: 'Pessoal', category: 'Coletivo' },
    { hanzi: '自己', pinyin: 'Zì jǐ', pt: 'Si mesmo', category: 'Reflexivo' },
  ];

  const nouns: VocabItem[] = [
    // Kung Fu Family
    { hanzi: '师傅', pinyin: 'Shī Fu', pt: 'Mestre / Pai', category: 'Hierarquia' },
    { hanzi: '师兄', pinyin: 'Shī Xiōng', pt: 'Irmão Senior', category: 'Hierarquia' },
    { hanzi: '师姐', pinyin: 'Shī Jiě', pt: 'Irmã Senior', category: 'Hierarquia' },
    { hanzi: '师弟', pinyin: 'Shī Dì', pt: 'Irmão Junior', category: 'Hierarquia' },
    { hanzi: '道馆', pinyin: 'Dào Guǎn', pt: 'Templo / Escola', category: 'Lugar' },
    { hanzi: '套路', pinyin: 'Tào Lù', pt: 'Forma', category: 'Treino' },
    // General
    { hanzi: '水', pinyin: 'Shuǐ', pt: 'Água', category: 'Objeto' },
    { hanzi: '茶', pinyin: 'Chá', pt: 'Chá', category: 'Objeto' },
    { hanzi: '厕所', pinyin: 'Cè suǒ', pt: 'Banheiro', category: 'Lugar' },
    { hanzi: '家', pinyin: 'Jiā', pt: 'Casa', category: 'Lugar' },
    { hanzi: '朋友', pinyin: 'Péng yǒu', pt: 'Amigo', category: 'Pessoa' },
    { hanzi: '功夫', pinyin: 'Gōng fu', pt: 'Kung Fu', category: 'Conceito' },
  ];

  const greetings: VocabItem[] = [
    { hanzi: '你好', pinyin: 'Nǐ hǎo', pt: 'Olá', category: 'Saudação' },
    { hanzi: '早上好', pinyin: 'Zǎo shang hǎo', pt: 'Bom dia', category: 'Saudação' },
    { hanzi: '下午好', pinyin: 'Xià wǔ hǎo', pt: 'Boa tarde', category: 'Saudação' },
    { hanzi: '晚上好', pinyin: 'Wǎn shang hǎo', pt: 'Boa noite', category: 'Saudação' },
    { hanzi: '再见', pinyin: 'Zài jiàn', pt: 'Adeus', category: 'Despedida' },
    { hanzi: '谢谢', pinyin: 'Xiè xie', pt: 'Obrigado', category: 'Gratidão' },
    { hanzi: '不客气', pinyin: 'Bù kè qì', pt: 'De nada', category: 'Gratidão' },
    { hanzi: '对不起', pinyin: 'Duì bu qǐ', pt: 'Desculpe', category: 'Desculpa' },
    { hanzi: '没关系', pinyin: 'Méi guān xi', pt: 'Tudo bem', category: 'Desculpa' },
    { hanzi: '请', pinyin: 'Qǐng', pt: 'Por favor', category: 'Educação' },
  ];

  const sentences = [
    {
      pt: "Posso tomar água?",
      pinyin: "Wǒ kěyǐ hē shuǐ ma?",
      hanzi: "我可以喝水吗",
      breakdown: [
        { hanzi: '我', pinyin: 'Wǒ', pt: 'Eu', type: 'Pronome' },
        { hanzi: '可以', pinyin: 'Kěyǐ', pt: 'Poder', type: 'Auxiliar' },
        { hanzi: '喝', pinyin: 'Hē', pt: 'Beber', type: 'Verbo' },
        { hanzi: '水', pinyin: 'Shuǐ', pt: 'Água', type: 'Subst.' },
        { hanzi: '吗', pinyin: 'Ma', pt: '?', type: 'Part.' },
      ]
    },
    {
      pt: "Posso ir ao banheiro?",
      pinyin: "Wǒ kěyǐ qù cèsuǒ ma?",
      hanzi: "我可以去厕所吗",
      breakdown: [
        { hanzi: '我', pinyin: 'Wǒ', pt: 'Eu', type: 'Pronome' },
        { hanzi: '可以', pinyin: 'Kěyǐ', pt: 'Poder', type: 'Auxiliar' },
        { hanzi: '去', pinyin: 'Qù', pt: 'Ir', type: 'Verbo' },
        { hanzi: '厕所', pinyin: 'Cèsuǒ', pt: 'Banheiro', type: 'Lugar' },
        { hanzi: '吗', pinyin: 'Ma', pt: '?', type: 'Part.' },
      ]
    },
    {
      pt: "Não estou me sentindo bem",
      pinyin: "Wǒ bù shū fu",
      hanzi: "我不舒服",
      breakdown: [
        { hanzi: '我', pinyin: 'Wǒ', pt: 'Eu', type: 'Pronome' },
        { hanzi: '不', pinyin: 'Bù', pt: 'Não', type: 'Negação' },
        { hanzi: '舒服', pinyin: 'Shūfu', pt: 'Confortável', type: 'Adjetivo' },
      ]
    }
  ];

  return (
    <div className="space-y-8 pb-10">
      <div className="text-center space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold text-wudang-blue font-serif">Comunicação</h2>
        <p className="text-slate-500 font-sans text-xs md:text-sm">Vocabulário essencial e etiqueta do guerreiro.</p>
      </div>

      {/* 1. PRONOMES */}
      <section>
        <div className="flex items-center gap-2 mb-4">
           <div className="bg-wudang-blue p-1.5 rounded text-white"><User size={16} /></div>
           <h3 className="font-bold text-wudang-blue uppercase tracking-wider text-xs md:text-sm">1. Pronomes (Dàicí)</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {pronouns.map((item) => <Card key={item.pinyin} item={item} theme="blue" />)}
        </div>
      </section>

      {/* 2. SUBSTANTIVOS */}
      <section>
        <div className="flex items-center gap-2 mb-4">
           <div className="bg-wudang-gold p-1.5 rounded text-white"><Book size={16} /></div>
           <h3 className="font-bold text-wudang-gold uppercase tracking-wider text-xs md:text-sm">2. Vocabulário do Dojo</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {nouns.map((item) => <Card key={item.pinyin} item={item} theme="gold" />)}
        </div>
      </section>

      {/* 3. ESTRUTURA DE FRASES */}
      <section>
        <div className="flex items-center gap-2 mb-4">
           <div className="bg-slate-700 p-1.5 rounded text-white"><ArrowRight size={16} /></div>
           <h3 className="font-bold text-slate-700 uppercase tracking-wider text-xs md:text-sm">3. Frases Úteis</h3>
        </div>
        
        <div>
          {sentences.map((s, i) => (
            <SentenceBuilder key={i} {...s} />
          ))}
        </div>
      </section>

      {/* 4. CUMPRIMENTOS */}
      <section>
        <div className="flex items-center gap-2 mb-4">
           <div className="bg-emerald-600 p-1.5 rounded text-white"><Handshake size={16} /></div>
           <h3 className="font-bold text-emerald-700 uppercase tracking-wider text-xs md:text-sm">4. Cumprimentos</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {greetings.map((item) => <Card key={item.pinyin} item={item} theme="green" />)}
        </div>
      </section>

    </div>
  );
};

export default Communication;