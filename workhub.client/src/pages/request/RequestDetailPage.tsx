import { wrapLoaderWithPermission } from "@/utils/loader";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import { wrapPromise } from "@/utils/promise";
import { requestApi } from "@/services/apiClient";
import { redirect, useLoaderData } from "react-router";
import { RequestCombinedDto, RequestType } from "@/generate-api";
import { JSX, lazy, Suspense } from "react";

const LeaveRequestPanelLazy = lazy(
  () =>
    import("@/features/request/components/LeaveRequestPanel/LeaveRequestPanel")
);
const TimesheetAdjustmentRequestLazy = lazy(
  () =>
    import(
      "@/features/request/components/TimesheetAdjustmentRequestPanel/TimesheetAdjustmentRequestPanel"
    )
);

export const loader = wrapLoaderWithPermission(async ({ params }) => {
  const { id } = params as any;

  const data = await wrapPromise(() =>
    requestApi.generalRequestGetById({ id: +id })
  );

  if (!data) {
    throw redirect(`/notifications`);
  }

  return data;
});

export function Component() {
  const data = useLoaderData() as RequestCombinedDto;

  const requestTypePages: Record<RequestType, JSX.Element> = {
    [RequestType.LeaveRequest]: <LeaveRequestPanelLazy />,
    [RequestType.TimesheetAdjustmentRequest]: (
      <TimesheetAdjustmentRequestLazy />
    ),
    [RequestType.OvertimeRequest]: <LeaveRequestPanelLazy />,
    [RequestType.WorkFromHomeRequest]: <LeaveRequestPanelLazy />,
  };

  const renderPage = requestTypePages[data.requestType] || (
    <div>Page not found</div>
  );

  return (
    <DefaultPage pageClassName="h-screen">
      <DefaultHeader title="Notifications"></DefaultHeader>

      <DefaultContent>
        <Suspense fallback={<div>Loading...</div>}>{renderPage}</Suspense>
      </DefaultContent>
    </DefaultPage>
  );
}
