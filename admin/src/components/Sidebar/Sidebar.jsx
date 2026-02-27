import React from 'react'
import './Sidebar.css'
import { MdAddCircleOutline, MdListAlt, MdShoppingCart } from "react-icons/md";
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <NavLink to={'/add'} className="sidebar-option">
            <MdAddCircleOutline className="icon" />
            <p>Add Items</p>
        </NavLink>
        <NavLink to={'/list'} className="sidebar-option">
            <MdListAlt className="icon" />
            <p>List Items</p>
        </NavLink>
        <NavLink to={'/orders'} className="sidebar-option">
            <MdShoppingCart className="icon" />
            <p>Orders</p>
        </NavLink>
      
    </div>
  )
}

export default Sidebar
