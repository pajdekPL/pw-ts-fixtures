import { test as base } from "@playwright/test";

// Extend base test by providing "myData" and "examplePage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const test = base.extend<{ doSomeAction: void }>({
  doSomeAction: [
    // eslint-disable-next-line no-empty-pattern
    async ({}, use, testInfo): Promise<void> => {
      // Set up the fixture.
      console.log("doSomeAction fixture is going to be set up");

      await use(); // this is the data that is going to be used in your tests

      if (testInfo.status === "failed") {
        console.log("do something when test fails");
      } else {
        console.log("do something when test passes");
      }
      // here you can clean up the fixture after the test
      console.log("doSomeAction fixture is going to clean up after the test");
    },
    { auto: true },
  ],
});
