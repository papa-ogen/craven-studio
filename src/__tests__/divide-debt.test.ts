import { IParticipant } from "../divide-debt";
import { divideDebt, getTotalDebt } from "../utils";

test("Calculate debt", () => {
  const givenParticipants: IParticipant[] = [
    {
      name: "John",
      paid: 10,
    },
    {
      name: "Mary",
    },
  ];
  const total = getTotalDebt(givenParticipants);

  const expectedParticipants = [
    {
      name: "John",
      paid: 10,
      debt: 5,
    },
    {
      name: "Mary",
      debt: -5,
    },
  ];

  expect(divideDebt(total, givenParticipants)).toEqual(expectedParticipants);
});
