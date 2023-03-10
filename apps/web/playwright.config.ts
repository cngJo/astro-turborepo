import type { PlaywrightTestConfig } from '@playwright/test';

const baseURL = process.env.BASE_URL ?? "http://localhost:3000";

const config: PlaywrightTestConfig = {
	use: {
		baseURL,
		contextOptions: {
			ignoreHTTPSErrors: true
		},
		video: "on",
		trace: "on",
	},
	reporter: 'html'
};
export default config;
