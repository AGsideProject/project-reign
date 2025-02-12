import dynamic from "next/dynamic";
import fetchData from "services/fetch-ssr";
import localFont from "next/font/local";

const resothoExtralight = localFont({
  src: "../../../public/fonts/ResothoExtralight-9YXJK.otf",
});

const ModelDetailComponent = dynamic(() =>
  import("components/page/model-detail")
);

const ModelDetailPage = async ({ params }) => {
  const slug = (await params).slug;
  const response = await fetchData(`/v1/model/${slug}`);

  return (
    <main>
      <div className={`flex flex-col justify-center items-center mb-1 mt-14 ${resothoExtralight.className}`}>
        <div
          // className="mb-6 animate-fade-right animate-once animate-duration-[3000ms] animate-ease-in-out"
          className="mb-6"
        >
          <p className="text-4xl font-medium">{response.name}</p>
        </div>

        <div className="hidden sm:block">
          <div className="flex flex-col gap-2 justify-center items-center w-[85vw] sm:w-[95vw] lg:w-[55vw] sm:flex-row sm:items-center sm:justify-around sm:flex-wrap sm:h-[50px] lg:gap-0 text-xs">
            <div>
              <p>
                <span className="font-medium">HEIGHT</span>: {response.hight} CM
              </p>
            </div>
            <div>
              <p>
                <span className="font-medium">BUST</span>: {response.bust} CM
              </p>
            </div>
            <div>
              <p>
                <span className="font-medium">WAIST</span>: {response.waist} CM
              </p>
            </div>
            <div>
              <p>
                <span className="font-medium">HIPS</span>:{response.hips} CM
              </p>
            </div>
            <div>
              <p>
                <span className="font-medium">SHOE</span>: {response.shoe_size} US
              </p>
            </div>
            <div >
              <p>
                <span className="font-medium ">HAIR</span>: {response.hair}
              </p>
            </div>
            <div>
              <p>
                <span className="font-medium ">EYES</span>: {response.eyes}
              </p>
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
