import CopyButton from "../landing/CopyButton";

const LinkInfo = () => {
  return (
    <>
      <div className="m-2 border px-2 flex flex-col gap-2 rounded-xl  ">
        <div className="flex justify-between , items-center gap-4">
          <div>
            <p className="text-xl pt-4">Google.com</p>
          </div>
          <div>edit button</div>
        </div>
        <div className="flex items-center">
          <p className="px-3 text-lg font-[550] text-[blue]">LocalHost:8080</p>
          <CopyButton className=" relative h-3" />
        </div>
        <div className="flex items-center justify-between">

        <p className="px-3 pb-3 text-lg">https:// google.com</p>
        <p className = "text-sm">28-07-2026</p>
        </div>
      </div>
    </>
  );
};

export default LinkInfo;
