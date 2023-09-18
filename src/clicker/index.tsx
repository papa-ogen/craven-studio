import { Heading, Progress } from "@papa-ogen/craven-ui";
import { useEffect, useState } from "react";
import { LevelType } from "./clicker.type";
import { levelTier, levelTypes } from "./consts";
import { commaSeparateNumber } from "./helper";
import LevelButton from "./LevelButton";
import GenerateButton from "./GenerateButton";

const Clicker = () => {
  const [totalCurrency, setTotalCurrency] = useState(0);
  const [playerLevel, setPlayerLevel] = useState(0);
  const [increment, setIncrement] = useState(0);
  const [currency, setCurrency] = useState(0);
  const [level, setLevel] = useState<LevelType[]>(levelTypes);

  const onIncrement = () => {
    setCurrency(currency + 1 + increment);
    setTotalCurrency(totalCurrency + 1 + increment);
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
      setTotalCurrency(totalCurrency + increment);

      if ((totalCurrency / levelTier[playerLevel]) * 100 >= 100)
        setPlayerLevel(playerLevel + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [currency, increment]);

  const currencyString = `Currency: ${commaSeparateNumber(currency.toFixed())}`;
  const playerLevelString = `Player Level: ${commaSeparateNumber(
    playerLevel.toFixed()
  )}`;

  return (
    <div className="w-screen px-20 py-8 flex flex-wrap flex-col space-y-8">
      <header>
        <div className="flex  items-center justify-center">
          <Heading>
            <span className="text-8xl">Garden Clicker</span>
          </Heading>
        </div>
        <div className="flex-100 flex-row flex space-x-10 border-b-[1px]">
          <Heading type="sectionTitle">{currencyString}</Heading>
          <Heading type="sectionTitle">{playerLevelString}</Heading>
        </div>
        <div className="flex-100 pt-2">
          <Progress
            labelBottom={` Total accumulated currency: ${commaSeparateNumber(
              totalCurrency.toFixed()
            )}`}
            progress={(totalCurrency / levelTier[playerLevel]) * 100}
          />
        </div>
      </header>
      <section className="flex space-x-10">
        <div className="flex-1">
          <GenerateButton
            onClick={onIncrement}
            label={`Soil ${increment.toFixed()}`}
          />
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
      </section>
    </div>
  );
};

export default Clicker;
