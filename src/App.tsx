import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import BaseLayout from "./common/layout/BaseLayout";
import Landing from "./pages/landing/Landing";
import PartyDetails from "./pages/partyDetails/PartyDetails";
import Home from "./pages/home/Home";
import CreateParty from "./pages/createParty/CreateParty";

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
        <Route
          path="/party-details"
          element={
            <BaseLayout>
              <PartyDetails />
            </BaseLayout>
          }
        />
        <Route
          path="/create-party"
          element={
            <BaseLayout>
              <CreateParty />
            </BaseLayout>
          }
        />
        <Route
          path="/"
          element={
            <BaseLayout>
              <Landing />
            </BaseLayout>
          }
        />
        <Route
          path="/home"
          element={
            <BaseLayout>
              <Home />
            </BaseLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
