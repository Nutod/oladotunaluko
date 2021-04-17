---
title: 'Designing with CSS Custom Properties'
excerpt: 'Custom properties are an incredible addition to CSS. They give us the ability to create variables in CSS which can then be referenced or updated'
coverImage: 'https://source.unsplash.com/wZLsZ9DRLSI/1920x1280'
date: '2021-04-04T05:35:07.322Z'
description: 'Designing with CSS Custom Properties'
imageCaption: 'Niagara Falls, Canada - Unsplash'
---

### Introduction

In recent years, a couple of exciting features have been shipped with regular CSS. One of those is CSS Custom properties. With custom properties, we can define CSS variables and that opens up a whole lot of possibilities.

#### What are CSS Variables?

You might be familiar with the concept of variables from regular programming. Variables allow us store some value with an identifier that can later be referenced or modified. If we take the piece of code below as an example

```js
const one = 1
const two = 2

let total = one + two

console.log(total) // 3
```

Two variables are explicitly declared to hold constant values while the total variable is a sum of both constant values declared.

Historically, preprocessors like SASS and other solutions have allowed us to organize and maintain styling code in a reasonable way. With SASS for example, it's a common practice to define variables that hold color values.

```scss
$color-primary: hsl(171, 100%, 46%);
$color-primary-glare: hsl(171, 100%, 68%);
$color-white: hsl(60, 100%, 100%);
```

This approach made it very easy to use those values in a consistent way across the entire codebase. So we can have paragraph or section that has a background set to the primary color like so

```scss
section {
  background: $color-primary;
}

p {
  color: $color-primary;
}
```

If at any point, the value for the primary color changes, we just have to change its value wherever the variable was defined. With CSS Custom properties, we can achieve this effect without having to use a preprocessor.

#### CSS Custom Properties Syntax

The way to define a custom property in css is to append `--` to an identifier.

```css
--i-am-a-custom-property: 1rem;
```

The value assigned to the custom property usually represents a recognized css keyword, some color property or a complex declaration e.g a box-shadow definition.

After the declaration, we need a way to use the declared value somewhere within our styling rules. To do that, there's a special keyword `var()` which is a CSS function that then takes in the identifier and does the magic.

```css
p {
  padding: var(--i-am-a-custom-property);
}
```

> It's worth noting that custom properties are case-sensitive so `--i-am-a-custom-property` and `--I-AM-A-CUSTOM-PROPERTY` will be regarded as different variables
