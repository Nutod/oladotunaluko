---
title: 'Getting Up and Running with React Hooks - First Part'
excerpt: 'React Hooks represent a change in our approach to writing React apps. Functions can now have access to state and lifecycles...well not necessary'
coverImage: 'https://source.unsplash.com/P8PlK2nGwqA/1920x1351'
date: '2020-09-16T05:35:07.322Z'
description: 'React Hooks Up and Running'
imageCaption: 'Wooded lake island - Unsplash'
---

### Introduction

React Hooks represent a change in our approach to writing React apps. In the previous iterations of React, components were generally divided into two types: presentational and container components. Container components have a state and manage the state. State changes occur either through lifecyle hooks that cause a state or through functions passed as props to its child components. Presentational components on the other hand, don't have state, just UI logic that renders some view.

This approach was not necessarily bad, but it was more difficult to reason about especially when the size of applications grow. For example,

```js
//1.  parent
//2.  - child
//3.  -- innerChild
//4.  --- yetAnotherInnerChild
//5.  ---- yetAgainAnInnerChildSomewhere
```

The pseudocode above tries to represent an app structure which might be a bit contrieved but for the purposes of illustration, let's go with it. If the child component on level 5 needs access to some piece of state in the parent component, that state can only be received if it is passed as prop down the tree. So components on levels 2 through 4 now have access to a piece of state they really do not need to know about. What could possibly go wrong? A lot of things. State management tools like redux tried to solve this by introducing a store to applications and components can have access to state they care about - only if they are class components. So now, we have a list of issues to fix

1. React's component architecture is good and we want to use it
2. Classes could get a bit messy. We need to remember to call `super(props)`
3. In addition, we need to use the this keyword a whole lot more
4. Organizing our components by lifecycle methods forces us to sprinkle related logic throughout our components
5. Sharing primitive logic isn't so easy

In this article, we'll take a look at one of the series hooks that come with React.

This is where react hooks come in. They provide a different approach to writing applications. Rather than writing classes for stateful components, we can now write them as function components - pretty cool yeah!?

#### React.useState

This most basic need for any component is the ability to manage some state.

Let's use a Counter component as an example

```jsx
class Counter extends React.Component {
  state = {
    count: 0,
  }

  increment = () =>
    this.setState(({ initialCount }) => ({ count: initialCount + 1 }))

  decrement = () =>
    this.setState(({ initialCount }) => ({ count: initialCount - 1 }))

  render() {
    const { count } = this.state

    return (
      <div>
        <p>Count: {count}</p>

        <button onClick={this.increment}>Increment</button>

        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}
```

This worked fine, but with the advent of React Hooks, we no longer need to use Classes for our stateful components. Instead, we can use function components and make them stateful with the useState Hook.

useState comes built-in with React and can be accessed via React.useState. It takes in a single argument, the initial value for that piece of state, and returns an array with the first item being the state value and the second item being a way to update that state.

```jsx
function Counter() {
  const [count, setCount] = React.useState(0)

  const increment = () => setCount(count => count + 1)

  const decrement = () => setCount(count => count - 1)

  return (
    <div>
      <p>Count: {count}</p>

      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>
    </div>
  )
}
```

The code sample is not only shorter but also much easier to understand.

If you're familiar with React, you'd know that one thing that triggers a re-render of React components is whenever there's a state change. The same applies to useState. It triggers a re-render for React components in effect, components get updated afterwards and also preserves the new value across re-renders.

In summary, React hooks provide a way for us to think about writing applications in an entirely different way with the toolbox of hooks we have access to.
