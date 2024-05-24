import { IParticipant } from "../divide-debt";
import { divideDebt, getTotalDebt } from "../utils";

test("Calculate debt", () => {
  const givenParticipants: IParticipant[] = [
    {
      id: "participant-0",
      name: "John",
      paid: 10,
    },
    {
      id: "participant-1",
      name: "Mary",
    },
  ];
  const total = getTotalDebt(givenParticipants);

  const expectedParticipants = [
    {
      debt: 5,
      id: "participant-0",
      name: "John",
      paid: 10,
    },
    {
      debt: -5,
      id: "participant-1",
      name: "Mary",
    },
  ];

  expect(divideDebt(total, givenParticipants)).toEqual(expectedParticipants);
});

test("Calculate debt with no participants", () => {
  const givenParticipants: IParticipant[] = [];
  const total = getTotalDebt(givenParticipants);

  const expectedParticipants: IParticipant[] = [];

  expect(divideDebt(total, givenParticipants)).toEqual(expectedParticipants);
});

test("Calculate total debt", () => {
  const givenParticipants: IParticipant[] = [
    {
      id: "participant-0",
      name: "John",
      paid: 10,
    },
    {
      id: "participant-1",
      name: "Mary",
    },
    {
      id: "participant-2",
      name: "Peter",
      paid: 10,
    },
  ];
  const total = getTotalDebt(givenParticipants);

  expect(total).toEqual(20);
});
