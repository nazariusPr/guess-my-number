import { useState, ReactNode, createContext, useContext } from "react";

type NumberProviderProps = {
  children: ReactNode;
};

type NumberToGuessContextType = {
  numberToGuess: number;
  setNumberToGuess: (numberToGuess: number) => void;
  isGuessed: boolean;
  setIsGuessed: (state: boolean) => void;
  tries: number[];
  addTry: (number: number) => void;
  reset: () => void;
};

const NumberToGuessContext = createContext({} as NumberToGuessContextType);

export function useNumberToGuess() {
  return useContext(NumberToGuessContext);
}

export function NumberToGuessProvider({ children }: NumberProviderProps) {
  const [numberToGuess, setNumberToGuess] = useState<number>(NaN);
  const [isGuessed, setIsGuessed] = useState<boolean>(false);
  const [tries, setTries] = useState<number[]>([]);

  function addTry(number: number): void {
    setTries((prev) => [...prev, number]);
  }

  function reset() {
    setNumberToGuess(NaN);
    setTries([]);
    setIsGuessed(false);
  }

  return (
    <NumberToGuessContext.Provider
      value={{
        numberToGuess,
        setNumberToGuess,
        isGuessed,
        setIsGuessed,
        tries,
        addTry,
        reset,
      }}
    >
      {children}
    </NumberToGuessContext.Provider>
  );
}
