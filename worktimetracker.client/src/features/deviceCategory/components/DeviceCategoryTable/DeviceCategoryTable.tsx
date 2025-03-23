import MainTable from "@/ui/table/MainTable";
// import { useDeviceCategories } from "../../hooks/useDeviceCategories";
import { useEffect, useMemo } from "react";
import { deviceCategoryTableColumns } from "./constants";
import { useDeviceCategoriesContext } from "../../contexts/DeviceCategoryContext";

const DeviceCategoryTable = () => {
  const { deviceCategoryPaginated, setRequest, loading } =
    useDeviceCategoriesContext();

  useEffect(() => {
    setRequest((r) => ({ ...r, pageNumber: 1, searchString: "" }));
  }, []);

  const data = useMemo(
    () => deviceCategoryPaginated.data,
    [deviceCategoryPaginated.data]
  );

  return (
    <MainTable
      columns={deviceCategoryTableColumns}
      dataSource={data}
      loading={loading}
    />
  );
};

export default DeviceCategoryTable;
