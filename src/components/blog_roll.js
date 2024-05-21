// NOTE: Commented out as not currently using a blog
import React, { useContext } from "react"
import AppContext from "../contexts/app_context"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const BlogItem = ({ post }) => {
  return (
    <div className="lg:w-1/3 p-5">
      <div className="mb-3">
        <Link to={post.fields.slug}>
          <Img
            fluid={{
              ...post.frontmatter.featuredImage.childImageSharp.fluid,
              aspectRatio: 16 / 9,
            }}
          />
        </Link>
      </div>
      
      <h3 className="text-lg mb-2">
        <Link to={post.fields.slug} className="no-underline">{post.frontmatter.title}</Link>
        </h3>
      <p className="text-sm mb-2">{post.frontmatter.description}</p>
      <div>
        <Link to={post.fields.slug}>Read more</Link>
      </div>
    </div>
  )
}

export default () => {
  const appContext = useContext(AppContext)
  const { langKey } = appContext.pageContext

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            fields {
              slug
              langKey
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 1024) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  let posts = data.allMarkdownRemark.edges
  posts = posts.filter(edge => edge.node.fields.langKey === langKey)
  console.log(posts)

  return (
    <section className="py-24 bg-gray-200">
      <div className="container">
        <div className="text-center">
          <h2 className="text-center b-line">Latest News</h2>
        </div>
        <div className="lg:flex">
          {posts.map(({ node }, i) => (
            <BlogItem post={node} key={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
