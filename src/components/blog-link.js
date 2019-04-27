import React from "react"
import { Link } from "gatsby";
import Img from "gatsby-image"
import style from "./blog-link.module.less"

const BlogLink = ({ post }) => (
     <div className={style.container} style={{ gridColumn: `${post.frontmatter.gridColumn}`, gridRow: `${post.frontmatter.gridRow}` }}>
            <Img fluid={post.frontmatter.thumbnail.childImageSharp.fluid}/>
            <div className={style.title}>{post.frontmatter.title}</div>
      </div>
)

export default BlogLink
