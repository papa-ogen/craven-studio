import { Button, Heading, Page } from "@papa-ogen/craven-ui";
import React, { useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { divideDebt, getTotalDebt } from "../utils";
import { FormRow } from "./FormRow";
export interface IParticipant {
  id: string;
  name: string;
  paid?: number;
  debt?: number;
}

export const DivideDebt = () => {
  const [participants, setParticipants] = useState<IParticipant[]>([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const totalDebt = getTotalDebt(participants);
  const formRowRef = useRef<HTMLInputElement>(null);

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

    participant.id = `participant-${participants.length}`;

    setParticipants((prev) => {
      const updatedParticipants = [participant, ...prev];
      const total = getTotalDebt(updatedParticipants);
      return divideDebt(total, updatedParticipants);
    });

    form.reset();

    if (!formRowRef.current) return;

    formRowRef.current.participantNameInput.focus();
  };

  const onRowChange = (id: string, value: string) => {
    const updatedParticipants = [...participants];
    const participant = updatedParticipants.find((p) => p.id === id);

    if (!participant) return;

    participant.paid = Number(value);
    const total = getTotalDebt(updatedParticipants);
    setParticipants(divideDebt(total, updatedParticipants));
  };

  return (
    <main className="max-w-sm md:max-w-xl flex-col flex p-4 md:p-8 justify-center items-center flex-grow">
      <Heading type="screenTitle">Divide Debt</Heading>
      <Page title="">
        <form
          className="py-10 flex space-x-4"
          onSubmit={(e) => addParticipant(e)}
        >
          <FormRow id={participants.length} ref={formRowRef} />
          <div className="h-10 pt-[29px] self-start">
            <Button type="submit" variant="success">
              Add
            </Button>
          </div>
        </form>
        <div className="flex flex-col">
          <AnimatePresence>
            {participants.map((participant, i) => (
              <FormRow
                participant={participant}
                key={participant.name}
                id={i}
                onChange={onRowChange}
              />
            ))}
          </AnimatePresence>
        </div>
        <hr className="text-orange-500" />
        <Heading type="sectionTitle">
          Total:{" "}
          {totalDebt.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </Heading>
      </Page>
    </main>
  );
};
