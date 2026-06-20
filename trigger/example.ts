import { logger, task } from "@trigger.dev/sdk/v3";

// 最简单的 Hello World 任务
export const helloWorld = task({
  id: "hello-world",
  run: async (payload: { message: string }) => {
    logger.info("Hello world!", { payload });

    return {
      message: `收到: ${payload.message}`,
    };
  },
});
