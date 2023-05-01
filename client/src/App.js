import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
// import Register from "./pages/Register/Register";
// import Login from "./pages/Login/Login";
import Navigation from "./components/shared/Navigation/Navigation";
import Authenticate from "./pages/Authenticate/Authenticate";
import Activate from "./pages/Activate/Activate";
import Rooms from "./pages/Rooms/Rooms";

const isAuth = false;
const user = {
  activated: false,
};

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <GuestRoute>
              <Home />
            </GuestRoute>
          }
        />
        <Route
          path="/authenticate"
          element={
            <GuestRoute>
              <Authenticate />
            </GuestRoute>
          }
        />

        <Route
          path="/activate"
          element={<SemiProtectedRoute children={<Activate />} />}
        />

        <Route path="/rooms" element={<ProtectedRoute children={<Rooms />} />} />

        {/* <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

const GuestRoute = ({ children }) => {
  return isAuth ? <Navigate to="/rooms" /> : children;
};

const SemiProtectedRoute = ({ children }) => {
  return !isAuth ? (
    <Navigate to="/" />
  ) : isAuth && !user.activated ? (
    children
  ) : (
    <Navigate to="/rooms" />
  );
};

const ProtectedRoute = ({ children }) => {
  return !isAuth ? (
    <Navigate to="/" />
  ) : isAuth && !user.activated ? (
    <Navigate to="/activate" />
  ) : (
    children
  );
};

export default App;
