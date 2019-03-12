import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/layout.js"
// import { Spring, config } from 'react-spring'

export default function blogTemplate({
   data, // this prop will be injected by the GraphQL query below.
}) {
   const {markdownRemark} = data // data.markdownRemark holds our post data
   const {frontmatter} = markdownRemark

   return (
     <Layout>
      <div>
         {frontmatter.title}
         <Img fluid={frontmatter.thumbnail.childImageSharp.fluid}/>
      </div>
     </Layout>

   )
}

export const pageQuery = graphql `
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1080, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
