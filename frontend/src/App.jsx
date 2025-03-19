import useAuthStore from "./store/useAuthStore";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Header from "./components/layout/Header";
import StarsBackground from "./components/layout/StarsBackground";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreateRecipe from "./pages/CreateRecipe";

function App() {
  const { token } = useAuthStore();

  return (
    <div className="app relative">
      <Router>
        <StarsBackground />
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={token ? <Home /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/create-recipe" 
            element={token ? <CreateRecipe /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/register" 
            element={!token ? <Register /> : <Navigate to="/" />} 
          />
          <Route 
            path="/login" 
            element={!token ? <Login /> : <Navigate to="/" />} 
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
