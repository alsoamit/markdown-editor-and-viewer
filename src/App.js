import Editor from "editor";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState("");
  return (
    <div className="min-h-screen px-5 py-10 mx-auto max-w-7xl">
      <Editor data={data} setData={setData} />
    </div>
  );
}
