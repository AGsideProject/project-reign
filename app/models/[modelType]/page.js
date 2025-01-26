import dynamic from "next/dynamic";

const ModelListComponent = dynamic(() => import("components/page/model-list"));

const ModelListPage = async ({ params }) => {
  const modelType = (await params).modelType;

  return (
    <>
      <ModelListComponent modelGender={modelType} />
    </>
  );
};

export default ModelListPage;
