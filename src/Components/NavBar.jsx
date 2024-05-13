import React from "react";


const NavBar = ()=>{


  return(
    
    <nav className="navBar">
        <h2>ShareScape</h2>
         <ul>
           <li><a href="/">Home</a></li>
           <li><a href="/explore">Explore</a></li>
           <li><a href="/create">Create</a></li>
           <li><a href="/user">User</a></li>
           <li><a href="/signIn">Sign In</a></li>
        </ul>

    </nav>
  )
}

export default NavBar;