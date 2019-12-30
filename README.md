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
* make links on front page scroll to their respective sections
* look at comma.ai for inspiration on how to change header/jumbotron
* make header absolute
* write a blog for genetic pong

# Inspecting data of app with GraphiQL
Go to http://localhost:8000/___graphql in the browser after running development server to see graphiQL 


