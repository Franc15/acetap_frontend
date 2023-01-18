import './App.css';
import Signup from './components/Signup';
import Profile from './components/LinkProfile';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {

  return (
    <div className="flex flex-col h-screen overflow-auto items-center bg-gray-900">
      <h1 className="text-2xl text-white font-semibold py-4">ACETAP</h1>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Signup />} /> */}
          <Route path="/:id" element={<Profile />} />
        </Routes>
      </Router>
      <p className="mt-6 mb-4 text-center text-white">Made with ❤️ by Acetap.</p>

    </div>
  );
}

export default App;
