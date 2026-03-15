# Release Flow / 发布流程

## Goal / 目标

Prepare MAIA for public GitHub release and easier reuse in other OpenClaw setups.  
为 MAIA 做公开发布准备，并让它更容易在其他 OpenClaw 环境中复用。

## Current release model / 当前发布模型

MAIA currently ships as a plugin bundle containing:  
当前 MAIA 以一个插件包形式提供，包含：

1. the plugin runtime under `plugin/`  
   位于 `plugin/` 的插件运行部分
2. the bundled companion skill under `plugin/skills/openclaw-maia/`  
   位于 `plugin/skills/openclaw-maia/` 的配套 skill

## Release artifacts / 发布产物

Recommended artifacts for the first public release:  
第一版公开发布建议包含这些产物：

- GitHub source archive (automatic)  
  GitHub 自动生成的源码包
- `dist/openclaw-maia.skill`  
  打包后的 skill 文件
- release notes / 发布说明

## Skill packaging / Skill 打包

Package the bundled skill with OpenClaw's skill packager:  
使用 OpenClaw 自带的 skill 打包脚本来打包内置 skill：

```bash
python3 /opt/homebrew/lib/node_modules/openclaw/skills/skill-creator/scripts/package_skill.py plugin/skills/openclaw-maia dist
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
git clone https://github.com/johnlkj/openclaw-maia.git
cd openclaw-maia
openclaw --profile <profile> plugins install --link ./plugin
```

## Suggested GitHub release checklist / GitHub 发布建议清单

- [ ] confirm `plugins doctor` is clean  
      确认 `plugins doctor` 没有插件问题
- [ ] confirm MAIA loads in a real OpenClaw instance  
      确认 MAIA 能在真实 OpenClaw 实例中加载
- [ ] confirm at least one real per-user isolation test passes  
      确认至少完成一轮真实用户隔离测试
- [ ] confirm `openclaw skills list` shows `openclaw-maia` as ready  
      确认 `openclaw skills list` 里 `openclaw-maia` 是 ready
- [ ] package the skill into `dist/openclaw-maia.skill`  
      把 skill 打包成 `dist/openclaw-maia.skill`
- [ ] create a GitHub release and attach the `.skill` artifact  
      创建 GitHub Release 并附上 `.skill` 文件
- [ ] include install notes for both plugin and skill  
      附上 plugin 与 skill 的安装说明
- [ ] link the fresh-install guide in the release body  
      在 release 正文里附上 fresh-install 指南链接

## Suggested first tag / 建议首个标签

```text
v0.1.0
```

## Release note themes / 发布说明建议重点

Good release notes should emphasize:  
一份好的发布说明建议强调：

- MAIA isolates personal memory inside one workspace  
  MAIA 在单个 workspace 内实现个人记忆隔离
- MAIA is currently a regular plugin + hook MVP  
  MAIA 当前是普通插件 + hook 的 MVP
- the bundled skill complements the plugin by teaching the agent how to read/write MAIA files  
  内置 skill 负责教 agent 如何正确读写 MAIA 文件
- current tested compatibility is OpenClaw `2026.3.13`  
  当前已验证兼容 OpenClaw `2026.3.13`
- future releases may improve metadata capture and packaging polish  
  后续版本会继续增强元数据采集与打包体验
