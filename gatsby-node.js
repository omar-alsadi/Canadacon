const path = require('path');

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    // https://www.gatsbyjs.org/docs/debugging-html-builds/#fixing-third-party-modules
    if (stage === 'build-html') {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /scrollreveal/,
                        use: loaders.null(),
                    },
                ],
            },
        });
    }

    actions.setWebpackConfig({
        resolve: {
            alias: {
                '@components': path.resolve(__dirname, 'src/components'),
                '@config': path.resolve(__dirname, 'src/config'),
                '@images': path.resolve(__dirname, 'src/images'),
                '@pages': path.resolve(__dirname, 'src/pages'),
                '@styles': path.resolve(__dirname, 'src/components/styles'),
            },
        },
    });
};


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

    res.data.allEventsDataJson.edges.forEach(({ node }) => {
        createPage({
            component: template,
            path: `/events/${node.fields.slug}`,
            context: {
                slug: node.fields.slug
            }
        })
    })

}