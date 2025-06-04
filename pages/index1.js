export default function Profile() {
  return (
    <div className="w-[390px] h-[844px] mx-auto bg-gray-100 text-sm font-sans relative">
      {/* Header */}
      <div className="bg-blue-500 text-white text-center py-6 rounded-b-3xl">
        <h1 className="text-lg font-semibold">Профайл</h1>
        <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mt-4 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
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
            {
              label: "Үзлэгийн түүх",
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
            },
            {
              label: "Үзүүлсэн эмч нар",
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path
                    d="M12 14l9-5-9-5-9 5 9 5z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M12 14l6.16-3.422A12.083 12.083 0 0118 20.5" />
                  <path d="M12 14L5.84 10.578A12.083 12.083 0 006 20.5" />
                </svg>
              ),
            },
            {
              label: "Авсан цаг",
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between px-4 py-3">
              <span className="flex items-center space-x-2">
                {item.icon}
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
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 15a6 6 0 010-12 6 6 0 010 12z" />
              </svg>
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
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L20 20H4L12 2z" />
              </svg>
              <span>Хэл</span>
            </span>
            <span className="text-gray-400">&gt;</span>
          </div>
          <div className="flex items-center justify-between px-4 py-3">
            <span className="flex items-center space-x-2 text-red-500">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 13v-2H7V8l-5 4 5 4v-3zM20 3h-8v2h8v14h-8v2h8a2 2 0 002-2V5a2 2 0 00-2-2z" />
              </svg>
              <span>Гарах</span>
            </span>
            <span className="text-red-300">&gt;</span>
          </div>
        </div>
      </div>

      {/* Footer Nav */}
      <div className="absolute bottom-0 w-full bg-white py-3 border-t flex justify-around text-blue-500">
        <div className="flex flex-col items-center text-gray-400">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 12l9-9 9 9h-3v9h-12v-9h-3z" />
          </svg>
          <span className="text-xs">Нүүр</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 00-3.6 19.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1.1 1.5 1.1.9 1.5 2.3 1 2.8.7.1-.7.3-1 .6-1.2-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.6 11.6 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.7.9 1.2 2 1.2 3.2 0 4.5-2.7 5.4-5.3 5.8.4.3.7.9.7 1.8v2.7c0 .3.2.7.8.6A10 10 0 0012 2z" />
          </svg>
          <span className="text-xs">Байршил</span>
        </div>
        <div className="flex flex-col items-center font-semibold text-blue-500">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
          </svg>
          <span className="text-xs">Профайл</span>
        </div>
      </div>
    </div>
  );
}
