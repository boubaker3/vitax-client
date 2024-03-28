import axios from "axios";
export const getProducts = async () => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    // Use a for loop instead of map to control the rate of requests
    const response = await axios.get(
      "https://developers.cjdropshipping.com/api2.0/v1/product/list",
      {
        headers: {
          "CJ-Access-Token": accessToken,
        },
        params: {
          pid: ["1658395908087746560", "1619616524216578048"],        },
      }
    );
    console.log(response); // Log the array of products
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Rethrow the error to handle it elsewhere if needed
  }
};

export const getProduct = async (pid) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const apiResponse = await axios.get(
      `https://developers.cjdropshipping.com/api2.0/v1/product/query?pid=${pid}`,
      {
        headers: {
          "CJ-Access-Token": accessToken,
        },
      }
    );
    return apiResponse.data;
  } catch (error) {
    console.log("Error fetching access token:");
  }
};

export const getInventory = async (vid) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const apiResponse = await axios.get(
      `https://developers.cjdropshipping.com/api2.0/v1/product/stock/queryByVid?vid=${vid}`,
      {
        headers: {
          "CJ-Access-Token": accessToken,
        },
      }
    );

    return apiResponse.data;
  } catch (error) {
    console.log("Error fetching product comments:");
  }
};

export const getLogisticOptions = async (
  startCountryCode,
  endCountryCode,
  quantity,
  vid
) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await axios.post(
      "https://developers.cjdropshipping.com/api2.0/v1/logistic/freightCalculate",
      {
        startCountryCode,
        endCountryCode,
        products: [
          {
            quantity,
            vid,
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          "CJ-Access-Token": accessToken,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching logistic options:", error);
  }
};
