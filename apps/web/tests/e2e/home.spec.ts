import { fail, equal, } from "assert";
import { test, expect, } from "@playwright/test";

test.describe("Homepage", () => {
	test("Shows the correct headline", async ({ page, },) => {
		await page.goto("/");
		const header = await page.$("h1");
		if (!header) {
			fail("No header found");
		}

		expect(await header.innerHTML()).toContain("Web");
	});
});
