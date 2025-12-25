import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    categories: [
      { name: 'Sports Betting', path: '/sports-betting' },
      { name: 'Slot Games', path: '/slot-games' },
      { name: 'Live Casino', path: '/live-casino' },
      { name: 'Game Tips & Strategy', path: '/game-tips-strategy' },
      { name: 'Beginner Guide', path: '/beginner-guide' },
    ],
    company: [
      { name: 'About Me', path: '/about' },
      { name: 'Privacy Policy', path: '/privacy' },
    ],
  };

  return (
    <footer className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img
                src="https://static.readdy.ai/image/31a1107996a99a56af02e61b22b1b81c/6648e9c363def61aa1dd9e61ec2693a4.png"
                alt="NaijaWinHub Logo"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-emerald-100 text-sm leading-relaxed mb-4">
              NaijaWinHub is your trusted source for Nigeria sports betting tips, slot games reviews, live casino strategies, and responsible gaming guides. With 10 years of experience in the iGaming industry, we provide professional insights and educational content to help Nigerian players make informed decisions.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="Facebook"
              >
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="Twitter"
              >
                <i className="ri-twitter-x-fill text-xl"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <i className="ri-instagram-fill text-xl"></i>
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="Telegram"
              >
                <i className="ri-telegram-fill text-xl"></i>
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Categories</h3>
            <ul className="space-y-2">
              {footerLinks.categories.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-emerald-100 hover:text-amber-400 transition-colors text-sm cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-emerald-100 hover:text-amber-400 transition-colors text-sm cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-emerald-200 text-sm text-center md:text-left">
              © {currentYear} NaijaWinHub. All rights reserved. Play responsibly.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://readdy.ai/?ref=logo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-200 hover:text-amber-400 transition-colors text-sm cursor-pointer"
              >
                Powered by Readdy
              </a>
            </div>
          </div>
          <p className="text-emerald-300 text-xs text-center mt-4 leading-relaxed">
            <strong>Disclaimer:</strong> This website provides educational content and gaming information for entertainment purposes. We do not operate any gaming platforms. Always gamble responsibly and only with money you can afford to lose. If you have a gambling problem, please seek help from professional organizations.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;