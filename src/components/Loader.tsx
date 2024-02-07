import { InfinitySpin } from "react-loader-spinner";

export const Loader = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <InfinitySpin width="200" color="#4fa94d" />
      </div>
    </>
  );
};