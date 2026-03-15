# MAIA Plugin Contract / MAIA 插件契约

This document defines the minimum viable behavior for the MAIA plugin.  
这个文档定义 MAIA 插件的最小可用行为。

## Goal / 目标

Provide deterministic per-user path resolution and first-contact bootstrap inside one OpenClaw workspace.  
在一个 OpenClaw workspace 内，提供确定性的按用户路径解析与首次接触自动建档。

## Scope of the first MVP / 第一版 MVP 范围

### In scope / 纳入范围
- direct 1:1 chat user identification / 私聊用户身份识别
- per-user directory resolution / 用户目录解析
- first-contact file bootstrap / 首次接触文件建档
- helper path exposure for the runtime / 向运行时暴露辅助路径
- minimal templates / 最小模板集

### Out of scope / 暂不纳入
- cross-account identity linking / 跨账号身份关联
- group-chat personal memory resolution / 群聊个人记忆解析
- automatic migration of old shared memory / 旧共享记忆的全自动迁移
- UI/dashboard configuration screens / UI 或控制台配置页面

## Inputs / 输入

The plugin should rely on trusted runtime metadata when available.  
插件应优先依赖可信运行时元数据。

Preferred signals / 首选信号：
- `requesterSenderId` / 当前请求方的可信 sender id
- `messageChannel` / 当前消息 channel
- `agentAccountId` / 当前 account id
- `workspaceDir` / 当前 workspace
- `sessionId` and `sessionKey` / 当前 session 信息

## Derived outputs / 派生输出

For a given user id, MAIA resolves:  
对于给定用户 id，MAIA 应解析出：

- `peopleRoot` → `people/`
- `userRoot` → `people/<user-id>/`
- `profilePath` → `people/<user-id>/PROFILE.md`
- `memoryPath` → `people/<user-id>/MEMORY.md`
- `dailyDir` → `people/<user-id>/memory/`
- `todayDailyPath` → `people/<user-id>/memory/YYYY-MM-DD.md`

## Bootstrap behavior / 建档行为

When `people/<user-id>/` does not exist and `autoBootstrap=true`:  
当 `people/<user-id>/` 不存在且 `autoBootstrap=true` 时：

1. create the user directory / 创建用户目录
2. create `PROFILE.md` / 创建 `PROFILE.md`
3. create `MEMORY.md` / 创建 `MEMORY.md`
4. create `memory/YYYY-MM-DD.md` / 创建当天日记文件
5. write only minimal factual defaults / 仅写入最少事实性默认内容

Minimal default content should include only:  
最小默认内容只应包括：
- trusted user id / 可信用户 id
- display name or handle if available / 可用的显示名或 handle
- a note that preferences are not yet established / 标记偏好尚未建立

## Runtime behavior options / 运行时行为选项

### Option A — Prompt-context helper only / 仅作为 prompt 上下文辅助
The plugin injects path guidance into prompt construction and lets the agent do the reads/writes.  
插件只把路径与规则注入 prompt，由 agent 自行读写文件。

### Option B — Tool/helper registration / 注册工具或辅助能力
The plugin registers a helper/tool to return canonical MAIA paths to the agent.  
插件注册工具或辅助能力，向 agent 返回规范的 MAIA 路径。

### Recommended MVP / 推荐 MVP
Start with **`before_prompt_build` as the primary hook**.  
推荐先以 **`before_prompt_build` 作为主 hook**。

Why / 原因：
- it provides `workspaceDir` / 它能拿到 `workspaceDir`
- it provides `sessionKey` / 它能拿到 `sessionKey`
- the plugin can derive a likely direct user id from direct-session keys / 插件可以从直聊 session key 推导用户 id
- the plugin can bootstrap files and inject MAIA guidance in one place / 插件可以在一个位置完成建档与规则注入

This is a pragmatic first step before adding more specialized hooks or a custom context engine.  
在增加更专业的 hook 或自定义 context engine 之前，这是一个务实的第一步。

## Hook strategy / Hook 策略

Recommended early hooks:  
推荐优先使用的 hook：

- `before_prompt_build`  
  Resolve direct user id, bootstrap `people/<user-id>/...`, and append MAIA system guidance.
  解析直聊用户 id、自动创建 `people/<user-id>/...`，并注入 MAIA 系统规则。

Potential later hooks:  
后续可考虑的 hook：
- `message_received` for richer metadata capture / 用于获取更丰富的消息元数据
- `before_message_write` for transcript shaping or annotation / 用于整理写入内容或增加注释
- custom context engine registration / 自定义 context engine 注册

## Template contract / 模板契约

The plugin should own template generation for:  
插件应负责以下模板生成：
- `PROFILE.md`
- `MEMORY.md`
- `memory/YYYY-MM-DD.md`

The skill should own the behavioral meaning of those files.  
而这些文件的行为意义由 skill 负责定义。

## Failure behavior / 失败行为

If the plugin cannot resolve a trusted user id:  
如果插件无法解析可信用户 id：

- do not guess from untrusted message text  
  不要从不可信消息文本里猜
- do not create a personal folder  
  不要创建个人目录
- fall back to global agent behavior  
  回退到全局 agent 行为
- log a warning for diagnostics  
  记录 warning 便于诊断

## Success criteria for MVP / MVP 成功标准

- A new direct-message user automatically gets `people/<user-id>/...`
- Existing users reuse the same paths reliably
- The agent can clearly describe where profile and memory live
- One user's personal files are not mixed into another user's folder
