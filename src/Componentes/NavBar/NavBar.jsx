import { Link, NavLink, useParams } from 'react-router-dom'
import '../App.css'
import { CartWidget } from '../CartWidget/CartWidget'

export function NavBar () {


    return(
      <nav className="navbar bg-black fontMenu nav" data-bs-theme="dark">
        <img className="logo" src="/public/logo.png" alt="" />
        <Link to='/'><button className='btn btn-black fontSize'>Productos</button></Link>
        <NavLink to='/category/2x1'><button className='fontSize btn btn-black'>Ingresos</button></NavLink>
        <NavLink to='/category/Ingresos'><button className='btn btn-black fontSize'>2x1</button></NavLink>
        <NavLink to='/category/Nosotros'><button className='btn btn-black fontSize'>Nosotros</button></NavLink>
        <CartWidget />
      </nav>
    )
  }


  //export default NavBar ;