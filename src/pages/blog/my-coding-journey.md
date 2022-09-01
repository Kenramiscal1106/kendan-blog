---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  import Cool from '../../components/Author.astro'
  import Todo from "../../components/svelte/Todo.svelte"
  import Example from "../../components/svelte/Example.svelte"
title: Making a todo app with svelte
publishDate: 21 June 2022
name: Ken Ramiscal
author: Ken Ramiscal
description: Just a Hello World Post!
---

To understand what we're building today, let's see it first:

<div style="border:1px solid #009cff;padding:.4rem 1rem;">
  <Todo client:idle />
</div>

This is a todo list
