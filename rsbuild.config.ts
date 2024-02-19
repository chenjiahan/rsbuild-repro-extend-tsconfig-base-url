import { defineConfig } from "@rsbuild/core";
import { webpackProvider } from "@rsbuild/webpack";

export default defineConfig({
  provider: process.env.WEBPACK ? webpackProvider : undefined,
});
