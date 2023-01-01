import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home'
import { BookList } from './Pages/BookList'
import { Book } from './Pages/Book'
import { NewBook } from './Pages/NewBook'
import { NotFound } from './Pages/NotFound'
import { BookLayout } from './BookLayout';
import './App.css';
import { NewspaperRoutes } from './NewspaperRoutes';

function App() {
  return (
    <main className='App'>

      <nav className='navigation'>
        <div className="Container">
          <ul className='navigation_wrapper'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>

            <li>
              <Link to="/newspapers">Newspapers</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* There can be multiple <Routes> defined */}
      <Routes>
        <Route path="/books" element={<h1 className='extra'>Just an extra element for Books page</h1>} />
      </Routes>

      <Routes>
        <Route path="/" element={<Home />} />

        {/* BookLayout will be present on all '/books' routes */}
        <Route path="/books" element={<BookLayout />}>
          {/* Path for 'URL/books' */}
          <Route index element={<BookList />} />
          {/* Path for 'URL/books/:id' */}
          <Route path=":id" element={<Book />} />
          {/* Path for 'URL/books/new' */}
          <Route path="new" element={<NewBook />} />
        </Route>

        {/* Nested Routes */}
        <Route path="/newspapers/*" element={<NewspaperRoutes />} />

        {/* Will match every single url. Will be triggered if none of the routes above match. */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>

  );
}

export default App;
