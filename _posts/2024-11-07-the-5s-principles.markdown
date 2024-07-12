---
title: Be a better software engineer
date: 2024-07-11 12:00:00 Z
categories:
- News
tags:
- Software Engineering
description: The 5S of software engineering. It's a set of statements that
  serves as guiding principles for best practices to follow in code maintenance.
image: "/uploads/five-s-principles.png"
layout: post
---
*By [Donato Pascazio](https://www.linkedin.com/in/donato-pascazio-080973201/)*

How can I be a better software engineer?

[I](https://www.linkedin.com/in/donato-pascazio-080973201/)'ve often tried to answer this question at different stages of my professional life. Speaking with other colleagues here at [Skillbill](https://www.skillbill.it/), through discussions about what this profession must be and represent, [I](https://www.linkedin.com/in/donato-pascazio-080973201/) developed a personal theory.

Initially, the prevalent opinion among young engineers is that being a good software engineer is about using cutting-edge technologies and implementing them into new projects to enhance the productivity of a customer's software.

However, as an engineer's seniority increases, the trend often goes opposite. With many years of experience in software engineering and consultancy, you will likely encounter many ongoing projects with several issues that, if not handled correctly, can reduce the productivity of the software engineers working on them to near zero.

This is the Legacy Code problem, well explained in IT literature. We can mention ["Working Effectively with Legacy Code"](https://www.amazon.com/Working-Effectively-Legacy-Michael-Feathers/dp/0131177052) by [Michael Feathers](https://wiki.c2.com/?MichaelFeathers) or ["Refactoring: Improving the Design of Existing Code"](https://www.amazon.com/Refactoring-Improving-Design-Existing-Code/dp/0201485672) by [Martin Fowler](https://www.martinfowler.com/).

These resources are useful when you need to handle legacy code, but generally speaking, aiming to prevent code from becoming "legacy" to maintain high productivity in projects is a goal that [I](https://www.linkedin.com/in/donato-pascazio-080973201/) pursue every day as a professional.

How can we do that?

By follow the 5S principles outlined in ["Clean Code: A Handbook of Agile Software Craftsmanship"](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882) by [Robert C. Martin](http://cleancoder.com/products) in every consultancy provided, bringing value to each project [I](https://www.linkedin.com/in/donato-pascazio-080973201/) maintain.
Let's break down those principles.

## The 5S Principles
Originally from the Japanese industry [Toyota](https://www.toyota-industries.com/index.html), this method can also be applied to software engineering.

![five-s-principles.png](/uploads/five-s-principles.png)

### 整理 (Seiri) - Sort
How many times have we found a project with old references that are being kept (maybe in a commented area) just as if [Git](https://git-scm.com/) doesn't exists?
Eliminate unnecessary items from the workspace. This means analyzing and removing redundancy, outdated documentation, and obsolete tools.

### 整頓 (Seiton) - Set in Order
Icons must go into the icons folder, just as [models](https://developer.mozilla.org/en-US/docs/Glossary/MVC#the_model), [views](https://developer.mozilla.org/en-US/docs/Glossary/MVC#the_view) and [controllers](https://developer.mozilla.org/en-US/docs/Glossary/MVC#the_controller) need to be in their respective folders. This is not a joke: when you find an icon in assets/public/sampledirectorythatishouldhaveeradicatedbefore1993, you know that it won't be helpful.
What is necessary needs to be kept in order. For software teams, this involves organizing code repositories, documentation, and development tools for easy access and use not only for the present team but also for future team members.

### 清掃 (Seiso) - Shine
Do you clearly remember that console.log() used for debugging purposes and becoming part of the ship just like [the crew of the Flying Dutchman](https://pirates.fandom.com/wiki/Crew_of_the_Flying_Dutchman)?
Keep the workspace clean and tidy. In software engineering, this translates to maintaining clean code, regularly refactoring, and ensuring that development environments are uncluttered and well-maintained.

### 清潔 (Seiketsu) - Standardize
Now that you know how to do it, it's time to make it a standard.
Establish standards for maintaining organization and cleanliness. In software projects, this involves creating coding standards, documentation guidelines, and consistent development practices.

### 躾 (Shitsuke) - Sustain
Develop the discipline to maintain these standards over time. This is perhaps the most challenging step, requiring ongoing commitment and regular audits to ensure adherence to established practices.

[I](https://www.linkedin.com/in/donato-pascazio-080973201/) believe that these rules should be kept in mind regardless of the programming language you are using. However, some developers here find that following these rules makes the software engineering process smoother and more enjoyable.