---
title: 'Using Prism with Next.js'
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
coverImage: 'https://placeimg.com/640/480/nature'
date: '2021-01-16T05:35:07.322Z'
---

[**Prism**](https://prismjs.com/) is a popular syntax highlighter commonly used with Markdown.
This example shows how to use Prism with [**Next.js**](https://nextjs.org/). Use the theme dropdown
in the header to switch syntax highlighting themes.

Next.js uses `getStaticPaths`/`getStaticProps` to generate [static pages](https://nextjs.org/docs/basic-features/data-fetching). These functions are _not_ bundled client-side, so you can **write server-side code directly**. For example, you can read Markdown files from the filesystem (`fs`) – including parsing front matter with [gray-matter](https://github.com/jonschlinkert/gray-matter). For example, let's assume you have a Markdown file located at `docs/my-post.js`.

We can retrieve that file's contents using `getDocBySlug('my-post')`.

```js
// lib/docs.js

import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export function getDocBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '')
  const docsDirectory = join(process.cwd(), 'docs')
  const fullPath = join(docsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return { slug: realSlug, meta: data, content }
}
```

Then, we can **transform** the raw Markdown into HTML using [remark](https://github.com/remarkjs/remark) plugins.

```js
// lib/markdown.js

import remark from 'remark'
import html from 'remark-html'
import prism from 'remark-prism'

export default async function markdownToHtml(markdown) {
  const result = await remark().use(html).use(prism).process(markdown)
  return result.toString()
}
```

Passing the `content` returned by `getDocBySlug('my-post')` into `markdownToHtml(content)`
would convert a Markdown file like this:

````markdown
---
title: 'My First Post'
description: 'My very first blog post'
---

# My First Post

I **love** using [Next.js](https://nextjs.org/)

```js
const doc = getDocBySlug(params.slug)
```
````

into this HTML, which includes the proper elements and class names.

```html
<h1>My First Post</h1>
<p>I <strong>love</strong> using <a href="https://nextjs.org/">Next.js</a></p>
<div class="remark-highlight">
  <pre class="language-js">
    <code>
      <span class="token keyword">const</span> doc <span class="token operator">=</span> <span class="token function">getDocBySlug</span><span class="token punctuation">(</span>params<span class="token punctuation">.</span><span class="token property-access">slug</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </code>
  </pre>
</div>
```