import React from 'react'
import { Header } from '../header/Header'
import { Footer } from '../footer/Footer'
import "./MainLayout.css"

export const MainLayout = ({children}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div>
        <Header/>
        <div className='main'>
          {children}
        </div>
        <Footer/>
    </div>
  )
}
