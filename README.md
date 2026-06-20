# TriggerDemo — Trigger.dev 实例教程

基于 [Trigger.dev Quick Start](https://trigger.dev/docs/quick-start) 初始化的后台任务项目。

## 前置条件

- Node.js >= 18
- [Trigger.dev](https://cloud.trigger.dev) 账号（免费注册）

## 使用步骤

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
triggerDemo/
├── package.json          # 依赖：@trigger.dev/sdk
├── tsconfig.json         # TypeScript 配置
├── trigger.config.ts     # Trigger.dev 项目配置
├── .env.example          # 环境变量模板
├── trigger/
│   └── example.ts        # Hello World 任务示例
└── README.md
```

## 常用命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动本地开发服务器 |
| `npm run deploy` | 部署任务到 Trigger.dev 云端 |

## 参考文档

- [Trigger.dev 官方文档](https://trigger.dev/docs)
- [Quick Start 指南](https://trigger.dev/docs/quick-start)
- [API 参考](https://trigger.dev/docs/api-reference)
