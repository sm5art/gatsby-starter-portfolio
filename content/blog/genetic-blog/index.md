---
title: Machine Playing Pong Unsupervised with Genetic Algorithims 🧬 (WIP)
date: "2024-06-24T22:40:32.169Z"
description: "Building an unsupervised genetic learning algorithim that learns to play pong in 15 minutes in Python."
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/mFOKdGye7vY?si=sZ30L3uJBAeZhTZl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

[Link to code for project on github](https://github.com/sm5art/genetic-pong)

# Introduction

When approaching a machine learning problem, a clear definition is key. Next, mathematical modeling and algorithmic optimization come into play to fine-tune the model's parameters. In this blog, we'll delve into one specific type of unsupervised learning: **genetic algorithms**. Introduced by John Holland in 1960, inspired by Charles Darwin's theory of evolution, these algorithms have been gaining traction in various fields. Here, we'll explore how a genetic algorithm can be applied to the classic game of Pong, allowing us to play it unsupervised. In this post, we'll first set the context for our problem and then dive into the implementation details later on. This blog assumes some basic knowledge of linear algebra and some basic python programming knowledge.
![Evolution](./evolution.jpg)

# The Problem (The Environment)

When I was in college my friend came to me with a really cool project he was working on: he recreated the classic game of pong and was showing me how you can have two players playing simultaneously using different keys on the keyboard. He asked me if its possible to recreate an AI in his game and I set out to explore the potential solutions. I thought of a few ideas, you could try to just create a program that would tell the opponent paddle to move up and down based on the position of the ball relative to the paddle and figure out the correct parameters but I set out to explore more potential solutions here.

![Pong game](./pong.jpg)

The environment of the game of pong consists of two concepts: the state of the game and the actions that either player can take in the game. The state of the game of pong is outlayed by the display shown the the user the 1280x720 output which is only one valued here since the game is mostly unichannel/unicollor, we can assume a pretty simple game space for the game state. But even here we can abstract more features out of this by knowing that we have memory access to the balls position and players position, we can abstract even more simple features than the game screen which allow for more robust and quicker learning. The actions that could be taken in the game are represented by the mainly three actions/controls the player has at any time while playing the game: moving up, moving down, doing nothing.

# Modeling The Problem

In this section we are solving the sub-problem of coming up with the inputs and outputs of our model such that we get a model that will suit our specific task of figuring out when to move a pong paddle up or down in relation to the game state.

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

Since the pong game is written in python we have direct memory access to the ball and paddle speed and direction in the x/y direction which we will be using in the engineering of the inputs/game state. The game state will change every frame of the game which will plug into the model to decide the optimal output. The inputs are normalized to reduce weight explosions when optimizing.
*Note: Max Speed and Screen Height are constants defined in the code and could be changed*

![The inputs](./inputs.png)

## The actions (outputs)

The outputs for **the problem** is the pong paddle's direction of action.

![The outputs](./outputs.png)

## Algebra of a Neural Network

I used a simple neural network with one set of hidden layers to model the behavior of the paddle.
![The outputs](./model.png)
Dimensions of variables

*Note: hidden layers is a constant*

```
x: 4x1 (game state/domain)
y: 1x1  (actions/range)
A: # hidden layers x 4 (unknown weights)
B: # hidden layers x 1 (unknown bias)
C: 1 x # hidden layers (unknown weights)
D: 1x1 (unknown bias)
```

This is the model I engineered after a few attempts including linear regression. The weights and bias A, B, C, D are all unknown and will be optimized for in the next section of the blog.

# The Genetic Algorithim

## Why is this even necessary?

As I mentioned in the previous section, we have 4 weights and bias terms that we need to optimize for yet we don't have a labeled data set that represents what a pong player should do depending on these inputs. This will require the usage of an unsupervised learning algorithim which will evaluate the progress of learning through a different heuristic.

## What is a chromosome (genetic algorithim)?

## Contents

* A chromosome which expresses a possible solution to the problem as a string
* A fitness function which takes a chromosome as input and returns a higher value for better solution(much more likely to reproduce)
* A population which is just a set of many chromosomes
* A selection method which determines how parents are selected for breeding from the population
* A crossover operation which determines how parents combine to produce offspring
* A mutation operation which determines how random deviations manifest themselves

## What's the heurstic that drives you to a solution?

Genetic algorithims rely on a fitness heurstic which is a function that takes a chromosome and returns a higher value for a better performing solution.
