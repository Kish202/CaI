
import './App.css'
import Navbar from './components/ui/navbar/Navbar';

// App.jsx


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neugray-900 to-neugray-800">
      <Navbar
      
      {/* Example content to demonstrate scroll effect */}
      <div className="pt-24 px-8">
        <div className="max-w-4xl mx-auto text-gray-300">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-500 mb-6">
            Welcome to Neumorphic Design
          </h1>
          
          <div className="space-y-24">
            {Array(10).fill(0).map((_, i) => (
              <div key={i} className="p-6 rounded-xl bg-gray-800 bg-opacity-50 shadow-neumorphic">
                <h2 className="text-2xl font-semibold text-purple-300 mb-4">
                  Section {i + 1}
                </h2>
                <p className="text-gray-400">
                  Scroll down to see the navbar transparency effect in action. 
                  This neumorphic design combines dark themes with subtle purple 
                  accents for a modern, glowy aesthetic.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
