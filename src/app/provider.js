"use client";

import Header from "@/components/Header";
import React from "react";

const Provider = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Provider;
