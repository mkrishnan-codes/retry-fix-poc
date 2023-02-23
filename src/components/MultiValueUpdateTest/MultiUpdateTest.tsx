import React, { useEffect } from "react";
import { RootState } from "../../store";

import { useSelector, useDispatch } from "react-redux";
import { updateName, updateAge, updateAll } from "../../store/sampleReducer";
type Props = {};

const getRandomString = () => (Math.random() + 1).toString(36).substring(7);
const getRandomNumber = (min = 1, max = 65) =>
  Math.round(Math.random() * (max - min) + min);
const MultiUpdateTest = (props: Props) => {
  const name = useSelector((state: RootState) => state.main.name);
  const age = useSelector((state: RootState) => state.main.age);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("change", new Date());

    console.log(name, age);
  }, [name, age]);

  return (
    <div>
      <input
        value={name}
        onChange={(evt) => dispatch(updateName(evt.target.value))}
      />
      <input
        value={age}
        type="number"
        onChange={(evt) => dispatch(updateAge(Number(evt.target.value)))}
      />
      <button
        onClick={() =>
          dispatch(
            updateAll({ name: getRandomString(), age: getRandomNumber() })
          )
        }
      >change all</button>
    </div>
  );
};

export default MultiUpdateTest;
