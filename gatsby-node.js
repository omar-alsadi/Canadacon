const path = require('path');

exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === 'EventsDataJson') {
        const slug = path.basename(node.name.replace(/ /g, '-').toLowerCase());

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })

    }

}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const template = path.resolve(`./src/templates/eventTemplate.js`)

    const res = await graphql(`
        query EventsQuery {
            allEventsDataJson {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    res.data.allEventsDataJson.edges.forEach((edge) => {
        createPage({
            component: template,
            path: `/events/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })

}