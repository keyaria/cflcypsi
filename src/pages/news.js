import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import SecHeader from "../components/secondHeader"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

class News extends Component {
    render() {
        const data = this.props.data

        return(
          <Layout>
          <SecHeader pageTitle="News" />
            <div>
                <h1>Posts</h1>

                {data.allWordpressPost.edges.map(({node}) => (
                    <div key={node.slug} className={"post"} style={{ marginBottom: 50 }}>
                        <Link to={'post/' + node.slug}>
                            <h3>{node.title}</h3>
                        </Link>

                        <div className={"post-content"} dangerouslySetInnerHTML={{__html: node.excerpt}} />

                        {node.date}
                    </div>
                ))}

            </div>

            </Layout>
        )
    }
}

News.propTypes = {
    data: PropTypes.object.isRequired,
    edges: PropTypes.array,
}

export default News

export const pageQuery = graphql`
    query postsQuery{
        allWordpressPost{
            edges{
                node{
                    id
                    title
                    excerpt
                    slug
                    date(formatString: "MMMM DD, YYYY")
                }
            }
        }
    }
`



