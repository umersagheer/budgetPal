import { PiggyBankIcon } from "lucide-react";
import React from "react";

export default function Logo() {
  return (
    <div className="flex gap-2">
      <PiggyBankIcon size={32} className="text-violet-300" />
      <p className="text-3xl font-bold bg-gradient-to-r from-violet-300 via-violet-500 to-violet-600 bg-clip-text text-transparent">
        BudgetPal
      </p>
    </div>
  );
}
