const encodedToken = localStorage.getItem("authToken");
const decodedToken = atob(encodedToken);

const fetchApiData1 = async (url, method, useToken, postData = null) => {
  if (useToken === true && encodedToken === null) {
    console.log("chayyyy");
    return 0;
  }
  try {
    const headers = useToken
      ? {
          Authorization: useToken ? `Bearer ${decodedToken}` : undefined,
          "Content-Type": "application/json",
        }
      : { "Content-Type": "application/json" };

    const requestOptions = {
      method: method,
      headers: headers,
      body:
        method !== "GET" && postData !== null
          ? JSON.stringify(postData)
          : undefined,
    };

    console.log(useToken);
    console.log(url);
    console.log(requestOptions);
    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      throw new Error(`Không thể kết nối tới API ${url}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
    return null;
  }
};

export default fetchApiData1;
