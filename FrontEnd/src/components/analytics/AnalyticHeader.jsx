import BrandMark from "../BrandMark";

const AnalyticHeader = () => {

    console.log(window)
  return (
    <div className="analytic-header p-3 flex w-full  flex-col  gap-3 ">
        <div className="flex items-center gap-2 " >
            <BrandMark/>
        </div>
        <div>

        <h1 className = "font-bold text-2xl">Dashboard Overview</h1>
        <h3>Real time performance tracking for your links</h3>
        </div>
    </div>
  );
}

export default AnalyticHeader;