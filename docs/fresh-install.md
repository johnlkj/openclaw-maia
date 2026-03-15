# Fresh Install Guide / 全新安装指南

This guide is for testing MAIA on a brand-new OpenClaw setup.  
这个指南适用于在全新 OpenClaw 环境里测试 MAIA。

## Important limitation / 重要限制

OpenClaw plugin install currently does **not** support installing directly from a GitHub repo URL.  
OpenClaw 当前**不支持**直接把 GitHub 仓库 URL 当插件安装源。

Recommended flow / 推荐流程：

1. clone the repository locally / 先把仓库 clone 到本地
2. link-install the plugin from the local `plugin/` directory / 再从本地 `plugin/` 目录 link 安装

## Step 1 — Clone the repository / 第一步：克隆仓库

```bash
git clone https://github.com/johnlkj/openclaw-maia.git
cd openclaw-maia
```

## Step 2 — Install the plugin / 第二步：安装插件

```bash
openclaw --profile <profile> plugins install --link ./plugin
```

Then verify plugin health / 然后验证插件状态：

```bash
openclaw --profile <profile> plugins list
openclaw --profile <profile> plugins doctor
```

Expected / 期望结果：
- `maia` appears as `loaded`  
  `maia` 显示为 `loaded`
- no plugin issues are reported  
  不出现插件错误

## Step 3 — Verify bundled skill visibility / 第三步：确认配套 skill 可见

MAIA now bundles its companion skill inside the plugin directory under `plugin/skills/`.  
MAIA 现在把配套 skill 直接打包在插件目录 `plugin/skills/` 下面。

Check visible skills / 检查可见技能：

```bash
openclaw --profile <profile> skills list
openclaw --profile <profile> skills info openclaw-maia
```

## Step 4 — Recommended config / 第四步：推荐配置

To avoid auto-load warnings for non-bundled plugins, explicitly allow MAIA in your config.  
为了避免非内置插件的 auto-load warning，建议在配置中显式允许 MAIA。

Example snippet / 示例配置片段：

```json
{
  "plugins": {
    "allow": ["maia"],
    "entries": {
      "maia": {
        "enabled": true
      }
    }
  }
}
```

## Step 5 — Behavior test / 第五步：行为验证

Open a fresh direct-message session and ask questions like:  
打开一个新的私聊会话，并提问例如：

- "Where will my long-term memory be stored?"  
  “我的长期记忆会存在哪里？”
- "Will my memory be mixed with another user's?"  
  “我的记忆会和另一个用户混在一起吗？”

Expected behavior / 期望行为：
- the agent refers to `people/<user-id>/...` style paths  
  agent 会指向 `people/<user-id>/...` 这类路径
- the agent says different users are isolated  
  agent 会明确不同用户彼此隔离
- if needed, use `/new` or `/reset` before testing structural changes  
  如遇结构变更，请先 `/new` 或 `/reset` 再测试
