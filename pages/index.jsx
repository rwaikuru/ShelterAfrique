import React from 'react';
import About from './About';
import Herosection from './Herosection';
import Projects from './Projects';
import { Partners } from './Partners';
import { Management } from './Management';
import FAQSection from './FAQS';
import Newsroom from './newsroom';
import Globe from './globe/page';
import Impact from './Impact';
import MiniHero from './Minihero';
import Navbarmain from '@/components/Navbar';

    function index() {
      return (
        <> 
        <Navbarmain/>
          <Herosection /> 
          <MiniHero/>
          
          <About /> 
          <Impact/>
          <Projects/> 
          <Management/>
        <FAQSection/>
      <Globe/>
          <Partners/> 

          
        </>
      );
    }
    

    


export default index;
