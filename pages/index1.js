export default function Profile() {
  return (
    <div className="w-[390px] h-[844px] mx-auto bg-gray-100 text-sm font-sans">
      {/* Header */}
      <div className="bg-blue-500 text-white text-center py-6 rounded-b-3xl">
        <h1 className="text-lg font-semibold">Профайл</h1>
        <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mt-4 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
          </svg>
        </div>
        <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs">
          Профайлыг засах
        </button>
      </div>

      {/* Section: Эрүүл мэнд */}
      <div className="mt-6 px-4">
        <p className="text-gray-600 mb-2">Эмчилгээтэй холбоотой</p>
        <div className="bg-white rounded-xl shadow-sm divide-y">
          {[
            { label: "Үзлэгийн түүх", icon: "🩺" },
            { label: "Үзүүлсэн эмч нар", icon: "💊" },
            { label: "Авсан цаг", icon: "🕒" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between px-4 py-3"
            >
              <span className="flex items-center space-x-2">
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </span>
              <span className="text-gray-400">&gt;</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Тохиргоо */}
      <div className="mt-6 px-4">
        <p className="text-gray-600 mb-2">Тохиргоо</p>
        <div className="bg-white rounded-xl shadow-sm divide-y">
          <div className="flex items-center justify-between px-4 py-3">
            <span className="flex items-center space-x-2">
              <span>🌙</span>
              <span>Харанхуй тохиргоо</span>
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-500 transition-all"></div>
              <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full peer-checked:translate-x-full transition-all"></div>
            </label>
          </div>
          <div className="flex items-center justify-between px-4 py-3">
            <span className="flex items-center space-x-2">
              <span>🧭</span>
              <span>Хэл</span>
            </span>
            <span className="text-gray-400">&gt;</span>
          </div>
          <div className="flex items-center justify-between px-4 py-3">
            <span className="flex items-center space-x-2 text-red-500">
              <span>🚪</span>
              <span>Гарах</span>
            </span>
            <span className="text-red-300">&gt;</span>
          </div>
        </div>
      </div>

      {/* Footer Nav (Optional/for preview) */}
      <div className="absolute bottom-0 w-full bg-white py-3 border-t flex justify-around text-blue-500">
        <div className="flex flex-col items-center text-gray-400">
          <span>🏠</span>
          <span className="text-xs">Нүүр</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <span>📍</span>
          <span className="text-xs">Байршил</span>
        </div>
        <div className="flex flex-col items-center font-semibold text-blue-500">
          <span>👤</span>
          <span className="text-xs">Профайл</span>
        </div>
      </div>
    </div>
  );
}
