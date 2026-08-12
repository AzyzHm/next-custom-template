import { expect, test } from "@playwright/test";

test.describe("Home page", () => {
  test("renders the landing page heading", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { name: "Next Custom Template" })).toBeVisible();
  });
});

test.describe("Health endpoint", () => {
  test("responds with an ok status", async ({ request }) => {
    const response = await request.get("/api/v1/health");
    const body = await response.json();

    expect(response.ok()).toBeTruthy();
    expect(body.status).toBe("ok");
  });
});
