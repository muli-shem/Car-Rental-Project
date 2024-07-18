import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from "lucide-react";// Ensure you have the correct icon import

interface ErrorProps {
  statusText?: string;
  message?: string;
}

const Error: React.FC<ErrorProps> = ({ statusText, message }) => {
  return (
    <div className="py-10 bg:base-100">
      <div className="text-center">
        <p className="text-base font-semibold text-red-500">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-green-300 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-7 text-gray-600">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <p>
          {statusText || message}
        </p>
        <div className="mt-4 flex items-center justify-center gap-x-3">
          <Link to="/" className="inline-flex items-center btn btn-sm btn-info text-sm font-semibold">
            <ArrowLeft size={16} className="mr-2" />
            Go back
          </Link>
          <Link to="/" className="rounded-md btn btn-primary btn-sm text-sm font-semibold">
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;