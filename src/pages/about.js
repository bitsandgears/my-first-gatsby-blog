// Step 1: Import your component
import * as React from 'react';
import Layout from '../components/layout';


// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Enthusiastic alternative wizard!</p>
      <em>Hobbies:</em>
      <ul>
        <li>Darts</li>
        <li>American Football</li>
        <li>Book club</li>
      </ul>
    </Layout> 
  )
}

// Step 3: Export your component
export default AboutPage