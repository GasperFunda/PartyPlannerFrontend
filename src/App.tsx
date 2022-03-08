import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import BaseLayout from "./common/layout/BaseLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <BaseLayout>
              <Login />
            </BaseLayout>
          }
        />
        <Route
          path="/register"
          element={
            <BaseLayout>
              <Register />
            </BaseLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
