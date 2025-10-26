import mongoose, { Document, Schema, Model } from 'mongoose';

// 1. Define the TypeScript interface for the Mongoose Document
export interface IOrder extends Document {
  title: string;
  price: number;
  category: string;
  id: string; // This is the Product ID
  name: string;
  address: string;
  phone: string;
  message?: string; // Message is optional
  timestamp: string; // We'll make this unique and required for CRUD operations
  status: 'Pending' | 'Confirmed' | 'Shipped' | 'Delivered' | 'Cancelled';
}

// 2. Define the Mongoose Schema
const OrderSchema: Schema<IOrder> = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  id: { type: String, required: true }, // Product ID
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String }, // Optional, no 'required: true'
  
  // This is the key for your admin panel's UPDATE and DELETE logic
  timestamp: { type: String, required: true, unique: true }, 
  
  status: {
    type: String,
    enum: ['Pending', 'Confirmed', 'Shipped', 'Delivered', 'Cancelled'],
    default: 'Pending',
  },
});

// 3. Create and export the Model
// This prevents Mongoose from recompiling the model if it already exists
const Order: Model<IOrder> = mongoose.models.Order || mongoose.model<IOrder>('Order', OrderSchema);

export default Order;