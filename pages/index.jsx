import React from 'react';
import About from './About';
import Herosection from './Herosection';
import Projects from './Projects';
import { Partners } from './Partners';
import { Management } from './Management';
import FAQSection from './FAQS';
import Newsroom from './newsroom';
import Globe from './globe/page';

    function index() {
      return (
        <> 
          <Herosection /> 
          <About /> 
          <Projects/> 
          <Management/>
        
        <FAQSection/>
      <Globe/>
          <Partners/> 

          
        </>
      );
    }
    

    


export default index;
