import React from "react"
import { Link } from "gatsby";
import Img from "gatsby-image"
import style from "./blog-link.module.less"

const BlogLink = ({ post }) => (
     <div className={style.link}>
        <Link to={post.frontmatter.path}>
            {post.frontmatter.title}
            <Img fluid={post.frontmatter.thumbnail.childImageSharp.fluid}/>
        </Link>
      </div>
)

export default BlogLink
