import React from 'react';

export default function ProductsPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">产品展示</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* 示例产品卡片，可根据实际产品替换 */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <img src="/logo.png" alt="产品1" className="h-24 w-24 object-contain mb-4" />
          <h2 className="text-lg font-semibold mb-2"> 5L TDS &lt; 20 </h2>
          <p className="text-gray-600 text-sm mb-2">口感清淡,泡茶、咖啡首选。</p>
          <a href="/contact" className="mt-4 bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition">获取报价</a>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <img src="/logo.png" alt="产品2" className="h-24 w-24 object-contain mb-4" />
          <h2 className="text-lg font-semibold mb-2"> 5L TDS 20 &lt; TDS &lt; 100 </h2>
          <p className="text-gray-600 text-sm mb-2"> 富含矿物质，适合日常饮用。</p>
          <a href="/contact" className="mt-4 bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition">获取报价</a>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <img src="/logo.png" alt="产品3" className="h-24 w-24 object-contain mb-4" />
          <h2 className="text-lg font-semibold mb-2">纯净水 330 ml </h2>
          <p className="text-gray-600 text-sm mb-2">家庭、会议等场合首选。</p>
          <a href="/contact" className="mt-4 bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition">获取报价</a>
        </div>
      </div>
    </main>
  );
}
