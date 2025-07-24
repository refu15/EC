import { Kpi } from './kpi';

export interface Proposal {
  id: number;
  title: string;
  type: string;
  difficulty: number;
  cost: number;
  expectedBenefit: number;
  expectedROI: number;
  effect: string;
  reason: string;
  steps: string[];
  tried: boolean;
}

const allProposals: Proposal[] = [
  {
    id: 1,
    title: "リピーター向けクーポンを発行する",
    type: "すぐできる",
    difficulty: 1,
    cost: 2000,
    expectedBenefit: 15000,
    expectedROI: 7.5,
    effect: "再購入促進",
    reason: "直近売上が10%減。既存顧客へのアプローチが有効",
    steps: ["管理画面で発行", "SNS/メールで告知"],
    tried: false,
  },
  {
    id: 2,
    title: "SNSキャンペーンを実施する",
    type: "やや労力",
    difficulty: 2,
    cost: 5000,
    expectedBenefit: 25000,
    expectedROI: 5.0,
    effect: "新規顧客の流入促進",
    reason: "新規顧客獲得が減少。SNS経由流入のテコ入れ推奨。",
    steps: ["キャンペーン内容企画", "投稿スケジュール策定"],
    tried: false,
  },
  {
    id: 3,
    title: "サイトTOPの訴求バナーを変更",
    type: "インパクト大",
    difficulty: 3,
    cost: 1000,
    expectedBenefit: 10000,
    expectedROI: 10.0,
    effect: "初回購入率向上",
    reason: "直近流入のCVR低下。ファーストビューの改善推奨。",
    steps: ["TOP画像編集", "ABテスト実施"],
    tried: false,
  },
  {
    id: 4,
    title: "カゴ落ち顧客へのリマインダーメール",
    type: "自動化",
    difficulty: 2,
    cost: 500,
    expectedBenefit: 8000,
    expectedROI: 16.0,
    effect: "CVR改善",
    reason: "コンバージョン率が目標値を下回っている場合に有効です。",
    steps: ["メールテンプレート作成", "自動送信設定"],
    tried: false,
  },
  {
    id: 5,
    title: "送料無料キャンペーン",
    type: "インパクト大",
    difficulty: 1,
    cost: 10000,
    expectedBenefit: 50000,
    expectedROI: 5.0,
    effect: "売上向上",
    reason: "売上が伸び悩んでいる時期の起爆剤として有効です。",
    steps: ["キャンペーン期間設定", "サイト上で告知"],
    tried: false,
  }
];

export function getProposals(kpi: Kpi, previousKpi: Kpi): Proposal[] {
  const proposals: Proposal[] = [];

  if (kpi.sales < previousKpi.sales) {
    proposals.push(allProposals.find(p => p.id === 5)!);
  }

  if (kpi.newCustomers < previousKpi.newCustomers) {
    proposals.push(allProposals.find(p => p.id === 2)!);
  }

  if (kpi.conversionRate < previousKpi.conversionRate) {
    proposals.push(allProposals.find(p => p.id === 3)!);
    proposals.push(allProposals.find(p => p.id === 4)!);
  }

  if (proposals.length < 3) {
    proposals.push(allProposals.find(p => p.id === 1)!);
  }

  return proposals.slice(0, 3);
}
