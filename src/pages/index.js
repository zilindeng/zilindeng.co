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

    <div className={style.overlay}></div>

    <div className={style.grid}>
      <div className={style.fuck}>
        <div className={style.header}>Education</div>
        <div className={style.listItem}>
          Bachelor of Design (Honours) <br/>
          York/Sheridan Program&nbsp;in&nbsp;Design<br/>
          2019
        </div>
      </div>

      <div className={style.fuck}>
        <div className={style.header}>Experience</div>
        <div className={style.listItem}>
          Product Design <br />
          Mother Co <br />
          August 2018—Present
        </div>
        <div className={style.listItem}>
          Product Design Intern <br />
          Format <br />
          April 2017—September 2017
        </div>
      </div>
      <div className={style.fuck}>
        <div className={style.header}>Contact</div>
        <div className={style.listItem}>
          <div className={style.link}>Email</div>
          <div className={style.link}>+1 (647) 639–9979</div>
          <br />
        </div>
        <div className={style.listItem}>
          <div className={style.link}>Instagram</div>
        </div>
      </div>

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
            gridColumn
            gridRow
            title
            thumbnail {
              childImageSharp {
                fluid(quality: 100, maxWidth: 1920, cropFocus: CENTER) {
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