import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthResponse } from './components/forms/AuthResponse';

import './App.css'
import { AuthForm } from './components/forms/AuthForm';

const Health: React.FC = () => (<h3>Hey There!!! The App is Healthy</h3>);


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthForm />} />
          <Route path="/auth-response" element={<AuthResponse />} />
          <Route path="/health" element={<Health />} />
        </Routes>
      </BrowserRouter>
    </div>)
}

export default App
