'use client';

import { useEffect, useState } from 'react';
import { X, ShoppingBag, Gem, Scale, Layers3, PackageCheck } from 'lucide-react';
import { EarringProduct } from "@/types/earrings";
import { earringList } from '@/data/jewellery/earringProducts';


export default function EarringDetailPage() {
  const [product, setProduct] = useState<EarringProduct | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showOrderDialog, setShowOrderDialog] = useState(false);
  const [orderForm, setOrderForm] = useState({
    name: '',
    phone: '',
    address: '',
    message: ''
  });

  // 1. Add state to handle form submission loading
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const pathParts = window.location.pathname.split('/');
    const id = pathParts[pathParts.length - 1];
    if (id && earringList[id]) {
      setProduct(earringList[id]);
    }
  }, []);

  if (!product) {
    return <div className="flex items-center justify-center text-black h-screen">Loading Earring Details...</div>;
  }

  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  // 2. Update handleOrderSubmit to be async and use the API
  const handleOrderSubmit = async () => {
    // Basic validation (no change)
    if (!orderForm.name || !orderForm.phone || !orderForm.address) {
      alert('Please fill all required fields (*).');
      return;
    }
    if (!/^\d{10}$/.test(orderForm.phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }

    // Prevent double submission
    if (isSubmitting) return;
    setIsSubmitting(true);

    // Prepare data for the API (remove timestamp, which is set by the backend)
    const orderData = {
      title: product.title,
      price: product.offerPrice,
      category: product.category,
      id: window.location.pathname.split('/').pop() || 'unknown', // Product ID
      name: orderForm.name,
      address: orderForm.address,
      phone: orderForm.phone,
      message: orderForm.message,
    };

    try {
      // 3. Call the API route
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      // 4. Handle Rate Limiting (429 status)
      if (response.status === 429) {
        alert('You are submitting too quickly. Please wait 30 seconds and try again.');
        setIsSubmitting(false);
        return;
      }

      // 5. Handle other errors
      if (!response.ok) {
        throw new Error('Failed to submit order. Please check your connection and try again.');
      }

      // 6. Handle success
      setOrderForm({ name: '', phone: '', address: '', message: '' });
      setShowOrderDialog(false);
      alert('Order placed successfully! We will contact you soon.');

    } catch (error) {
      console.error('Order submission error:', error);
      
      // 7. FIX: Use a type assertion for error handling
      const errorMessage = (error as Error).message || 'An unexpected error occurred.';
      alert(errorMessage);

    } finally {
      // Re-enable the button
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <main className="max-w-7xl mx-auto p-4 md:p-8 pb-32 md:pb-24 poppins text-black">
        {/* The rest of your page layout remains the same... */}
        <div className="flex flex-col items-center">
        
          <div className="w-full max-w-6xl">
            <div className="hidden md:flex flex-col mx-auto max-w-2xl mt-8 md:mt-12 mb-8 text-center">
              <h1 className="text-2xl md:text-5xl font-serif mb-3">{product.title}</h1>
              <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="text-3xl md:text-4xl font-bold">₹{product.offerPrice.toLocaleString('en-IN')}</span>
                  <span className="text-xl text-gray-400 line-through">₹{product.price.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="hidden md:flex flex-col gap-4 items-center">
                <div className="flex gap-4 w-full max-w-4xl">
                    {product.images.slice(0, 2).map((img, idx) => (
                        <div key={idx} className="aspect-square relative flex-1 cursor-pointer group rounded-xl overflow-hidden" onClick={() => setSelectedImage(img)}>
                            <img src={img} alt={`${product.title} image ${idx + 1}`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-120" />
                        </div>
                    ))}
                </div>
                <div className="flex gap-4 w-full max-w-2xl justify-center">
                    {product.images.slice(2, 3).map((img, idx) => (
                        <div key={idx} className="aspect-square relative w-2/3 cursor-pointer group rounded-xl overflow-hidden" onClick={() => setSelectedImage(img)}>
                            <img src={img} alt={`${product.title} image ${idx + 3}`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-120" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="md:hidden mb-6">
              <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide rounded-lg">
                {product.images.map((img, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 snap-center" onClick={() => setSelectedImage(img)}>
                    <div className="aspect-square relative w-full">
                      <img src={img} alt={`${product.title} image ${idx + 1}`} className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full max-w-2xl mt-8 md:mt-12 text-center">
            <div className="block md:hidden">
              <h1 className="text-2xl md:text-4xl font-serif mb-3">{product.title}</h1>
              <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="text-3xl md:text-4xl font-bold">₹{product.offerPrice.toLocaleString('en-IN')}</span>
                  <span className="text-xl text-gray-400 line-through">₹{product.price.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="flex justify-center gap-6 md:gap-8 border-y border-gray-800 py-4 mb-8">
              <div className="flex items-center gap-2 text-gray-700">
                <Gem className="w-5 h-5 text-amber-600" />
                <span className="font-medium">{product.karat}K Gold</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Scale className="w-5 h-5 text-amber-600" />
                <span className="font-medium">{product.weightInGrams} g</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Layers3 className="w-5 h-5 text-amber-600" />
                <span className="font-medium">{capitalize(product.type)}</span>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Jewellery Details</h2>
              <div className="border border-gray-800 rounded-lg p-4 text-left">
                  <div className="space-y-3">
                      <div className="flex justify-between text-gray-800">
                        <span className="text-gray-500">Karat</span>
                        <span className="font-medium">{product.karat}K</span>
                      </div>
                      <div className="flex justify-between text-gray-800">
                        <span className="text-gray-500">Gross Weight</span>
                        <span className="font-medium">{product.weightInGrams} g</span>
                      </div>
                      <div className="flex justify-between text-gray-800">
                        <span className="text-gray-500">Type</span>
                        <span className="font-medium">{capitalize(product.type)}</span>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="poppins fixed bottom-0 left-0 text-black z-999 right-0 bg-amber-50 shadow-[0_-2px_10px_rgba(0,0,0,0.1)] p-3 ">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="hidden md:flex items-center gap-6">
                  <div className="text-xl font-bold">₹{product.offerPrice.toLocaleString('en-IN')}</div>
                  <div className="text-sm">Type: <span className="font-semibold">{capitalize(product.type)}</span></div>
                  <div className="text-sm">Weight: <span className="font-semibold">{product.weightInGrams} g</span></div>
              </div>
              <div className="md:hidden flex-1">
                  <span className="text-xl font-bold">₹{product.offerPrice.toLocaleString('en-IN')}</span>
              </div>
              {/* === ACTION BUTTONS === */}
              <div className="flex gap-2">
                  <button 
                    onClick={() => setShowOrderDialog(true)}
                    className="bg-orange-500 text-white font-bold py-3 px-4 md:px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors"
                  >
                    <PackageCheck size={20} />
                    <span className="hidden sm:inline">Order Now</span>
                  </button>
                  <button className="bg-red-800 text-white font-bold py-3 px-4 md:px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-red-900 transition-colors">
                    <ShoppingBag size={20} />
                    <span className="hidden sm:inline">Add to Cart</span>
                  </button>
              </div>
          </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-[1000] flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-4 right-4 text-white z-50 hover:opacity-80 transition-opacity" onClick={() => setSelectedImage(null)}>
            <X size={32} />
          </button>
          <div className="relative w-full h-full max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Enlarged product view" className="w-full h-full object-contain" />
          </div>
        </div>
      )}

      {/* ====== Order Now Dialog/Modal ====== */}
      {showOrderDialog && (
        <div className="fixed inset-0 font-serif text-black bg-black/50 backdrop-blur-sm z-[2000] flex items-center justify-center p-4" onClick={() => setShowOrderDialog(false)}>
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
                <p className="text-2xl font-bold text-orange-600 mt-2">₹{product.offerPrice.toLocaleString('en-IN')}</p>
              </div>
              <form className="space-y-4 poppins" onSubmit={(e) => { e.preventDefault(); handleOrderSubmit(); }}>
                <input
                  type="text"
                  placeholder="Full Name *"
                  value={orderForm.name}
                  onChange={(e) => setOrderForm({...orderForm, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  value={orderForm.phone}
                  onChange={(e) => setOrderForm({...orderForm, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
                <textarea
                  placeholder="Delivery Address *"
                  rows={3}
                  value={orderForm.address}
                  onChange={(e) => setOrderForm({...orderForm, address: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                  required
                />
                <textarea
                  placeholder="Additional Message (Optional)"
                  rows={2}
                  value={orderForm.message}
                  onChange={(e) => setOrderForm({...orderForm, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting} // Use the new state
                >
                  {isSubmitting ? 'Placing Order...' : 'Book Now'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}