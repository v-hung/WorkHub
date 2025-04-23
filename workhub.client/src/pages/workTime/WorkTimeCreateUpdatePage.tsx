import { Button } from "antd";
import { redirect, useLoaderData } from "react-router";
import { wrapLoaderWithPermission } from "@/utils/loader";
import { useRef, useState } from "react";
import WorkTimeFormCreate, {
  WorkTimeFormCreateRefState,
} from "@/features/workTime/components/WorkTimeFormCreate/WorkTimeFormCreate";
import { workTimeApi } from "@/services/apiClient";
import { wrapPromise } from "@/utils/promise";
import { Permission, WorkTimeDto } from "@/generate-api";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import { ensurePermission } from "@/utils/hasPermission";

export const loader = wrapLoaderWithPermission(
  async ({ params }, { permissions }) => {
    const { id } = params;

    if (!id) {
      ensurePermission(permissions, Permission.PermissionsWorkTimesCreate);
      return null;
    }

    ensurePermission(permissions, Permission.PermissionsWorkTimesEdit);

    const data = await wrapPromise(() => workTimeApi.workTimeGetById(+id));

    if (!data) {
      throw redirect("/work-times");
    }

    return data;
  }
);

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
    <DefaultPage>
      <DefaultHeader title={data ? "Update work time" : "Create work time"}>
        <Button
          type="primary"
          icon={<IIonSaveOutline width={16} height={16} />}
          onClick={handleSave}
          loading={loading}
        >
          Save
        </Button>
      </DefaultHeader>

      <DefaultBreadcrumb
        items={[
          { title: "Home", path: "/" },
          { title: "Work times Manager", path: "/work-times" },
          { title: data ? "Update work time" : "Create work time" },
        ]}
      />

      <DefaultContent>
        <WorkTimeFormCreate
          ref={formRef}
          setLoading={setLoading}
          record={data}
        />
      </DefaultContent>
    </DefaultPage>
  );
}
