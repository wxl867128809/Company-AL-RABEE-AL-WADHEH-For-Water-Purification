import Link from 'next/link';
// switched back to bitmap logo per user request

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="flex items-center space-x-4">
            <img src="/logo.png" srcSet="/logo@2x.png 2x" alt="Al-Rabie" className="h-24 w-auto object-contain" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Al-Rabie Al-Clear PureWater</h3>
              <p className="text-gray-400">提供优质纯净水，致力于为客户提供健康饮用水解决方案。</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white">
                  产品展示
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">联系方式</h3>
            <ul className="text-gray-400 space-y-2">
              <li>地址：沙特阿拉伯</li>
              <li>电话：+966 536352548</li>
              <li>邮箱：yanka.water.purification@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Al-Rabie Al-Clear PureWater Co.,Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}