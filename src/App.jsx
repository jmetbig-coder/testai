import Datepicker from './components/Datepicker.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-200 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white rounded-r-3xl p-6 shadow-sm">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
          </div>
          <span className="font-semibold text-gray-800">Academy</span>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          <div className="flex items-center gap-3 px-3 py-2 bg-purple-100 rounded-lg">
            <span className="text-purple-600">📊</span>
            <span className="font-medium text-purple-600">Dashboard</span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <span>📚</span>
            <span>Courses</span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <span>💬</span>
            <span>Chats</span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <span>📊</span>
            <span>Grades</span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <span>📅</span>
            <span>Schedule</span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <span>⚙️</span>
            <span>Settings</span>
          </div>
        </nav>

        {/* Premium Card */}
        <div className="mt-8 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-4">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <span className="text-2xl">👨‍💻</span>
            </div>
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Premium subscription</h3>
          <p className="text-sm text-gray-600 mb-4">Buy Premium and get access to new courses</p>
          <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium">
            More detailed
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-80 pl-10 pr-4 py-2 bg-white rounded-xl border-0 shadow-sm"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
            </div>
            <button className="p-2 bg-white rounded-xl shadow-sm">
              🔔
            </button>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-800">Profile</span>
              <button className="p-1">✏️</button>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center">
                <span className="text-white font-medium">E</span>
              </div>
              <div>
                <div className="font-medium text-gray-800">Esther Howard</div>
                <div className="text-sm text-gray-500">Elementary</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="col-span-2 space-y-8">
            {/* New Courses */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">New Courses</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-orange-400 rounded-2xl p-4 text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🗺️</span>
                  </div>
                  <h3 className="font-semibold mb-1">Geography</h3>
                  <p className="text-sm opacity-90">12 lessons</p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                      <div className="w-6 h-6 bg-pink-300 rounded-full"></div>
                      <div className="w-6 h-6 bg-blue-300 rounded-full"></div>
                    </div>
                    <button className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      →
                    </button>
                  </div>
                </div>
                <div className="bg-purple-500 rounded-2xl p-4 text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">💻</span>
                  </div>
                  <h3 className="font-semibold mb-1">JavaScript Course</h3>
                  <p className="text-sm opacity-90">15 lessons</p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                      <div className="w-6 h-6 bg-pink-300 rounded-full"></div>
                      <div className="w-6 h-6 bg-blue-300 rounded-full"></div>
                    </div>
                    <button className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      →
                    </button>
                  </div>
                </div>
                <div className="bg-blue-500 rounded-2xl p-4 text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">📸</span>
                  </div>
                  <h3 className="font-semibold mb-1">Photography Course</h3>
                  <p className="text-sm opacity-90">8 lessons</p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                      <div className="w-6 h-6 bg-pink-300 rounded-full"></div>
                      <div className="w-6 h-6 bg-blue-300 rounded-full"></div>
                    </div>
                    <button className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* My Courses */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">My Courses</h2>
                <button className="text-purple-600 text-sm">View All</button>
              </div>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="grid grid-cols-4 gap-4 p-4 text-sm font-medium text-gray-500 border-b">
                  <div>Course name</div>
                  <div>Start</div>
                  <div>Rate</div>
                  <div>Level</div>
                </div>
                <div className="space-y-4 p-4">
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <span className="text-purple-600">🎨</span>
                      </div>
                      <div>
                        <div className="font-medium">Web Design</div>
                        <div className="text-sm text-gray-500">10 lessons</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">May 12</div>
                    <div className="text-sm text-gray-600">4.8</div>
                    <div className="text-sm text-gray-600">Elementary</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600">💻</span>
                      </div>
                      <div>
                        <div className="font-medium">Development Basics</div>
                        <div className="text-sm text-gray-500">8 lessons</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">May 14</div>
                    <div className="text-sm text-gray-600">4.4</div>
                    <div className="text-sm text-gray-600">Intermediate</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                        <span className="text-pink-600">🐍</span>
                      </div>
                      <div>
                        <div className="font-medium">Data with Python</div>
                        <div className="text-sm text-gray-500">5 lessons</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">May 17</div>
                    <div className="text-sm text-gray-600">4.6</div>
                    <div className="text-sm text-gray-600">Intermediate</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-gray-600">📄</span>
                      </div>
                      <div>
                        <div className="font-medium">Html Basics</div>
                        <div className="text-sm text-gray-500">12 lessons</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">May 26</div>
                    <div className="text-sm text-gray-600">4.7</div>
                    <div className="text-sm text-gray-600">Elementary</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <span className="text-yellow-600">JS</span>
                      </div>
                      <div>
                        <div className="font-medium">JavaScript</div>
                        <div className="text-sm text-gray-500">8 lessons</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">May 30</div>
                    <div className="text-sm text-gray-600">4.9</div>
                    <div className="text-sm text-gray-600">Elementary</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Calendar */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">May 2022</h3>
                <div className="flex items-center gap-2">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {/* Previous month dates */}
                {[28, 29, 30, 31].map((date) => (
                  <div key={`prev-${date}`} className="text-center text-sm text-gray-300 py-2 hover:bg-gray-50 rounded cursor-pointer">
                    {date}
                  </div>
                ))}

                {/* Current month dates */}
                {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => (
                  <div
                    key={date}
                    className={`text-center text-sm py-2 hover:bg-blue-50 rounded cursor-pointer ${
                      date === 8 ? 'bg-purple-600 text-white rounded-full' : 'text-gray-700'
                    }`}
                  >
                    {date}
                  </div>
                ))}

                {/* Next month dates */}
                {[1, 2, 3, 4, 5, 6, 7].map((date) => (
                  <div key={`next-${date}`} className="text-center text-sm text-gray-300 py-2 hover:bg-gray-50 rounded cursor-pointer">
                    {date}
                  </div>
                ))}
              </div>
            </div>

            {/* Homework Progress */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-4">Homework progress</h3>
              <div className="space-y-4">
                <div className="bg-purple-500 rounded-xl p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold">50%</div>
                      <div className="text-sm opacity-90">Styling with CSS</div>
                      <div className="text-xs opacity-75">12 tasks</div>
                    </div>
                    <button className="text-white">→</button>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-gray-800">63%</div>
                      <div className="text-sm text-gray-600">Basics of programming</div>
                      <div className="text-xs text-gray-500">18 tasks</div>
                    </div>
                    <button className="text-gray-400">→</button>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-gray-800">25%</div>
                      <div className="text-sm text-gray-600">Learn to Program in Java</div>
                      <div className="text-xs text-gray-500">10 tasks</div>
                    </div>
                    <button className="text-gray-400">→</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
