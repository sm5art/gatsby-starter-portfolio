---
title: Machine Playing Pong Unsupervised with Genetic Algorithims 🧬
date: "2020-01-04T22:40:32.169Z"
description: "Building an unsupervised genetic learning algorithim that learns to play pong in 15 minutes in Python."
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
Since the pong game is written in python we have direct memory access to the ball and paddle speed and direction in the x/y direction which we will be using in the engineering of the inputs. The inputs will change every frame of the game which will decide the optimal output. The inputs are normalized to reduce weight explosions when optimizing.
*Note: Max Speed and Screen Height are constants defined in the code and could be changed*

![The inputs](./inputs.png)


## The actions (outputs)
The outputs for **the problem** is the pong paddle's direction of action.

![The outputs](./outputs.png)

## Linear Algebra Neural Network
I used a simple neural network with hidden layers to model the behavior of the paddle.
![The outputs](./model.png)
Dimensions of variables

*Note: hidden layers is a constant*

```
x: 4x1
y: 1x1
A: # hidden layers x 4
B: # hidden layers x 1
C: 1 x # hidden layers
D: 1x1
```

This is the model I engineered after a few attempts including linear regression. The weights and bias A, B, C, D are all unknown and will be optimized for in the next section of the blog.

# The Genetic Algorithim
## Why is this even necessary?
As I mentioned in the previous section, we have 4 weights and bias terms that we need to optimize for yet we don't have a labeled data set that represents what a pong player should do depending on these inputs. This will require the usage of an unsupervised learning algorithim which will evaluate the progress of learning through a different heuristic. 

## What is a chromosome (in context)?


## Contents
* A chromosome which expresses a possible solution to the problem as a string
* A fitness function which takes a chromosome as input and returns a higher value for better solution(much more likely to reproduce)
* A population which is just a set of many chromosomes
* A selection method which determines how parents are selected for breeding from the population
* A crossover operation which determines how parents combine to produce offspring
* A mutation operation which determines how random deviations manifest themselves

## What's the heurstic that drives you to a solution?
Genetic algorithims rely on a fitness heurstic which is a function that takes a chromosome and returns a higher value for a better performing solution.

