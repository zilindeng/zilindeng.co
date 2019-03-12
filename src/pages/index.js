import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import BlogLink from "../components/blog-link"
import style from "./style.module.less"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges, totalCount, },
  },
}) => {
  const Blog = edges
    .map(edge => <BlogLink key={edge.node.id} post={edge.node} />)

  const Total = totalCount

  return <Layout>
          <div>Entries <sup>({Total})</sup></div>
          <div className={style.grid}>
          {Blog}
          </div>
         </Layout> 
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___path] }
      filter: { fileAbsolutePath: {regex : "\/blog/"} },
   ) {
      totalCount
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            title
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1080, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`