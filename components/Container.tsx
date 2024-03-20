import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <section className="max-w-screen-xl mx-auto">{children}</section>;
};

export default Container;
