const colors = require('./colors');

module.exports = {
    blogBasePath: 'blogs', // SUBFOLDER TO THE BLOGS
    jumbotron: {
        topMessage: "Hi, i'm Artur.", // TOP LINE
        bottomMessagePrefix: "I build ", // MIDDLE LINE
        lines: ["software.", 'front end.', 'back end.', 'full stack software.'], // LINES TO CHANGE TO
        buttonText: "Get in touch" // BUTTON TEXT
    },
    theme: {
        shiftingColors: [colors.volcano[2], colors.orange[2], colors.volcano[3], colors.lime[3]], // COLORS OF BACKGROUND ON INDEX
        jumbotronTypingColor: colors.blue[7], // COLOR OF JUMBOTRON TEXT ON INDEX
        numberColor: colors.blue[7], // COLOR OF # ON INDEX 
        blogColor: colors.purple[1] // COLOR OF BLOG PAGE
    },
    contactEmail: 'arturk@uw.edu', // EMAIL USED IN GET IN TOUCH
    title: "Artur Kashperskiy", // TITLE OF BLOG PAGE
    author: "Artur Kashperskiy", // SEO
    description: 'full stack software engineer works in python and javascript' // SEO
};