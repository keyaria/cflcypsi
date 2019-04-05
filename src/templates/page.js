import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"


class PageTemplate extends Component {
  render() {
    const siteMetadata = this.props.data.site.siteMetadata
    const currentPage = this.props.data.wordpressPage

    return (
      <Layout>
        <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
    
        <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />

        //<p>{ currentPage.date }</p>
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
    site {
      id
      siteMetadata {
        title
        
      }
    }
  }
`