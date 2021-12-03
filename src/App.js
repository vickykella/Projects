import axios from 'axios';
import React, { useState }  from 'react';
import { useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function App() {
  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json')
    .then(res => {
      if(res.status === 200)
        setCandidates(res.data)
    })
  }, [])

  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Shortlisted Candidates</Tab>
          <Tab>Rejected Candidates</Tab>
        </TabList>

        <TabPanel>
          <div style={{padding: '1%'}}>
            {candidates.map((can, index) => {
              return <span> <img src={can.Image} style={{width:'50px', height:'50px'}} /> {can.name} <br /> </span>
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Rejected Candidates</h2>
        </TabPanel>
      </Tabs>
    </>
  );
}

export default App;
