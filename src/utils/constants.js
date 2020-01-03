const colors = require('./colors');

module.exports = {
    blogBasePath: 'blogs',
    jumbotron: {
        topMessage: "Hi, i'm Artur.",
        bottomMessagePrefix: "I build ",
        lines: ["software.", 'front end.', 'back end.', 'full stack software.'],
        buttonText: "Get in touch"
    },
    theme: {
        shiftingColors: [colors.volcano[2], colors.orange[2], colors.volcano[3], colors.lime[3]],
        jumbotronTypingColor: colors.blue[7],
        numberColor: colors.blue[7],
        blogColor: colors.geekblue[3]
    },
    contactEmail: 'arturk@uw.edu',
    title: "Artur Kashperskiy",
    author: "Artur Kashperskiy",
    description: 'full stack software engineer works in python and javascript'
};