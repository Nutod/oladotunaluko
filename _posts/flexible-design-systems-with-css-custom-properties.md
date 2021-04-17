---
title: 'Flexible Design Systems with CSS Custom Properties'
excerpt: 'Custom properties are an incredible addition to CSS. They give us the ability to create variables in CSS which can then be referenced or updated'
coverImage: 'https://source.unsplash.com/wZLsZ9DRLSI/1920x1280'
date: '2021-04-04T05:35:07.322Z'
description: 'Flexible Design Systems with CSS Custom Properties'
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
$color-secondary: hsl(350, 100%, 66%);
$color-tertiary: hsl(51, 98%, 65%);
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

#### Flexible Design System with CSS Custom Properties

It's possible to have a design system for projects now with the power of custom properties. Some of the considerations we'll make for this design system will be how to handle:

1. Colors
2. Typography
3. Spacing
4. Utility Classes

It's usually a common practice to define system wide variables in the root of the entire file. With CSS, we can use the `:root` selector

```css
:root {
  --color-primary: hsl(171, 100%, 46%);
  --color-primary-glare: hsl(171, 100%, 68%);
  --color-secondary: hsl(350, 100%, 66%);
  --color-tertiary: hsl(51, 98%, 65%);
  --color-white: hsl(210, 20%, 100%);
  --color-black: hsl(214, 100%, 15%);
  --color-black-glare: hsl(214, 44%, 19%);
  --color-black-shade: hsl(214, 41%, 20%);
}
```

Now that we've defined the brand colors, we can define neutral colors with different shades

```css
:root {
  --gray-100: hsl(210, 20%, 98%);
  --gray-200: hsl(210, 20%, 88%);
  --gray-300: hsl(210, 20%, 78%);
  --gray-400: hsl(210, 20%, 68%);
  --gray-500: hsl(210, 20%, 58%);
}
```

To handle the fonts, we can use custom properties again like so:

```css
:root {
  --font-display: sans-serif;
  --font-body: 'Noto Sans', sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;
}
```

We can now define variables to handle spacing and types according to a scale

```css
:root {
  --base-size: 1rem;

  --size-100: calc(var(--base-size) * 0.75);
  --size-200: calc(var(--base-size) * 1);
  --size-300: calc(var(--base-size) * 1.33);
  --size-400: calc(var(--base-size) * 1.77);
  --size-500: calc(var(--base-size) * 2.36);
  --size-600: calc(var(--base-size) * 3.15);
  --size-700: calc(var(--base-size) * 4.2);
  --size-800: calc(var(--base-size) * 5.6);
}
```

We can also define some utilities that might be useful for consistent design across components like this:

```css
:root {
  --elevation-one: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --elevation-two: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
```

These values are used as the default box shadow for elements that need a box shadow and also handles hover states. An example looks like:

```scss
button {
  /* Some button style */
  box-shadow: var(--elevation-one);
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: var(--elevation-two);
  }
}
```

To make the system very flexible, let's introduce the concept of variable intentions. Variable intentions simply define the intention of a variable. In essence, they serve as a proxy between the actual values in a variable and where the variable is used in the css declaration rule. Here's what that looks like in code:

```css
:root {
  --backgroundColor: var(--color-primary);
  --headingColor: var(--color-secondary);
  --textColor: var(--color-tertiary);
  --footerBackground: var(--gray-100);
}
```

```css
section {
  background: var(--backgroundColor);
}

h1 {
  color: var(--headingColor);
}

p {
  color: var(--textColor);
}
```

The custom properties defined here simply hold values from another variable.You might be wondering, why are we doing this? The reason for this is that when we define custom properties, it's a good practice to leave them unchanged. But there might be the need to change the styles applied to an element maybe based on a theme or media query.

Where this approach shines is that we can essentially build a theming system off of custom properties without having to use javascript. So let's assume we have to add a dark theme to our design system, that should not be difficult. What we'll do is then use the custom properties used as variable intentions to update values. So let's add a class called `.dark`

```css
.dark {
  /* Variable intentions updated */
  --backgroundColor: var(--color-black-glare);
  --headingColor: var(--color-white);
  --textColor: var(--color-white);
}
```

And with this class, we have added a dark mode. As you might imagine, we can simply add other theme values by just updating the values assigned to the variable intentions.

The complete code looks like this:

```css
:root {
  /* Brand Colors */
  --color-primary: hsl(171, 100%, 46%);
  --color-primary-glare: hsl(171, 100%, 68%);
  --color-secondary: hsl(350, 100%, 66%);
  --color-tertiary: hsl(51, 98%, 65%);
  --color-white: hsl(210, 20%, 100%);
  --color-black: hsl(214, 100%, 15%);
  --color-black-glare: hsl(214, 44%, 19%);
  --color-black-shade: hsl(214, 41%, 20%);

  /* Neutral Colors */
  --gray-100: hsl(210, 20%, 98%);
  --gray-200: hsl(210, 20%, 88%);
  --gray-300: hsl(210, 20%, 78%);
  --gray-400: hsl(210, 20%, 68%);
  --gray-500: hsl(210, 20%, 58%);

  /* Typography */
  --font-display: sans-serif;
  --font-body: 'Noto Sans', sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;

  /* Type/Space scale */
  --base-size: 1rem;

  --size-100: calc(var(--base-size) * 0.75);
  --size-200: calc(var(--base-size) * 1);
  --size-300: calc(var(--base-size) * 1.33);
  --size-400: calc(var(--base-size) * 1.77);
  --size-500: calc(var(--base-size) * 2.36);
  --size-600: calc(var(--base-size) * 3.15);
  --size-700: calc(var(--base-size) * 4.2);
  --size-800: calc(var(--base-size) * 5.6);

  /* Utilities */
  --elevation-one: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --elevation-two: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  /* Variable Intentions */
  --backgroundColor: var(--color-primary);
  --headingColor: var(--color-secondary);
  --textColor: var(--color-tertiary);
  --footerBackground: var(--gray-100);
}

.dark {
  --backgroundColor: var(--color-black-glare);
  --headingColor: var(--color-white);
  --textColor: var(--color-white);
}
```

And that's it. Designing a flexible design system with custom properties.
