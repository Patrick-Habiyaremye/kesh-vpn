import React from 'react';
import pic1 from './assets/image1.png'

const Home = () =>{
    return(
        <>
            <div class="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10">
            <div class="pt-15">
              <p class="text-4xl"><b>Want anything to be</b></p>
              <p class="text-4xl"><b>easy with Lesles VPN.</b></p>
              <p class="text-gray-500 pt-7">Provide a network for allyour needs with ease and fun using <b>LaslesVPN</b></p>
              <p class="text-gray-500 pb-10">discover interesting from us</p>
              <button class="text-white bg-red-500 rounded-md w-34 h-12">Get started</button>
              </div>
            <div class="pt-10 pl-30">
                <img src={pic1} class="w-full max-w-[500] h-auto"/>
            </div>
          </div>
        </>
    )
}

export default Home

