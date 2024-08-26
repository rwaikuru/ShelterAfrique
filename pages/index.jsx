import React from 'react';
import About from './About';
import Projects from './Projects';
import { Partners } from './Partners';
import { Management } from './Management';
import FAQSection from './FAQS';
import Newsroom from './newsroom';
import Globe from './globe/page';
import Impact from './Impact';
import MiniHero from './Minihero';
import Navbarmain from '@/components/Navbar';
import HeroScrollDemo from './Herosection';

    function index() {
      return (
        <> 
        <Navbarmain/>
       <HeroScrollDemo/>
       <Impact/>
       <MiniHero/>
         
        

          
        </>
      );
    }
    

    


export default index;
