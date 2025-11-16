import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Counter from "./pages/Counter";
import DigitalWatch from "./pages/DigitalWatch";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />

      <Route path="/dashboard" element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }>
  
        <Route index element={<Dashboard />} />
        {/* <Route path="" element={<Dashboard />} /> */}
        <Route path="counter" element={<Counter />} />
        <Route path="digital-watch" element={<DigitalWatch />} />
      </Route>

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;
