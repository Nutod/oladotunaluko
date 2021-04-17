---
title: 'Annotating React Components with Typescript'
excerpt: 'Using React with Typescript is becoming increasingly more popular thanks to the obvious advantage it offers through its type safe system.'
coverImage: 'https://source.unsplash.com/tl18RPgKAEE/1920x1439'
date: '2020-11-16T05:35:07.322Z'
description: 'Annotating React Components with Typescript'
imageCaption: 'Chutes de Rivière-du-Loup, Québec, Canada - Unsplash'
---

### Introduction

Using React with Typescript is becoming increasingly more popular thanks to the obvious advantage it offers through its type safe system. In this article, I'll show how to get up to speed with annotating React Components with Typescript.

> If you are creating a new app from create-react-app or using a framework that supports Typescript, this comes out-of-the-box. In that case, you can skip down to the annotation portion of this article.

#### React Type Declarations

There's a few things that we need to be configure to use Typescript with React as React doesn’t ship with TypeScript declarations; we have to install them from DefinitelyTyped.

> [DefinitelyTyped](https://definitelytyped.org/) is a type repository for open source projects.

```
npm install --save-dev @types/react @types/react-dom
```

#### Transforming JSX Code

If we are using React 16.14 or React 17, we need to make sure we have TypeScript 4.1 or later installed. With these versions of React and TypeScript we can use JSX in our code without having to import React.

We can configure TypeScript to use these new JSX transforms by setting the jsx option in tsconfig.json to `react-jsx`

The complete `tsconfig.json` looks like:

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "noUnusedLocals": false
  },
  "include": ["src"]
}
```

#### .tsx Extension

The most important thing to remember when using React with TypeScript is that file extensions matter. TypeScript only recognizes JSX inside of files that end with .tsx; it also disables the conflicting TypeScript syntax in those files.

#### Annotating Class Components

Within TypeScript, React.Component is a generic type `React.Component<PropType, StateType>` so you want to provide it with (optional) prop and state type parameters.

The generic parameters apply types to this.props and this.setState, but not to the parameters of class lifecycle methods, like shouldComponentUpdate or componentDidUpdate. We need to annotate those parameters with the interfaces used for the component. As an example, let's assume we have a Counter component that looks something like:

```tsx
class Counter extends React.Component<CounterProps, CounterState> {
  // ...
  componentDidUpdate(prevProps: CounterProps, prevState: CounterState) {
    // ...
  }
  // ...
}
```

#### Annotating React Functional Components

One thing to remember is that React components all have to return either a React Element or null, so it’s usually a good idea to add a return type annotation to functions so TypeScript can warn if the return type is wrong.

For functional components, the return type is usually a ReactElement for components that have some UI logic or simply null especially in the case of a custom hook that returns no UI. Let's assume the Counter class component above was then refactored to a functional component instead. That might look something like

```jsx
import { ReactElement } from 'react'

function Counter(): ReactElement | null {
  return <div>Yay! I return a count value</div>
}
```

If any other thing is returned from the Counter component, Typescript throws an error.

It's not uncommon to see function components have some prop value they work with. We can annotate those as well

```jsx
function Counter({ initialCount }: { initialCount: number }): ReactElement {
  return <div>Count: {initialCount}</div>
}
```

To explicitly annotate a function type as a React functional component, there's a built-in React.FunctionComponent type, or it’s alias React.FC. This type includes annotations for common static properties that are added to function components, like displayName, propTypes, and defaultProps. It also includes the children prop in your prop definition, and has an explicit return type.

We can use FC by annotating a variable that we assign an arrow function component. FC and FunctionComponent are generic types which accept a type representing the props.

```jsx
import { FC } from 'react'

const Counter: FC<{ initialCount: number }> = ({ count, children }) => {
  return (
    <div>
      Count: {initialCount}
      <br />
      Children: {children}
    </div>
  )
}
```

In this article, we reviewed the basics of how class components in React can be annotated.
