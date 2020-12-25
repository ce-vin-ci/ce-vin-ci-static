import React from 'react';

import { StaticQuery, graphql } from 'gatsby';

const query = graphql`
query MyQuery {
  allStrapiBogPosts {
    edges {
      node {
        strapiId
        Title
      }
    }
  }
}
`;

const IndexPage = () => (
  <StaticQuery
  query={query}
  render={data => (
    <ul>
      {data.allStrapiBogPosts.edges.map(blogPost => (
        <li key={blogPost.node.strapiId}>{blogPost.node.Title}</li>
      ))}
    </ul>
  )}
/>
);

export default IndexPage;
