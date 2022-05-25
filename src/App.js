
import User from './pages/User';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useSelector } from "react-redux";
import Login from './pages/Login';




function App() {
  const user = useSelector((state) => state.themeApp.isLoggedIn);;

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={user ? <User /> : <Navigate to="/login" />}>
          </Route>
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}>
          </Route>
        </Routes>
      </Router>
   </>
  );
}

export default App;
