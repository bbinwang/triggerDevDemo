import { defineConfig } from "@trigger.dev/sdk/v3";

export default defineConfig({
  runtime: "node",
  project: "<your-project-id>", // 运行 npx trigger.dev@latest init 后自动填入
  maxDuration: 300, // 任务最大运行时间（秒）
});
