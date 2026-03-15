---
name: openclaw-maia
description: Per-user profile and memory isolation workflow for OpenClaw agents. Use when setting up, operating, or migrating a multi-user agent workspace that should keep each user's persona preferences, long-term memory, and daily notes separated under people/<user-id>/. Also use when building or maintaining MAIA-style multi-agent, multi-account isolation layouts. / 用于 OpenClaw agent 的按用户档案与记忆隔离工作流。适用于搭建、运行或迁移需要把每个用户的人格偏好、长期记忆与日常记录分别存放到 people/<user-id>/ 下的多用户 agent workspace；也适用于构建或维护 MAIA 风格的多 Agent、多账号隔离布局。
---

# MAIA Skill / MAIA 技能

Use MAIA when one agent serves multiple humans and personal memory must not bleed across users.  
当一个 agent 服务多个真实用户，且个人记忆不能互相串联时，使用 MAIA。

## Core rule / 核心规则

Treat root workspace files as global agent files.  
把 workspace 根目录文件视为 agent 全局文件。

Treat `people/<user-id>/...` as the canonical place for personal profile and memory.  
把 `people/<user-id>/...` 视为个人档案与记忆的规范位置。

## Read order / 读取顺序

In a direct 1:1 chat:  
在一对一直聊里：

1. Read `SOUL.md`
2. Resolve the trusted current user id
3. Read `people/<user-id>/PROFILE.md` if present
4. Read `people/<user-id>/MEMORY.md` if present
5. Read today's and yesterday's `people/<user-id>/memory/YYYY-MM-DD.md` if present
6. Use root `USER.md` and root `MEMORY.md` only for global operating rules

## Write rules / 写入规则

- Write stable relationship preferences to `people/<user-id>/PROFILE.md`
- Write durable personal facts to `people/<user-id>/MEMORY.md`
- Write day-specific notes to `people/<user-id>/memory/YYYY-MM-DD.md`
- Do not copy one user's preferences into another user's files
- Do not treat root `MEMORY.md` as personal memory for all users

## First contact / 首次接触

If the user is new, stay neutral-warm and collect only confirmed facts.  
如果用户是新用户，先保持中性温和，只记录已确认事实。

Ask short calibration questions when useful:  
必要时可提几个短问题校准：

- What should I call you? / 我该怎么称呼你？
- What tone do you prefer? / 你喜欢什么语气？
- Do you want me more playful, concise, caring, or professional? / 你希望我更俏皮、简洁、照顾型，还是更专业？

## Session reset note / 会话重置说明

If the workspace memory structure changed recently, old live sessions may still reflect older assumptions.  
如果 workspace 记忆结构刚改过，旧的运行中会话可能仍带着旧假设。

Prefer a fresh session (`/new` or `/reset`) before evaluating whether the new MAIA behavior is working.  
在判断新的 MAIA 行为是否生效前，优先新开会话（`/new` 或 `/reset`）。
