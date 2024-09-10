import {defineConfig} from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	optimizeDeps: {
		esbuildOptions: {
			target: "es2022",
		},
	},
	plugins: [
		tsconfigPaths({root: "./"}),
		react({
			babel: {
				parserOpts: {
					plugins: ["decorators-legacy", "classProperties"],
				},
				plugins: [
					[
						"babel-plugin-styled-components",
						{
							displayName: true,
							fileName: false,
						},
					],
				],
			},
		}),
		svgr(),
	],
});
