import dynamic from "next/dynamic";

const ModelListComponent = dynamic(() => import("components/page/model-list"));

const ModelListPage = async ({ params }) => {
  const modelType = (await params).modelType;

  return (
    <main>
      <div className="min-h-[90vh]">
        <ModelListComponent modelGender={modelType} />
      </div>
    </main>
  );
};

export default ModelListPage;
