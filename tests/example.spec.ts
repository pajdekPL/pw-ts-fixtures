import { test } from "@fixtures/my-example.fixture";
import { expect } from "@playwright/test";

test("use you own mock data from the fixture", ({ someMockData }) => {
  console.log(someMockData);

  expect(someMockData).toBeDefined();
  expect(someMockData.id).toBe(1);
  expect(someMockData.name).toBe("some name");
});

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
