import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

function SonamainPage({ data, test }) {
  const {
    frontmatter: {
      welcomeSection: { title, subtitle, buttonLabel },
    },
  } = data.markdownRemark;

  return (
    <Layout>
      <WelcomeSectionContainer>
        <WelcomeSectionContent>
          <div>{title}</div>
          <div>{subtitle}</div>
          <Link to="/contact">{buttonLabel}</Link>
        </WelcomeSectionContent>
      </WelcomeSectionContainer>
    </Layout>
  );
}

const WelcomeSectionContainer = styled.div`
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  padding-left: 50px;
`;

const WelcomeSectionContent = styled.div`
  width: 50%;
`;

SonamainPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default SonamainPage;

export const sonamainPageQuery = graphql`
  query SonamainPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        welcomeSection {
          title
          subtitle
          buttonLabel
        }
      }
    }
  }
`;
