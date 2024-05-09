"use client";

import Login from "../components/Login/Login";

type Props = {
  searchParams?: Record<"callbackUrl" | "error", string>;
};

const page = (props: Props) => {
  return (
    <Login
      error={props.searchParams?.error}
      callbackUrl={props.searchParams?.callbackUrl}
    />
  );
};

export default page;
