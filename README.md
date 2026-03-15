# openclaw-maia

**MAIA = Multi-Agent Multi-Account Isolation Architecture**  
**MAIA = 多 Agent 多账号隔离架构**

MAIA is a bilingual OpenClaw project that combines a **plugin + skill** to provide isolated per-user persona and memory management inside a single agent workspace.  
MAIA 是一个中英双语的 OpenClaw 项目，通过 **plugin + skill** 的组合，在单个 agent workspace 内实现按用户隔离的人格配置与记忆管理。

## Core value / 核心价值

- **Per-user isolation / 按用户隔离**  
  Keep each user's profile, long-term memory, and daily notes separated by user ID.  
  让每个用户的档案、长期记忆和日常记录按用户 ID 独立存放。

- **Single-workspace management / 单工作区管理**  
  Organize multiple users cleanly inside one workspace instead of scattering files across many workspaces.  
  在一个 workspace 里整洁管理多个用户，而不是把文件散落到多个 workspace。

- **Multi-agent compatible / 兼容多 Agent**  
  Support independent agent personas (for example Sunny / Bonny) while keeping memory boundaries explicit.  
  支持多个独立 agent 人格（例如 Sunny / Bonny），同时明确保持记忆边界。

- **First-contact bootstrap / 首次接触自动建档**  
  Scaffold profile and memory files for a new user with minimal factual defaults.  
  为新用户自动建立档案与记忆文件，并只写入最低限度的高置信信息。

- **Safer personalization / 更安全的个性化**  
  Avoid leaking one user's titles, preferences, or relationship framing into another user's context.  
  避免把某个用户的称呼、偏好或关系设定泄露到另一个用户的上下文中。

## Why plugin + skill? / 为什么采用 plugin + skill？

### Plugin / 插件
Use the plugin for deterministic behavior and filesystem automation. In the current phase, MAIA is a **regular plugin with hooks**, not a custom context engine.  
插件负责确定性行为与文件系统自动化。在当前阶段，MAIA 是一个**普通插件 + hook**，不是自定义 context engine。

Planned responsibilities / 计划职责：
- resolve the current user identity from trusted metadata / 从可信元数据解析当前用户身份
- map the current chat to `people/<user-id>/...` / 将当前聊天映射到 `people/<user-id>/...`
- auto-bootstrap files for new users / 为新用户自动建档
- expose stable paths and helpers to the runtime / 向运行时暴露稳定路径与辅助能力

### Skill / 技能
Use the skill for agent behavior, judgment, and writing rules.  
skill 负责 agent 的行为约束、判断流程与写作规范。

Planned responsibilities / 计划职责：
- tell the agent what to read first / 告诉 agent 优先读取哪些文件
- define how to write profile vs memory vs daily notes / 定义 profile、长期记忆、日记分别怎么写
- define first-contact calibration behavior / 定义首次接触时的校准行为
- explain session reset expectations after structural changes / 解释结构变更后为何需要 `/new` 或重置会话

## Repository layout / 仓库结构

```text
openclaw-maia/
├─ README.md
├─ docs/
│  ├─ architecture.md
│  └─ roadmap.md
├─ plugin/
│  ├─ README.md
│  └─ openclaw.plugin.json
└─ skill/
   └─ openclaw-maia/
      └─ SKILL.md
```

## Status / 当前状态

This repository is currently in **Phase 1: project skeleton and architecture definition**.  
当前仓库处于 **第一阶段：项目骨架与架构定义**。

## Planned installation experience / 目标安装体验

Long term, the goal is something close to:  
长期目标是做到类似这样的安装体验：

```bash
openclaw plugins install <maia-plugin>
# enable plugin / 启用插件
# install companion skill / 安装配套 skill
```

Then the user can adopt MAIA with minimal manual workspace surgery.  
之后用户就能以尽量少的手工 workspace 改造来启用 MAIA。

## Current phase goals / 当前阶段目标

1. Define architecture and naming / 确定架构与命名
2. Define plugin responsibilities and manifest / 确定插件职责与 manifest
3. Define skill behavior contract / 确定 skill 的行为契约
4. Build the first minimal working implementation / 做出第一版最小可用实现

## License / 许可

TBD
