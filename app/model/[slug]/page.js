import dynamic from "next/dynamic";
import fetchData from "services/fetch-ssr";

const ModelDetailComponent = dynamic(() =>
  import("components/page/model-detail")
);

const ModelDetailPage = async ({ params }) => {
  const slug = (await params).slug;
  console.log(slug, "<<<model-6");

  const response = await fetchData(`/v1/model/${slug}`);
  console.log(response, "<<response");

  return (
    <>
      <div className="flex flex-col justify-center items-center mb-1 mt-14">
        <div className="mb-6 animate-fade-right animate-once animate-duration-[3000ms] animate-ease-in-out">
          <p className="text-3xl font-medium">Model Name</p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center w-[85vw] sm:w-[95vw] lg:w-[85vw] sm:flex-row sm:items-center sm:justify-around sm:flex-wrap sm:h-[50px] lg:gap-0 text-sm">
          <div className="animate-fade-right animate-once animate-duration-[3000ms] animate-ease-in-out">
            <p>
              {" "}
              <span className="font-medium">HEIGHT</span>: 181 CM
            </p>
          </div>
          <div className="animate-fade-right animate-once animate-duration-[3000ms] animate-ease-in-out">
            <p>
              {" "}
              <span className="font-medium">BUST</span>: 81 CM
            </p>
          </div>
          <div className="animate-fade-right animate-once animate-duration-[3000ms] animate-ease-in-out">
            <p>
              {" "}
              <span className="font-medium">WAIST</span>: 62 CM
            </p>
          </div>
          <div className="animate-fade-right animate-once animate-duration-[3000ms] animate-ease-in-out">
            <p>
              {" "}
              <span className="font-medium">HIPS</span>: 91 CM
            </p>
          </div>
          <div className="animate-fade-right animate-once animate-duration-[3000ms] animate-ease-in-out">
            <p>
              {" "}
              <span className="font-medium">SHOE</span>: 8 US
            </p>
          </div>
          <div className="animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out">
            <p>
              {" "}
              <span className="font-medium ">HAIR</span>: DARK BROWN
            </p>
          </div>
          <div className="animate-fade-right animate-once animate-duration-[1000ms] animate-ease-in-out">
            <p>
              {" "}
              <span className="font-medium ">EYES</span>: BLUE
            </p>
          </div>
        </div>
      </div>
      {/* Model Detail Content */}
      <ModelDetailComponent />
    </>
  );
};

export default ModelDetailPage;
