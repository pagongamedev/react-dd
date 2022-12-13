export const helperPromise = async (promiseAPI: any) => {
  return promiseAPI
    .then((res: any) => {
      return { res: res, error: null };
    })
    .catch((error: any) => {
      return { res: null, error: error };
    });
};

export const helperPromiseReturnType = (res: any): Promise<any> => {
  return new Promise((resolve) => {
    resolve(res);
  });
};
