import { ReactNode } from "react";

export const Button = ({
  disabled = false,
  children,
  onClick,
}: {
  disabled?: boolean;
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};
