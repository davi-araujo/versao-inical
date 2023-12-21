import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import { useState, useCallback, createContext, useMemo } from "react";
import HomePage from "./pages/HomePage";
import EnemyList from "./pages/EnemyList";
import EnemyPage from "./pages/EnemyPage";
import Battles from "./pages/Battles";
import DoingMission from "./pages/DoingMission";

export const UserContext = createContext(null);

function AppRouter() {
  const [isLogged, setIsLogged] = useState(false);
  
  const [user, setUser] = useState();
  const login = useCallback((response) => setUser(response), []);
  const contextUser = useMemo(() => ({
    user,
    login
  }), [user, login]);

  if (!isLogged) {
    return (
      <UserContext.Provider value={contextUser}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login setIsLogged={setIsLogged}/>} />
            <Route path="/cadastro" element={<SignUp />} />
          </Routes>
        </BrowserRouter> 
      </UserContext.Provider>
    )
  }

  return (
    <UserContext.Provider value={contextUser}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage setIsLogged={setIsLogged}/>} />
          <Route path="/perfil" element={<Profile setIsLogged={setIsLogged}/>} />
          <Route path="/adversarios" element={<EnemyList />} />
          {user.adversarios.map(adversario => <Route key={adversario.nome} path={`/adversario/${adversario.nome}`} element={<EnemyPage adversario={adversario}/>} />)}
          <Route path="/missoes" element={<Battles />} />
          <Route path="/realizando-missao" element={<DoingMission />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default AppRouter;
