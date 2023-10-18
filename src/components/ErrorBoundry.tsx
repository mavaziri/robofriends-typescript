import React, { Component } from "react";

interface IState {
  hasError: boolean;
}

interface IErrorBoundryProps {
  children: React.ReactNode;
}

class ErrorBoundry extends Component<IErrorBoundryProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return <h1>Ooops! That is not good</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundry;
