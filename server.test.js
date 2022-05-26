const server = require("./api/server");
const request = require("supertest");
const db = require("./data/dbConfig");

test("sanity test", () => {
  expect(1).toBe(1);
});

const communityA = {
  name: "ABC Apartments",
  address: "123 Main St",
  city: "Seattle",
  state: "WA",
};
const communityB = {
  name: "Cherry Creek Apartments",
  address: "456 Pleasant Rd",
  city: "Greenwhich",
  state: "CT",
};

const userA = {
  firstName: "Clay",
  lastName: "Blackiston",
  phone: "2039218551",
  email: "clayblackiston1@gmail.com",
};
const userB = {
  firstName: "Anne",
  lastName: "Hathaway",
  phone: "20655501282",
  email: "annehathaway@gmail.com",
};

beforeEach(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});
describe("/communities endpoints", () => {
  beforeEach(async () => {
    await db("communities").insert(communityA);
    await db("communities").insert(communityB);
  });

  describe("GET /communities endpoint", () => {
    test("responds with 200 status code on success", async () => {
      const res = await request(server).get("/api/communities");
      expect(res.status).toBe(200);
    });
    test("should return an array", async () => {
      const res = await request(server).get("/api/communities");
      expect(res.body).toBeInstanceOf(Array);
    });
    test("array should contain all 2 communities", async () => {
      const res = await request(server).get("/api/communities");
      expect(res.body).toHaveLength(2);
    });
    test("array should contain object that has name, address, city, state", async () => {
      const res = await request(server).get("/api/communities");
      expect(res.body[0]).toMatchObject({
        name: "ABC Apartments",
        address: "123 Main St",
        city: "Seattle",
        state: "WA",
      });
    });
  });

  describe("GET /communities/:id endpoint", () => {
    test("responds with 200 status code on success", async () => {
      const res = await request(server).get("/api/communities/1");
      expect(res.status).toBe(200);
    });
    test("should return an object", async () => {
      const res = await request(server).get("/api/communities/1");
      expect(res.body).toBeInstanceOf(Object);
    });
    test("object has name, address, city, state", async () => {
      const res = await request(server).get("/api/communities/1");
      expect(res.body).toMatchObject({
        name: "ABC Apartments",
        address: "123 Main St",
        city: "Seattle",
        state: "WA",
      });
    });
  });
});

describe("/users endpoints", () => {
  beforeEach(async () => {
    await db("users").insert(userA);
    await db("users").insert(userB);
  });

  describe("GET /users endpoint", () => {
    test("responds with 200 status code on success", async () => {
      const res = await request(server).get("/api/users");
      expect(res.status).toBe(200);
    });
    test("responds with 200 status code on success", async () => {
      const res = await request(server).get("/api/users");
      expect(res.body).toHaveLength(2);
    });
    test("first item in array is object that has name, phone email", async () => {
      const res = await request(server).get("/api/users");
      expect(res.body[0]).toMatchObject({
        firstName: "Clay",
        lastName: "Blackiston",
        phone: "2039218551",
        email: "clayblackiston1@gmail.com",
      });
    });
  });

  describe("GET /users/:id endpoint", () => {
    test("responds with 200 status code on success", async () => {
      const res = await request(server).get("/api/users/2");
      expect(res.status).toBe(200);
    });
    test("should return an object", async () => {
      const res = await request(server).get("/api/users/2");
      expect(res.body).toBeInstanceOf(Object);
    });
    test("object has name, phone email", async () => {
      const res = await request(server).get("/api/users/2");
      expect(res.body).toMatchObject({
        firstName: "Anne",
        lastName: "Hathaway",
        phone: "20655501282",
        email: "annehathaway@gmail.com",
      });
    });
  });
});
