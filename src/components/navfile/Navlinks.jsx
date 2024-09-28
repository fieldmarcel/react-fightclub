

 import React from "react";
import { Link } from "react-router-dom";
 const NavLinks = () =>{
     return(
         <nav className="NavLinks ">
         <ul>
             <li>
             <Link to="/coaches" className="nav px-6">
              COACHES{" "}
            </Link>
             </li>
             <li>
             <Link to="/" className="nav px-6">
              HOMEPAGE{" "}
            </Link>
             </li>
             <li>
             <Link to="/" className="nav px-6">
              HOMEPAGE{" "}
            </Link>
             </li>
             <li>
             <Link to="/" className="nav px-6">
              HOMEPAGE{" "}
            </Link>
             </li>
             <li>
             <Link to="/coaches" className="nav px-6">
              COACHES{" "}
            </Link>
             </li>
             <li>
             <Link to="/coaches" className="nav px-6">
              COACHES{" "}
            </Link>
             </li>
         </ul>
     </nav>
     )
 }

 export default NavLinks;
