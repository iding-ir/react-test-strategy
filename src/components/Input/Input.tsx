import { useState } from "react";
import { Button } from "../Button";

export const Input = ({ onSubmit }: { onSubmit: (value: string) => void }) => {
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
      <input type="text" value={value} onChange={handleChange} />

      <Button disabled={!value} onClick={handleClick}>
        Send message
      </Button>
    </>
  );
};
