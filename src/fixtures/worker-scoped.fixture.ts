import { test as base } from "@playwright/test";

// Declare the types of your fixtures.
interface MyFixtures {
  someMockData: MockData;
}

interface MockData {
  id: number;
  name: string;
  body: string;
}

// tuple second parameter is used to define the scope of the fixture - { scope: "worker" }
export const test = base.extend<MyFixtures>({
  someMockData: [
    // eslint-disable-next-line no-empty-pattern
    async ({}, use, workerInfo): Promise<void> => {
      // Set up the fixture.
      console.log(`worker index: ${workerInfo.workerIndex}`);
      console.log("someMockData fixture is going to be set up");
      const data: MockData = {
        id: 1,
        name: "some name",
        body: "some body",
      };

      await use(data); // this is the data that is going to be used in your tests

      // here you can clean up the fixture after the test
      console.log("someMockData fixture is going to clean up after the test");
    },
    { scope: "worker" },
  ],
});
