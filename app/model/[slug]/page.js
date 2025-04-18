"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import localFont from "next/font/local";
import LoadingSpinner from "app/loading";
import fetchData from "services/fetch-ssr";

const resothoExtralight = localFont({
  src: "../../../public/fonts/ResothoExtralight-9YXJK.otf",
});

const butlerMedium = localFont({
  src: "../../../public/fonts/Butler_Medium.otf",
});

const ModelDetailComponent = dynamic(() =>
  import("components/page/model-detail")
);

const ModelDetailPage = () => {
  const { slug } = useParams();
  const [response, setResponse] = useState(null);
  const [isNotFound, setIsNotFound] = useState(false);
  const [, setError] = useState(null);

  const getModelDetail = async () => {
    try {
      const data = await fetchData(`/v1/model/${slug}`);
      console.log(data, "<<data");
      setResponse(data);
    } catch (error) {
      const errMsg = error?.message || "";
      setError(errMsg);
      setIsNotFound(errMsg.includes("404"));
    }
  };

  useEffect(() => {
    getModelDetail();
  }, []);

  if (isNotFound)
    return (
      <div className="flex items-center justify-center h-screen">
        <h5 className="text-xl font-semibold text-gray-500">Model not found</h5>
      </div>
    );

  if (!response) return <LoadingSpinner />;

  return (
    <main>
      <div
        className={`flex flex-col justify-center items-center mb-1 mt-14 ${resothoExtralight.className}`}
      >
        <div
          // className="mb-6 animate-fade-right animate-once animate-duration-[3000ms] animate-ease-in-out"
          className="mb-6"
        >
          <p
            className={`text-4xl font-medium ${butlerMedium.className} tracking-[.7rem] uppercase`}
          >
            {response.name}
          </p>
        </div>

        <div className="hidden sm:block">
          <div className="flex flex-col gap-2 justify-center items-center w-[85vw] sm:w-[95vw] lg:w-[55vw] sm:flex-row sm:items-center sm:justify-around sm:flex-wrap sm:h-[50px] lg:gap-0 text-xs">
            <div className="flex">
              <p className="font-[1000]">HEIGHT </p>
              <p className="font-[100] text-slate-800">: {response.hight} CM</p>
            </div>
            <div className="flex">
              <p className="font-[1000]">
                {response.gender === "male" ? "CHEST " : "BUST "}
              </p>
              <p className="font-[100] text-slate-800">: {response.bust} CM</p>
            </div>
            <div className="flex">
              <p className="font-[1000]">WAIST </p>
              <p className="font-[100] text-slate-800">: {response.waist} CM</p>
            </div>
            <div className="flex">
              <p className="font-[1000]">HIPS </p>
              <p className="font-[100] text-slate-800">: {response.hips} CM</p>
            </div>
            <div className="flex">
              <p className="font-[1000]">SHOE </p>
              <p className="font-[100] text-slate-800">
                : {response.shoe_size} US
              </p>
            </div>
            <div className="flex">
              <p className="font-[1000] ">HAIR </p>
              <p className="font-[100] text-slate-800">: {response.hair}</p>
            </div>
            <div className="flex">
              <p className="font-[1000] ">EYES </p>
              <p className="font-[100] text-slate-800">: {response.eyes}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Model Detail Content */}
      <ModelDetailComponent data={response} />
    </main>
  );
};

export default ModelDetailPage;
