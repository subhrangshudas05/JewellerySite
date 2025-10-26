import { NextResponse } from 'next/server';
import { 
  createOrder, 
  getAllOrders, 
  updateOrderStatus, 
  deleteOrder 
} from '@/db/orderService'; // Import from our new service file

// --- Rate Limiter Setup (for POST only) ---
const lastRequestTime = new Map<string, number>();
// 2 requests per minute = 1 request every 30 seconds
const RATE_LIMIT_MS = 30000; 

function checkRateLimit(ip: string | null): boolean {
    if (!ip) return false; 
    const now = Date.now();
    const lastTime = lastRequestTime.get(ip) || 0;
    
    if (now - lastTime < RATE_LIMIT_MS) {
        return false; // Rate limit exceeded
    }
    lastRequestTime.set(ip, now);
    return true; // OK
}

// --- CREATE (POST) ---
export async function POST(request: Request) {
  // 1. Apply Rate Limiting
  const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
  if (!checkRateLimit(ip)) {
      return NextResponse.json(
          { success: false, message: 'Rate limit exceeded. Try again in 30 seconds.' },
          { status: 429 }
      );
  }

  try {
    // 2. Call the service function
    const body = await request.json();
    const newOrder = await createOrder(body);
    
    return NextResponse.json(newOrder, { status: 201 });

  } catch (error) {
    console.error('API Error (POST):', error);
    return NextResponse.json({ success: false, message: 'Failed to create order.' }, { status: 500 });
  }
}

// --- READ (GET) ---
export async function GET() {
  try {
    // 1. Call the service function
    const orders = await getAllOrders();
    return NextResponse.json(orders);

  } catch (error) {
    console.error('API Error (GET):', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch orders.' }, { status: 500 });
  }
}

// --- UPDATE (PATCH) ---
export async function PATCH(request: Request) {
  try {
    const { timestamp, status } = await request.json();

    if (!timestamp || !status) {
      return NextResponse.json({ success: false, message: 'Missing timestamp or status.' }, { status: 400 });
    }

    // 1. Call the service function
    const updatedOrder = await updateOrderStatus(timestamp, status);

    if (!updatedOrder) {
      return NextResponse.json({ success: false, message: 'Order not found.' }, { status: 404 });
    }
    
    return NextResponse.json(updatedOrder);

  } catch (error) {
    console.error('API Error (PATCH):', error);
    return NextResponse.json({ success: false, message: 'Failed to update order status.' }, { status: 500 });
  }
}

// --- DELETE (DELETE) ---
export async function DELETE(request:Request) {
  try {
    const { timestamp } = await request.json();

    if (!timestamp) {
      return NextResponse.json({ success: false, message: 'Missing timestamp.' }, { status: 400 });
    }

    // 1. Call the service function
    const deletedOrder = await deleteOrder(timestamp);

    if (!deletedOrder) {
      return NextResponse.json({ success: false, message: 'Order not found.' }, { status: 404 });
    }
    
    return NextResponse.json(deletedOrder);

  } catch (error) {
    console.error('API Error (DELETE):', error);
    return NextResponse.json({ success: false, message: 'Failed to delete order.' }, { status: 500 });
  }
}