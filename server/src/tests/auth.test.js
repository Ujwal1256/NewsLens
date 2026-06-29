require("dotenv").config();

const mongoose = require("mongoose");
const request = require("supertest");

const connectDB = require("../database/mongodb");
const app = require("../app");

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Authentication API", () => {
  test("POST /api/v1/auth/register", async () => {
    const response = await request(app)
      .post("/api/v1/auth/register")
      .send({
        name: "Test User",
        email: `test${Date.now()}@gmail.com`,
        password: "Password123",
      });

    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.data.email).toContain("@gmail.com");
  });
});