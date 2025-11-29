import React, { useState, useEffect } from 'react';
import AudioButton from '../components/AudioButton';
import { playText } from '../services/speechService';

const Numbers: React.FC = () => {
  const [hundreds, setHundreds] = useState(0);
  const [tens, setTens] = useState(0);
  const [units, setUnits] = useState(0);
  const [result, setResult] = useState({ hanzi: '零', pinyin: 'Líng' });

  const simpleNumbers = [
    { val: 1, hanzi: '一', pinyin: 'Yī' }, { val: 2, hanzi: '二', pinyin: 'Èr' },
    { val: 3, hanzi: '三', pinyin: 'Sān' }, { val: 4, hanzi: '四', pinyin: 'Sì' },
    { val: 5, hanzi: '五', pinyin: 'Wǔ' }, { val: 6, hanzi: '六', pinyin: 'Liù' },
    { val: 7, hanzi: '七', pinyin: 'Qī' }, { val: 8, hanzi: '八', pinyin: 'Bā' },
    { val: 9, hanzi: '九', pinyin: 'Jiǔ' }, { val: 10, hanzi: '十', pinyin: 'Shí' }
  ];

  const mapNumbers: Record<number, { hanzi: string, pinyin: string }> = { 
    0: { hanzi: '', pinyin: '' }, 1: { hanzi: '一', pinyin: 'Yī' }, 
    2: { hanzi: '二', pinyin: 'Èr' }, 3: { hanzi: '三', pinyin: 'Sān' }, 
    4: { hanzi: '四', pinyin: 'Sì' }, 5: { hanzi: '五', pinyin: 'Wǔ' }, 
    6: { hanzi: '六', pinyin: 'Liù' }, 7: { hanzi: '七', pinyin: 'Qī' }, 
    8: { hanzi: '八', pinyin: 'Bā' }, 9: { hanzi: '九', pinyin: 'Jiǔ' }, 
    10: { hanzi: '十', pinyin: 'Shí' } 
  };

  useEffect(() => {
    let hanzi = '';
    let pinyin = '';

    if (hundreds === 0 && tens === 0 && units === 0) {
      hanzi = '零';
      pinyin = 'Líng';
    } else {
      // Hundreds
      if (hundreds > 0) {
        hanzi += mapNumbers[hundreds].hanzi + '百';
        pinyin += mapNumbers[hundreds].pinyin + ' Bǎi';
        // Handle "105" case -> Yi Bai Ling Wu
        if (tens === 0 && units > 0) {
          hanzi += '零';
          pinyin += ' Líng';
        }
      }

      // Tens
      if (tens > 0) {
        if (hundreds > 0) pinyin += ' ';
        
        // Special case: 10-19.
        // If standalone (no hundreds), 10-19 is "Shi [Unit]"
        // If combined (with hundreds), 110-119 is "... Yi Shi [Unit]"
        if (hundreds > 0 && tens === 1) {
            hanzi += '一十';
            pinyin += 'Yī Shí';
        } else if (tens === 1 && hundreds === 0) {
            hanzi += '十';
            pinyin += 'Shí';
        } else {
            hanzi += mapNumbers[tens].hanzi + '十';
            pinyin += mapNumbers[tens].pinyin + ' Shí';
        }
      }

      // Units
      if (units > 0) {
        if (hundreds > 0 || tens > 0) pinyin += ' ';
        hanzi += mapNumbers[units].hanzi;
        pinyin += mapNumbers[units].pinyin;
      }
    }

    setResult({ hanzi, pinyin });
  }, [hundreds, tens, units]);

  return (
    <div className="space-y-8 pb-10">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-wudang-blue font-serif">Os Números (Shùzì)</h2>
        <p className="text-slate-500 font-sans text-sm">Toque nos cartões para ouvir a pronúncia.</p>
      </div>

      {/* Grid 1-10 */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {simpleNumbers.map((num) => (
          <button
            key={num.val}
            onClick={() => playText(num.hanzi)}
            className="group relative bg-white p-4 rounded-xl shadow-sm border border-slate-200 hover:border-yellow-600 hover:-translate-y-1 transition-all duration-300"
          >
             <div className="absolute top-2 right-2 opacity-20 group-hover:opacity-100 transition-opacity text-yellow-600">
                <AudioButton text={num.hanzi} size="sm" />
             </div>
            <div className="font-chinese text-4xl text-slate-800 group-hover:text-wudang-blue transition-colors mb-2">{num.hanzi}</div>
            <div className="text-yellow-600 font-bold font-modern">{num.pinyin}</div>
            <div className="mt-2 pt-2 border-t border-slate-100 text-xs text-slate-400 font-bold">{num.val}</div>
          </button>
        ))}
      </div>

      {/* Builder */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 shadow-xl border border-slate-700 relative overflow-hidden">
        <div className="absolute -right-8 -bottom-8 text-[10rem] opacity-5 font-chinese pointer-events-none">数</div>
        
        <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
          <div>
            <h3 className="text-xl font-bold text-yellow-500 mb-2">Calculadora de Pronúncia</h3>
            <p className="text-slate-300 font-sans text-sm mb-4">
              Monte números de 0 a 999 para entender a lógica de construção.
            </p>
            <div className="bg-slate-800/50 p-4 rounded-lg font-sans text-xs text-slate-400 space-y-2">
              <p>1. Selecione as Centenas, Dezenas e Unidades.</p>
              <p>2. Observe como o caractere muda (ex: o uso de "Líng" para zero).</p>
            </div>
          </div>

          <div className="bg-white text-slate-900 rounded-xl p-6 shadow-lg">
             <div 
               onClick={() => playText(result.hanzi)}
               className="bg-slate-50 h-32 mb-6 rounded-lg flex flex-col items-center justify-center border-2 border-slate-200 cursor-pointer hover:bg-slate-100 hover:border-yellow-400 transition-all group"
             >
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-chinese text-4xl md:text-5xl text-wudang-blue">{result.hanzi}</span>
                </div>
                <span className="text-lg font-bold text-yellow-600 font-modern group-hover:scale-105 transition-transform">{result.pinyin}</span>
                <span className="text-xs text-slate-400 mt-2 flex items-center gap-1"><AudioButton text={result.hanzi} size="sm" /> Toque para ouvir</span>
            </div>

            <div className="grid grid-cols-3 gap-2 font-sans">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Centena</label>
                <select 
                  value={hundreds}
                  onChange={(e) => setHundreds(parseInt(e.target.value))}
                  className="w-full p-2 border rounded bg-slate-50 text-sm focus:border-wudang-blue outline-none"
                >
                  {[0,1,2,3,4,5,6,7,8,9].map(n => <option key={n} value={n}>{n}00</option>)}
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Dezena</label>
                <select 
                  value={tens}
                  onChange={(e) => setTens(parseInt(e.target.value))}
                  className="w-full p-2 border rounded bg-slate-50 text-sm focus:border-wudang-blue outline-none"
                >
                  {[0,1,2,3,4,5,6,7,8,9].map(n => <option key={n} value={n}>{n}0</option>)}
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Unidade</label>
                <select 
                  value={units}
                  onChange={(e) => setUnits(parseInt(e.target.value))}
                  className="w-full p-2 border rounded bg-slate-50 text-sm focus:border-wudang-blue outline-none"
                >
                  {[0,1,2,3,4,5,6,7,8,9].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
