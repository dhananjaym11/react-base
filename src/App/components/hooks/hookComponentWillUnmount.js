import { useState } from "react";
import Mouse from "./mouse";

export default function HookComponentWillUnmount() {
  const [display, setDisplay] = useState(false);

  return (
    <div>
      <h2>ComponentWillUnmount</h2>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>

      {display && <Mouse />}
    </div>
  );
}
