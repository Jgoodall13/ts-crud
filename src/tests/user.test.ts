import request from "supertest";
import app from "../app";

describe("User API", () => {
  it("should create a new user", async () => {
    const res = await request(app).post("/api/users").send({
      name: "Test User",
      email: "test@example.com",
      age: 30,
    });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("name", "Test User");
  });
});
