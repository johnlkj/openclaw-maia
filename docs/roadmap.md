# Roadmap / 路线图

## Phase 1 — Skeleton and contract / 第一阶段：骨架与契约

- [x] Pick project name: `openclaw-maia`
- [x] Pick English short name: `MAIA`
- [x] Define plugin + skill split
- [x] Create bilingual repo skeleton
- [x] Define plugin API/behavior contract in more detail
- [ ] Define installation path for end users

## Phase 2 — Minimal plugin / 第二阶段：最小插件

Current implementation note / 当前实现说明：MAIA is intentionally a regular plugin + hook in this phase, not a custom context engine. / 本阶段 MAIA 有意保持为普通插件 + hook，而不是自定义 context engine。

- [x] Add `openclaw.plugin.json`
- [x] Define config schema
- [x] Build first-contact bootstrap behavior (scaffold)
- [x] Resolve `people/<user-id>/...` paths from runtime metadata (path helper scaffold)
- [x] Wire `before_prompt_build` into a real plugin runtime (MVP)
- [ ] Validate against a real OpenClaw install

## Phase 3 — Companion skill / 第三阶段：配套 skill

- [ ] Write `SKILL.md`
- [ ] Add references/templates if needed
- [ ] Test on a fresh agent workspace
- [ ] Package the skill for distribution

## Phase 4 — Distribution / 第四阶段：发布

- [ ] Add install instructions
- [ ] Add example screenshots or example tree
- [ ] Add migration notes for existing workspaces
- [ ] Publish to GitHub
- [ ] Prepare for community feedback / 根据社区反馈迭代
