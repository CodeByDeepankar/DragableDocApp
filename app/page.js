import Backgroun from "./components/Backgroun";
import Forground from "./components/Forground";

export default function Home() {
  return (
    <>
      <div className="h-screen  bg-zinc-800 w-screen">
        <Backgroun />
        <Forground />
      </div>
    </>
  );
}
