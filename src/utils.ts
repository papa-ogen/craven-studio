import { IParticipant } from "./divide-debt";

export const divideDebt = (
  totalDepth: number,
  participants: IParticipant[]
): IParticipant[] => {
  const equalShare = totalDepth / participants.length;
  return participants.map((participant) => {
    if (!participant.paid) return { ...participant, debt: -equalShare };
    return { ...participant, debt: participant.paid - equalShare };
  }, 0);
};

export const getTotalDebt = (participants: IParticipant[]): number => {
  return participants.reduce((acc, p) => {
    if (!p.paid) return acc;
    return p.paid + acc;
  }, 0);
};
