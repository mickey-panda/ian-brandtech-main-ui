import Link from 'next/link';

export default function Footer() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const quickLinks = [
    { name: 'Join with us', href: '/join' },
    { name: 'Our Marketing', href: '/marketing' },
    { name: 'Job opening', href: '/careers' },
    { name: 'Affiliate programme', href: '/affiliate' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-green-900 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* 3 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-12">
          
          {/* Column 1: Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Navigation</h3>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="block text-slate-300 hover:text-white transition-colors duration-200 text-base font-medium py-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Company</h3>
            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="block text-slate-300 hover:text-white transition-colors duration-200 text-base font-medium py-1"
                  >
                    {item.name}
                </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Address */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Get In Touch</h3>
            <div className="space-y-4 text-base text-slate-300">
              <div>
                <p className="font-semibold">IAN BrandTech Solutions</p>
              </div>
              <div>
                <p>Mindspace, Hitech City</p>
                <p>Hyderabad, Telangana 500081</p>
              </div>
              <p className="text-slate-400">
                Serving clients globally with innovative IT consulting
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-lg text-slate-400">
            © {currentYear} IAN BrandTech Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
