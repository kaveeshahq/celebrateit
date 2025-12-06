import React from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import BottomBanner from '../components/BottomBanner'
import NewsLetter from '../components/NewsLetter'
import DeliverySection from '../components/DeliverySection'
import HomeFAQ from '../components/HomeFAQ'
import Seo from '../components/Seo'

const Home = () => {
  return (
      <>
      <Seo
        title="Celebrateit - Home"
        description="Browse our fresh and organic grocery selection."
      />
    <div className='mt-10'>
      <MainBanner />
      <Categories/>
      <BestSeller/>
      <BottomBanner/>
      <DeliverySection/>
      <HomeFAQ/>
      <NewsLetter/>
    </div>
        </>

  )
}

export default Home