import * as React from "react";
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hello There, I'm the proud creator of this webpage!</p>
      <StaticImage src="../images/arealhouse.jpeg" alt="a real house"></StaticImage>
    </Layout>
  )
}

export default IndexPage
