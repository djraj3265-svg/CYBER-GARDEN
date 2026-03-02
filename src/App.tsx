import { 
  MonitorSmartphone, 
  PhoneCall, 
  Laptop, 
  Printer, 
  Landmark, 
  CheckCircle2,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import AIServices from "./components/AIServices";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="antialiased text-gray-800 flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg text-white">
                <MonitorSmartphone className="w-6 h-6" />
              </div>
              <span className="font-bold text-xl text-gray-900 tracking-wide">
                ডিজিটাল সেবা
              </span>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden gap-2">
              <a
                href="https://wa.me/918250619602"
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 text-white p-2 rounded-lg"
              >
                <PhoneCall className="w-5 h-5" />
              </a>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8 font-medium text-gray-600">
              <a href="#home" className="hover:text-blue-600 transition">
                হোম
              </a>
              <a href="#services" className="hover:text-blue-600 transition">
                পরিষেবাসমূহ
              </a>
              <a
                href="#ai-services"
                className="text-purple-600 hover:text-purple-800 transition font-bold flex items-center gap-1"
              >
                ✨ এআই পরিষেবা
              </a>
              <a href="#contact" className="hover:text-blue-600 transition">
                যোগাযোগ
              </a>
              <a
                href="https://wa.me/918250619602"
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition shadow-sm flex items-center space-x-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>কল করুন</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-2 shadow-lg">
            <div className="flex flex-col space-y-3 py-2">
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-600 hover:text-blue-600">হোম</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-600 hover:text-blue-600">পরিষেবাসমূহ</a>
              <a href="#ai-services" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-purple-600 font-bold">✨ এআই পরিষেবা</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-600 hover:text-blue-600">যোগাযোগ</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header
        id="home"
        className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white opacity-10 rounded-full blur-2xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="inline-block bg-yellow-400 text-blue-900 font-bold px-4 py-1.5 rounded-full mb-6 text-sm animate-pulse shadow-lg border border-yellow-300">
              মিনিটের মধ্যে সমাধান! ⚡
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              আপনার সমস্ত <span className="text-yellow-400">অনলাইন ও ডকুমেন্ট</span>{" "}
              সার্ভিসেস এখন এক ছাদের নিচে
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl font-medium">
              সময় বাঁচান, সঠিক পরিষেবা পান! অনলাইন ফরম ফিলাপ থেকে শুরু করে ব্যাঙ্কিং ও
              প্রিন্টিং—সবকিছু নিখুঁতভাবে করা হয়।
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a
                href="#services"
                className="bg-white text-blue-700 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1 text-center"
              >
                পরিষেবাগুলি দেখুন
              </a>
              <a
                href="#ai-services"
                className="bg-purple-600 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-purple-700 transition flex items-center justify-center space-x-2 transform hover:-translate-y-1 border border-purple-400"
              >
                <span>✨ স্মার্ট এআই টুলস</span>
              </a>
            </div>
          </div>
          <div className="md:w-5/12 hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1554774853-719586f82d77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Online Services"
              className="rounded-2xl shadow-2xl border-4 border-white/20 transform rotate-2 hover:rotate-0 transition duration-500"
            />
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-[50px] md:h-[100px]"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C-1,95.8,73.41,74.79,141.2,56.44Z"
              fill="#f8fafc"
            ></path>
          </svg>
        </div>
      </header>

      {/* Services Section */}
      <main id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            আমাদের <span className="text-blue-600">পরিষেবাসমূহ</span>
          </h2>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            আপনার দৈনন্দিন সমস্ত ডিজিটাল কাজের জন্য আমরা প্রদান করি দ্রুত এবং নির্ভুল পরিষেবা।
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Category 1: Online Forms */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 group">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
              <Laptop className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">অনলাইন আবেদন</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>অনলাইন ফরম ফিলাপ</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>চাকুরীর দরখাস্ত (Job Application)</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>প্রবেশিকা পরীক্ষা (Entrance Exams)</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>পাসপোর্ট আবেদন</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>ভর্তি প্রক্রিয়া (Admission)</span>
              </li>
            </ul>
          </div>

          {/* Category 2: Print & Document */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 group relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              জনপ্রিয়
            </div>
            <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition duration-300">
              <Printer className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">প্রিন্ট ও ডকুমেন্ট</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                <span>জিরোক্স ও ল্যামিনেশন</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                <span>কালার এবং B/W প্রিন্টিং</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                <span>দ্রুত ও নিখুঁত স্ক্যানিং</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                <span>টাইপিং সহায়তা</span>
              </li>
            </ul>
          </div>

          {/* Category 3: Bank & Telecom */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 group">
            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition duration-300">
              <Landmark className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">ব্যাঙ্ক ও রিচার্জ</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <span>টাকা তোলা ও জমা করা হয়</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <span>ব্যাঙ্কে নতুন একাউন্ট খোলা হয়</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <span>মোবাইল রিচার্জ</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <span>ইলেক্ট্রিক বিল জমা</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <span>নতুন সিম কার্ড উপলব্ধ</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* AI Services Section */}
      <AIServices />

      {/* Call to Action Banner */}
      <section className="bg-blue-50 py-12 border-y border-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
            আমাদের পরিষেবা নিয়ে সন্তুষ্ট নন বা কোনো জিজ্ঞাসা আছে?
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            সরাসরি আমাদের সাথে কথা বলুন। আমরা সবসময় আপনার সেবায় নিয়োজিত।
          </p>
          <div className="flex items-center justify-center space-x-4">
            <a
              href="https://wa.me/918250619602"
              target="_blank"
              rel="noreferrer"
              className="text-xl font-bold text-gray-800 bg-white inline-flex py-3 px-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition items-center gap-2"
            >
              <PhoneCall className="w-5 h-5 text-green-600" />
              <span>+91 82506 19602</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-blue-600 p-2 rounded-lg text-white">
                  <MonitorSmartphone className="w-6 h-6" />
                </div>
                <span className="font-bold text-xl tracking-wide">ডিজিটাল সেবা</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                আপনার বিশ্বস্ত ডিজিটাল সহযোগী। আমরা প্রদান করি দ্রুত, নির্ভুল এবং সাশ্রয়ী
                মূল্যের অনলাইন পরিষেবা।
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">
                দ্রুত লিঙ্ক
              </h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#home" className="hover:text-white transition">
                    হোম
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition">
                    পরিষেবাসমূহ
                  </a>
                </li>
                <li>
                  <a href="#ai-services" className="hover:text-white transition">
                    এআই টুলস
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition">
                    যোগাযোগ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">
                যোগাযোগ করুন
              </h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start space-x-3">
                  <PhoneCall className="w-5 h-5 text-blue-500 mt-1" />
                  <span>+91 82506 19602</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 text-blue-500 mt-1 flex items-center justify-center font-bold">@</div>
                  <span>djraj3265@gmail.com</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 text-blue-500 mt-1 flex items-center justify-center">📍</div>
                  <span>পশ্চিমবঙ্গ, ভারত</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} ডিজিটাল সেবা কেন্দ্র | সর্বস্বত্ব সংরক্ষিত</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
