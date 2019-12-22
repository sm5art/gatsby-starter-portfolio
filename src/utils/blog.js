const constants = require('./constants');

export const filterPosts = (posts) => {
    return posts.filter(post=>post.node.fields.slug.includes(constants.blogBasePath));
}