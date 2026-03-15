# MVP Flow / MVP 流程

## First contact flow / 首次接触流程

1. Incoming direct message arrives  
   收到一条私聊消息
2. Resolve trusted user id from runtime metadata  
   从运行时可信元数据中解析用户 id
3. Resolve MAIA user paths under `people/<user-id>/`  
   在 `people/<user-id>/` 下解析 MAIA 用户路径
4. If files are missing and auto-bootstrap is on, create them  
   如果文件缺失且开启自动建档，则创建
5. Inject MAIA guidance into prompt build  
   在 prompt 构建阶段注入 MAIA 规则
6. Agent reads user files and replies  
   agent 读取用户文件并回复

## Existing user flow / 现有用户流程

1. Incoming direct message arrives  
   收到一条私聊消息
2. Resolve trusted user id  
   解析可信用户 id
3. Reuse existing per-user paths  
   复用已存在的用户路径
4. Agent reads existing profile and memory  
   agent 读取已有档案与记忆
5. Agent writes updates to the same user folder  
   agent 把更新写回同一用户目录

## Structural update flow / 结构变更流程

1. Workspace structure changes  
   workspace 结构发生变化
2. Existing live sessions may still carry old assumptions  
   旧会话可能仍保留旧假设
3. Start a fresh session with `/new` or `/reset`  
   用 `/new` 或 `/reset` 开启新会话
4. Evaluate the new MAIA behavior in the fresh session  
   在新会话里验证 MAIA 新行为
