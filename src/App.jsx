import { useState } from "react";

export default function App() {
  const fortunes = [
    { result: "大吉", desc: "最高の運勢！新しい挑戦が吉。" },
    { result: "中吉", desc: "良い運勢。落ち着いて進めれば成果あり。" },
    { result: "小吉", desc: "まずまず。小さな幸せに気づこう。" },
    { result: "吉", desc: "平穏な運勢。丁寧に積み重ねると吉。" },
    { result: "凶", desc: "注意が必要。焦らずゆっくり進もう。" }
  ];

  const [fortune, setFortune] = useState(null);

  const drawFortune = () => {
    const random = fortunes[Math.floor(Math.random() * fortunes.length)];
    setFortune(random);
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">React おみくじアプリ</h1>

      <button
        onClick={drawFortune}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        おみくじを引く
      </button>

      {fortune && (
        <div className="mt-6 p-4 bg-white rounded-lg shadow text-center w-64">
          <p className="text-2xl font-bold mb-2">{fortune.result}</p>
          <p className="text-gray-700">{fortune.desc}</p>
        </div>
      )}
    </div>
  );
}
