import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "YOUR_API_KEY");

export async function POST(request: Request) {
  const { kpis, previousKpis } = await request.json();

  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = `
    以下のKPIデータを分析し、ECサイトのオーナー向けに150字程度で簡潔なワンポイント解説をしてください。
    解説には、好調な点と懸念点を両方含めてください。

    現在のKPI:
    売上: ${kpis.sales.toLocaleString()}円
    新規顧客数: ${kpis.newCustomers}人
    コンバージョン率: ${kpis.conversionRate.toFixed(2)}%
    平均注文額: ${kpis.averageOrderValue.toLocaleString()}円

    前回のKPI:
    売上: ${previousKpis.sales.toLocaleString()}円
    新規顧客数: ${previousKpis.newCustomers}人
    コンバージョン率: ${previousKpis.conversionRate.toFixed(2)}%
    平均注文額: ${previousKpis.averageOrderValue.toLocaleString()}円
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const commentary = response.text();
    return NextResponse.json({ commentary });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ commentary: "AIによる解説の生成に失敗しました。" });
  }
}
