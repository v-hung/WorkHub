import MainTable from "@/ui/table/MainTable";
import { useEffect, useMemo } from "react";
import { deviceTableColumns } from "./constants";
import { useDevicesContext } from "../../contexts/DeviceContext";

const DeviceTable = () => {
  const { devicePaginated, setRequest, loading } = useDevicesContext();

  useEffect(() => {
    setRequest((r) => ({ ...r, pageNumber: 1, searchString: "" }));
  }, []);

  const data = useMemo(() => devicePaginated.data, [devicePaginated.data]);

  return (
    <MainTable
      columns={deviceTableColumns}
      dataSource={data}
      loading={loading}
    />
  );
};

export default DeviceTable;
