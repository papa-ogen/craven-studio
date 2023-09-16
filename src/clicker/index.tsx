import { Button, Text } from "@papa-ogen/craven-ui";
import React, { useEffect, useState } from "react";

type LevelType = {
  name: string;
  cost: number;
  effect: number;
  level: number;
};

const levelTypes: LevelType[] = [
  {
    name: "Earthworm",
    cost: 10,
    effect: 1,
    level: 0,
  },
  {
    name: "Dirt",
    cost: 100,
    effect: 1,
    level: 0,
  },
  {
    name: "Weed",
    cost: 1000,
    effect: 1,
    level: 0,
  },
  {
    name: "Shovel",
    cost: 10000,
    effect: 1,
    level: 0,
  },
  {
    name: "Rake",
    cost: 100000,
    effect: 1,
    level: 0,
  },
  {
    name: "Flower",
    cost: 1000000,
    effect: 1,
    level: 0,
  },
  {
    name: "Bush",
    cost: 10000000,
    effect: 1,
    level: 0,
  },
  {
    name: "Tree",
    cost: 100000000,
    effect: 1,
    level: 0,
  },
  {
    name: "x",
    cost: 1000000000,
    effect: 1,
    level: 0,
  },
];

type LevelButtonProps = {
  onClick: (id: string) => void;
  level: LevelType;
  disabled: boolean;
};

const LevelButton = ({
  onClick,
  level: { name, level, cost },
  disabled,
}: LevelButtonProps) => {
  return (
    <Button onClick={() => onClick(name)} disabled={disabled}>
      <div className="flex flex-row items-center w-full">
        <div className="flex flex-col items-start pb-1 flex-1">
          <div className="">{name}</div>
          <Text size="xs" color="white" noMargin>
            Cost: {cost.toFixed()}
          </Text>
        </div>
        <div className="text-4xl pr-4 pl-1">{level}</div>
      </div>
    </Button>
  );
};

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
      <div className="flex-100">Currency: {currency.toFixed()}</div>
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
