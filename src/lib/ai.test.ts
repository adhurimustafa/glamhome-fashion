import { generateDescription, rewrite } from "../src/lib/ai";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("AI Utility Functions", () => {
  describe("generateDescription", () => {
    it("should generate a product description", async () => {
      const product = { name: "Test Product", description: "A great product." };
      const locale = "en-US";
      const mockResponse = { data: { choices: [{ text: "Generated description." }] } };
      mockedAxios.post.mockResolvedValueOnce(mockResponse);

      const result = await generateDescription(product, locale);
      expect(result).toBe("Generated description.");
      expect(mockedAxios.post).toHaveBeenCalledWith(
        expect.stringContaining("/completions"),
        expect.objectContaining({ prompt: expect.stringContaining("Test Product") }),
        expect.any(Object)
      );
    });

    it("should handle errors", async () => {
      mockedAxios.post.mockRejectedValueOnce(new Error("API Error"));
      await expect(generateDescription({}, "en-US")).rejects.toThrow("API Error");
    });
  });

  describe("rewrite", () => {
    it("should rewrite text in a specific tone", async () => {
      const text = "Hello, world!";
      const tone = "formal";
      const mockResponse = { data: { choices: [{ text: "Good day, world!" }] } };
      mockedAxios.post.mockResolvedValueOnce(mockResponse);

      const result = await rewrite(text, tone);
      expect(result).toBe("Good day, world!");
      expect(mockedAxios.post).toHaveBeenCalledWith(
        expect.stringContaining("/completions"),
        expect.objectContaining({ prompt: expect.stringContaining("Hello, world!") }),
        expect.any(Object)
      );
    });

    it("should handle errors", async () => {
      mockedAxios.post.mockRejectedValueOnce(new Error("API Error"));
      await expect(rewrite("", "casual")).rejects.toThrow("API Error");
    });
  });
});