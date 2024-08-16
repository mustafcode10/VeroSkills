import React from 'react';

// Higher-Order Component (HOC) that adds a loading indicator
const WithLoading = (WrappedComponent) => {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...props} />;
  };
};

export default WithLoading;