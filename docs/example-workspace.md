# Example Workspace / 示例 Workspace

This document shows the intended MAIA-style workspace layout.  
这个文档展示 MAIA 风格的目标 workspace 结构。

## Example tree / 示例目录树

```text
workspace/
├─ IDENTITY.md
├─ SOUL.md
├─ USER.md
├─ MEMORY.md
├─ memory/
│  ├─ 2026-03-15.md
│  └─ system-transcripts/
│     └─ 2026-03-15-session-summary.md
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

## Meaning of root files / 根目录文件含义

- `IDENTITY.md` — agent identity / agent 自身身份
- `SOUL.md` — agent style and voice / agent 风格与语气
- `USER.md` — global rules for handling humans / 处理人类关系的全局规则
- `MEMORY.md` — global operating memory only / 仅 agent 全局运行记忆
- `memory/` — operational notes only / 仅用于全局运营记录

## Meaning of per-user files / 用户级文件含义

For each user folder under `people/<user-id>/`:  
对于 `people/<user-id>/` 下的每个用户目录：

- `PROFILE.md` — stable preferences, naming, relationship framing  
  稳定偏好、称呼、关系框架
- `MEMORY.md` — long-term personal memory for that user  
  该用户自己的长期记忆
- `memory/YYYY-MM-DD.md` — daily notes for that user  
  该用户自己的按日记录

## Key rule / 核心规则

Root files are global to the agent.  
根目录文件属于 agent 全局。

`people/<user-id>/...` is the canonical place for personal memory and persona configuration.  
`people/<user-id>/...` 才是个人记忆与人格配置的规范位置。
