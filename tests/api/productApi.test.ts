import { productsApi } from "../../src/api/productsApi";

describe("ProductApi Tests", () => {
  test("must have config default", () => {
    expect(productsApi.defaults.baseURL).toBe(process.env.VITE_STORE_API_URL);
  });
});
