import React, { useEffect, useState } from 'react';

type baba = string;

export const MainPage: React.FC = () => {

  const [string, setString] = useState<string | null>()

  useEffect(() => {

    sayHello('good morning!!')
    setString('baby!')

  }, [])

  const sayHello = (baby: baba) => {
    console.log(baby);
    console.log(string)
    return baby
  };

  return (
    <div>
      <h1>this is the main page</h1>
      <h2>{string}</h2>
      <h2>{sayHello('chaka khan')}</h2>
    </div>
  );
};
