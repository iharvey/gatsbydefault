/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  return graphql(
    `
      {
        allContentfulDish {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  )
    .then(result => {
      if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
      }

      const dishTemplate = path.resolve("./src/templates/dish.tsx")
      result.data.allContentfulDish.edges.forEach(edge => {
        createPage({
          path: `/dishes/${edge.node.slug}/`,
          component: slash(dishTemplate),
          context: {
            slug: edge.node.slug,
            id: edge.node.id,
          },
        })
      })
    })

    .catch(error => {
      console.log("Error retrieving contentful data", error)
      reporter.panicOnBuild(`Error while running GraphQL query.`)
    })
}

const fluidImageOverride = {
  base64: { type: "String!" },
  aspectRatio: { type: "Float!" },
  src: { type: "String!" },
  srcSet: { type: "String!" },
  sizes: { type: "String!" },
}

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    ImageSharpFluid: fluidImageOverride,
    ContentfulFluid: fluidImageOverride,
  }

  createResolvers(resolvers)
}
