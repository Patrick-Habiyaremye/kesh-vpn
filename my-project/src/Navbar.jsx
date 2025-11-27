import React from 'react';
import pic1 from './assets/image.png'

const Navbar = () =>{
    return(
        <>
        <nav class="flex py-5">
           <div class="flex">
            <img src={pic1} class="w-10 h-7"/>
            <p class="pl-3"><b>Lesles VPN</b></p>
           </div>
           <div class="flex gap-10 pl-60 text-gray-500">
             <p>About</p>
             <p>Features</p>
             <p>Pricing</p>
             <p>Testimonials</p>
             <p>Help</p>
           </div>
           <div class="flex pl-40 gap-10 ">
             <p>Sign In</p>
             <button class="w-20 h-8 text-red-400 border border-red-400 rounded">Sign Up</button>
           </div>
        </nav>
        </>
    )
}

export default Navbar;