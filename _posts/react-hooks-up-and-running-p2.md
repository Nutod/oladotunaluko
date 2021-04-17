---
title: 'React Hooks Up and Running - Part 2'
excerpt: 'React Hooks represent a change in our approach to writing React apps. Functions can now have access to state and lifecycles...well not necessary'
coverImage: 'https://source.unsplash.com/gzQOTctip-I/1920x1085'
date: '2020-09-23T05:35:07.322Z'
description: 'React Hooks Up and Running'
imageCaption: 'View on a desolate lake - Unsplash'
---

### Introduction

React Hooks represent a change in our approach to writing React apps. In the previous iterations of React, components were generally divided into two types: presentational and container components. In the first part of this series, we listed a few points to know about React before hooks were introduced

1. React's component architecture is good and we want to use it
2. Classes could get a bit messy. We need to remember to call `super(props)`
3. In addition, we need to use the this keyword a whole lot more
4. Organizing our components by lifecycle methods forces us to sprinkle related logic throughout our components
5. Sharing primitive logic isn't so easy

In this article, we'll take a look at another hook that's built into React.

### React.useEffect

The key to writing bug-free software is to **maximize the predictability of your program**. One strategy to do that is to minimize and encapsulate the side effects in your program. A side effect is a state change that can be observed outside of its local environment. Said differently, a side effect is anything that interacts with the outside world (in our case, “outside” meaning outside of the local function that’s being executed). Mutating non-local variables, making network requests, and updating the DOM are all examples of common side effects.

> A side effect is a state change that can be observed outside of a local environment

There are three aspects to the useEffect API that are important to understand - how to add an effect, how to skip re-invoking the effect, and how to (optionally) clean up that effect.

#### Rules of Hooks

1. Only call Hooks from the top-level of a function component or a custom Hook.

2. You can’t call them anywhere else. That means you can’t call them from a normal function, you can’t call them from a class component, and you can’t call them anywhere that’s not on the top level like inside of a loop, if statement, or event handler.

```jsx
function Counter () {
  // 👍 from the top level function component
  const [count, setCount] = React.useState(0)

  if (count % 2 === 0) {
    // 👎 not from the top level
    React.useEffect(() => {})
  }

  const handleIncrement = () => {
    setCount((count) => count + 1)

    // 👎 not from the top level
    React.useEffect(() => {})
  }

  ...
}

class Counter extends React.Component {
  render () {
    // 👎 from inside a Class component
    const [count, setCount] = React.useState(0)
  }
}

function getUser () {
  // 👎 from inside a normal function
  const [user, setUser] = React.useState(null)
}
```

The reason for this rule is because React relies on the call order of Hooks to keep track of internal state and references. If your Hooks aren’t called consistently in the same order across renders, React can’t do that.

#### Dependency Array

Part of mastering the useEffect Hook is learning how to properly manage its second argument, the dependency array.

```jsx
React.useEffect(
  () => {
    // side effect
  },
  [
    /* dependency array */
  ]
)
```

Leave it off and you could run into an infinite loop scenario. Forget to add values your effect depends on and you’ll have stale data. Add too many values and your effect won’t be re-invoked when it needs to be.

```jsx
React.useEffect(() => {
  setCount(count + 1)
}, [count])
```

In the code block above, we are saying that the effect block depends on the count value. If the count value changes, we run the effect. But the effect is also changing the count value so this essentially creates an infinite loop.
