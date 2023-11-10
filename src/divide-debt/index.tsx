import { Button, Heading, Input } from "@papa-ogen/craven-ui";
import { useState } from "react";
import { AnimatePresence, motion, useIsPresent } from "framer-motion";
import { divideDebt, getTotalDebt } from "../utils";

export interface IParticipant {
  name: string;
  paid?: number;
  debt?: number;
}

const FormRow = ({
  participant,
  id,
}: {
  participant?: IParticipant;
  id: number;
}) => {
  const isPresent = useIsPresent();
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 900, damping: 40 },
  };
  return (
    <motion.div className="flex space-x-4" {...animations} layout>
      <Input
        label={`Participant #${id + 1}`}
        id={`participant-name-${id}`}
        name="participant-name"
        value={participant?.name}
        placeholder="Name..."
      />
      <Input
        label="Paid"
        id={`participant-paid-${id}`}
        name="participant-paid"
        value={participant?.paid}
        placeholder="Amount..."
        type="number"
      />
      {participant?.debt && (
        <Input
          label="Debt"
          id={`participant-debt-${id}`}
          name="participant-debt"
          value={participant?.debt}
          placeholder="Difference..."
          type="number"
          hasError={participant?.debt < 0}
        />
      )}
    </motion.div>
  );
};

export const DivideDebt = () => {
  const [participants, setParticipants] = useState<IParticipant[]>([]);
  const totalDebt = getTotalDebt(participants);
  const addParticipant = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const data = new FormData(form);
    const participant = {} as IParticipant;
    for (const [name, value] of data) {
      if (name === "participant-name") {
        participant.name = value as string;
      } else if (name === "participant-paid") {
        participant.paid = Number(value);
      }
    }

    setParticipants((prev) => {
      const updatedParticipants = [participant, ...prev];
      const total = getTotalDebt(updatedParticipants);
      return divideDebt(total, updatedParticipants);
    });

    form.reset();
  };

  return (
    <div className="min-h-screen p-4 w-[600px]">
      <Heading type="screenTitle">Divide Debt</Heading>
      <form
        className="py-10 flex space-x-4"
        onSubmit={(e) => addParticipant(e)}
      >
        <FormRow id={participants.length} />
        <div className="h-10 pt-[29px] self-start">
          <Button type="submit" variant="success">
            Add
          </Button>
        </div>
      </form>
      <div className="flex flex-col">
        <AnimatePresence>
          {participants.map((participant, i) => (
            <FormRow participant={participant} key={participant.name} id={i} />
          ))}
        </AnimatePresence>
      </div>
      <hr className="text-orange-500" />
      <Heading type="sectionTitle">Total: {totalDebt}</Heading>
    </div>
  );
};
