import React, { useState } from 'react';
import { NavLink as RouterNavLink, useLocation, Outlet, Link } from 'react-router-dom';
import { Menu, X, Search, Clapperboard, ChevronRight } from 'lucide-react';
import { NAV_LINKS, FOOTER_LINKS } from '../constants';
import SearchModal from './SearchModal';

const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  // Breadcrumbs generation
  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  const formattedSegment = (segment: string) => {
    return segment.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-slate-900">
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Header */}
      <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-blue-600 text-white p-1.5 rounded-lg group-hover:bg-blue-700 transition-colors">
              <Clapperboard className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg tracking-tight">WatchGuide Support</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <RouterNavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'
                  }`
                }
              >
                {link.label}
              </RouterNavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center space-x-2 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-md text-slate-500 transition-colors"
            >
              <Search className="w-4 h-4" />
              <span className="text-sm hidden sm:inline">Search...</span>
              <kbd className="hidden lg:inline-block pointer-events-none h-5 select-none items-center gap-1 rounded border border-slate-300 bg-slate-50 px-1.5 font-mono text-[10px] font-medium text-slate-500 opacity-100">
                <span className="text-xs">⌘</span>K
              </kbd>
            </button>
            <button
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <RouterNavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg text-base font-medium ${
                      isActive ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'
                    }`
                  }
                >
                  {link.label}
                </RouterNavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Breadcrumbs */}
      {location.pathname !== '/' && (
        <div className="bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-4 md:px-6 py-3">
            <div className="flex items-center text-sm text-slate-500">
              <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
              {pathSegments.map((segment, index) => {
                 const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
                 return (
                   <React.Fragment key={path}>
                     <ChevronRight className="w-4 h-4 mx-2 text-slate-400" />
                     <Link to={path} className="hover:text-blue-600 transition-colors font-medium text-slate-700">
                       {formattedSegment(segment)}
                     </Link>
                   </React.Fragment>
                 );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-white text-slate-900 p-1 rounded-md">
                  <Clapperboard className="w-5 h-5" />
                </div>
                <span className="font-bold text-white text-lg">WatchGuide</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Your ultimate companion for discovering and tracking movies and TV shows on iOS.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                {NAV_LINKS.slice(1, 5).map(link => (
                  <li key={link.path}><Link to={link.path} className="hover:text-white transition-colors">{link.label}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                 {FOOTER_LINKS.map(link => (
                  <li key={link.path}><Link to={link.path} className="hover:text-white transition-colors">{link.label}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <p className="text-sm mb-2">Need direct help?</p>
              <a href="mailto:support@watchguide.app" className="text-blue-400 hover:text-blue-300 text-sm font-medium">support@watchguide.app</a>
              <p className="text-xs text-slate-500 mt-2">Response time: ~24 hours</p>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
            &copy; {new Date().getFullYear()} WatchGuide. All rights reserved. Data provided by TMDb and OMDb.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
