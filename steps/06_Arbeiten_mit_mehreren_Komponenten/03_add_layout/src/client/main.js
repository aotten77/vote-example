// React
import React from 'react';
import ReactDOM from 'react-dom';

import VotingComponent from './components/VotingComponent';
import Layout from './components/Layout';

// Sample data
const vote = {
  title:       'How is your day?',
  description: 'Tell me: how has your day been so far?',
  totalVotes:  20,
  choices:     [
    {id: 'choice_1', title: 'Good', count: 7, percent: 35},
    {id: 'choice_2', title: 'Bad', count: 12, percent: 60},
    {id: 'choice_3', title: 'Not sure yet', count: 1, percent: 5}
  ]
};

// Render application
ReactDOM.render(
  <Layout>
    <VotingComponent vote={vote}/>
  </Layout>,
  document.getElementById('voteAppMountPoint')
);









