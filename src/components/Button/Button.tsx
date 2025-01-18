import clsx from "clsx";
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
  const classNames = clsx("p-2 text-gray-100 rounded-md", {
    "bg-primary": !disabled,
    "cursor-not-allowed bg-gray-300": disabled,
  });

  return (
    <button
      data-testid={testId}
      disabled={disabled}
      onClick={onClick}
      className={classNames}
    >
      {children}
    </button>
  );
};
