import { calculateKpis, Order } from '../lib/kpi';

describe('calculateKpis', () => {
  const orders: Order[] = [
    { order_id: '1', created_at: '2024-07-24T10:00:00Z', customer_id: 'cust1', total_price: 100 },
    { order_id: '2', created_at: '2024-07-24T11:00:00Z', customer_id: 'cust2', total_price: 150 },
    { order_id: '3', created_at: '2024-07-24T12:00:00Z', customer_id: 'cust1', total_price: 50 },
  ];

  it('calculates KPIs correctly', () => {
    const kpis = calculateKpis(orders, 100);
    expect(kpis.sales).toBe(300);
    expect(kpis.newCustomers).toBe(2);
    expect(kpis.conversionRate).toBe(3);
    expect(kpis.averageOrderValue).toBe(100);
  });

  it('handles zero orders', () => {
    const kpis = calculateKpis([], 100);
    expect(kpis.sales).toBe(0);
    expect(kpis.newCustomers).toBe(0);
    expect(kpis.conversionRate).toBe(0);
    expect(kpis.averageOrderValue).toBe(0);
  });

  it('handles zero visitors', () => {
    const kpis = calculateKpis(orders, 0);
    expect(kpis.conversionRate).toBe(0);
  });
});
