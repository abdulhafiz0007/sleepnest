import React from 'react'
import { Header } from '../../components/Header/Header'
import { Hero } from '../../components/Hero/Hero'
import { Services } from '../../components/Services/Services';
import { Artice } from '../../components/Article/Artice';
import { Collection1 } from '../../components/Collection1/Collection1';
import { Artice2 } from '../../components/Article2/Article2';
import { Collection2 } from '../../components/Collection2/Collection2';
import { Artice3 } from '../../components/Article3/Article3';
import { Collection3 } from '../../components/Collection3/Collection3';
import { News } from '../../components/News/News';
import { Footer } from '../../components/Footer/Footer';

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Artice />
      <Collection1 />
      <Artice2 />
      <Collection2 />
      <Artice3 />
      <Collection3 />
      <News />
      <Footer />
    </>
  )
}
