import { wrapProtectedLoader } from "@/utils/loader";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import { wrapPromise } from "@/utils/promise";
import { requestApi } from "@/services/apiClient";
import { redirect, useLoaderData } from "react-router";
import { RequestCombinedDto, RequestType } from "@/generate-api";
import { JSX, lazy, Suspense } from "react";
import NotificationSubHeader from "@/features/system/notification/components/NotificationSubHeader/NotificationSubHeader";

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

export const loader = wrapProtectedLoader(async ({ params }) => {
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
    [RequestType.LeaveRequest]: <LeaveRequestPanelLazy data={data} />,
    [RequestType.TimesheetAdjustmentRequest]: (
      <TimesheetAdjustmentRequestLazy data={data} />
    ),
    [RequestType.OvertimeRequest]: <LeaveRequestPanelLazy data={data} />,
    [RequestType.WorkFromHomeRequest]: <LeaveRequestPanelLazy data={data} />,
    [RequestType.CancelRequest]: <LeaveRequestPanelLazy data={data} />,
  };

  const renderPage = requestTypePages[data.requestType] || (
    <div>Page not found</div>
  );

  return (
    <DefaultPage>
      <DefaultHeader title="Notifications"></DefaultHeader>

      <NotificationSubHeader title="New Request Submitted" />

      <DefaultContent>
        <p style={{ margin: "1rem 0", fontSize: "18px" }}>
          You have a new request to approve.
        </p>
        <Suspense fallback={<div>Loading...</div>}>{renderPage}</Suspense>
      </DefaultContent>
    </DefaultPage>
  );
}
