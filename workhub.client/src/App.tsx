import { Suspense, useEffect } from "react";
import { RouterProvider } from "react-router";
import router from "./router";
import Loading from "./ui/navigation/Loading/Loading";
import { useAuthStore } from "./stores/auth.store";
const App = () => {
  const isFirstLoaded = useAuthStore((state) => state.isFirstLoaded);
  const load = useAuthStore((state) => state.load);

  useEffect(() => {
    if (!isFirstLoaded) {
      load();
    }
  }, [isFirstLoaded, load]);

  if (!isFirstLoaded) {
    return <Loading />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
