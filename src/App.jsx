import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import { NavBar } from './Componentes/NavBar/NavBar'
import { ItemListContainer } from './Componentes/itemListContainer/ItemListContainer'
import { ItemDetailContainer } from './Componentes/ItemDetailContainer/ItemDetailContainer';

export function App() {
  return (
    <Router>
      <section className='container'>  
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:category' element={<ItemListContainer/>}/>
            <Route path='/item/:pid' element={<ItemDetailContainer/>} />
         </Routes>
      </section>
    </Router>  
  );
};
