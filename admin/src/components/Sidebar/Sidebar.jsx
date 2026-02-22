import React from 'react'
import './Sidebar.css'
import { MdAddCircleOutline, MdListAlt, MdShoppingCart } from "react-icons/md";


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-option">
            <MdAddCircleOutline className="icon" />
            <p>Add Items</p>
        </div>
        <div className="sidebar-option">
            <MdListAlt className="icon" />
            <p>List Items</p>
        </div>
        <div className="sidebar-option">
            <MdShoppingCart className="icon" />
            <p>Orders</p>
        </div>
      
    </div>
  )
}

export default Sidebar
