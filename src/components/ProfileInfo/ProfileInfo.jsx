import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AdditionalData from '../pages/AdditionalData/AdditionalData';
import Interview from '../pages/Interview/Interview';
import PersonalData from '../pages/Personal data/PersonalData';
import classes from './ProfileInfo.module.scss';
import PersonPhoto from '../PersonPhoto/PersonPhoto';

export default function ProfileInfo() {
  return (
<div className={classes.profile}>
      <Tabs className={classes.reactTabs}
      selectedTabClassName={classes.active.toString()}>
        <TabList className={classes.tabList}>
          <Tab className={classes.tab}>Personal data</Tab>
          <Tab className={classes.tab}>Additional data</Tab>
          <Tab className={classes.tab}>Interview</Tab>
        </TabList>
  
        <div className={classes.personInfo}>
          <PersonPhoto />
          <div className={classes.tabPanel}>
            <TabPanel>
              <PersonalData />
            </TabPanel>
            <TabPanel>
              <AdditionalData />
            </TabPanel>
            <TabPanel>
              <Interview />
            </TabPanel>
          </div>
        </div>
      </Tabs>
</div>
  );
}
