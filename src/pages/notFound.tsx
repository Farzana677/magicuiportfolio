import { useRef } from "react";

export default function notFound() {
  const count = useRef(0);

  const handleClick = () => {
    count.current = count.current + 2;
    console.log(count.current);
  };
  return (
    <>
      <button onClick={handleClick} className="bg-blue-100">
        click mem
      </button>
      <p>Count...: {count.current}</p> <p>Count...: {}</p>
    </>
  );
}
