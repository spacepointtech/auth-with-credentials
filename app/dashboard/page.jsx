// import UserInfo from "@/components/UserInfo";

// export default function Dashboard() {
//   return <UserInfo />;
// }



'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { signOut } from "next-auth/react";
 import { useSession } from "next-auth/react";

const SubscriptionPage = () => {
  const { data: session } = useSession();
  const [labelArtists, setLabelArtists] = useState(5);
  const [labelPrice, setLabelPrice] = useState(4899);


  const handleArtistSlider = (e) => {
    const sliderValue = parseInt(e.target.value);
    let adjustedArtists;
    if (sliderValue <= 20) {
      adjustedArtists = Math.floor(sliderValue / 5) * 5; 
    } else {
      adjustedArtists = Math.floor((sliderValue - 20) / 10) * 10 + 20; 
    }

    setLabelArtists(adjustedArtists);

    const priceMap = {
      5: 4899,
      10: 8199,
      15: 10299,
      20: 12899,
      30: 15699,
      40: 18199,
    };

    setLabelPrice(priceMap[adjustedArtists]);
  };

  return (
    <div className="relative min-h-screen bg-black bg-opacity-40 font-poppins">
      <Image 
        src="/images/logo.png" 
        alt="Young CEO Entertainment" 
        width={100} 
        height={100}
        onClick={() => signOut()}
        className="cursor-pointer"
      />
      <div className="absolute top-[120px] w-full h-[calc(100%-320px)]">
        <Image
          src="/images/subsback.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="opacity-90"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="text-white mt-6 space-y-6">
          <div className="flex space-x-6">
            {/* Independent Artist Plan Box */}
            <div className="bg-[#484848] bg-opacity-[0.36] p-6 rounded-lg border border-[#A6A6A6] text-left flex flex-col justify-between w-[370px]">
              <div>
                <h2 className="text-xl font-bold">Independent Artist</h2>
                <p className="text-4xl font-semibold mt-5">₹ 1001 / Year</p>
                <p className="text-sm text-opacity-5 mt-5">₹ 83.41 / Month</p>
                <p className="text-sm text-opacity-50 mt-8">(This plan is only available on an annual subscription basis)</p>
                <hr className="my-4 border-t border-gray-500 opacity-50" />
                <div className="space-y-2">
                  <p>Upload Unlimited Songs and Lyrics</p>
                  <p>Spotify Verification</p>
                  <p>Create royalty splits</p>
                  <p>Access to 21 free tools</p>
                  <p>IPhone app Access</p>
                  <p>Synced Lyrics in Apple Music</p>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <button className="bg-white text-black py-2 px-6 rounded-full">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Independent Duo Plan Box */}
            <div className="bg-[#484848] bg-opacity-[0.36] p-6 rounded-lg border border-[#A6A6A6] text-left flex flex-col justify-between w-[370px]">
              <div>
                <h2 className="text-xl font-bold">Independent Duo</h2>
                <p className="text-4xl font-semibold mt-5">₹ 2001 / Year</p>
                <p className="text-sm text-opacity-5 mt-5">₹ 166.75 / Month</p>
                <p className="text-sm text-opacity-5 mt-8">(This plan is only available on an annual subscription basis)</p>
                <hr className="my-4 border-t border-gray-500 opacity-50 mt-5" />
                <div className="space-y-2">
                  <p>Upload Unlimited Songs and Lyrics</p>
                  <p>Spotify Verification</p>
                  <p>Create royalty splits</p>
                  <p>Access to 21 free tools</p>
                  <p>IPhone app Access</p>
                  <p>Synced Lyrics in Apple Music</p>
                  <p>Daily Streaming Stats</p>
                  <p>Customized Label Name</p>
                  <p>Release date and iTunes pricing</p>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <button className="bg-white text-black py-2 px-6 rounded-full">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Label Plan Box with Slider */}
            <div className="bg-[#484848] bg-opacity-[0.36] p-6 rounded-lg border border-[#A6A6A6] text-left flex flex-col justify-between w-[370px]">
              <h2 className="text-xl font-bold">Independent Label Plan</h2>
              <p className="text-4xl font-semibold mt-1">₹ {labelPrice} / Year</p>
              <p className="text-sm text-opacity-50 mt-5">₹ {(labelPrice / 12).toFixed(2)} / Month</p>
              <div className="flex justify-between items-center mt-1">
                <span>{labelArtists}</span>
                <input
                  type="range"
                  min="5"
                  max="40"
                  step="1"
                  value={labelArtists}
                  onChange={handleArtistSlider}
                  className="slider w-[275px]"
                  style={{ 
                    WebkitAppearance: 'none', 
                    appearance: 'none', 
                    backgroundColor: 'white', 
                    height: '8px', 
                    borderRadius: '5px' 
                  }}
                />
              </div>

              <p className="text-sm text-opacity-50 mt-3">(This plan is available on an annual subscription basis)</p>
              <hr className="my-4 border-t border-gray-500 opacity-50 mt-5" />

              <div className="space-y-2 mt-1">
                <p>Upload Unlimited Songs and Lyrics</p>
                <p>Spotify Verification</p>
                <p>Create royalty splits</p>
                <p>Access to 21 free tools</p>
                <p>IPhone app Access</p>
                <p>Synced Lyrics in Apple Music</p>
                <p>Daily Streaming Stats</p>
                <p>Customized Label Name</p>
                <p>Release date and iTunes pricing</p>
                <p>1TB File Sharing</p>
                <p>RIAA Gold & Platinum Monitoring</p>
              </div>
              <div className="flex justify-center mt-4">
                <button className="bg-white text-black py-2 px-6 rounded-full"
                 onClick={() => handlePayment(labelPrice, 'Independent Label')}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Single Track Plan Box */}
          <div className="bg-[#484848] bg-opacity-[0.36] p-6 rounded-lg border border-[#A6A6A6] mt-10  w-full text-left">
            <h2 className="text-xl font-bold">Want to Distribute a Single Track?</h2>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm mt-10">Upload one song to major platforms for just ₹399</p>
                <p className="text-xs text-opacity-10 mt-3">(Note: This plan does not include access to the dashboard)</p>
              </div>
              <button className="bg-white text-black py-2 px-4 rounded-full">
                Pay ₹399 Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;