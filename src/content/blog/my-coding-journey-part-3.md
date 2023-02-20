---
layout: "@layouts/BlogLayout.astro"
title: My coding Journey (part 3)
createdAt: February 1 2023
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
durationReadInMins: 5
imageURL: /assets/blog/my-coding-journey-1.png
---

It's been 3 years since I started coding. The second year was great. I learned a lot from various people and learned different frameworks. In this blogpost, I will explain my journey from January 2022 up until today.

It all begins in **January 2022**, where I had a major issue managing my time. Because of my [Short Attention Span](https://www.healthline.com/health/short-attention-span), I wasn't able to focus on school. I was frustrated, so I planned to build a schedule that I can access anywhere. I myself made a similar one when I was a grade 8, but I can only access it from my laptop since it wasn't hosted to a web server. 

This gave me a good opportunity to learn [react](https://beta.reactjs.org) & [firebase](https://firebase.google.com) because I'm very interested in the front-end space. Picking react gave me more flexible when working with the app, and firebase gave me more time to focus on the frontend. I worked on it up until **March 2022**, fixing problems with authentication, web design, memory leaks, and problems related to react itself. 

React itself is hard, even though it was just plain JavaScript. Back then, I didn't know concepts like state, effects, context, etc., so I didn't have a good mental model on how to work with react. I have to come up with my own solutions just for it to work. But thankfully, I was using a third-party package like `react-firebase-hooks` that made it easy to interface with the backend (firebase).

Frontend is not the only problem here. I also have to deal with the backend (firebase). Since firebase has a NoSQL database like Firestore, it is what I use to store data. I didn't know how to join data in NoSQL because I thought that's just how NoSQL databases work, so I have to make a workaround for this problem.

JavaScript is also problematic because it's dynamically-typed, so JavaScript just gives you an error when you run it. But thankfully, I discovered [Typescript](https://typescriptlang.org), and it saved me a lot of time. When I migrated my app to Typescript, it became a lot easier to work with it.

Looking back, I think my app was terrible but I didn't stop there. I was also learning different frameworks in the month of **March** like [Svelte](https://svelte.dev), which is an enjoyable framework compared to React. It was good for its simplistic approach to reactivity, and its laser focus for minimalism because it compiles the code you've written into plain JavaScript. Unlike react that uses [Virtual DOM](https://www.codecademy.com/article/react-virtual-dom), Svelte compiles your code into low-level, imperative code, which performs better.

At this time, I was starting to realize that client-side frameworks are becoming more irrelevant because there's no search engine optimization. So, **April 2022**, I shifted my attention to meta-frameworks, which are built on top of client-side frameworks and has an opinionated way of building applications. I started with [Next.js](https://nextjs.org), a framework built on top of react.

But I had a major problem because I don't know the difference of JavaScript in the server and client. So, when I was trying to connect to my [MongoDB](https://mongodb.com) database to my client-side code, it wouldn't work. Eventually, I realized the problem and that MongoDB only works on the Node.js backend.

I also learned [Vue](https://vuejs.org). I was surprised to have found out that it was as easy as Svelte. I created a to-do app with it. But I quit it afterwards because I was not fan of the developer experience.

**May 2022** was the time I started building a LMS for our school. I knew it was gonna be hard because you need to be a good designer to create it. Furthermore, you must have a good understanding of the technologies required to build the app. So, I picked Next.js to handle both frontend and backend, as well as Sanity, a headless CMS, to handle data and content of the application. 

I coded it up until **August 2022**. It ended up failing because I realized that needs to have a database like SQL or MongoDB for storing data, not headless CMS. Also, I was the only one who's working on the project, so it was slow in its making. 

I learned that frontend is difficult. I thought it would be fun, but I underestimated it. The number of components jumped from 5 to 19 components just to display an app. Not to mention, it's hard to implement logic between back-end and front-end like the submission of assignments.

But on the bright side, I learned a new ORM called Prisma. Prisma allows any dev to declare the schema of the model and generate types for it. It also supports complex operations like table joining and it makes it easier to interface with the database. 

One use-case I have with prisma was when I was trying to create an online election website for our student coordinating body. Once again, I underestimated the difficulty of it, so it never became real. But it didn't stopped me from learning. I just thought of it as sort of an obstacle that I have to find a solution to move forward. 

By **September 2022**, the team behind SvelteKit announced that the framework is in the release candidate phase. I was so excited because big breaking changes in the framework are no more. It was finally time for me to learn the framework because it was getting close to stable and there are minimal changes in its API. 

Other than that, I also started learning frameworks like Astro to make a new version of our school's website. I like to change the design of the landing page because it's doesn't appeal to parents and students alike. On top of that, it uses WordPress, which is just plain 🗑️. I hated WordPress because of bloated javascript bundles and plugins that ruin the experience of the end users.

After days of redesigning the website, I feel like the redesign is not enough to capture the attention of many people. So, I decided to pause for a while. As time went by (October to December), I haven't really gained any momentum on learning fullstack because I am preoccupied doing activities in school. I also didn't have the time to upload a new blogpost, so I was really disappointed at myself.

But starting this year, I'll be focusing more on the connection between UI and backend. So stay tuned for that.