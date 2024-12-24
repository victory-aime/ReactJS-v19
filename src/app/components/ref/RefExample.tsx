"use client";

import { ComponentProps, useRef } from "react";

const Button = (props: ComponentProps<"button">) => {
  return (
    <button
      type={"submit"}
      className="inline-block rounded border border-indigo-500 bg-indigo-300 mt-5 gap-6"
      {...props}
    >
      Download
    </button>
  );
};

export const RefExample = () => {
  const ref = useRef<HTMLButtonElement>(null);
  const onClick = () => {
    if (!ref.current) return;
    ref.current.style.background = Math.random() > 0.5 ? "red" : "green";
  };

  return (
    <div>
      <button onClick={() => onClick()}> Change Background</button>
      <Button ref={ref} />
    </div>
  );
};
