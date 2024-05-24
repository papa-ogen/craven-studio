import { IParticipant } from ".";

export const divideRepay = (debt: IParticipant[]): string[] => {
  const currentDebt = [...debt];
  const debtRetun: string[] = [];

  debt.forEach((curr, index) => {
    if (curr.debt !== undefined && curr.debt > 0) {
      currentDebt.splice(index, 1);

      //   loop thru stack
      for (let i = 0; i < currentDebt.length; i++) {
        const d = currentDebt[i];

        // if person should recieve money, skip
        if (d.debt === undefined || d.debt > 0) continue;

        const diff: number = curr.debt - -d.debt;

        if (diff > 0) {
          debtRetun.push(
            `${d.name} pays ${curr.name} ${Math.round(Math.abs(d.debt))}`
          );
          curr.debt = diff;
          d.debt = 0;
          if (d.debt) {
            currentDebt.splice(i, 1);
          }
        } else if (diff < 0) {
          debtRetun.push(
            `${d.name} pays ${curr.name} ${Math.round(curr.debt)}`
          );
          d.debt = diff;
          curr.debt = 0;
        }

        if (curr.debt === 0) {
          break;
        }
      }
    }
  });

  return debtRetun;
};
