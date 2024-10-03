import React from "react";

import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

const ClientSkeleton = () => {
  return (
    <>
      <div className="hidden w-full md:grid grid-cols-1 md:grid-cols-2 gap-5">
        <Card className="mt-6 w-full animate-pulse flex justify-center">
          <CardHeader
            shadow={false}
            floated={false}
            className="relative grid h-40 place-items-center bg-gray-300 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-12 w-12 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </CardHeader>
          <CardFooter className="pt-0 mt-3">
            <Button
              disabled
              tabIndex={-1}
              className="h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
            >
              &nbsp;
            </Button>
          </CardFooter>
        </Card>
        <Card className="mt-6 w-full animate-pulse flex justify-center">
          <CardHeader
            shadow={false}
            floated={false}
            className="relative grid h-40 place-items-center bg-gray-300 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-12 w-12 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </CardHeader>
          <CardFooter className="pt-0 mt-3">
            <Button
              disabled
              tabIndex={-1}
              className="h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
            >
              &nbsp;
            </Button>
          </CardFooter>
        </Card>
        <Card className="mt-6 w-full animate-pulse flex justify-center">
          <CardHeader
            shadow={false}
            floated={false}
            className="relative grid h-40 place-items-center bg-gray-300 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-12 w-12 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </CardHeader>
          <CardFooter className="pt-0 mt-3">
            <Button
              disabled
              tabIndex={-1}
              className="h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
            >
              &nbsp;
            </Button>
          </CardFooter>
        </Card>
        <Card className="mt-6 w-full animate-pulse flex justify-center">
          <CardHeader
            shadow={false}
            floated={false}
            className="relative grid h-40 place-items-center bg-gray-300 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-12 w-12 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </CardHeader>
          <CardFooter className="pt-0 mt-3">
            <Button
              disabled
              tabIndex={-1}
              className="h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
            >
              &nbsp;
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:hidden">
        <Card className="mt-6 w-full animate-pulse flex justify-center">
          <CardHeader
            shadow={false}
            floated={false}
            className="relative grid h-40 place-items-center bg-gray-300 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-12 w-12 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </CardHeader>

          <CardFooter className="pt-0 mt-3">
            <Button
              disabled
              tabIndex={-1}
              className="h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
            >
              &nbsp;
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default ClientSkeleton;
