import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Buzz from './Pages/Buzz'
import Careers from './Pages/Careers'
import Company from './Pages/Company'
import Blog from './Pages/Blog'
import Games from './Pages/Games'
import Contact from './Pages/Contact'
import Blog_ext from './Pages/Blog_ext'
import { useEffect } from 'react';
function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
     <Routes>
        <Route path="/" element={<Buzz/>}/>      
        <Route path="/careers" element={<Careers/>}/>      
        <Route path="/company" element={<Company/>}/>      
        <Route path="/contact" element={<Contact/>}/>      
        <Route path="/games" element={<Games/>}/>      
        <Route path="/blog" element={<Blog/>}/>      
        <Route path="/blog_ext" element={<Blog_ext/>}/>      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
