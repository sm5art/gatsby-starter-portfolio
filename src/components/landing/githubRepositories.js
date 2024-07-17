import React, { useState } from "react"
import { Row, Col, } from 'antd';
import { useStaticQuery, graphql } from "gatsby";

import jumboStyles from './styles/jumbotron.module.css';
import { IS_MOBILE } from '../../utils/mobile';
import { rhythm } from '../../utils/typography';
import { SectionNumber } from './common';
import fetch from 'node-fetch';

const TOP_MARGIN = 7;
// extract ref from here
// refCallback is the way we pass the reference back to the index component
const GithubRepositories = ({refCallback}) => {
      // Replace "your-username" with the username of the user whose repositories you want to retrieve
    const githubUsername = 'sm5art';

    // Set up the URL for the API request
    const apiUrl = `https://api.github.com/users/${githubUsername}/repos`;
    const [data, setData] = useState();
    // Send a GET request to the API using fetch()
    if(data == undefined) {
      fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Do something with the data (e.g., display it in an HTML element)
        // sort data based on updated_at value descending
        data.sort((a,b) => (new Date(b.updated_at)) - (new Date(a.updated_at)));

        setData(data);
      })
      .catch(error => console.error('Error retrieving user repositories:', error));
    }
    console.log(data);
    return (
      <div ref={refCallback} style={{ marginTop:rhythm(TOP_MARGIN),}} className={IS_MOBILE ? jumboStyles.jumbotronMobile : jumboStyles.jumbotron}>
        <Row><SectionNumber number={4}/></Row>
        <h1>GitHub</h1>
        {data && data.map(ele => 
          <Row style={{ marginTop:rhythm(1),}}>
            <Row><a href={ele.html_url}>{ele.name}</a></Row>
            <Row><span>{ele.description}</span></Row>
            <Row><span>Last updated: {ele.updated_at}</span></Row>
            <Row><span>Created: {ele.created_at}</span></Row>
          </Row>
        )}
      </div>
    );
}

export default GithubRepositories;