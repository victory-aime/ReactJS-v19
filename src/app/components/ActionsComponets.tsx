"use client";
import React, { useActionState, useOptimistic } from "react";
import { fakeApiCall } from "../api/route";
import { Form } from "./Form";

export function ActionsComponents({
  name,
  onUpdate,
}: {
  name: string;
  onUpdate: () => void;
}) {
  const [value, setValue] = useOptimistic(name);
  const [response, handleSubmit, isPending] = useActionState(
    async (_: unknown, formData: FormData) => {
      const previousName = name;
      try {
        setValue(formData?.get("name") as string);
        await fakeApiCall(formData?.get("name") as string);
        onUpdate();
        return "Success!";
      } catch {
        setValue(previousName);
        return "Name can't be empty or Error!";
      }
    },
    ""
  );

  return (
    <Form
      value={value}
      handleSubmit={handleSubmit}
      isPending={isPending}
      response={response}
    />
  );
}