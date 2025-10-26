import connectDb from "@/db/connectDb";
import Order, { IOrder } from "@/models/orderSchema";

// Define the data shape for creating a new order
// (This is what the frontend POSTs to the API)
type NewOrderData = {
  title: string;
  price: number;
  category: string;
  id: string;
  name: string;
  address: string;
  phone: string;
  message?: string;
};

// --- CREATE ---
/**
 * Inserts a new order into the database.
 */
export async function createOrder(orderData: NewOrderData) {
  await connectDb();
  
  // Create the new order with a timestamp and default status
  const newOrder = new Order({
    ...orderData,
    timestamp: new Date().toISOString(), // Generate timestamp
    status: 'Pending' // Set default status
  });
  
  const created = await newOrder.save();
  return created;
}

// --- READ ---
/**
 * Get all orders, sorted by newest first.
 */
export async function getAllOrders() {
  await connectDb();
  // Sort by timestamp descending (newest first)
  const orders = await Order.find().sort({ timestamp: -1 });
  return orders;
}

// --- UPDATE ---
/**
 * Update booking status by its timestamp.
 * (Using timestamp as the key, as required by your admin panel)
 */
export async function updateOrderStatus(timestamp: string, status: IOrder['status']) {
  await connectDb();
  
  const updated = await Order.findOneAndUpdate(
    { timestamp: timestamp }, // Find by our unique timestamp
    { $set: { status: status } },
    { new: true } // Return the modified document
  );
  
  return updated;
}

// --- DELETE ---
/**
 * Delete booking by its timestamp.
 * (Using timestamp as the key)
 */
export async function deleteOrder(timestamp: string) {
  await connectDb();
  
  const deleted = await Order.findOneAndDelete({ timestamp: timestamp });
  return deleted;
}