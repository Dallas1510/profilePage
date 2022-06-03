import React from 'react';
// import { Routes, Route } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AdditionalData from '../pages/AdditionalData/AdditionalData';
import Interview from '../pages/Interview/Interview';
import PersonalData from '../pages/Personal data/PersonalData';
import classes from './PersonDetails.module.scss';

export default function PersonDetails() {
  return (
    <Tabs className={classes.reactTabs}>
      <TabList>
        <Tab>Personal data</Tab>
        <Tab>Additional data</Tab>
        <Tab>Interview</Tab>
      </TabList>
			
      <TabPanel>
        <PersonalData />
      </TabPanel>
      <TabPanel>
        <AdditionalData />
      </TabPanel>
      <TabPanel>
        <Interview />
      </TabPanel>
    </Tabs>
  );
}
