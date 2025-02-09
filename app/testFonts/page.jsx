import localFont from "next/font/local";

const butlerLightStencil = localFont({
  src: "../../public/fonts/Butler_Light_Stencil.otf",
});

const butlerUltraLightStencil = localFont({
  src: "../../public/fonts/Butler_Ultra_Light_Stencil.otf",
});

const butlerUltraLight = localFont({
  src: "../../public/fonts/Butler_Ultra_Light.otf",
});

const resothoExtralight = localFont({
  src: "../../public/fonts/ResothoExtralight-9YXJK.otf",
});

const resothoExtralightItalic = localFont({
  src: "../../public/fonts/ResothoExtralightItalic-lgKad.otf",
});

const page = () => {
  return (
    <div className="flex flex-col gap-5 m-10">
      <div className={`bg-red-50 p-5 `}>
        <h1>Font : butlerLightStencil</h1>
        <p className={`${butlerLightStencil.className}`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className={`bg-red-50 p-5 `}>
        <h1>Font : butlerUltraLightStencil</h1>
        <p className={`${butlerUltraLightStencil.className}`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className={`bg-red-50 p-5 `}>
        <h1>Font : butlerUltraLight</h1>
        <p className={`${butlerUltraLight.className}`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className={`bg-red-50 p-5 `}>
        <h1>Font : resothoExtralight</h1>
        <p className={`${resothoExtralight.className}`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className={`bg-red-50 p-5 `}>
        <h1>Font : resothoExtralightItalic</h1>
        <p className={`${resothoExtralightItalic.className}`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

export default page;
