import React, { ComponentType } from "react";

/**
 * A function to retry loading a chunk to avoid chunk load error for out of date code
 * @param componentImport
 * @returns imported component if chunk exists
 */
const lazyRetry = <T extends ComponentType<any>>(
  componentImport: () => Promise<{ default: T }>
) => {
  return new Promise((resolve, reject) => {
    // check if the window has already been refreshed
    let hasRefreshed = false;
    try {
      hasRefreshed = JSON.parse(
        window.sessionStorage.getItem("retry-lazy-refreshed") || "false"
      ) as boolean;
    } catch (e) {
       if((e as any).name === "SecurityError"){
          alert("allow cookies")
        }
      // ignore error due to unwanted local storage values
    }
    // try to import the component
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    componentImport()
      .then((component) => {
        window.sessionStorage.setItem("retry-lazy-refreshed", "false"); // success so reset the refresh
        resolve(component);
      })
      .catch((error: unknown) => {
        console.table(error)
        if (!hasRefreshed) {
          // not been refreshed yet
          window.sessionStorage.setItem("retry-lazy-refreshed", "true"); // we are now going to refresh
          return window.location.reload(); // refresh the page
        }
       
        return reject(error); // Default error behaviour as already tried refresh
      });
  });
};
/**
 * Wrapper function of react lazy with a retry mechanism by refreshing the page
 * @param componentImport
 * @returns
 */
export const lazyWithRetry = <T extends ComponentType<any>>(
  componentImport: () => Promise<{ default: T }>
) => {
  return React.lazy(
    () => lazyRetry(componentImport) as Promise<{ default: T }>
  );
};
