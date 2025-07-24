export interface Order {
  order_id: string;
  created_at: string;
  customer_id: string;
  total_price: number;
}

export interface Kpi {
  sales: number;
  newCustomers: number;
  conversionRate: number;
  averageOrderValue: number;
}

export function calculateKpis(orders: Order[], totalVisitors: number): Kpi {
  const sales = orders.reduce((sum, order) => sum + order.total_price, 0);

  const uniqueCustomers = new Set(orders.map(order => order.customer_id));
  const newCustomers = uniqueCustomers.size;

  const conversionRate = totalVisitors > 0 ? (orders.length / totalVisitors) * 100 : 0;

  const averageOrderValue = orders.length > 0 ? sales / orders.length : 0;

  return {
    sales,
    newCustomers,
    conversionRate,
    averageOrderValue,
  };
}
