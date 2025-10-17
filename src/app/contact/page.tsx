import React from 'react';

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">联系我们</h1>
      <div className="mb-6">
        <p className="mb-2">如需咨询或合作，请通过以下方式联系我们：</p>
        <ul className="text-gray-700">
          <li className="mb-1">电话：<a href="tel:+966-536352548" className="text-blue-600 hover:underline">+966-536352548</a></li>
          <li className="mb-1">邮箱：<a href="mailto:yanka.water.purification@gmail.com" className="text-blue-600 hover:underline">yanka.water.purification@gmail.com</a></li>
          <li className="mb-1">地址：沙特阿拉伯 利雅得 RNMA3865</li>
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">在线留言</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">姓名</label>
            <input type="text" className="w-full border rounded px-3 py-2" placeholder="请输入您的姓名" />
          </div>
          <div>
            <label className="block mb-1 font-medium">邮箱</label>
            <input type="email" className="w-full border rounded px-3 py-2" placeholder="请输入您的邮箱" />
          </div>
          <div>
            <label className="block mb-1 font-medium">留言内容</label>
            <textarea className="w-full border rounded px-3 py-2" rows={4} placeholder="请输入您的留言"></textarea>
          </div>
          <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800">提交</button>
        </form>
      </div>
    </main>
  );
}
