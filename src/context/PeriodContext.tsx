import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
interface PeriodContextProps {
  startDate: Date;
  endDate: Date;
  setStartDate: Dispatch<SetStateAction<Date>>;
  setEndDate: Dispatch<SetStateAction<Date>>;
}

const PeriodContext = createContext<PeriodContextProps | undefined>(undefined);

export default function PeriodContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const today = new Date();
  const fiveYearsAgo = new Date(
    today.getFullYear() - 5,
    today.getMonth(),
    today.getDate(),
  );

  const [startDate, setStartDate] = useState<Date>(fiveYearsAgo);
  const [endDate, setEndDate] = useState<Date>(today);

  return (
    <PeriodContext.Provider
      value={{
        startDate,
        endDate,
        setStartDate,
        setEndDate,
      }}
    >
      {children}
    </PeriodContext.Provider>
  );
}

export function usePeriodContext(): PeriodContextProps | undefined {
  return useContext(PeriodContext);
}
