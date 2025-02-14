export function createSuspender<T>(promise: Promise<T>) {
  let status: "pending" | "success" | "error" = "pending";
  let result: T;

  let resolvePromise: () => void;
  const wrapperPromise = new Promise<void>((resolve) => {
    resolvePromise = resolve;
  });

  const suspender = promise
    .then((data) => {
      status = "success";
      result = data;
      resolvePromise();
    })
    .catch((error) => {
      status = "error";
      result = error;
      resolvePromise();
    });

  return {
    read(): T {
      if (status === "pending") throw suspender;
      if (status === "error") throw result;
      return result;
    },
    async wait(): Promise<T> {
      await wrapperPromise;
      if (status === "error") throw result;
      return result;
    },
  };
}
