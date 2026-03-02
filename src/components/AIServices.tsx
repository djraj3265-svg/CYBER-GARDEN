import { GoogleGenAI } from "@google/genai";
import { 
  FileText, 
  Sparkles, 
  Copy, 
  FileSearch, 
  Search, 
  Landmark, 
  Info, 
  Languages, 
  ArrowRightLeft, 
  Bot 
} from "lucide-react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function AIServices() {
  // Application Drafter State
  const [appTopic, setAppTopic] = useState("");
  const [appLanguage, setAppLanguage] = useState("Bengali");
  const [appResult, setAppResult] = useState("");
  const [appLoading, setAppLoading] = useState(false);

  // Document Checker State
  const [docTopic, setDocTopic] = useState("");
  const [docResult, setDocResult] = useState("");
  const [docLoading, setDocLoading] = useState(false);

  // Scheme Info State
  const [schemeTopic, setSchemeTopic] = useState("");
  const [schemeResult, setSchemeResult] = useState("");
  const [schemeLoading, setSchemeLoading] = useState(false);

  // Translation State
  const [transInput, setTransInput] = useState("");
  const [transAction, setTransAction] = useState("Translate to English");
  const [transResult, setTransResult] = useState("");
  const [transLoading, setTransLoading] = useState(false);

  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

  const generateApplication = async () => {
    if (!appTopic) return;
    setAppLoading(true);
    setAppResult("");
    try {
      const prompt = `Write a formal application for: ${appTopic}. Language: ${appLanguage}. Keep it professional and ready to fill in the blanks if specific details are missing. Output in Markdown.`;
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });
      setAppResult(response.text || "No response generated.");
    } catch (error) {
      console.error(error);
      setAppResult("Error generating application. Please try again.");
    } finally {
      setAppLoading(false);
    }
  };

  const checkDocuments = async () => {
    if (!docTopic) return;
    setDocLoading(true);
    setDocResult("");
    try {
      const prompt = `List the required documents for: ${docTopic} in West Bengal, India. Provide a clear bulleted list in Bengali. Output in Markdown.`;
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });
      setDocResult(response.text || "No response generated.");
    } catch (error) {
      console.error(error);
      setDocResult("Error fetching document list. Please try again.");
    } finally {
      setDocLoading(false);
    }
  };

  const checkScheme = async () => {
    if (!schemeTopic) return;
    setSchemeLoading(true);
    setSchemeResult("");
    try {
      const prompt = `Explain the government scheme: ${schemeTopic} (eligibility, benefits, application process) in the context of West Bengal/India. Provide the answer in Bengali. Output in Markdown.`;
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });
      setSchemeResult(response.text || "No response generated.");
    } catch (error) {
      console.error(error);
      setSchemeResult("Error fetching scheme info. Please try again.");
    } finally {
      setSchemeLoading(false);
    }
  };

  const processTranslation = async () => {
    if (!transInput) return;
    setTransLoading(true);
    setTransResult("");
    try {
      const prompt = `Perform the following action on the text: "${transInput}". Action: ${transAction}. Output only the result.`;
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });
      setTransResult(response.text || "No response generated.");
    } catch (error) {
      console.error(error);
      setTransResult("Error processing text. Please try again.");
    } finally {
      setTransLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <section id="ai-services" className="bg-gradient-to-br from-purple-50 to-indigo-50 py-16 md:py-24 border-y border-purple-100 relative overflow-hidden">
      {/* AI Background Elements */}
      <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
        <Bot className="w-64 h-64 text-purple-900" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="bg-purple-100 text-purple-700 font-bold px-4 py-1.5 rounded-full text-sm mb-4 inline-block border border-purple-200">
            Powered by Gemini AI
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 mt-4">
            ✨ স্মার্ট <span className="text-purple-600">এআই সার্ভিসেস</span>
          </h2>
          <div className="w-24 h-1.5 bg-purple-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            আপনার কাজকে আরও সহজ করতে আমরা নিয়ে এসেছি আর্টিফিশিয়াল ইন্টেলিজেন্স সুবিধা।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* AI Tool 1: Application Drafter */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-purple-100 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">দরখাস্ত লেখার সহকারী</h3>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              কী বিষয়ে দরখাস্ত বা অ্যাপ্লিকেশন লিখতে চান তা লিখুন। আমাদের AI কয়েক সেকেন্ডের মধ্যে একটি প্রফেশনাল ড্রাফট তৈরি করে দেবে।
            </p>

            <div className="space-y-4 flex-grow">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  কীসের দরখাস্ত? (যেমন: ছুটির আবেদন, ব্যাঙ্কে একাউন্ট বন্ধ)
                </label>
                <input
                  type="text"
                  value={appTopic}
                  onChange={(e) => setAppTopic(e.target.value)}
                  placeholder="আপনার বিষয় লিখুন..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">ভাষা</label>
                <select
                  value={appLanguage}
                  onChange={(e) => setAppLanguage(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition bg-white"
                >
                  <option value="Bengali">বাংলা (Bengali)</option>
                  <option value="English">ইংরেজি (English)</option>
                </select>
              </div>
              <button
                onClick={generateApplication}
                disabled={appLoading}
                className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg hover:bg-purple-700 transition flex items-center justify-center gap-2 shadow-md disabled:opacity-70"
              >
                {appLoading ? (
                  "তৈরি হচ্ছে..."
                ) : (
                  <>
                    ✨ <span>দরখাস্ত তৈরি করুন</span>
                    <Sparkles className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            {/* Output Area */}
            {appResult && (
              <div className="mt-6 flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-gray-700">ফলাফল:</span>
                  <button
                    onClick={() => copyToClipboard(appResult)}
                    className="text-purple-600 text-sm hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Copy className="w-4 h-4" /> কপি করুন
                  </button>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-gray-700 text-sm h-64 overflow-y-auto markdown-body">
                  <ReactMarkdown>{appResult}</ReactMarkdown>
                </div>
              </div>
            )}
          </div>

          {/* AI Tool 2: Document Checker */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-indigo-100 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-indigo-100 p-3 rounded-lg text-indigo-600">
                <FileSearch className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">কী কী ডকুমেন্ট লাগবে?</h3>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              কোনো ফর্ম ফিলাপ বা আবেদনের জন্য কী কী গুরুত্বপূর্ণ ডকুমেন্টস প্রয়োজন, তা এআইয়ের কাছে জিজ্ঞাসা করুন।
            </p>

            <div className="space-y-4 flex-grow">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  কাজের নাম (যেমন: নতুন পাসপোর্ট, প্যান কার্ড, ট্রেড লাইসেন্স)
                </label>
                <input
                  type="text"
                  value={docTopic}
                  onChange={(e) => setDocTopic(e.target.value)}
                  placeholder="কাজের নাম লিখুন..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                />
              </div>
              <button
                onClick={checkDocuments}
                disabled={docLoading}
                className="w-full mt-4 bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center gap-2 shadow-md disabled:opacity-70"
              >
                {docLoading ? (
                  "খোঁজা হচ্ছে..."
                ) : (
                  <>
                    ✨ <span>ডকুমেন্ট লিস্ট জানুন</span>
                    <Search className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            {/* Output Area */}
            {docResult && (
              <div className="mt-6 flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-gray-700">প্রয়োজনীয় ডকুমেন্টস:</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-gray-700 text-sm h-64 overflow-y-auto markdown-body">
                  <ReactMarkdown>{docResult}</ReactMarkdown>
                </div>
              </div>
            )}
          </div>

          {/* AI Tool 3: Government Scheme Assistant */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-blue-100 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">সরকারি প্রকল্পের তথ্য</h3>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              পশ্চিমবঙ্গ বা ভারত সরকারের যেকোনো স্কিম (যেমন: স্বাস্থ্যসাথী, কন্যাশ্রী) সম্পর্কে বিস্তারিত জানতে বা যোগ্যতা যাচাই করতে নিচে লিখুন।
            </p>

            <div className="space-y-4 flex-grow">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  প্রকল্পের নাম বা আপনার প্রশ্ন
                </label>
                <input
                  type="text"
                  value={schemeTopic}
                  onChange={(e) => setSchemeTopic(e.target.value)}
                  placeholder="যেমন: লক্ষ্মীর ভাণ্ডার এর জন্য কী যোগ্যতা লাগে?"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>
              <button
                onClick={checkScheme}
                disabled={schemeLoading}
                className="w-full mt-4 bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2 shadow-md disabled:opacity-70"
              >
                {schemeLoading ? (
                  "তথ্য আনা হচ্ছে..."
                ) : (
                  <>
                    ✨ <span>তথ্য জানুন</span>
                    <Info className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            {/* Output Area */}
            {schemeResult && (
              <div className="mt-6 flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-gray-700">প্রকল্পের তথ্য:</span>
                  <button
                    onClick={() => copyToClipboard(schemeResult)}
                    className="text-blue-600 text-sm hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Copy className="w-4 h-4" /> কপি করুন
                  </button>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-gray-700 text-sm h-64 overflow-y-auto markdown-body">
                  <ReactMarkdown>{schemeResult}</ReactMarkdown>
                </div>
              </div>
            )}
          </div>

          {/* AI Tool 4: Smart Translation & Proofreading */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-teal-100 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-teal-100 p-3 rounded-lg text-teal-600">
                <Languages className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">স্মার্ট অনুবাদ ও সংশোধন</h3>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              যেকোনো টেক্সট বাংলা থেকে ইংরেজিতে বা ইংরেজি থেকে বাংলায় অনুবাদ করুন, অথবা ব্যাকরণগত ভুল সংশোধন করুন।
            </p>

            <div className="space-y-4 flex-grow">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  আপনার টেক্সট লিখুন
                </label>
                <textarea
                  rows={3}
                  value={transInput}
                  onChange={(e) => setTransInput(e.target.value)}
                  placeholder="এখানে টেক্সট পেস্ট করুন..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  কী করতে চান?
                </label>
                <select
                  value={transAction}
                  onChange={(e) => setTransAction(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition bg-white"
                >
                  <option value="Translate to English">ইংরেজিতে অনুবাদ করুন</option>
                  <option value="Translate to Bengali">বাংলায় অনুবাদ করুন</option>
                  <option value="Fix Grammar and make it professional">
                    ভুল সংশোধন ও সুন্দর করুন
                  </option>
                </select>
              </div>
              <button
                onClick={processTranslation}
                disabled={transLoading}
                className="w-full bg-teal-600 text-white font-bold py-3 rounded-lg hover:bg-teal-700 transition flex items-center justify-center gap-2 shadow-md disabled:opacity-70"
              >
                {transLoading ? (
                  "প্রসেস হচ্ছে..."
                ) : (
                  <>
                    ✨ <span>প্রসেস করুন</span>
                    <ArrowRightLeft className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            {/* Output Area */}
            {transResult && (
              <div className="mt-6 flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-gray-700">ফলাফল:</span>
                  <button
                    onClick={() => copyToClipboard(transResult)}
                    className="text-teal-600 text-sm hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Copy className="w-4 h-4" /> কপি করুন
                  </button>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-gray-700 text-sm h-32 overflow-y-auto markdown-body">
                  <ReactMarkdown>{transResult}</ReactMarkdown>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
