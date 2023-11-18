import { ElementType, Suspense } from "react";

export const LoadComponent = (Component: ElementType) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function fn(props: any): JSX.Element {
    return (
      <Suspense fallback={<h1>Spinner</h1>}>
        <Component {...props} />
      </Suspense>
    );
  };
};

export default LoadComponent;
