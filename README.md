# openclaw-maia

**MAIA = Multi-Agent Multi-Account Isolation Architecture**  
**MAIA = 多 Agent 多账号隔离架构**

MAIA is a bilingual OpenClaw project that combines a **plugin + skill** to provide isolated per-user persona and memory management inside a single agent workspace.  
MAIA 是一个中英双语的 OpenClaw 项目，通过 **plugin + skill** 的组合，在单个 agent workspace 内实现按用户隔离的人格配置与记忆管理。

## Why MAIA? / 为什么需要 MAIA？

OpenClaw sessions can already be separated by channel, account, and peer, but workspace files are often still shared at the agent level.  
OpenClaw 的会话本身可以按 channel、account、peer 分开，但 workspace 文件常常仍然停留在 agent 级共享。

MAIA closes that gap by adding **per-user filesystem isolation inside one workspace**.  
MAIA 通过在一个 workspace 内引入 **按用户隔离的文件结构** 来补上这层空缺。

## Core advantages / 核心优势

- **Per-user isolation / 按用户隔离**  
  Keep each user's profile, long-term memory, and daily notes separated by user ID.  
  让每个用户的档案、长期记忆和日常记录按用户 ID 独立存放。

- **Single-workspace management / 单工作区管理**  
  Organize multiple users cleanly inside one workspace instead of scattering files across many workspaces.  
  在一个 workspace 里整洁管理多个用户，而不是把文件散落到多个 workspace。

- **Multi-agent compatible / 兼容多 Agent**  
  Support independent agent personas while keeping memory boundaries explicit.  
  支持多个独立 agent 人格，同时明确保持记忆边界。

- **First-contact bootstrap / 首次接触自动建档**  
  Scaffold profile and memory files for a new user with minimal factual defaults.  
  为新用户自动建立档案与记忆文件，并只写入最低限度的高置信信息。

- **Safer personalization / 更安全的个性化**  
  Avoid leaking one user's titles, preferences, or relationship framing into another user's context.  
  避免把某个用户的称呼、偏好或关系设定泄露到另一个用户的上下文中。

## What MAIA includes / MAIA 包含什么

### 1. Plugin / 插件
MAIA currently runs as a **regular OpenClaw plugin with hooks**, not a custom context engine.  
MAIA 当前以 **普通 OpenClaw 插件 + hooks** 的形式运行，而不是自定义 context engine。

Current plugin MVP responsibilities / 当前插件 MVP 职责：
- resolve the current direct user id from trusted runtime/session signals  
  从可信运行时 / session 信号中解析当前直聊用户 ID
- map the current chat to `people/<user-id>/...`  
  将当前聊天映射到 `people/<user-id>/...`
- auto-bootstrap files for new users  
  为新用户自动建档
- inject MAIA read/write guidance into prompt construction  
  在 prompt 构建阶段注入 MAIA 读写规则

### 2. Skill / 技能
The companion skill teaches the agent how to behave on top of the MAIA structure.  
配套 skill 负责教 agent 如何在 MAIA 结构之上正确行动。

Current skill responsibilities / 当前 skill 职责：
- tell the agent what to read first  
  告诉 agent 优先读取哪些文件
- define how to write profile vs memory vs daily notes  
  定义 profile、长期记忆、日记分别怎么写
- define first-contact calibration behavior  
  定义首次接触时的校准行为
- explain why `/new` or `/reset` may be required after structural changes  
  解释为什么结构变更后可能需要 `/new` 或 `/reset`

## Current status / 当前状态

**MAIA is currently an MVP.**  
**MAIA 当前处于 MVP 阶段。**

What is already working / 已经跑通的部分：
- plugin discovery and loading / 插件发现与加载
- hook-based MAIA prompt injection / 基于 hook 的 MAIA prompt 注入
- per-user path resolution / 按用户路径解析
- first-contact file bootstrap scaffold / 首次接触建档骨架
- real-world validation in a live OpenClaw setup / 在真实 OpenClaw 环境中的实际验证

What is still evolving / 还在演进中的部分：
- richer metadata capture / 更丰富的元数据采集
- polished installation flow / 更顺手的安装流程
- migration helpers for legacy shared-memory layouts / 旧共享记忆结构的迁移辅助
- optional future upgrade to a real context engine / 未来可选升级成真正 context engine

## Quick start / 快速开始

### Install the plugin / 安装插件

Link the local plugin into an OpenClaw instance:  
把本地插件链接到某个 OpenClaw 实例：

```bash
openclaw --profile <profile> plugins install --link /path/to/openclaw-maia/plugin
```

Then verify it loads:  
然后验证插件已加载：

```bash
openclaw --profile <profile> plugins list
openclaw --profile <profile> plugins doctor
```

### Install the companion skill / 安装配套 skill

The repository currently ships the skill source under:  
当前仓库里的 skill 源文件位于：

```text
skill/openclaw-maia/
```

To package it into a distributable `.skill` file:  
要把它打包成可分发的 `.skill` 文件，可运行：

```bash
python3 /opt/homebrew/lib/node_modules/openclaw/skills/skill-creator/scripts/package_skill.py skill/openclaw-maia dist
```

Expected artifact / 产物：

```text
dist/openclaw-maia.skill
```

Use it as the companion MAIA skill when packaging or distributing to another OpenClaw setup.  
在打包或分发给其他 OpenClaw 环境时，把它作为 MAIA 的配套 skill 使用。

### Validate behavior / 验证行为

A minimal behavior test should confirm that:  
最小行为验证应确认：

1. the agent no longer crashes on MAIA load  
   agent 在加载 MAIA 后不再报错崩掉
2. the agent explains personal memory paths under `people/<user-id>/...`  
   agent 能正确说明 `people/<user-id>/...` 下的个人记忆路径
3. one user's memory is not mixed with another user's files  
   某个用户的记忆不会和另一个用户的文件混在一起

## Example workspace layout / 示例 workspace 结构

```text
workspace/
├─ IDENTITY.md
├─ SOUL.md
├─ USER.md
├─ MEMORY.md
├─ memory/
│  ├─ 2026-03-15.md
│  └─ system-transcripts/
└─ people/
   ├─ README.md
   ├─ _TEMPLATE_PROFILE.md
   ├─ _TEMPLATE_MEMORY.md
   ├─ _TEMPLATE_DAILY.md
   ├─ 5063338251/
   │  ├─ PROFILE.md
   │  ├─ MEMORY.md
   │  └─ memory/
   │     └─ 2026-03-15.md
   └─ 490301946/
      ├─ PROFILE.md
      ├─ MEMORY.md
      └─ memory/
         └─ 2026-03-15.md
```

See also / 另见：
- [`docs/architecture.md`](docs/architecture.md)
- [`docs/plugin-contract.md`](docs/plugin-contract.md)
- [`docs/mvp-flow.md`](docs/mvp-flow.md)
- [`docs/roadmap.md`](docs/roadmap.md)
- [`docs/install.md`](docs/install.md)
- [`docs/fresh-install.md`](docs/fresh-install.md)
- [`docs/example-workspace.md`](docs/example-workspace.md)
- [`docs/release.md`](docs/release.md)

## Repository layout / 仓库结构

```text
openclaw-maia/
├─ README.md
├─ docs/
│  ├─ architecture.md
│  ├─ example-workspace.md
│  ├─ install.md
│  ├─ mvp-flow.md
│  ├─ plugin-contract.md
│  └─ roadmap.md
├─ plugin/
│  ├─ README.md
│  ├─ openclaw.plugin.json
│  ├─ package.json
│  └─ src/
└─ skill/
   └─ openclaw-maia/
      └─ SKILL.md
```

## Roadmap / 路线图

Short term priorities / 短期优先事项：
- improve installation and packaging / 完善安装与打包
- validate new-user bootstrap with more real examples / 用更多真实样例验证新用户建档
- refine prompt guidance and metadata use / 继续收敛 prompt 规则与元数据使用
- prepare a cleaner public release / 准备更适合公开发布的版本

## License / 许可

TBD


TBD
