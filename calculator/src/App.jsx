function App() {
  return (
    // background color theme
    <div className="flex justify-center items-center bg-black w-screen h-screen">
      {/* background color calculator */}
      <div className=" bg-[#21ced1] w-96 h-[360px] rounded-lg pt-5 flex flex-col items-center">
        <div className="bg-white w-[345px] h-16 rounded-md text-right pt-2 pr-1 font-bold text-5xl">
          0
        </div>
        <div className="grid gap-2  pt-2  ">
          <div className="space-x-2">
            <button className="bg-black w-[80px] h-14 rounded-md text-white text-center font-bold">
              1
            </button>
            <button className="bg-black w-[80px] h-14 rounded-md text-white text-center font-bold">
              2
            </button>
            <button className="bg-black w-[80px] h-14 rounded-md text-white text-center font-bold">
              3
            </button>
            <button className="bg-black w-[80px] h-14 rounded-md text-white text-center font-bold">
              +
            </button>
          </div>
          <div className="space-x-2">
            <button className="bg-black w-[80px] h-14 rounded-md text-white text-center font-bold">
              4
            </button>
            <button className="bg-black w-[80px] h-14 rounded-md text-white text-center font-bold">
              5
            </button>
            <button className="bg-black w-[80px] h-14 rounded-md text-white text-center font-bold">
              6
            </button>
            <button className="bg-black w-[80px] h-14 rounded-md text-white text-center font-bold">
              -
            </button>
          </div>
          <div className="space-x-2">
            <button className="bg-black w-[80px] h-14 rounded-md text-white text-center font-bold">
              7
            </button>
            <button className="bg-black w-[80px] h-14 rounded-md text-white text-center font-bold">
              8
            </button>
            <button className="bg-black w-[80px] h-14 rounded-md text-white text-center font-bold">
              9
            </button>
            <button className="bg-black w-[80px] h-14 rounded-md text-white text-center font-bold">
              *
            </button>
          </div>
          <div className="space-x-2">
            <button className="bg-black w-[80px] h-14 rounded-md text-white text-center font-bold">
              C
            </button>
            <button className="bg-black w-[80px] h-14 rounded-md text-white text-center font-bold">
              0
            </button>
            <button className="bg-black w-[80px] h-14 rounded-md text-white text-center font-bold">
              =
            </button>
            <button className="bg-black w-[80px] h-14 rounded-md text-white text-center font-bold">
              /
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
