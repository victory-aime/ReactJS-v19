"use client";

import { useState } from "react";
import { ActionsComponents } from "../ActionsComponets";
import { UseTransitionExample } from "../useTransition";

export const DemoActionHooks = () => {
  const [name, setName] = useState(localStorage.getItem("name"));

  const onUpdate = () => {
    setName(localStorage.getItem("name"));
  };
  return <ActionsComponents name={name ?? ""} onUpdate={onUpdate} />;
};

export const DemoUseTransitionHooks = () => {
  const [name, setName] = useState(localStorage.getItem("name"));

  const onUpdate = () => {
    setName(localStorage.getItem("name"));
  };
  return <UseTransitionExample name={name ?? ""} onUpdate={onUpdate} />;
};
