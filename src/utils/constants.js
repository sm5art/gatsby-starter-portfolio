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
        shiftingColors: [colors.blue[1], colors.geekblue[1], colors.blue[2], colors.geekblue[2]],
        numberColor: colors.blue[8],
        jumbotronTypingColor: colors.blue[7]
    },
    contactEmail: 'arturk@uw.edu'
};