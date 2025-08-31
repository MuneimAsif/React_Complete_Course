import { useTransition } from "react";

const UseTransition = () => {
  // Through useState
  //   const [pending, setPending] = useState(false);
  //   const handleButton = async () => {
  //     setPending(true);  // The button will become disable when clicked
  //     await new Promise((res) => setTimeout(res, 2000)); // 2 sec wait
  //     setPending(false); // The button will become normal after 2 sec
  //   };

  // Through useTransition
  const [pending, startTransition] = useTransition();
  const handleButton = () => {
    startTransition(async () => {
      await new Promise((res) => setTimeout(res, 2000)); // The button will automatically disabled when clicked and will also become normal after 2 sec automatically
    });
  };
  return (
    <>
      <button disabled={pending} onClick={handleButton}>
        Click
      </button>
    </>
  );
};
export default UseTransition;
