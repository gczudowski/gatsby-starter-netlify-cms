import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Wave from 'react-wavify';

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
      <svg view-box="0 0 1600 900">
          <path fill="#40e0d0" opacity="1" d="M0,173C267,116,534,117,801,325,C1068,533,1335,208,1602,356,C1600, 0,1600, 0,1600, 0C1600, 0,1600, 0,1600, 0C1600, 0,1600, 0,1600, 0C1600, 0,1600, 0,1600, 0L1600,0C1333,0,1066,0,799,0,C532,0,265,0,-2,0,C0, 0,0, 0,0, 0C0, 0,0, 0,0, 0C0, 0,0, 0,0, 0C0, 0,0, 0,0, 0L1401,0L0,0Z" />
        </svg>
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
