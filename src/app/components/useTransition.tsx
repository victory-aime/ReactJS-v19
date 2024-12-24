"use client";
import React, { useTransition, useOptimistic, useState } from "react";
import { fakeApiCall } from "../api/route";
import { Form } from "./Form";

export function UseTransitionExample({
  name,
  onUpdate,
}: {
  name: string;
  onUpdate: () => void;
}) {
  const [value, setValue] = useOptimistic(name);
  const [isPending, startTransition] = useTransition();
  const [response, setResponse] = useState<string>();

  const onSubmit = async (formData: FormData) => {
    const previousName = name;
    try {
      setValue(formData?.get("name") as string);
      await fakeApiCall(formData?.get("name") as string);
      onUpdate();
      return setResponse("Success!");
    } catch {
      setValue(previousName);
      return setResponse("Name can't be empty or Error!");
    }
  };

  return (
    <Form
      value={value}
      handleSubmit={(value) => {
        startTransition(() => {
          onSubmit(value);
        });
      }}
      isPending={isPending}
      response={response ?? ""}
    />
  );
}
