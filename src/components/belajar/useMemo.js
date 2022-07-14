import { useMemo, useState } from "react";
import ChildMemo from "./child/ChildMemo";

const AppMemo = () => {
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
  const obj = { data1: 1, data2: 2, data3: 3 };
  let status = useMemo(() => obj ,[input]);

  return (
    <>
      <span>input 1</span>
      <input
        style={{ margin: 50 }}
        type={"text"}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <span>input 2</span>
      <input
        style={{ margin: 50 }}
        type={"text"}
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />

      <p>App memo</p>
      <ChildMemo status={status} />
    </>
  );
};
export default AppMemo;
