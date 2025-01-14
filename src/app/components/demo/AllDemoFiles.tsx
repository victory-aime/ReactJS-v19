"use client";

import { useEffect, useState } from "react";
import { ActionsComponents } from "../ActionsComponents";
import { UseTransitionExample } from "../useTransition";

export const DemoActionHooks = () => {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setName(localStorage.getItem("name"));
    }
  }, []);

  const onUpdate = () => {
    setName(localStorage.getItem("name"));
  };
  return <ActionsComponents name={name ?? ""} onUpdate={onUpdate} />;
};

export const DemoUseTransitionHooks = () => {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setName(localStorage.getItem("name"));
    }
  }, []);

  const onUpdate = () => {
    setName(localStorage.getItem("name"));
  };
  return <UseTransitionExample name={name ?? ""} onUpdate={onUpdate} />;
};
