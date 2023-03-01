interface Options<DataT> {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  data?: DataT;
}

export const fetcher = async <T>(
  endpoint: string,
  opts?: Options<T>,
): Promise<any> => {
  const method = opts?.method || "GET";

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  try {
    const OPTIONS: RequestInit = {
      method: method || "GET",
      headers,
      body: JSON.stringify(opts?.data),
    };
    const Response = await fetch(`${endpoint}`, OPTIONS);

    const data = await Response.json();
    const ReqHeaders = Response.headers;
    console.log("Success");

    return {
      data,
      headers: ReqHeaders,
    };
  } catch (error) {
    if (typeof error === "string") throw new Error(error);
  } finally {
    console.log("Resolved");
  }
};
