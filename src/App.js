import './App.css';
import Trainings from './components/Trainings';
import Customers from './components/Customers';
import {NavBar} from "./components/Navbar";
import Calendar from './components/Calendar'
import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function App() {
    const [value, setValue] = useState('customers');
    const handleTabChange = (event, value) => {
        setValue(value);
    };

    return (
        
    
      <div className="App">

        <React.Fragment>
            <NavBar/>
        </React.Fragment>
        
        
          <Tabs value={value} onChange={handleTabChange}>
              <Tab value="customers" label="Customers" />
              <Tab value="trainings" label="Trainings" />
              <Tab value="calendar" label="Calendar" />
          </Tabs>
          {value === 'customers' && <Customers />}
          {value === 'trainings' && <Trainings />}
          {value === 'calendar' && <Calendar />}
          
          
      </div>);
  }
  
  
  
