"use client";

import Header from "@/components/Header";
import React from "react";

const Provider = ({ children }) => {
  return (
    <div>
        <Header />  
        <div>
        {children}
      </div>
    </div>
  );
};

export default Provider;
