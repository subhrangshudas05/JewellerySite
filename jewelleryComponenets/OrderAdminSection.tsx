'use client';

import { useState, useEffect } from 'react';
import { User, Phone, MapPin, IndianRupee, Clock, Trash2, Edit, AlertTriangle, CheckCircle, PhoneCall } from 'lucide-react';

// Define a type for our order objects, including the MongoDB _id
interface Order {
    _id: string; // Add MongoDB ObjectId (as string) for unique identification
    title: string;
    price: number;
    category: string;
    id: string; // Product ID
    name: string;
    address: string;
    phone: string;
    message: string;
    timestamp: string; // Used as the unique key for CRUD operations via API
    status: 'Pending' | 'Confirmed' | 'Shipped' | 'Delivered' | 'Cancelled';
}

export default function OrdersContent() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
    const [dialogState, setDialogState] = useState<'update' | 'delete' | null>(null);
    const [newStatus, setNewStatus] = useState<Order['status']>('Pending');
    const [isLoading, setIsLoading] = useState(true); // State for loading orders

    // --- READ (GET) Operation ---
    const fetchOrders = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/orders');
            if (!response.ok) {
                throw new Error('Failed to fetch orders from the server.');
            }
            const data: Order[] = await response.json();
            
            // The API route already sorts by timestamp, so we just set the data
            setOrders(data);
        } catch (error) {
            console.error("Error fetching orders:", error);
            const errorMessage = (error as Error).message || 'Could not connect to the database.';
            alert(errorMessage);
            setOrders([]); // Clear orders on failure
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    // Handlers for opening dialogs (remain the same)
    const handleUpdateClick = (order: Order) => {
        setSelectedOrder(order);
        setNewStatus(order.status);
        setDialogState('update');
    };

    const handleDeleteClick = (order: Order) => {
        setSelectedOrder(order);
        setDialogState('delete');
    };

    // --- UPDATE (PATCH) Operation ---
    const handleUpdateStatus = async () => {
        if (!selectedOrder) return;
        
        try {
            const response = await fetch('/api/orders', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                // Use the unique timestamp as the key for the update
                body: JSON.stringify({ timestamp: selectedOrder.timestamp, status: newStatus }), 
            });

            if (!response.ok) {
                throw new Error('Failed to update order status.');
            }

            fetchOrders(); // Re-fetch to update UI
            setDialogState(null);
            alert(`Order ${selectedOrder.id} status updated to ${newStatus}.`);

        } catch (error) {
            console.error("Update error:", error);
            const errorMessage = (error as Error).message || 'Failed to update order status.';
            alert(errorMessage);
        }
    };

    // --- DELETE (DELETE) Operation ---
    const handleDeleteOrder = async () => {
        if (!selectedOrder) return;

        try {
            const response = await fetch('/api/orders', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                // Use the unique timestamp as the key for the delete
                body: JSON.stringify({ timestamp: selectedOrder.timestamp }), 
            });

            if (!response.ok) {
                throw new Error('Failed to delete order.');
            }

            fetchOrders(); // Re-fetch to update UI
            setDialogState(null);
            alert(`Order ${selectedOrder.id} deleted successfully.`);

        } catch (error) {
            console.error("Delete error:", error);
            const errorMessage = (error as Error).message || 'Failed to delete order.';
            alert(errorMessage);
        }
    };
    
    // Helper functions (remain the same)
    const getStatusColor = (status: Order['status']) => {
        switch (status) {
            case 'Pending': return 'bg-yellow-100 text-yellow-800';
            case 'Confirmed': return 'bg-blue-100 text-blue-800';
            case 'Shipped': return 'bg-indigo-100 text-indigo-800';
            case 'Delivered': return 'bg-green-100 text-green-800';
            case 'Cancelled': return 'bg-red-100 text-red-800';
        }
    };
    
    const getFirstName = (fullName: string) => {
        return fullName.split(' ')[0];
    };

    return (
        <>
            <div>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl text-black poppins font-bold">Orders Management</h2>
                    <span className="font-semibold text-gray-600">{orders.length} {orders.length === 1 ? 'Order' : 'Orders'}</span>
                </div>

                {/* --- Loading State Display --- */}
                {isLoading ? (
                    <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                        <p className="text-gray-500 flex items-center justify-center gap-2">
                           <svg className="animate-spin h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                           Fetching orders from database...
                        </p>
                    </div>
                ) : orders.length === 0 ? (
                    <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                        <p className="text-gray-500">No orders have been placed yet.</p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {orders.map((order) => (
                            <div key={order.timestamp} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="font-bold text-xl font-serif mb-2 text-gray-800">{order.title}</h3>
                                        <p className="text-sm text-gray-500">Order Ref: {order.timestamp.slice(-10)}</p> {/* Using timestamp slice as a ref */}
                                    </div>
                                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getStatusColor(order.status)}`}>{order.status}</span>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm text-gray-700 border-t pt-4">
                                    <p className="flex items-center gap-2"><User size={14} className="text-gray-400" /> <strong>Customer:</strong> {order.name}</p>
                                    <p className="flex items-center gap-2"><Phone size={14} className="text-gray-400" /> <strong>Phone:</strong> {order.phone}</p>
                                    <p className="flex items-center gap-2 col-span-1 md:col-span-2"><MapPin size={14} className="text-gray-400" /> <strong>Address:</strong> {order.address}</p>
                                    <p className="flex items-center gap-2"><IndianRupee size={14} className="text-gray-400" /> <strong>Amount:</strong> ₹{order.price.toLocaleString('en-IN')}</p>
                                    <p className="flex items-center gap-2"><Clock size={14} className="text-gray-400" /> <strong>Date:</strong> {new Date(order.timestamp).toLocaleString()}</p>
                                    {order.message && <p className="col-span-1 md:col-span-2 mt-2 text-gray-600 bg-gray-50 p-3 rounded-md"><strong>Message:</strong> {order.message}</p>}
                                </div>

                                <div className="mt-6 flex flex-col gap-3">
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <a href={`/jewellery/${order.category}/${order.id}`} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-gray-800 text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-black transition-colors">
                                            Check Product
                                        </a>
                                        <div className="flex-1 flex gap-3">
                                            <button onClick={() => handleUpdateClick(order)} className="w-full bg-indigo-500 text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-indigo-600 transition-colors flex items-center justify-center gap-2">
                                                <Edit size={16} /> Update
                                            </button>
                                            <button onClick={() => handleDeleteClick(order)} className="w-full bg-rose-500 text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-rose-600 transition-colors flex items-center justify-center gap-2">
                                                <Trash2 size={16} /> Delete
                                            </button>
                                        </div>
                                    </div>
                                    <a href={`tel:${order.phone}`} className="w-full bg-emerald-500 text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2">
                                        <PhoneCall size={16} /> Call {getFirstName(order.name)}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* ====== Update Status Dialog (calls handleUpdateStatus) ====== */}
            {dialogState === 'update' && selectedOrder && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setDialogState(null)}>
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-md" onClick={(e) => e.stopPropagation()}>
                        <div className="p-8 text-center">
                            <CheckCircle className="mx-auto w-16 h-16 text-emerald-500 mb-4" />
                            <h3 className="text-2xl font-bold mb-2">Update Order Status</h3>
                            <p className="text-gray-600 mb-6">Change status for order <span className="font-semibold">{selectedOrder.id}</span>.</p>
                            <div className="space-y-2 text-left">
                                {['Pending', 'Confirmed', 'Shipped', 'Delivered', 'Cancelled'].map(status => (
                                    <label key={status} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                                        <input type="radio" name="status" value={status} checked={newStatus === status} onChange={() => setNewStatus(status as Order['status'])} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500" />
                                        <span>{status}</span>
                                    </label>
                                ))}
                            </div>
                            <div className="mt-8 flex gap-4">
                                <button onClick={() => setDialogState(null)} className="flex-1 py-3 px-6 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300">Cancel</button>
                                <button onClick={handleUpdateStatus} className="flex-1 py-3 px-6 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ====== Delete Confirmation Dialog (calls handleDeleteOrder) ====== */}
            {dialogState === 'delete' && selectedOrder && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setDialogState(null)}>
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-md" onClick={(e) => e.stopPropagation()}>
                        <div className="p-8 text-center">
                            <AlertTriangle className="mx-auto w-16 h-16 text-rose-500 mb-4" />
                            <h3 className="text-2xl font-bold mb-2">Delete Order</h3>
                            <p className="text-gray-600 mb-6">Are you sure you want to delete this order? This action cannot be undone.</p>
                            <div className="mt-8 flex gap-4">
                                <button onClick={() => setDialogState(null)} className="flex-1 py-3 px-6 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300">Cancel</button>
                                <button onClick={handleDeleteOrder} className="flex-1 py-3 px-6 bg-rose-500 text-white font-semibold rounded-lg hover:bg-rose-600">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}