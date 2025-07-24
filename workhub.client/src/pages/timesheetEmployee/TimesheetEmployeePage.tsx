import { wrapProtectedLoader } from "@/utils/loader";
import DefaultPage from "@/layouts/default/components/DefaultPage/DefaultPage";
import DefaultBreadcrumb from "@/layouts/default/components/DefaultBreadcrumb/DefaultBreadcrumb";
import DefaultContent from "@/layouts/default/components/DefaultContent/DefaultContent";
import { hasPermission } from "@/utils/hasPermission";
import { Permission } from "@/generate-api";
import DefaultHeader from "@/layouts/default/components/DefaultHeader/DefaultHeader";
import TimesheetEmployeeTable from "@/features/timesheet/components/TimesheetEmployeeTable/TimesheetEmployeeTable";
import { TimesheetEmployeeProvider } from "@/features/timesheet/context/TimesheetEmployeeContext";
import { Button } from "antd";
import { lazy, Suspense, useRef, useState } from "react";
import { TimesheetSyncDataModalHandle } from "@/features/timesheet/components/TimesheetSyncDataModal/TimesheetSyncDataModal";

const TimesheetSyncDataModalLazy = lazy(
  () =>
    import(
      "@/features/timesheet/components/TimesheetSyncDataModal/TimesheetSyncDataModal"
    )
);

export const loader = wrapProtectedLoader();

export function Component() {
  const modalRef = useRef<TimesheetSyncDataModalHandle>(null);

  return (
    <DefaultPage pageClassName="h-screen">
      <TimesheetEmployeeProvider>
        <DefaultHeader title="Timesheets Employees">
          {hasPermission(Permission.PermissionsBioStarSyncTimesheets) ? (
            <Button
              color="cyan"
              variant="solid"
              icon={<IIonSync width={16} height={16} />}
              onClick={() => modalRef.current?.open()}
            >
              Load timesheet form timekeeping machine
            </Button>
          ) : null}
        </DefaultHeader>

        <DefaultBreadcrumb
          items={[
            { title: "Home", path: "/" },
            { title: "Timesheet Employees" },
          ]}
        />

        <DefaultContent>
          <TimesheetEmployeeTable />
        </DefaultContent>

        <Suspense fallback={null}>
          <TimesheetSyncDataModalLazy ref={modalRef} />
        </Suspense>
      </TimesheetEmployeeProvider>
    </DefaultPage>
  );
}
