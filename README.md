# gatsby-starter-portfolio
This repo contains a gatsby app of my current web portfolio w/ a blog section done with CMS.

# Installation
1. Make sure you have Node.js and git installed on current machine
2. 
```
cd my-blog-starter
```
install gatsby cli
```
npm install -g gatsby-cli
```
install project dependencies
```
yarn install
```

# Running
## developing
```
gatsby develop
```
Your site will be running at http://localhost:8000

## production
```
gatsby build
```
```
gatsby serve
```
Your site will be running at http://localhost:9000

# Tips
* src/utils/constants contains most of the constants and all of the themes for the project
* other constants lie in their respective components (spacings and such)
* global styles are in global.css

# TODO
* make readme more presentable
* make the top text in jumbotron animate in
* alternate the colors between about, experience, blogs (see antdesign site)
* create a timeline component for the experience section
* add socials to the side for desktop and at the footer for mobile
* make overall font size larger across the board for the site
* change headshot (to higher res aswell) to lie underneath Artur in the jumbotron
* add how long of a read estimate
* create 3 page scroll board
* switch from markdown plugin to mdx

# Inspecting data of app with GraphiQL
Go to http://localhost:8000/___graphql in the browser after running development server to see graphiQL 


