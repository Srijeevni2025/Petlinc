import { Link } from "react-router-dom"
export default function Footer(){
    return(
        <footer className="bg-gray-900 text-gray-400 py-10 mt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4">Petlinc</h3>
            <p className="text-sm">Premium grooming packages for dogs & cats.</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link to="/customerpolicy" className="hover:text-white">Customer Policy</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQs</Link></li>
              <li><Link to="/support" className="hover:text-white">Support</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <p className="text-sm">support@petlinc.com</p>
            <p className="text-sm">+91-9876543210</p>
            <div className="flex gap-4 mt-3">
              <span className="hover:text-white cursor-pointer">🐦</span>
              <span className="hover:text-white cursor-pointer">📘</span>
              <span className="hover:text-white cursor-pointer">📸</span>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-8">
          © 2025 Petlinc. All rights reserved.
        </div>
      </footer>
    )
}