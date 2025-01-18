import { ReactNode } from "react";

export const Title = ({ children }: { children: ReactNode }) => {
  return <h2 className="text-lg text-gray-600 mt-4 mb-2">{children}</h2>;
};
