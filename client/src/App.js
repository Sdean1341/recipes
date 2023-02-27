import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './components/Main';
import Detail from './components/Detail';
import Update from './components/Update';
import AddRecipe from './components/AddRecipe';
import About from './components/About';

function App() {

  return(
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route element={<Main/>} path='/recipe' default/>
        <Route element={<AddRecipe/>} path='/recipe/add' />
        <Route element={<Detail/>} path='/recipe/:id'/>
        <Route element={<Update/>} path='/recipe/edit/:id'/>
        <Route element={<About />} path='recipe/about' />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
