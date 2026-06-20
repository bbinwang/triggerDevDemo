# triggerDevDemo — Trigger.dev 后台任务调度入门

基于 [Trigger.dev Quick Start](https://trigger.dev/docs/quick-start) 初始化的后台任务项目，用于学习云端任务调度。

## 前置条件

- Node.js >= 18
- [Trigger.dev](https://cloud.trigger.dev) 账号（免费注册）

## 使用方法

### 1. 配置环境变量

```bash
cp .env.example .env
```

编辑 `.env`，填入你的 API 密钥（从 [Trigger.dev Dashboard](https://cloud.trigger.dev) 获取）：

```
TRIGGER_SECRET_KEY=tr_dev_你的密钥
```

### 2. 配置项目 ID

编辑 `trigger.config.ts`，将 `<your-project-id>` 替换为你的项目 ID。

> 如果是通过 `npx trigger.dev@latest init` 初始化的，这一步会自动完成。

### 3. 安装依赖

```bash
npm install
```

### 4. 启动本地开发

```bash
npm run dev
```

这会启动本地开发服务器，并连接到 Trigger.dev 云端。你可以在 Dashboard 中看到任务的实时日志。

### 5. 测试任务

在 Trigger.dev Dashboard 中找到 `hello-world` 任务，点击 **Test** 按钮发送测试 payload：

```json
{ "message": "你好 Trigger.dev!" }
```

## 项目结构

```
triggerDevDemo/
├── package.json          # 依赖：@trigger.dev/sdk, typescript
├── tsconfig.json         # TypeScript 配置 (ES2022)
├── trigger.config.ts     # Trigger.dev 项目配置
├── .env.example          # 环境变量模板
├── README.md             # 项目文档
└── trigger/
    └── example.ts        # Hello World 任务示例
```

## 核心代码

`trigger/example.ts` 是项目唯一的核心任务代码：

```typescript
export const helloWorld = task({
  id: "hello-world",
  run: async (payload: { message: string }) => {
    logger.info("Hello world!", { payload });
    return { message: `收到：${payload.message}` };
  },
});
```

用 `task()` 定义一个任务，指定 ID 和运行逻辑，Trigger.dev 负责调度和执行。

## 功能特点

| 特性 | 说明 |
|------|------|
| **云端任务调度** | 任务在 Trigger.dev 云端运行，无需自建队列/Worker |
| **TypeScript 全类型支持** | payload 和 return 都有类型推导 |
| **内置日志** | `logger.info()` 自动同步到 Dashboard，实时查看任务执行 |
| **本地开发模式** | `npm run dev` 本地跑代码，日志实时同步到云端 Dashboard |
| **一键部署** | `npm run deploy` 将任务部署到云端生产环境 |
| **最长 300 秒超时** | `trigger.config.ts` 中配置了 `maxDuration: 300` |

## 常用命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动本地开发服务器 |
| `npm run deploy` | 部署任务到 Trigger.dev 云端 |

## 后续扩展

当前只有一个 Hello World 示例任务，后续可扩展：

- **定时任务**：用 cron 表达式触发
- **Webhook 触发**：接收外部请求触发
- **第三方 API 集成**：在任务中调用各种服务

## 参考文档

- [Trigger.dev 官方文档](https://trigger.dev/docs)
- [Quick Start 指南](https://trigger.dev/docs/quick-start)
- [API 参考](https://trigger.dev/docs/api-reference)
