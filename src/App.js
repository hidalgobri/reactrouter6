import { Link, Routes, Route, NavLink } from "react-router-dom"
import Home from "./pages/Home"
import BookList from "./pages/BookList";
import Book from "./pages/Book"
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";
import BookLayout from "./pages/BookLayout";
import Contact from "./pages/Contact";

function App() {

  return <>
    <h1>HELLO WORLD IM APP.JS</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/books">Books</Link></li>
      <li><NavLink style={({isActive}) => { return isActive ? {color: "green"} : {} }} to="/contact">Contact</NavLink></li>
    </ul>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/books" element={<BookLayout/>}>
        <Route index element={<BookList/>}/>
        <Route path=":id" element={<Book/>}/>
        <Route path="new" element={<NewBook/>}/>
      </Route>
      <Route path="/contact" element={<Contact/>}/>

    <Route path="*" element={<NotFound/>}/>
    </Routes>
  </>;
}

export default App;
