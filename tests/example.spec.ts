import { test as exampleFixture } from "@fixtures/my-example.fixture";
import { test as additionalFixture } from "@fixtures/worker-scoped.fixture";
import { expect, mergeTests } from "@playwright/test";

const test = mergeTests(exampleFixture, additionalFixture);

test(
  "use you own mock data from the fixture",
  { tag: ["@scope"] },
  ({ someMockData }) => {
    console.log(someMockData);

    expect(someMockData).toBeDefined();
    expect(someMockData.id).toBe(1);
    expect(someMockData.name).toBe("some name");
  },
);

test(
  "use you own mock data from the fixture 2",
  { tag: ["@scope"] },
  ({ someMockData }) => {
    console.log(someMockData);

    expect(someMockData).toBeDefined();
    expect(someMockData.id).toBe(1);
    expect(someMockData.name).toBe("some name");
  },
);

test(
  "use you own mock data from the fixture 3",
  { tag: ["@scope"] },
  ({ someMockData }) => {
    console.log(someMockData);

    expect(someMockData).toBeDefined();
    expect(someMockData.id).toBe(1);
    expect(someMockData.name).toBe("some name");
  },
);

test("use our data from the API", ({ someAPIData }) => {
  console.log(someAPIData);

  expect(someAPIData).toBeDefined();
  expect(someAPIData.length).toBe(100);

  expect(someAPIData[0].title).toBeDefined();
  expect(someAPIData[0].body).toBeDefined();
  expect(someAPIData[0].userId).toBeDefined();
  expect(someAPIData[0].id).toBeDefined();
});

test("page fixture example", async ({ examplePage }) => {
  const header = examplePage.getByRole("heading", { name: "Example Domain" });

  await expect(header).toBeVisible();

  console.log("\n\nTEST IS FINISHED\n\n");
});
