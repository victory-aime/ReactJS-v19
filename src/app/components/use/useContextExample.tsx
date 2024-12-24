"use client";
import React, { Suspense, use, createContext } from "react";

const ListContext = createContext<string | null>(null);

export const UseContext = () => {
  return (
    <Suspense fallback={"isLoading...."}>
      <ListContext value={localStorage.getItem("name")}>
        <ChildName />
      </ListContext>
    </Suspense>
  );
};

const ChildName = () => {
  const value = use(ListContext);
  return (
    <div>
      <p>{value}</p>
    </div>
  );
};
