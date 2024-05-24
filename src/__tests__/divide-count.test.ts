import { IParticipant } from "../divide-debt";
import { divideRepay } from "../divide-debt/divide-count";

describe("divide repay", () => {
  const givenDebts: IParticipant[] = [
    {
      id: "participant-0",
      name: "Jugge",
      paid: 429,
      debt: 237.2,
    },
    {
      id: "participant-1",
      name: "Jimmy",
      paid: 530,
      debt: 338.2,
    },
    {
      id: "participant-2",
      name: "Norpan",
      paid: 0,
      debt: -191.8,
    },
    {
      id: "participant-3",
      name: "Basse",
      paid: 0,
      debt: -191.8,
    },
    {
      id: "participant-4",
      name: "Vitalii",
      paid: 0,
      debt: -191.8,
    },
  ];

  it("should split costs and debts between people", () => {
    const expectedDebts = [
      "Norpan pays Jugge 192",
      "Basse pays Jugge 45",
      "Basse pays Jimmy 146",
      "Vitalii pays Jimmy 192",
    ];

    expect(divideRepay(givenDebts)).toEqual(expectedDebts);
  });
  it("should split costs and debts between people when a few properties are undefined", () => {
    const givenDebts: IParticipant[] = [
      {
        name: "lisa",
        paid: 300,
        id: "participant-2",
        debt: 0,
      },
      {
        name: "billy",
        paid: 500,
        id: "participant-1",
        debt: 200,
      },
      {
        name: "test",
        paid: 100,
        id: "participant-0",
        debt: -200,
      },
    ];
    const expectedDebts = [
      "Norpan pays Jugge 192",
      "Basse pays Jugge 45",
      "Basse pays Jimmy 146",
      "Vitalii pays Jimmy 192",
    ];

    expect(divideRepay(givenDebts)).toEqual(expectedDebts);
  });
});
