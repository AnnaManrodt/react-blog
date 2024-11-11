import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Form from './pages/Form';
import BlogPost from './pages/BlogPosts';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/post' element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
