# Installation / 安装

## Current MVP installation path / 当前 MVP 安装路径

MAIA currently ships as a repository containing:  
当前 MAIA 以一个仓库形式提供，包含：

- a plugin under `plugin/`  
  位于 `plugin/` 的插件
- a companion skill under `skill/openclaw-maia/`  
  位于 `skill/openclaw-maia/` 的配套 skill

## 1. Install the plugin / 安装插件

Link the local plugin directory into your OpenClaw instance:  
把本地插件目录链接到你的 OpenClaw 实例：

```bash
openclaw --profile <profile> plugins install --link /path/to/openclaw-maia/plugin
```

Then verify plugin health:  
然后检查插件状态：

```bash
openclaw --profile <profile> plugins list
openclaw --profile <profile> plugins doctor
```

Expected result / 期望结果：
- `maia` appears as `loaded`  
  `maia` 显示为 `loaded`
- no plugin issues are reported  
  不出现插件错误

## 2. Install or package the skill / 安装或打包 skill

The skill source lives at:  
skill 源文件位于：

```text
skill/openclaw-maia/
```

Use the OpenClaw skill packaging flow when you are ready to distribute it more formally.  
当你准备更正式地分发 skill 时，使用 OpenClaw 的 skill 打包流程。

## 3. Validate behavior / 验证行为

Open a fresh direct-message session and check whether the agent:  
打开一个新的私聊会话，检查 agent 是否：

- explains personal memory paths under `people/<user-id>/...`  
  能正确说明 `people/<user-id>/...` 下的个人记忆路径
- avoids mixing different users' personal memory  
  不会混写不同用户的个人记忆
- behaves correctly after `/new` or `/reset`  
  在 `/new` 或 `/reset` 后按新结构正确工作

## Notes / 说明

- MAIA is currently a regular plugin with hooks, not a custom context engine.  
  MAIA 当前是普通插件 + hooks，不是自定义 context engine。
- If you recently changed the memory structure, prefer testing in a fresh session.  
  如果你刚改过记忆结构，优先在新会话中测试。
