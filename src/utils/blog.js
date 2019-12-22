const constants = require('./constants');

exports.filterPosts = (posts) => {
    return posts.filter(post=>post.node.fields.slug.includes(constants.blogBasePath));
}