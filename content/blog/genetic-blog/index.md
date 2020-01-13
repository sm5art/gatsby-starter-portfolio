---
title: Genetic Algorithims
date: "2020-01-04T22:40:32.169Z"
description: "Building an unsupervised genetic learning algorithim for video games in python (pong)."
---

# Introduction 

A well-defined problem is the first step when coming up with a model.
Then, a problem is modeled with mathematics and then algorithims are used to **optimize** this model to its **best parameters**. 
The problem we are going to solve in this blog is the problem of playing pong algorithimically. 
In this blog we are covering one specific type of unsupervised learning algorithim: the genetic algorithim.
Genetic algorithms are inspired by Darwin's theory of evolution. 

# Modeling The Problem
**The problem** - creating a function which takes game state as input and returns the best output
## How do we model?
A model has input features and outputs which are designed based on what the problem specifies. We will be using linear algebra to drive this model.

## The inputs
The inputs for **the problem** are the ball's x and y position/speed formed into a vector.

## The outputs
The outputs for **the problem** is the pong paddle's direction of action.
```
1 for going up
0 for neutral
-1 for going down
```

