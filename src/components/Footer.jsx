// import React from "react";
// import { Facebook, Instagram, Twitter, Github } from "lucide-react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-10 mt-10">
//       <div className="max-w-6xl mx-auto px-6">

//         {/* Top Section - 3 Columns */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

//           {/* Brand */}
//           <div>
//             <p
//               className="gradient-text"
//               style={{ fontSize: "2rem", cursor: "default" }}
//             >
//               FLIM Flix
//             </p>
//             <p className="text-gray-400 mt-2">
//               Building modern web applications with love and clean code.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div className="flex-2/3 flex-col">
//             <p
//               className="gradient-text mb-2"
//               style={{ fontSize: "2rem", cursor: "default" }}
//             >
//               Quick Link
//             </p>
//             <ul >
//               <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li><br/>
//               <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li><br/>
//               <li><Link to="/services" className="text-gray-300 hover:text-white">Services</Link></li><br/>
//               <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li><br/>
//             </ul>
//           </div>

//           {/* Social Icons */}
//           <div>
//             <p
//               className="gradient-text mb-4"
//               style={{ fontSize: "2rem", cursor: "default" }}
//             >
//               Follow Us
//             </p>
//             <div className="flex space-x-4">
//               <Facebook className="w-6 h-6 hover:text-blue-500 cursor-pointer" />
//               <Instagram className="w-6 h-6 hover:text-pink-500 cursor-pointer" />
//               <Twitter className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
//               <Github className="w-6 h-6 hover:text-gray-300 cursor-pointer" />
//             </div>
//           </div>

//         </div>

//         {/* Bottom Section */}
//         <div className="border-t border-gray-700 mt-10 pt-4 text-center text-white">
//           <p>© {new Date().getFullYear()} Flim Flix. All rights reserved.</p>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;












import { Facebook, Instagram, Twitter, Github , Clapperboard} from "lucide-react";
 import { Link } from 'react-router-dom'
// import './Nav'
import React, { useState } from 'react'
// import flight from '../images/travel.png'
// import p1 from '../images/phone_7610921.png'
// import p2 from '../images/mail-icon_8056414.png'
// import p3 from '../images/clock_10945388.png'
// import './Footer.css'



const Footer = () => {
   
  return (
    <>
        
      
    <div className=' bg-black mt-20 text-white py-3 px-6'>
    <div class='grid grid-cols-1   md:grid-cols-2 lg:grid-cols-4 gap-10 ' >
    <div className='flex items-center space-x-4 '>
      <Clapperboard className="w-10 h-10 text-white Clapperboard" />
        <span className="gradient-text"  style={{ fontSize: "2.5rem", cursor: "default" }}> <Link to='/'>FLIM FLIX </Link>  </span>
    </div>
    
    
 
    </div>
    </div>
    <hr></hr>
      
    <div className=' bg-black text-white py-3 px-6'>
    <div class='grid grid-cols-1   md:grid-cols-2 lg:grid-cols-4 gap-10 ' >
        <div className=' items-center space-x-4 '>
            <h1 class=' font-bold  text-lg gradient-text'><Link to='/'>About Us</Link></h1>
            <h1 class='mt-4  text-start '><Link to='/'>Flim Flix is a modern entertainment platform created with the vision of providing high-quality, curated movie and series information. We focus on delivering a clean, fast, and enjoyable user experience—built with passion, creativity, and advanced web technologies.</Link></h1>
        </div>
        <div >
        < h1 class=' font-bold  text-lg gradient-text'><Link to='/'>Quick Links</Link></h1>
        <h1 class='mt-5'><Link to='/'>Home</Link></h1>
        <h1><Link to='movies/toprated'>Top Rated</Link></h1>
        <h1><Link to='movies/popular'>Popular</Link></h1>
        <h1><Link to='movies/upcoming'>Upcoming</Link></h1>
       
    
    </div>
    <div>
         <h1 class=' font-bold  text-lg gradient-text'><Link to='/'>SUPPORT</Link></h1>
         <h1 class='mt-5'><Link to='/'>Help Center</Link></h1>
       <h1><Link to='/'>Sumbit Request</Link></h1>
     <h1><Link to='/'>policies & Guides</Link></h1>
      
    </div>
    <div>
        <h1 class=' font-bold  text-lg gradient-text ml-5'><Link to='/'>Follow Us</Link></h1>
        <h1 className='card'>
<div class=  "flex  mt-5 gap-5 ">
  <Link to="#"></Link>
      <Facebook className="w-6 h-6 hover:text-blue-500 cursor-pointer" />
               <Instagram className="w-6 h-6 hover:text-pink-500 cursor-pointer" />
               <Twitter className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
           <Github className="w-6 h-6 hover:text-gray-300 cursor-pointer" />
</div>             

</h1>
    </div>
    </div>
    </div>
    <hr></hr>
    <div>
      <span class='text-white  bg-blue-950'>Copyrights @ 2025 skillcraft All Rights Reserved </span>
    </div>
    
  

      
    </>
  )
}

export default Footer
