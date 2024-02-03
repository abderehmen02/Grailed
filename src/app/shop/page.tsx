import Footer from '@/components/layout/footer'
import { Header } from '@/components/layout/headers'
import React from 'react'

const page = () => {
  return (
      <>
          <Header />
          <div className="px-4 sm:px-16 min-h-[400px] py-8">
              shop all
          </div>
          <Footer/>
    </>
  )
}

export default page