export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
        <section className="hero-section h-[180px] flex items-center">
        <div className="relative max-w-3xl mx-auto px-3 text-center text-white">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Al-Rabie Al-Clear PureWater
          </h1>
          <p className="text-sm md:text-base mb-3">
            为您提供优质纯净水解决方案
          </p>
          <button className="bg-white text-blue-800 px-4 py-1 rounded-full text-xs font-medium hover:bg-blue-50 transition-colors">
            了解更多
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-6">
        <div className="max-w-3xl mx-auto px-3">
          <h2 className="text-lg font-bold text-center mb-4 text-gray-900">
            我们的优势
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-white p-3 rounded shadow hover:shadow-sm transition-shadow">
              <div className="text-blue-600 mb-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold mb-1">优质品质</h3>
              <p className="text-gray-600 text-xs">
                确保最高水质标准
              </p>
            </div>
            <div className="bg-white p-3 rounded shadow hover:shadow-sm transition-shadow">
              <div className="text-blue-600 mb-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold mb-1">高效服务</h3>
              <p className="text-gray-600 text-xs">
                快速专业配送
              </p>
            </div>
            <div className="bg-white p-3 rounded shadow hover:shadow-sm transition-shadow">
              <div className="text-blue-600 mb-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold mb-1">全天保障</h3>
              <p className="text-gray-600 text-xs">
                24小时供水服务
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-blue-800 bg-opacity-90 text-white py-6">
        <div className="max-w-3xl mx-auto px-3 text-center">
          <h2 className="text-lg font-bold mb-2">联系我们</h2>
          <p className="text-xs mb-3">
            了解更多产品信息，获取报价
          </p>
          <button className="bg-white text-blue-800 px-4 py-1 rounded-full text-xs font-medium hover:bg-blue-50 transition-colors">
            获取报价
          </button>
        </div>
      </section>
    </div>
  )
}