import { forwardRef, useImperativeHandle, useRef } from "react";
import { Input } from "@papa-ogen/craven-ui";
import { motion } from "framer-motion";
import { IParticipant } from ".";

const animations = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0, opacity: 0 },
  transition: { type: "spring", stiffness: 900, damping: 40 },
};

type FormRowProps = {
  participant?: IParticipant;
  id: number;
  onChange?: (id: string, value: string) => void;
};

export const FormRow = forwardRef<HTMLDivElement, FormRowProps>(
  (props, ref) => {
    const { participant, id, onChange } = props;
    const participantNameRef = useRef<HTMLInputElement>();

    useImperativeHandle(ref, () => ({
      get participantNameInput() {
        return participantNameRef.current;
      },
    }));

    return (
      <motion.div className="flex space-x-4" {...animations} layout ref={ref}>
        <Input
          label={`Participant ${id + 1}`}
          id={`participant-name-${id}`}
          name="participant-name"
          value={participant?.name || undefined}
          placeholder="Name..."
          ref={participantNameRef}
        />
        <Input
          label="Paid"
          id={`participant-paid-${id}`}
          name="participant-paid"
          value={participant?.paid ? participant.paid.toFixed() : undefined}
          defaultValue={0}
          placeholder="Amount..."
          type="number"
          onChange={(e) =>
            onChange && onChange(`participant-${id}`, e.target.value)
          }
        />
        {participant?.debt ? (
          <Input
            label="Debt"
            id={`participant-debt-${id}`}
            name="participant-debt"
            value={participant?.debt}
            placeholder="Difference..."
            type="number"
            hasError={participant?.debt < 0}
          />
        ) : null}
      </motion.div>
    );
  }
);
