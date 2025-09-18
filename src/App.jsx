import Datepicker from './components/Datepicker.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-indigo-600">Hello KBTG</h1>
        <div className="flex justify-center">
          <Datepicker />
        </div>
      </div>
    </div>
  )
}
