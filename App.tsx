import React, { useState } from 'react';
import { SafetyProvider, useSafety } from './context/SafetyContext';
import { Dashboard } from './pages/Dashboard';
import { MapPage } from './pages/MapPage';
import { ContactsPage } from './pages/ContactsPage';
import { AssistantPage } from './pages/AssistantPage';
import { SimulationPanel } from './components/SimulationPanel';
import { Home, Map as MapIcon, Users, MessageSquare } from 'lucide-react';

const NavItem = ({ 
  icon: Icon, 
  label, 
  isActive, 
  onClick 
}: { 
  icon: React.ElementType; 
  label: string; 
  isActive: boolean; 
  onClick: () => void 
}) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center justify-center w-full py-2 transition-colors ${
      isActive ? 'text-emerald-600' : 'text-gray-400 hover:text-gray-600'
    }`}
  >
    <Icon size={24} className={isActive ? 'stroke-[2.5px]' : 'stroke-2'} />
    <span className="text-[10px] font-medium mt-1">{label}</span>
  </button>
);

const AppContent = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'map' | 'contacts' | 'chat'>('home');
  const { isSOSActive } = useSafety();

  return (
    <div className={`h-screen w-full flex flex-col overflow-hidden max-w-md mx-auto shadow-2xl bg-white ${isSOSActive ? 'ring-4 ring-red-500 ring-inset' : ''}`}>
      <SimulationPanel />
      
      <main className="flex-1 relative overflow-hidden">
        {activeTab === 'home' && <Dashboard />}
        {activeTab === 'map' && <MapPage />}
        {activeTab === 'contacts' && <ContactsPage />}
        {activeTab === 'chat' && <AssistantPage />}
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-white border-t border-gray-200 shadow-[0_-5px_10px_rgba(0,0,0,0.02)] z-50">
        <div className="flex justify-around items-center px-2 pb-safe">
          <NavItem 
            icon={Home} 
            label="Home" 
            isActive={activeTab === 'home'} 
            onClick={() => setActiveTab('home')} 
          />
          <NavItem 
            icon={MapIcon} 
            label="Map" 
            isActive={activeTab === 'map'} 
            onClick={() => setActiveTab('map')} 
          />
          <NavItem 
            icon={Users} 
            label="Contacts" 
            isActive={activeTab === 'contacts'} 
            onClick={() => setActiveTab('contacts')} 
          />
          <NavItem 
            icon={MessageSquare} 
            label="Assistant" 
            isActive={activeTab === 'chat'} 
            onClick={() => setActiveTab('chat')} 
          />
        </div>
      </nav>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center font-sans">
      <SafetyProvider>
        <AppContent />
      </SafetyProvider>
    </div>
  );
}