import { Button, Layout } from "antd";
import MainContent from "@/layouts/main/components/MainContent";
import MainHeader from "@/layouts/main/components/MainHeader";
import MainBreadcrumb from "@/layouts/main/components/MainBreadcrumb";
import { redirect, useLoaderData } from "react-router";
import { wrapLoaderWithPermission } from "@/common/utils/loader";
import { useRef, useState } from "react";
import WorkTimeFormCreate, {
  WorkTimeFormCreateRefState,
} from "@/features/workTime/components/WorkTimeFormCreate/WorkTimeFormCreate";
import { workTimeApi } from "@/services/apiClient";
import { wrapPromise } from "@/common/utils/promise";
import { WorkTimeDto } from "@/generate-api";

export const loader = wrapLoaderWithPermission(async ({ params }) => {
  if (params.id) {
    const data = await wrapPromise(() =>
      workTimeApi.workTimeGetById(+params.id!)
    );

    if (!data) {
      throw redirect(`/work-times`);
    }

    return data;
  }
});

export function Component() {
  const data = useLoaderData() as WorkTimeDto;

  const [loading, setLoading] = useState(false);
  const formRef = useRef<WorkTimeFormCreateRefState | null>(null);

  const handleSave = () => {
    if (formRef.current) {
      formRef.current.handelUpsert();
    }
  };

  return (
    <Layout className="main-layout">
      <MainHeader title={data ? "Update work time" : "Create work time"}>
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
          { title: data ? "Update work time" : "Create work time" },
        ]}
      />

      <MainContent>
        <WorkTimeFormCreate
          ref={formRef}
          setLoading={setLoading}
          record={data}
        />
      </MainContent>
    </Layout>
  );
}
