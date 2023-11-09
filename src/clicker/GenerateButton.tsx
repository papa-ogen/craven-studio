import { Button } from "@papa-ogen/craven-ui";
import { useSpring, animated, easings } from "@react-spring/web";

type GenerateButtonProps = {
  onClick: () => void;
  label: string;
};

const GenerateButton = ({ onClick, label }: GenerateButtonProps) => {
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

    onClick();
  };

  return (
    <animated.button
      onClick={handleClick}
      style={{
        ...springs,
      }}
      className="bg-orange-900 hover:bg-orange-800 active:bg-orange-900 text-white font-bold rounded-full w-full h-full"
    >
      {label}
    </animated.button>
  );
};

export default GenerateButton;
