What is JSX, and why is it used?

- JSX is JavaScript XML. It is an extension that is used for writing HTML like code in JavaScript. By using JSX we can devide our website in components. Like for navbar, main part, footer etc we can create individual JSX file. And then we can add them in a common component like App.jsx.

What is the difference between State and Props?

- Props are data that are passed from a parent component to a child component. it is not changeable and not mutable.
  on the other hand, state is a internal data which is mentained by the component itself. it is changeable.
  props are use to pass data, function that is controlled from the parent component but the state is used to update itself for any condition any action.

What is the useState hook, and how does it work?

- The useState hook is a function that add and manage data. some data that has to manage dynamecally is passed by the useState. for example:
  function MyComponent() {
  const [count, setCount] = useState(25);
  }

How can you share state between components in React?

- using useState we can share state between components in React.

How is event handling done in React?

- We use onClick for event Handling in React. For example:

    <button onClick={handleClick}>Click Me</button>

    const handleClick = () => {
        console.log('Button clicked!');
      };

Like this we can create a function in react and use it in different component.

