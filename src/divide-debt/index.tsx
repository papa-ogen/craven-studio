import { Button, Heading, Input } from "@papa-ogen/craven-ui";
import { useState } from "react";

export interface IParticipant {
  name: string;
  amount: number;
  difference?: number;
}

const FormRow = ({
  participant,
  id,
}: {
  participant?: IParticipant;
  id: number;
}) => {
  return (
    <div className="flex space-x-4">
      <Input
        label={`Participant #${id + 1}`}
        id={`participant-name-${id}`}
        name="participant-name"
        value={participant?.name}
        placeholder="Name..."
      />
      <Input
        label="Expense"
        id={`participant-expense-${id}`}
        name="participant-expense"
        value={participant?.amount}
        placeholder="Amount..."
        type="number"
      />
      {participant?.difference && (
        <Input
          label="Expense"
          id={`participant-difference-${id}`}
          name="participant-difference"
          value={participant?.difference}
          placeholder="Difference..."
          type="number"
        />
      )}
    </div>
  );
};

export const DivideDebt = () => {
  const [participants, setParticipants] = useState<IParticipant[]>([]);

  const addParticipant = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const data = new FormData(form);
    const participant = {} as IParticipant;
    for (const [name, value] of data) {
      if (name === "participant-name") {
        participant.name = value as string;
      } else if (name === "participant-expense") {
        participant.amount = Number(value);
      }
    }
    setParticipants((prev) => [...prev, participant]);

    form.reset();
  };

  return (
    <div className="min-h-screen p-4">
      <Heading type="screenTitle">Divide Debt</Heading>
      <form
        className="py-10 flex space-x-4"
        onSubmit={(e) => addParticipant(e)}
      >
        <FormRow id={participants.length} />
        <div className="h-10 pt-[29px]">
          <Button type="submit" variant="success">
            Add
          </Button>
        </div>
      </form>
      <div className="flex flex-col">
        {participants.map((participant, i) => (
          <FormRow participant={participant} key={participant.name} id={i} />
        ))}
      </div>
      <hr className="text-orange-500" />
      <Heading type="sectionTitle">
        Total:{" "}
        {participants.reduce((acc, p) => {
          return p.amount + acc;
        }, 0)}
      </Heading>
    </div>
  );
};
