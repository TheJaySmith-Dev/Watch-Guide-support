import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { DOCS_DATA } from '../constants';
import { ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';

const DocPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  
  // Accordion state for FAQs
  const [openItems, setOpenItems] = React.useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  if (!category || !DOCS_DATA[category]) {
    return <Navigate to="/" replace />;
  }

  const doc = DOCS_DATA[category];

  return (
    <div className="bg-white pb-20">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200 py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{doc.title}</h1>
          <p className="text-xl text-slate-600 leading-relaxed">{doc.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl py-12">
        
        {/* Render Type: Grid (Features) */}
        {doc.type === 'grid' && (
          <div className="grid md:grid-cols-2 gap-6">
            {doc.items.map((item) => (
              <div key={item.id} className="border border-slate-200 rounded-xl p-6 hover:border-blue-200 hover:shadow-sm transition-all">
                {item.icon && <item.icon className="w-8 h-8 text-blue-600 mb-4" />}
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 mb-4">{item.content}</p>
              </div>
            ))}
          </div>
        )}

        {/* Render Type: FAQ */}
        {doc.type === 'faq' && (
          <div className="space-y-4">
            {doc.items.map((item) => {
              const isOpen = openItems.includes(item.id);
              return (
                <div key={item.id} className="border border-slate-200 rounded-lg overflow-hidden">
                  <button 
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-center justify-between p-6 bg-white hover:bg-slate-50 transition-colors text-left"
                  >
                    <span className="font-semibold text-slate-900 text-lg">{item.title}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                  </button>
                  {isOpen && (
                    <div className="p-6 pt-0 bg-white text-slate-600 leading-relaxed border-t border-slate-100">
                      <div className="mt-4">{item.content}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Render Type: List/Article/Steps */}
        {(doc.type === 'article' || doc.type === 'list') && (
          <div className="space-y-12">
            {doc.items.map((item) => (
              <div key={item.id} id={item.id} className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h2>
                
                {item.description && (
                  <p className="text-lg text-slate-700 mb-4">{item.description}</p>
                )}

                {item.image && (
                  <div className="mb-8 rounded-xl overflow-hidden bg-slate-50 border border-slate-100 p-4">
                     <img 
                       src={item.image} 
                       alt={item.title} 
                       className="max-h-[500px] w-auto mx-auto object-contain rounded-lg shadow-sm" 
                     />
                     <div className="mt-4 text-xs text-center text-slate-500 font-medium">Visual guide for {item.title}</div>
                  </div>
                )}

                {item.content && Array.isArray(item.content) ? (
                  item.content.map((para, i) => (
                    <p key={i} className="text-slate-600 leading-relaxed mb-4">{para}</p>
                  ))
                ) : (
                  item.content && <p className="text-slate-600 leading-relaxed mb-4">{item.content}</p>
                )}

                {item.steps && (
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                    <h4 className="font-semibold text-slate-900 mb-4 uppercase text-xs tracking-wider">Instructions</h4>
                    <ol className="space-y-4">
                      {item.steps.map((step, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-xs font-bold mt-0.5 mr-3">
                            {idx + 1}
                          </span>
                          <span className="text-slate-700">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Helpful footer for docs */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-start gap-3">
             <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
             <div>
               <h4 className="font-semibold text-blue-900 text-sm">Still need help?</h4>
               <p className="text-blue-700 text-sm mt-1">If you couldn't find the answer above, please visit our <a href="#/contact" className="underline hover:text-blue-900">Contact page</a> to reach our support team.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocPage;