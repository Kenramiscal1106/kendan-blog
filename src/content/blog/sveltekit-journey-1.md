---
layout: "@layouts/BlogLayout.astro"
title: Sveltekit journey to 1.0
createdAt: February 19 2023
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
durationReadInMins: 7
imageURL: /assets/blog/sveltekit-journey-1.png
---

---

After months of waiting, SvelteKit finally hit version 1.0. But before it got to where it is today, it had a rough ride which caused some headaches for developers who are using it to build their apps. Just more than 4 months ago, Sveltekit released some breaking changes to its API. If you want some more information on the breaking changes, go to the [Github discussion](https://github.com/sveltejs/kit/discussions/5748) in the sveltekit repo. But here are some of the changes made:

- routing
- handling forms
- type safety
- configuration
- error boundaries
- error handling

**Routing** in sveltekit seems relatively simple. You create a file named `blog.svelte` under the `routes` directory and it will generate a `/blog` route. If you added a `__layout.svelte` under the `routes` directory and it will add a layout that will be inherited throughout the page. Again, it seemed simple. To give you an overview of some of SvelteKit's route changes, here's what the routes directory used to look like:

```
📂 src
└ 📂 routes
	├ 📄 index.svelte
	├ 📄 index.js
	├ 📄 about.svelte
	├ 📄 about.js
	├ 📄 __layout.svelte
	├ 📄 __layout-nested.svelte
	├ 📄 __error.svelte
	└ 📂 nested-route
		├ 📄 index.js
		└ 📄 index@nested.svelte
```

In a `.svelte` file, this is what it would look like:

```svelte
<script context="module">
	export const load = () => {
		let propName = "arbitrary data"
			return {
				props: {
					propName
			}
		}
	}
</script>

<script>
	export let propName
</script>

<h1>Use the {propName}</h1>
```

The load function is encapsulated in the `<script context="module">` will run on the server while the `export let propName` will be the prop passed by the server to the client. Although this is a relatively simple implementation, it lead to some problems:

1. **No type safety from server to client** - since the client doesn't know the shape of the response that will be sent by the server, it may cause some runtime errors after compile time (because `propName` will be passed as `any`).
2. **No fine-grained control if whether the code will run on both client and server or server-only** - svelteKit developers don't exactly know if it will run on both cases. Code that will run on client and server may be good for data fetching in a layout segment while code that will "only run" on the server can be used to transact with a database.
3. `<script context="module">` **syntax is confusing** - If you are a newcomer to the svelte framework, you might get confused of the schematics of the framework because the `context="module"` is only used when the svelte components becomes imported.
   Those are only some of the reasons why they introduced some breaking changes to the API. Now, this is what the current 1.0 release looks like:

```
📂 src
└ 📂 routes
	├ 📄 +page.svelte
	├ 📄 +page.js
	├ 📄 +layout.svelte
	├ 📄 +error.svelte
	└ 📂 about
		├ 📄 +page.svelte
		├ 📄 +page.server.js
		└ 📄 +layout.svelte
```

and the both the load function and the svelte page are now separated:
+page.js

```js
export const load = () => {
  let propName = "arbitrary data";
  return {
    props: {
      propName,
    },
  };
};
```

+page.svelte

```svelte
<script>
	export let data
</script>

<h1>Use the {data.propName}</h1>
```

But you might be wondering, how to get typesafety when two files are separated? Well, sveltekit does a lot under the hood and thus, a hidden `./$types` file where all the types for the route is stored. If you want to add types in javascript, you have to add jsDoc type definitions above the `export let data` line:

+page.svelte:

```js
/** @type {import('./$types').PageData} */
export let data;
```

+page.js:

```js
/** @type {import('./$types').PageLoad} */
export function load({params}) {
```

But wait, there's more! You can change the `+page.js/ts` name to `+page.server.js/ts` so that it will only run on the server. This is useful if you're interfacing with your database, or accessing private environment variables. But there are key differences to `+page.server.js/ts` and `+page.js/ts`. Here are some of them:

| `+page.server.js/ts`                                                   | `+page.js/ts`                                                 |
| ---------------------------------------------------------------------- | ------------------------------------------------------------- |
| only runs on server                                                    | Runs on server, and client during hydration                   |
| can access private environment variables, interface with your database | can only access public variables and make an api call         |
| Can't return a non-pojo (plain old javascript object)                  | can return maps, sets, and even svelte component constructors |
| can export page options, along with form actions                       | can only export page options                                  |

---

**Form handling** in sveltekit is the easiest among all meta-frameworks, especially when you're handling multiple actions. Before the breaking change, there's no way to create a form without that `<form on:submit|preventDefault={}>` line in your code. But luckily, they fixed the way svelte developers make form submissions.

Here is an example form that submits data to an action.

+page.svelte:

```svelte
<form action="?/register" method="POST">

<div>
	<label for="username">Username</label>
	<input type="text" id="username" name="username" />
</div>

<div>
	<label for="password">Password</label>
	<input type="password" id="password" name="password" required aria-required="true" />
</div>

{#if form?.user}
	<p class="error">Username is already use. <a href="/login">Is this you?</a></p>
{/if}

<button type="submit">Register</button>

</form>
```

In our back-end (`+page.server.js` or ts if you prefer), we can export an action `const` that takes care of our form handling:

```ts
export const actions: Actions = {
  async register({ request }) {
    const data = await request.formData();
    const username = data.get("username");
    const password = data.get("password");

    if (
      typeof username !== "string" ||
      typeof password !== "string" ||
      !username ||
      !password
    ) {
      return fail(400, { invalid: true });
    }

    const user = await User.findOne({ username });

    if (user !== null) {
      return fail(400, { user: true });
    }

    await User.create({
      username,
      passwordHash: await bcrypt.hash(password, 10),
      userAuthToken: crypto.randomUUID(),
      role: {
        connect: {
          name: "User",
        },
      },
      createdAt: new Date().toUTCString(),
    });
    throw redirect(303, "/");
  },
};
```

Notice that in our `+page.svelte`, we added a `?/register` value in our action attribute. This is to determine which function will run in the exported action const. If we'd want to handle multiple forms, we could add a new function, then add the `?/action-name` in the action attribute of another form. This is how we take care of multiple forms.

**Error handling** is also easy in sveltekit. If an error occurred on the load function, or in any actions, you could use the `throw` keyword, with a function (like `error()`, `fail()`, or `redirect()`). If we want to _redirect_ the page when an event occurs, we can do so with redirect. If the form submission fails (forbidden access), we could throw a fail function, then the status code of the fail and the object you will pass to the client when it fails. If an error really happened (say the server or the client), we could throw an `error` function and define the status code to redirect to 404 or 500 pages.

There are a lot of features introduced to sveltekit such as the handle hooks, configurable rendering strategies, etc. You can find it in the [Official SvelteKit Documentation](https://kit.svelte.dev/docs).

---

#### Conclusion

In summary, months before the SvelteKit 1.0 release, a lot of breaking changes were introduced:

- routing change (from file-based to directory-based routing)
- form handling (server form actions)
- strong type safety (from load functions to the page itself)
- error boundaries (`+error.svelte`)
- error handling (in load and actions)
- hooks (middleware-like abilities)
