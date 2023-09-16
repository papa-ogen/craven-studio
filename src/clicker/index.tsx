import { Button, Text } from "@papa-ogen/craven-ui";
import React, { useEffect, useState } from "react";
import { LevelType } from "./clicker.type";
import { levelTypes } from "./consts";
import { commaSeparateNumber } from "./helper";
import LevelButton from "./LevelButton";

const Clicker = () => {
  const [increment, setIncrement] = useState(0);
  const [currency, setCurrency] = useState(0);
  const [level, setLevel] = useState<LevelType[]>(levelTypes);

  const onIncrement = () => {
    setCurrency(currency + 1 + increment);
  };

  const onUpgrade = (id: string) => {
    const updatedLevel = level.map((item) => {
      if (item.name === id) {
        setCurrency(currency - item.cost);

        return {
          ...item,
          cost: item.cost * 1.1,
          effect: item.effect * 1.1,
          level: item.level + 1,
        };
      }
      return item;
    });

    setLevel(updatedLevel);

    const updatedIncrement = updatedLevel.reduce((acc, item) => {
      if (item.level > 0) return acc + item.effect * item.level;
      return acc;
    }, 0);

    setIncrement(updatedIncrement);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrency(currency + increment);
    }, 1000);
    return () => clearInterval(interval);
  }, [currency, increment]);

  return (
    <div className="w-screen  p-20 flex space-x-4 space-y-4 flex-wrap">
      <div className="flex-100">
        Currency: {commaSeparateNumber(currency.toFixed())}
      </div>
      <div className="flex-1">
        <Button onClick={onIncrement}>
          <p className="p-36">Soil {increment.toFixed()}</p>
        </Button>
      </div>
      <div className="flex flex-col	space-y-4 flex-1">
        <header>1 | 10 | 100 | Max</header>
        {level.map((item) => (
          <LevelButton
            key={item.name}
            onClick={onUpgrade}
            level={item}
            disabled={currency < item.cost}
          />
        ))}
      </div>
    </div>
  );
};

export default Clicker;
