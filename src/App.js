import { Link, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import BookList from "./pages/BookList";
import Book from "./pages/Book"
import NewBook from "./pages/NewBook";

function App() {

  return <>
    <h1>HELLO WORLD IM APP.JS</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/books">Books</Link></li>
    </ul>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/books" element={<BookList/>}/>
      <Route path="/books/:id" element={<Book/>}/>
      <Route path="/books/new" element={<NewBook/>}/>
    </Routes>
  </>;
}

export default App;
