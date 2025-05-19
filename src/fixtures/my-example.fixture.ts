import type { APIPosts } from "@fixtures/api-post";
import { test as base, expect, Page } from "@playwright/test";

// Declare the types of your fixtures.
interface MyFixtures {
  someAPIData: APIPosts;
  examplePage: Page;
}

const API_URL_POSTS = "https://jsonplaceholder.typicode.com/posts";
// Extend base test by providing "myData" and "examplePage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
  someAPIData: async ({ request }, use) => {
    // Set up the fixture.
    console.log("myData fixture is going to be set up");

    const response = await request.get(API_URL_POSTS);

    expect(response.status()).toBe(200);
    const data = (await response.json()) as APIPosts;

    await use(data); // this is the data that is going to be used in your tests

    // here you can clean up the fixture after the test
    console.log("myData fixture is going to clean up after the test");
  },

  examplePage: async ({ page, someAPIData }, use) => {
    console.log("examplePage fixture is going to be set up");
    console.log("Data from other fixture:");
    console.log(someAPIData[0]); // you can for example setup some backend state here using other custom  fixture

    await page.goto("https://example.com");

    await use(page);

    await page.close();

    console.log("examplePage fixture is going to be cleaned up");
  },
});
