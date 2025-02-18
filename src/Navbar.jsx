import React from 'react'

export const Navbar = () => {
  return (
    <>
    <nav className="absolute top-0 left-0 w-full p-4 flex justify-end items-center text-white px-10"
    style={{
      background: "rgba(244, 244, 244, 0.29)",
      backdropFilter: "blur(7.4px)",
    }}
  >
    <div className="flex space-x-6 mr-6">
      <a href="#" className="flex w-[159px] h-[46px] p-[10px] justify-center items-center gap-[10px] hover:underline">
        Home
      </a>
      <a href="#" className="flex w-[159px] h-[46px] p-[10px] justify-center items-center gap-[10px] hover:underline">
        About Us
      </a>
      <a href="#" className="flex w-[159px] h-[46px] p-[10px] justify-center items-center gap-[10px] hover:underline">
        Contact Us
      </a>
    </div>
    <button className="text-white font-semibold"
      style={{
        borderRadius: "100px",
        border: "1px solid #FFC779",
        background: "linear-gradient(90deg, #900 0%, #A01626 100%)",
        display: "flex",
        width: "159px",
        height: "46px",
        padding: "10px",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      RePayment
    </button>
  </nav>
    </>
  )
}
