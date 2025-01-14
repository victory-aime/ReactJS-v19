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
  const [isPending, startTransition] = useTransition();
  const [response, setResponse] = useState<string>();

  function onSubmit(formData: FormData) {
    startTransition(async function () {
      try {
        await fakeApiCall(formData?.get("name") as string);
        onUpdate();
        return setResponse("Success!");
      } catch {
        return setResponse("Name can't be empty or Error!");
      }
    });
  }

  return (
    <Form
      value={name}
      handleSubmit={onSubmit}
      isPending={isPending}
      response={response ?? ""}
    />
  );
}
