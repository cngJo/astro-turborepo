import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { Button } from "../src";

describe("Button", () => {
	it("Can be created", () => {
		const button = mount(Button);
		expect(button.vm).toBeTruthy();
	});
});
