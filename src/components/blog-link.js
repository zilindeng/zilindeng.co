import React from "react"
import { Link } from "gatsby";
import Img from "gatsby-image"
import style from "./blog-link.module.less"

const BlogLink = ({ post }) => (
     <div className={style.container} style={{ gridArea: `${post.frontmatter.gridArea}` }}>
            <Img fluid={post.frontmatter.thumbnail.childImageSharp.fluid}/>
            {post.frontmatter.title === "" ? null : (
            <div className={style.title}>{post.frontmatter.title}</div>
            )}

            {post.frontmatter.collab === null ? null : (
            <div className={style.collab}>w/ {post.frontmatter.collab}</div>
            )}


      </div>
)

export default BlogLink
