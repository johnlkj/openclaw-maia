# Release Flow / 发布流程

## Goal / 目标

Prepare MAIA for public GitHub release and easier reuse in other OpenClaw setups.  
为 MAIA 做公开发布准备，并让它更容易在其他 OpenClaw 环境中复用。

## Current release model / 当前发布模型

MAIA currently ships as two parts:  
当前 MAIA 由两部分组成：

1. a plugin under `plugin/`  
   位于 `plugin/` 的插件
2. a companion skill under `skill/openclaw-maia/`  
   位于 `skill/openclaw-maia/` 的配套 skill

## Skill packaging / Skill 打包

Package the skill with OpenClaw's skill packager:  
使用 OpenClaw 自带的 skill 打包脚本：

```bash
python3 /opt/homebrew/lib/node_modules/openclaw/skills/skill-creator/scripts/package_skill.py skill/openclaw-maia dist
```

Expected artifact / 产物：

```text
dist/openclaw-maia.skill
```

## Plugin distribution / 插件分发

Current MVP plugin distribution is repository-based or local-path based.  
当前 MVP 的插件分发方式主要是仓库路径或本地路径安装。

Typical install path / 典型安装方式：

```bash
openclaw --profile <profile> plugins install --link /path/to/openclaw-maia/plugin
```

## Suggested GitHub release checklist / GitHub 发布建议清单

- [ ] confirm `plugins doctor` is clean  
      确认 `plugins doctor` 没有插件问题
- [ ] confirm MAIA loads in a real OpenClaw instance  
      确认 MAIA 能在真实 OpenClaw 实例中加载
- [ ] confirm at least one real per-user isolation test passes  
      确认至少完成一轮真实用户隔离测试
- [ ] package the skill into `dist/openclaw-maia.skill`  
      把 skill 打包成 `dist/openclaw-maia.skill`
- [ ] create a GitHub release and attach the `.skill` artifact  
      创建 GitHub Release 并附上 `.skill` 文件
- [ ] include install notes for both plugin and skill  
      附上 plugin 与 skill 的安装说明

## Release note themes / 发布说明建议重点

Good release notes should emphasize:  
一份好的发布说明建议强调：

- MAIA isolates personal memory inside one workspace  
  MAIA 在单个 workspace 内实现个人记忆隔离
- MAIA is currently a regular plugin + hook MVP  
  MAIA 当前是普通插件 + hook 的 MVP
- the skill complements the plugin by teaching the agent how to read/write MAIA files  
  配套 skill 负责教 agent 如何正确读写 MAIA 文件
- future releases may improve metadata capture and packaging polish  
  后续版本会继续增强元数据采集与打包体验
