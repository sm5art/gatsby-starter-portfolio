---
title: Machine Playing Pong Unsupervised with Genetic Algorithims 🧬
date: "2020-01-04T22:40:32.169Z"
description: "Building an unsupervised genetic learning algorithim for video games in python (pong)."
---

# Introduction 
A well-defined problem is the first step when coming up with a model.
Then, a problem is modeled with mathematics and then algorithims are used to **optimize** this model to its **best parameters**. 
The problem we are going to solve in this blog is the problem of playing pong algorithimically. 
In this blog we are covering one specific type of unsupervised learning algorithim: the genetic algorithim.
Genetic algorithms are an algorithim introduced in 1960 by John Holland inspired by Darwin's theory of evolution.
I will first define the context we are appying the algo to understand the model and why we need this algo and then I will explain and implement the algo later in the blog. 
![Evolution](./evolution.jpg)


# Modeling The Problem
In this section we are solving the sub-problem of engineering the inputs and outputs of our model such that we get a model that will suit our specific task of figuring out when to move a pong paddle up or down in relation to the game state.

**The problem** - Designing a function that takes any given information from the game state that outputs the ideal action. Mathematically what this model looks like is a function with a domain (input values) that spans the game state and a range (output values) that spans the possible actions.
## How do we model?
A model has input features and outputs which are designed based on what the problem specifies. We will be using linear algebra to drive the "unknown" part of this model.
```
i.e. y = Ax+B
x - game state
y - outputs
A, B - unknown
```

## The game state (inputs)
Since the pong game is written in python we have direct memory access to the ball and paddle speed and direction in the x/y direction which we will be using in the engineering of the inputs. The inputs are normalized to reduce weight explosions when optimizing.
*Note: Max Speed and Screen Height are constants defined in the code and could be changed*

![The inputs](./inputs.png)


## The actions (outputs)
The outputs for **the problem** is the pong paddle's direction of action.

![The outputs](./outputs.png)

