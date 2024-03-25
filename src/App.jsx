import Avatar from "../src/assets/avatar.png";
import Button from "./components/Button";

function App() {
  return (
    <main className="w-full h-[100vh] bg-n-off-black flex font-inter justify-center items-center">
      <div className="bg-n-dark-grey w-[22rem] rounded-[10px] h-[550px]">
        <div className=" min-h-[550px] flex items-center flex-col justify-center text-center">
          <img src={Avatar} className="w-[84px] rounded-full mb-6" />
          <div className="mb-6">
            <h1 className="text-n-white font-bold text-[1.4rem]">
              Jessica Randall
            </h1>
            <span className="text-n-green text-xs">London, United Kingdom</span>
          </div>
          <span className="text-n-white mb-6 text-xs text-opacity-70">
            &quot;Front-end Developer and avid reader&quot;
          </span>
          <div className="flex w-full flex-col items-center gap-4 text-n-white">
            <Button title={"GitHub"} />
            <Button title={"Frontend Mentor"} />
            <Button title={"LinkedIn"} />
            <Button title={"Twitter"} />
            <Button title={"Instagram"} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
