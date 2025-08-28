function App() {
  return (
    // background color theme
    <div className="flex justify-center items-center bg-black w-screen h-screen">
      {/* background color calculator */}
      <div className=" bg-[#21ced1] w-96 h-96 rounded-lg pt-5">
        <div className="bg-white w-[350px] h-16 rounded-md">Display</div>
        <div className="flex justify-center gap-2">
          <div>
            <button className="bg-black w-[75px] h-14 rounded-md text-white text-center font-bold">
              1
            </button>
            <button className="bg-black w-[75px] h-14 rounded-md text-white text-center font-bold">
              4
            </button>
            <button className="bg-black w-[75px] h-14 rounded-md text-white text-center font-bold">
              7
            </button>
            <button className="bg-black w-[75px] h-14 rounded-md text-white text-center font-bold">
              C
            </button>
          </div>
          <div>
            <button className="bg-black w-[75px] h-14 rounded-md text-white text-center font-bold">
              2
            </button>
            <button className="bg-black w-[75px] h-14 rounded-md text-white text-center font-bold">
              5
            </button>
            <button className="bg-black w-[75px] h-14 rounded-md text-white text-center font-bold">
              8
            </button>
            <button className="bg-black w-[75px] h-14 rounded-md text-white text-center font-bold">
              0
            </button>
          </div>
          <div>
            <button className="bg-black w-[75px] h-14 rounded-md text-white text-center font-bold">
              3
            </button>
            <button className="bg-black w-[75px] h-14 rounded-md text-white text-center font-bold">
              6
            </button>
            <button className="bg-black w-[75px] h-14 rounded-md text-white text-center font-bold">
              9
            </button>
            <button className="bg-black w-[75px] h-14 rounded-md text-white text-center font-bold">
              =
            </button>
          </div>
          <div>
            <button className="bg-black w-[75px] h-14 rounded-md text-white text-center font-bold">
              +
            </button>
            <button className="bg-black w-[75px] h-14 rounded-md text-white text-center font-bold">
              -
            </button>
            <button className="bg-black w-[75px] h-14 rounded-md text-white text-center font-bold">
              *
            </button>
            <button className="bg-black w-[75px] h-14 rounded-md text-white text-center font-bold">
              /
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
