import { test } from "@fixtures/auto-example.fixture";
import { expect } from "@playwright/test";

test("auto fixture example - passing test", { tag: ["@auto-fixture"] }, () => {
  console.log("My super passing test");
});

test("auto fixture example - failing test", { tag: ["@auto-fixture"] }, () => {
  console.log("My super failing test");

  expect(true).toBe(false);
});
