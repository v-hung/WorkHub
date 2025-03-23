import { Button, Layout } from "antd";
import MainContent from "@/layouts/main/components/MainContent";
import MainHeader from "@/layouts/main/components/MainHeader";
import MainBreadcrumb from "@/layouts/main/components/MainBreadcrumb";
import { redirect, useLoaderData } from "react-router";
import { wrapLoaderWithPermission } from "@/common/utils/loader";
import { useRef, useState } from "react";
import TeamFormCreate, {
  TeamFormCreateRefState,
} from "@/features/team/components/TeamFormCreate/TeamFormCreate";
import { teamApi } from "@/services/apiClient";
import { wrapPromise } from "@/common/utils/promise";
import { TeamFullDto } from "@/generate-api";

export const loader = wrapLoaderWithPermission(async ({ params }) => {
  if (params.id) {
    // await new Promise((res) => setTimeout(res, 1000));
    const data = await wrapPromise(() => teamApi.teamGetById(+params.id!));

    if (!data) {
      throw redirect(`/teams`);
    }

    return data;
  }
});

export function Component() {
  const data = useLoaderData() as TeamFullDto;

  const [loading, setLoading] = useState(false);
  const formRef = useRef<TeamFormCreateRefState | null>(null);

  const handleSave = () => {
    if (formRef.current) {
      formRef.current.handelUpsert();
    }
  };

  return (
    <Layout className="main-layout">
      <MainHeader title={data ? "Update team" : "Create team"}>
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
          { title: "Teams Manager", path: "/teams" },
          { title: data ? "Update team" : "Create team" },
        ]}
      />

      <MainContent>
        <TeamFormCreate ref={formRef} setLoading={setLoading} record={data} />
      </MainContent>
    </Layout>
  );
}
