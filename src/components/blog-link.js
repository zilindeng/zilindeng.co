import React from "react"
import { Link } from "gatsby";
import Img from "gatsby-image"
import style from "./blog-link.module.less"

const BlogLink = ({ post }) => (
     <div className={style.container} style={{ gridArea: `${post.frontmatter.gridArea}` }}>
            {post.frontmatter.title === "" ? null : (
            <div className={style.title}>{post.frontmatter.title}</div>
            )}
            <Img fluid={post.frontmatter.thumbnail.childImageSharp.fluid}/>
      </div>
)

export default BlogLink
