import { useState } from "react";
import { Pure } from "./Pure";
import { Unpure } from "./Unpure";



export const  PureUnpure = () => {

  const [bool, setBool] = useState(false)

  return (
    <div>
      <Unpure number={12}/>
      <Pure isAvailable/>

      <button
        onClick={() => setBool(prev => !prev)}
      >
        Change bool
      </button>
      <p>{bool ? 'yes' : 'ne'}</p>
    </div>
  );
}