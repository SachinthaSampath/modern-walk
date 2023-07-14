import React, { LegacyRef, forwardRef } from "react";

interface ChildProps {
  className?: string;
}

//child component that will receive the forwarded ref
//To use React.forwardRef with TypeScript, you need to define the types for the forwarded ref and the props of the child component.
const ChildComponent = forwardRef<HTMLInputElement, ChildProps>(
  (props, ref) => {
    const { className } = props;
    return <input ref={ref} className={className} />;
  }
);

const ParentComponentTestRef = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      //// Accessing the child input's DOM node
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <ChildComponent
        className="border border-red-500 text-center"
        ref={inputRef}
      />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};

export { ChildComponent, ParentComponentTestRef };

/*
In this TypeScript example, we define the ChildProps interface to represent the props of the child component (ChildComponent).

The forwardRef function is called with two type arguments. The first argument represents the type of the forwarded ref. In this case, we use HTMLInputElement since the child component is an input element. This type indicates that the ref will point to an input element's DOM node.

The second argument of forwardRef is the type of the ChildProps interface. This ensures that the props passed to the child component are correctly typed.

In ParentComponent, we define inputRef as a React.useRef<HTMLInputElement>(null) to create a ref with the type HTMLInputElement | null. This matches the type argument provided to forwardRef in ChildComponent.

By providing explicit type annotations and using generics, TypeScript ensures type safety when using React.forwardRef. It helps catch potential type errors and provides better tooling support during development.
*/
