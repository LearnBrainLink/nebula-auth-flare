
import React from "react";
import { TrendingUp, Users, Trophy, Brain } from "lucide-react";

const icons = [<Users className="text-blue-400" />, <Trophy className="text-yellow-400" />, <Brain className="text-purple-400" />, <TrendingUp className="text-green-400" />];

type Props = {
  number: string;
  label: string;
  iconIndex: number;
};
export function HomeStatsCard({ number, label, iconIndex }: Props) {
  return (
    <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 shadow-lg flex flex-col items-center group transition-transform duration-300 hover:scale-105 animate-fade-in">
      <div className="mb-3">{icons[iconIndex % icons.length]}</div>
      <div className="text-3xl font-bold text-blue-300 mb-2">{number}</div>
      <div className="text-base text-slate-300">{label}</div>
    </div>
  );
}
