import React from 'react';
import About from './About';
import Herosection from './Herosection';
import Projects from './Projects';
import { Partners } from './Partners';
import { Management } from './Management';


    function index() {
      return (
        <> 
          <Herosection /> 
          <About /> 
          <Projects/> 
          <Management/>
          <Partners/> 
        </>
      );
    }
    

    


export default index;
