---
title: 'Preview Mode for Static Generation'
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
coverImage: 'https://placeimg.com/640/480/nature'
date: '2020-05-16T05:35:07.322Z'
---

# Heading

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus. Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies.

Venenatis cras sed felis eget velit. Consectetur libero id faucibus nisl tincidunt. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Volutpat consequat mauris nunc congue nisi vitae. Id aliquet risus feugiat in ante metus dictum at tempor. Sed blandit libero volutpat sed cras. Sed odio morbi quis commodo odio aenean sed adipiscing. Velit euismod in pellentesque massa placerat. Mi bibendum neque egestas congue quisque egestas diam in arcu. Nisi lacus sed viverra tellus in. Nibh cras pulvinar mattis nunc sed. Luctus accumsan tortor posuere ac ut consequat semper viverra. Fringilla ut morbi tincidunt augue interdum velit euismod.

## Lorem Ipsum

Tristique senectus et netus et malesuada fames ac turpis. Ridiculous mus mauris vitae ultricies leo integer malesuada nunc vel. In mollis nunc sed id semper. Egestas tellus rutrum tellus pellentesque. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Eros donec ac odio tempor orci dapibus ultrices. Aliquam sem et tortor consequat id porta nibh. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Diam vulputate ut pharetra sit amet. Ut tellus elementum sagittis vitae et leo. Arcu non odio euismod lacinia at quis risus sed vulputate.

### Sharing non-visual logic

Earlier we mentioned that the reason React didn’t have a great answer to sharing non-visual logic was because “React couples UI to a component”. This lead to overcomplicated patterns like Higher-order components or Render props. As you can probably guess by now, Hooks have an answer for this too. However, it’s probably not what you think. There’s no built-in Hook for sharing non-visual logic, instead, you can create your own custom Hooks that are decoupled from any UI.

The marketing pitch for Hooks is that you’re able to use state inside function components. In reality, Hooks are much more than that. They’re about improved code reuse, composition, and better defaults. There’s a lot more to Hooks we still need to cover, but now that you know WHY they exist, we have a solid foundation to build on.

---

### useState

Perhaps the most critical part of React is the ability for individual components to own and manage their own state. Historically (with Class components), the way we’ve accomplished this is by adding a state property on the component’s instance (this) and updating that state with the setState method.

```jsx
class Theme extends React.Component {
  state = {
    theme: 'light',
  }
  toDark = () => this.setState({ theme: 'dark' })
  toLight = () => this.setState({ theme: 'light' })
  render() {
    const { theme } = this.state

    return (
      <div className={theme}>
        {theme === 'light' ? (
          <button onClick={this.toDark}>🔦</button>
        ) : (
          <button onClick={this.toLight}>💡</button>
        )}
      </div>
    )
  }
}
```

> This worked fine, but with the advent of React Hooks, we no longer need to use Classes for our stateful components. Instead, we can use function components and make them stateful with the useState Hook.

useState comes built-in with React and can be accessed via React.useState. It takes in a single argument, the initial value for that piece of state, and returns an array with the first item being the state value and the second item being a way to update that state.

```jsx
function Theme() {
  const [theme, setTheme] = React.useState('light')

  const toDark = () => setTheme('dark')
  const toLight = () => setTheme('light')

  return (
    <div className={theme}>
      {theme === 'light' ? (
        <button onClick={toDark}>🔦</button>
      ) : (
        <button onClick={toLight}>💡</button>
      )}
    </div>
  )
}
```

#### The Mental Model

Now that we’ve seen a simple example for how the useState API works, before we get into more advanced use cases, it’s important to have a solid mental model for the actual functionality that it provides. Namely, useState allows you to trigger a component re-render, and it can preserve values between renders.

##### Trigger Re-renders

The concept here is the same as before when we’d invoke setState. Whenever you invoke the updater function that useState gives you, assuming the argument you pass in is different from the current state value, React will cause a re-render to the component, updating the UI.
