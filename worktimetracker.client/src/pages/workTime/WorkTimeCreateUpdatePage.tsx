import { Button, Layout } from "antd";
import MainContent from "@/layouts/main/components/MainContent";
import MainHeader from "@/layouts/main/components/MainHeader";
import MainBreadcrumb from "@/layouts/main/components/MainBreadcrumb";
import { useParams } from "react-router";
import { wrapLoaderWithPermission } from "@/common/utils/loader";
import { useRef, useState } from "react";
import WorkTimeFormCreate, {
  WorkTimeFormCreateRefState,
} from "@/features/workTime/components/WorkTimeFormCreate/WorkTimeFormCreate";

export const loader = wrapLoaderWithPermission(async ({ params }) => {
  console.log({ id: params.id });
});

export function Component() {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const formRef = useRef<WorkTimeFormCreateRefState | null>(null);

  const handleSave = () => {
    if (formRef.current) {
      formRef.current.handelUpsert();
    }
  };

  return (
    <Layout className="main-layout">
      <MainHeader title={id ? "Update work time" : "Create work time"}>
        <Button
          type="primary"
          icon={<IIonSaveOutline width={16} height={16} />}
          onClick={handleSave}
          loading={loading}
        >
          Save
        </Button>
      </MainHeader>

      <MainBreadcrumb
        items={[
          { title: "Home", path: "/" },
          { title: "Work times Manager", path: "/work-times" },
          { title: id ? "Update work time" : "Create work time" },
        ]}
      />

      <MainContent>
        <WorkTimeFormCreate ref={formRef} setLoading={setLoading} />
      </MainContent>
    </Layout>
  );
}
