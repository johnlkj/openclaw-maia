# MAIA Architecture / MAIA 架构

## Name / 名称

- **English:** Multi-Agent Multi-Account Isolation Architecture
- **中文：** 多 Agent 多账号隔离架构
- **Short name / 简称：** MAIA

## Problem statement / 要解决的问题

OpenClaw sessions may already be isolated by channel/account/peer, but workspace-level files are often shared at the agent level.  
OpenClaw 的 session 也许已经按 channel/account/peer 隔离，但 workspace 级文件通常仍然是在 agent 级别共享的。

This creates a gap:  
这会带来一个空缺：

- sessions can be isolated / session 可以隔离
- but long-term memory and persona config may still be shared / 但长期记忆和人格配置仍可能共享

MAIA closes that gap by adding **per-user filesystem isolation inside one agent workspace**.  
MAIA 通过在单个 agent workspace 内增加 **按用户隔离的文件系统结构** 来补上这个空缺。

## Conceptual model / 概念模型

Three layers of separation / 三层隔离：

1. **Agent-level separation / Agent 级隔离**  
   Each agent keeps its own workspace and persona.  
   每个 agent 保持自己的 workspace 与人格。

2. **Account/session separation / 账号与会话隔离**  
   Different accounts or peers keep separate live conversation context.  
   不同账号或对端维持各自独立的实时会话上下文。

3. **Per-user file isolation / 用户级文件隔离**  
   Each user gets isolated profile and memory files under `people/<user-id>/`.  
   每个用户在 `people/<user-id>/` 下拥有独立的档案与记忆文件。

## Filesystem design / 文件系统设计

```text
workspace/
├─ IDENTITY.md                  # agent identity / agent 自身身份
├─ SOUL.md                      # agent style / agent 风格
├─ USER.md                      # global human-handling rules / 全局人类处理规则
├─ MEMORY.md                    # global operating memory / 全局运行记忆
├─ memory/                      # operational notes only / 仅放全局运营记录
│  ├─ YYYY-MM-DD.md
│  └─ system-transcripts/
└─ people/
   ├─ README.md
   ├─ _TEMPLATE_PROFILE.md
   ├─ _TEMPLATE_MEMORY.md
   ├─ _TEMPLATE_DAILY.md
   └─ <user-id>/
      ├─ PROFILE.md
      ├─ MEMORY.md
      └─ memory/
         └─ YYYY-MM-DD.md
```

## Plugin responsibilities / 插件职责

The plugin should do the mechanical work. In the current phase, MAIA should remain a regular plugin using hooks, not a declared context-engine plugin.  
插件负责机械性、确定性的工作。在当前阶段，MAIA 应保持为使用 hooks 的普通插件，而不是声明成 context-engine 插件。

### Minimum viable plugin / 最小可用插件

- detect direct-message user identity from trusted runtime metadata  
  从可信运行时元数据中识别私聊用户身份
- resolve canonical per-user paths  
  解析用户对应的规范路径
- create missing per-user files on first contact  
  首次接触时创建缺失的用户文件
- expose those paths to the agent/runtime  
  把这些路径暴露给 agent / runtime

### Possible later extensions / 后续扩展方向

- optional account aliasing / identity linking  
  可选的账号别名或身份关联
- configurable templates  
  可配置模板
- migration helpers for legacy shared memory layouts  
  旧共享记忆结构的迁移辅助

## Skill responsibilities / Skill 职责

The skill should teach the agent how to behave on top of the structure.  
skill 负责在这套结构之上规范 agent 的行为。

- read the right files in the right order  
  按正确顺序读取正确文件
- keep first contact neutral-warm  
  在首次接触时保持中性但温和
- avoid importing another user's relationship framing  
  避免导入其他用户的关系设定
- write only high-confidence facts during bootstrap  
  建档初期只写入高置信事实
- distinguish profile vs long-term memory vs daily notes  
  区分 profile、长期记忆、日常记录

## Core advantages / 核心优势

### 1. Safer personalization / 更安全的个性化
One user's titles and preferences do not automatically bleed into another user's memory.  
某个用户的称呼和偏好不会自动渗透到另一个用户的记忆里。

### 2. Cleaner operations / 更清晰的运维
One workspace remains manageable even when the agent talks to many users.  
即使 agent 同时与很多用户对话，一个 workspace 也仍然可管理。

### 3. Better portability / 更好的可移植性
The same layout can be reused across agents, bots, and deployments.  
同一套结构可复用于不同 agent、bot 和部署环境。

### 4. Better GitHub distribution / 更适合 GitHub 分发
The architecture can be published as a plugin + skill combo instead of as one-off ad hoc prompts.  
这套架构可以作为 plugin + skill 的组合发布，而不是一次性的临时 prompt。
