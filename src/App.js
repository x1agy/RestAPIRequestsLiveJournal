import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home';
import CreateNewBlog from './Pages/CreateNewBlog';
import BlogInfo from "./Pages/ReadMorePage";
import "./Pages/Css/index.css";
import Header from './Components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/createNewBlog' element={<CreateNewBlog />} />
        <Route path='/blogInfo/:id' element={<BlogInfo />} />
      </Routes>
    </>
  );
}

export default App;
