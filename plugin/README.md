# MAIA Plugin / MAIA 插件

This directory will contain the OpenClaw plugin part of MAIA.  
这里将存放 MAIA 的 OpenClaw 插件部分。

## Purpose / 目的

Provide deterministic runtime behavior for per-user isolation.  
为按用户隔离提供确定性的运行时行为。

This plugin now bundles the companion MAIA skill under `plugin/skills/` so a fresh install is closer to a single package.  
这个插件现在把配套 MAIA skill 一并打包在 `plugin/skills/` 下，让全新安装更接近单包分发。

## Install from npm / 从 npm 安装

Once published to npm, users can install MAIA directly:  
发布到 npm 后，用户可以直接安装 MAIA：

```bash
openclaw plugins install @johnlkj/openclaw-maia
```

For now, the recommended install path is clone + link:  
目前推荐的安装方式仍然是 clone + link：

```bash
git clone https://github.com/johnlkj/openclaw-maia.git
cd openclaw-maia
openclaw --profile <profile> plugins install --link ./plugin
```

## Planned responsibilities / 计划职责

- resolve the active user id from trusted metadata / 从可信元数据解析当前用户 ID
- create `people/<user-id>/...` if missing / 缺失时自动创建 `people/<user-id>/...`
- expose canonical profile/memory paths / 暴露规范化的 profile 与 memory 路径
- support single-workspace multi-user organization / 支持单 workspace 多用户组织方式

## Status / 状态

Scaffold only for now.  
目前仅为骨架。
