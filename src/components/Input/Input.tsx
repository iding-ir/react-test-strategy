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
    <div className="grid grid-cols-4 gap-2">
      <input
        className="col-span-3 p-2 border border-gray-300 rounded-md"
        data-testid={`${testId}-input`}
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
    </div>
  );
};
