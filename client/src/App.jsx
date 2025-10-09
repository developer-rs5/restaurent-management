import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './component/Navbar/navbar'
import Footer from './component/Footer/footer'
import Home from './component/Page/Home/Home.jsx'
import About from './component/Page/About/About.jsx'
import Manu from './component/Page/Manu/Manu.jsx'
import Blog from './component/Page/Blog/Blog.jsx'
import Book from './component/Page/Book/Book.jsx'
import Pags from './component/Page/Pags/Pags.jsx'
import Contact from './component/Page/Contact/Contact.jsx' 

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/manu" element={<Manu />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/book" element={<Book />} />
          <Route path="/pags" element={<Pags />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
         <Footer /> 
      </Router>
    </>
    
  )
}

export default App
