import React from "react";

type StakeholderProps = {
  name: string;
  role: string;
  emoji: string;
  tasks: string;
  importance: string;
};

export const Stakeholder: React.FC<StakeholderProps> = ({
  name,
  role,
  emoji,
  tasks,
  importance,
}) => {
  return (
    <div className="border border-black/20 rounded-xl p-6 mb-6 bg-white shadow-sm hover:shadow-md transition-all">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{emoji}</span>
        <h2 className="text-2xl font-bold tracking-wide">
          {name.toUpperCase()}
        </h2>
      </div>

      {/* Role */}
      <h3 className="text-sm font-semibold text-black/70 mb-3">
        {role}
      </h3>

      {/* Tasks */}
      <div className="mb-3">
        <p className="text-black font-semibold">Úlohy:</p>
        <p className="text-black/80 leading-relaxed">
          {tasks}
        </p>
      </div>

      {/* Importance */}
      <div>
        <p className="text-black font-semibold">Význam:</p>
        <p className="text-black/80 leading-relaxed">
          {importance}
        </p>
      </div>
    </div>
  );
};

export const pavlo = {
  name: "Pavlo",
  role: "DIZAJNÉR (UI/UX DESIGNER)",
  emoji: "🎨",
  tasks:
    "Tvorba dizajnu používateľského rozhrania, výber farieb, typografie a štýlu. Príprava makiet a vizuálnych prvkov.",
  importance:
    "Bez kvalitného dizajnu by platforma nepôsobila profesionálne a nebola by jasná pre používateľov. Dizajn vytvára prvý dojem projektu.",
};

export const dmytro = {
  name: "Dmytro",
  role: "TÍMOVÝ LÍDER / IT ŠPECIALISTA",
  emoji: "💻",
  tasks:
    "Riadenie tímu, koordinácia vývoja, rozdeľovanie úloh, rozhodovanie o technológiách a štruktúre. Vývoj a údržba webu.",
  importance:
    "Zabezpečuje zladenú prácu tímu a kvalitnú technickú realizáciu. Bez jeho vedenia by projekt nemal jasnú štruktúru ani stabilný vývoj.",
};

export const artemAnton = {
  name: "Artem & Anton",
  role: "DEVELOPERS OBSAHU A FUNKCIONALITY",
  emoji: "🛠️",
  tasks:
    "Tvorba obsahu, implementácia funkcií, príprava stránok, testovanie a oprava chýb. Práca na technických a organizačných úlohách.",
  importance:
    "Realizujú veľkú časť praktickej práce. Ich prínos je kľúčový pre včasné dokončenie projektu.",
};

export const sviat = {
  name: "Sviat",
  role: "AUTOR TEXTOVÉHO OBSAHU",
  emoji: "✍️",
  tasks:
    "Písanie textov pre jednotlivé fázy projektu, tvorba opisov, vysvetlení a prezentačných materiálov.",
  importance:
    "Zabezpečuje zrozumiteľnú komunikáciu výsledkov. Kvalitný text umožňuje profesionálne prezentovať projekt a jeho výstupy.",
};
