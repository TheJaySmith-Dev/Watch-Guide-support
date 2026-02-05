import React, { useState, useEffect, useMemo } from 'react';
import { Search, X, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { DOCS_DATA } from '../constants';
import { SearchResult } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const results: SearchResult[] = useMemo(() => {
    if (!query || query.length < 2) return [];
    
    const matches: SearchResult[] = [];
    const lowerQuery = query.toLowerCase();

    Object.values(DOCS_DATA).forEach((doc) => {
      // Check category title
      if (doc.title.toLowerCase().includes(lowerQuery)) {
        matches.push({
          title: doc.title,
          path: `/${doc.id}`,
          category: 'Page'
        });
      }

      // Check items
      doc.items.forEach((item) => {
        if (
          item.title.toLowerCase().includes(lowerQuery) || 
          (item.description && item.description.toLowerCase().includes(lowerQuery))
        ) {
          matches.push({
            title: item.title,
            path: `/${doc.id}`,
            category: doc.title
          });
        }
      });
    });

    return matches.slice(0, 8); // Limit results
  }, [query]);

  const handleNavigate = (path: string) => {
    navigate(path);
    onClose();
    setQuery('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="flex items-center border-b border-slate-100 p-4">
          <Search className="w-5 h-5 text-slate-400 mr-3" />
          <input
            autoFocus
            type="text"
            className="flex-1 outline-none text-slate-800 placeholder:text-slate-400 text-lg"
            placeholder="Search docs, guides, FAQs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button 
            onClick={onClose}
            className="p-1 hover:bg-slate-100 rounded-md transition-colors"
          >
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {query.length > 0 && results.length === 0 && (
            <div className="p-8 text-center text-slate-500">
              No results found for "{query}"
            </div>
          )}

          {query.length === 0 && (
            <div className="p-4">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Suggested</h3>
              <div className="space-y-1">
                {['Find trailers', 'Where to watch', 'Add to list', 'Seasons and episodes'].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setQuery(suggestion)}
                    className="w-full text-left px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded-md transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {results.length > 0 && (
            <div className="py-2">
              {results.map((result, idx) => (
                <button
                  key={`${result.path}-${idx}`}
                  onClick={() => handleNavigate(result.path)}
                  className="w-full flex items-center justify-between px-4 py-3 hover:bg-slate-50 border-b border-slate-50 last:border-0 transition-colors group"
                >
                  <div className="text-left">
                    <div className="text-slate-800 font-medium">{result.title}</div>
                    <div className="text-xs text-slate-400">{result.category}</div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
