import { useEffect, useState } from "react";
import imgUrl from ''
function App() {
  const [fade, setFade]= useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      setFade(true)
    },0)
  })
  return (
    <>
      <div className="h-[100dvh] w-full">
 
         <img
          src={'/assets/DSC01786.JPG'}
          alt="none"
          className={`object-cover h-full absolute z-[-1] ${fade ? 'blur-0': 'blur-sm'} delay-700 duration-700`}
        />
        <div className="text-white h-full grid justify-center">
          <div className={`${fade ? 'opacity-1' :"opacity-0"} delay-1000 duration-1000`}>
            <h1 className="text-7xl font-bold mt-[100px] text-center h-max">
              <span>Askar</span> <br /> <span className="text-yellow-600 ">&</span> Aidana
            </h1>
            <h6 className="text-xl text-center text-lime-100">are getting married</h6>
          </div>
        </div>
        <img
          src="src/assets/DSC01869.JPG"
          alt="none"
          className="object-cover h-full absolute z-[-1]"
        />
        <div className="text-white h-full grid justify-center">
          <div className="flex flex-col gap-2 items-center  mt-[100px]">
            <h4 className="text-3xl text-yellow-400 font-semibold">11.11.2023</h4>
            <h4 className="text-3xl font-semibold">Restoran  "Bai Bol"</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
