export const Form = ({
  value,
  handleSubmit,
  isPending,
  response,
}: {
  value: string;
  handleSubmit: (value: FormData) => void;
  isPending: boolean;
  response: string;
}) => {
  return (
    <>
      <p
        className={`${
          isPending ? "text-neutral-600 animate-pulse" : " text-black"
        }`}
      >
        Name: {value}
      </p>
      <form action={(e) => handleSubmit(e)}>
        <input name="name" placeholder="Enter name" disabled={isPending} />
        <button aria-busy={isPending} type="submit" disabled={isPending}>
          {isPending ? "Chargement..." : "Envoyer"}
        </button>
      </form>
      {response === "Name can't be empty or Error!" && (
        <p style={{ color: "red" }}>{response}</p>
      )}
      {response === "Success!" && <p style={{ color: "green" }}>{response}</p>}
    </>
  );
};
