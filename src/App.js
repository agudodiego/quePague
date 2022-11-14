import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from './routes/ProtectedRoutes';
import PublicRoutes from './routes/PublicRoutes';
import Edit from './pages/Edit';
import Banner from './components/Banner';

function App() {

  return (
      <BrowserRouter>
        <Banner />

        <Routes>

          <Route path='/' element={<PublicRoutes />}>
            <Route index element={<Login />} />
            <Route path='*' element={<h1>Error</h1>} />
          </Route>

          <Route element={<ProtectedRoutes />} >
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/edit/:id' element={<Edit />} />
          </Route>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
