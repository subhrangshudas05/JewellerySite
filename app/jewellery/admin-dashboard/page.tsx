'use client';

import { useState } from 'react';
import { ShoppingCart, Package, ChevronRight } from 'lucide-react';
import OrdersContent from '@/jewelleryComponenets/OrderAdminSection';


const ProductsContent = () => (
    <div>
        <h2 className="text-2xl text-black poppins font-bold mb-6">Products Management</h2>
        <div className=" p-6 rounded-lg shadow-md border border-gray-200">
            <p className="text-gray-700">Product management interface would go here.</p>
        </div>
    </div>
);

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState<'orders' | 'products'>('orders');

  const navItems = [
    { id: 'orders', label: 'Orders', icon: ShoppingCart },
    { id: 'products', label: 'Products', icon: Package },
  ];

  // Component for Sidebar navigation items (Desktop)
  const SidebarNavItem = ({ item }: { item: typeof navItems[0] }) => {
      const Icon = item.icon;
      const isActive = activeTab === item.id;
      return (
          <li key={item.id}>
              <a
                  href="#"
                  onClick={(e) => {
                      e.preventDefault();
                      setActiveTab(item.id as 'orders' | 'products');
                  }}
                  className={`flex items-center justify-between p-3 rounded-lg transition-colors duration-200 ${
                      isActive 
                      ? 'bg-indigo-600 text-white shadow-sm' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
              >
                  <div className="flex items-center font-serif gap-3">
                      <Icon size={20} />
                      <span className="font-semibold">{item.label}</span>
                  </div>
                  {isActive && <ChevronRight size={18} />}
              </a>
          </li>
      );
  };
  
  // Component for Bottom navigation items (Mobile)
  const BottomNavItem = ({ item }: { item: typeof navItems[0] }) => {
      const Icon = item.icon;
      const isActive = activeTab === item.id;
      return (
          <a
              href="#"
              onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(item.id as 'orders' | 'products');
              }}
              className={`flex flex-col items-center justify-center flex-1 py-2 transition-colors duration-200 ${
                  isActive ? 'text-indigo-600' : 'text-gray-500'
              }`}
          >
              <Icon size={24} className="mb-1" />
              <span className="text-xs font-semibold">{item.label}</span>
          </a>
      );
  };

  return (
    <div className="flex min-h-screen border-b border-gray-800/30  text-black font-sans">
      {/* ====== Left Sidebar (Desktop Only) ====== */}
      <aside className="hidden md:flex w-64 h-full   flex-col">
        <div className="p-6 border-b border-gray-800/30">
          <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navItems.map((item) => <SidebarNavItem key={item.id} item={item} />)}
          </ul>
        </nav>
      </aside>

      {/* ====== Main Content Area (Scrollable) ====== */}
      <main className="flex-1 min-h-screen border-l  border-gray-800/30 overflow-y-auto pb-24 md:pb-0">
        <div className="p-4 md:p-8">
            {activeTab === 'orders' && <OrdersContent />}
            {activeTab === 'products' && <ProductsContent />}
        </div>
      </main>

      {/* ====== Bottom Navigation (Mobile Only) ====== */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-amber-50 border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] flex justify-around p-1 z-30">
          {navItems.map((item) => <BottomNavItem key={item.id} item={item} />)}
      </nav>
    </div>
  );
}

