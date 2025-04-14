type CreateSuspenderSettings = {
  ignoreErrors?: boolean;
};

export function createSuspender<T>(
  promise: Promise<T>,
  settings?: CreateSuspenderSettings
) {
  let status: "pending" | "success" | "error" = "pending";
  let result: T;
  let { ignoreErrors = false } = settings || {};

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
      status = ignoreErrors ? "success" : "error";
      result = ignoreErrors ? null : error;
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
    setResult(newResult: T) {
      result = newResult;
    },
  };
}
