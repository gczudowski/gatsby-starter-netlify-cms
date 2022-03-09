import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

const TestPage = ({ data }) => {
  console.log('#debug testPage data', data);
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <div>{post.frontmatter.title}</div>
      <Content content={123}></Content>
      <HTMLContent className="content" content={post.html} />
    </Layout>
  );
};

TestPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TestPage;

export const TestPageQuery = graphql`
  query testPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
