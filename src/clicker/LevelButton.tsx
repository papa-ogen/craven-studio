import { useEffect } from "react";
import { Button, Text } from "@papa-ogen/craven-ui";
import { useSpring, animated, easings } from "@react-spring/web";
import { commaSeparateNumber } from "./helper";
import { LevelType } from "./clicker.type";

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
  const [springs, api] = useSpring(() => ({
    from: { scale: 1 },
  }));

  const handleClick = () => {
    api.start({
      from: {
        scale: 1.05,
      },
      to: {
        scale: 1,
      },
      config: {
        easing: easings.steps(5),
      },
    });
  };

  return (
    <animated.div
      onClick={disabled ? () => {} : handleClick}
      style={{
        display: "flex",
        flexDirection: "column",
        ...springs,
      }}
    >
      <Button onClick={() => onClick(name)} disabled={disabled}>
        <div className="flex flex-row items-center w-full">
          <div className="flex flex-col items-start pb-1 flex-1">
            <div className="">{name}</div>
            <Text size="xs" color="white" noMargin>
              Cost: {commaSeparateNumber(cost.toFixed())}
            </Text>
          </div>
          <div className="text-4xl pr-4 pl-1">{level}</div>
        </div>
      </Button>
    </animated.div>
  );
};

export default LevelButton;
