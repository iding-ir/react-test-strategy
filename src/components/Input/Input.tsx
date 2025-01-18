import { useState } from "react";
import { Button } from "../Button";

export const Input = ({
  testId,
  onSubmit,
}: {
  testId: string;
  onSubmit: (value: string) => void;
}) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    onSubmit(value);
    setValue("");
  };

  return (
    <>
      <input
        data-testId={`${testId}-input`}
        type="text"
        value={value}
        onChange={handleChange}
      />

      <Button
        testId={`${testId}-button`}
        disabled={!value}
        onClick={handleClick}
      >
        Send message
      </Button>
    </>
  );
};
