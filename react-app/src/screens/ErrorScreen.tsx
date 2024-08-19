import { FC } from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export const ErrorScreen: FC = () => {
  const error = useRouteError();

  const errorMessage = isRouteErrorResponse(error)
    ? error.statusText
    : error instanceof Error
    ? error.message
    : 'An unknown error occurred';

  return (
    <div className="error-screen">
      <h1>Oops, something went wrong</h1>
      <div>{errorMessage}</div>
    </div>
  );
};
