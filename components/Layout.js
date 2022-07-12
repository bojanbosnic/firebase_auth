import React from 'react'


export default function Layout({ children }) {
    if(localStorage.getItem('Token')) {

    }

    return (
      <>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </>
    )
  }