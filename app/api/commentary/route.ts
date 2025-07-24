import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { kpis, previousKpis } = await request.json();

  // This is a stub. In a real application, you would call the Gemini API here.
  const commentary = `
    売上と新規顧客数が順調に増加しており、特にSNS経由の流入が貢献しているようです。
    一方で、コンバージョン率がわずかに低下しています。
    カートから決済への導線に課題がないか、一度確認してみることをお勧めします。
  `;

  return NextResponse.json({ commentary });
}
