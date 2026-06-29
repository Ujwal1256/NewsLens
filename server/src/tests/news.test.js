

const request = require("supertest");
const app = require("../app");

describe("News API", () => {
  test("GET /api/v1/news/headlines should return top headlines", async () => {
    const response = await request(app).get("/api/v1/news/headlines");

    expect(response.statusCode).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data).toBeDefined();
    expect(response.body.data.articles).toBeInstanceOf(Array);
  });

  test("GET /api/v1/news/search should search articles", async () => {
    const response = await request(app)
      .get("/api/v1/news/search")
      .query({ q: "technology" });

    expect(response.statusCode).toBe(200);
    expect(response.body.articles).toBeInstanceOf(Array);
  });

  test("GET /api/v1/news/topics/technology should return topic news", async () => {
    const response = await request(app)
      .get("/api/v1/news/topics/technology");

    expect(response.statusCode).toBe(200);
    expect(response.body.articles).toBeInstanceOf(Array);
  });
});