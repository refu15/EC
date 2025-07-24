"use client"

import { createContext, useContext, useState, ReactNode } from 'react';
import { Order, Kpi } from '@/lib/kpi';
import { Proposal } from '@/lib/proposals';

interface AppState {
  orders: Order[];
  kpis: Kpi | null;
  previousKpis: Kpi | null;
  proposals: Proposal[];
  setOrders: (orders: Order[]) => void;
  setKpis: (kpis: Kpi) => void;
  setPreviousKpis: (kpis: Kpi) => void;
  setProposals: (proposals: Proposal[]) => void;
}

const AppStateContext = createContext<AppState | undefined>(undefined);

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [kpis, setKpis] = useState<Kpi | null>(null);
  const [previousKpis, setPreviousKpis] = useState<Kpi | null>(null);
  const [proposals, setProposals] = useState<Proposal[]>([]);

  const value = {
    orders,
    kpis,
    previousKpis,
    proposals,
    setOrders,
    setKpis,
    setPreviousKpis,
    setProposals,
  };

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
}
