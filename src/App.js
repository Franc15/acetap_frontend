import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/LinkProfile';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './auth/Auth';
import PrivateRoute from './auth/PrivateRoute';
import Preferences from './components/Preferences';

import { AuthContext } from './auth/Auth';

import { auth } from './auth/base';
import { signOut } from 'firebase/auth';
import Protected from './auth/Protected';



function App() {

  return (
    <div className="flex flex-col h-screen overflow-auto items-center bg-gradient-to-r from-slate-900 to-slate-700">
      <div className="flex flex-row w-full px-4 py-4">
        <button className="py-2 px-4 bg-slate-700
        text-white hover:bg-slate-800 rounded-md">Log In</button>
        <button className="py-2 px-4 bg-slate-700
        text-white hover:bg-slate-800 rounded-md" onClick={() => signOut(auth)}>Log Out</button>
      </div>  
      <h1 className="text-2xl text-white font-bold py-4">ACETAP</h1>
      <AuthProvider>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Signup />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/u/:id" element={<Profile />} />
          <Route path="/preferences" element={
            <Protected>
              <Preferences />
            </Protected>
           } />
          
        </Routes>
      </Router>
      </AuthProvider>
      <p className="mt-6 mb-4 text-center text-white">Made with ❤️ by Acetap.</p>

    </div>
  );

}

function RequireAuth({ children, redirectTo }) {
  let isAuthenticated = AuthContext.currentUser;
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

export default App;
