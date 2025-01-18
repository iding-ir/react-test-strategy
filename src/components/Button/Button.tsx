import { ReactNode } from "react";

export const Button = ({
  disabled = false,
  testId,
  children,
  onClick,
}: {
  disabled?: boolean;
  testId?: string;
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <button data-testid={testId} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};
