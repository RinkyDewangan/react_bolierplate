/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default class ErrorBoundary extends React.Component<Props,State,ReturnType<any>> {
  constructor(props:Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true ,error :error};
  }

  componentDidCatch(error) {
    console.error("Uncaught error:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1 style={{color: "red"}}>Error Displaying List Of Movies.....</h1>
        </div>
      );
    }

    return this.props.children; 
  }
}

