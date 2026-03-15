// MAIA plugin MVP / MAIA 插件 MVP

import { bootstrapUserFiles } from "./bootstrap.js";
import { buildMaiaPromptContext } from "./prompt.js";
import { resolveMaiaPaths } from "./paths.js";
import { parseDirectUserIdFromSessionKey } from "./session.js";

function todayDateString() {
  return new Date().toISOString().slice(0, 10);
}

function getPluginOptions(api) {
  const cfg = api.pluginConfig ?? {};
  return {
    peopleDir: typeof cfg.peopleDir === "string" && cfg.peopleDir ? cfg.peopleDir : "people",
    autoBootstrap: cfg.autoBootstrap !== false,
  };
}

export default {
  id: "maia",
  name: "MAIA",
  description:
    "Multi-Agent Multi-Account Isolation Architecture / 多 Agent 多账号隔离架构",
  register(api) {
    api.logger.info("[maia] registering plugin");

    api.on("before_prompt_build", async (_event, ctx) => {
      const { peopleDir, autoBootstrap } = getPluginOptions(api);
      const workspaceDir = ctx.workspaceDir;
      const sessionKey = ctx.sessionKey;
      const userId = parseDirectUserIdFromSessionKey(sessionKey);

      if (!workspaceDir || !userId) {
        return {
          appendSystemContext:
            "[MAIA] Active, but no direct user id was resolved for this run. Fall back to global agent behavior. / MAIA 已启用，但本次未解析到直聊用户 id，回退到全局 agent 行为。",
        };
      }

      const date = todayDateString();
      const paths = resolveMaiaPaths({ workspaceDir, peopleDir, userId, date });

      if (autoBootstrap) {
        try {
          await bootstrapUserFiles({
            paths,
            userId,
            displayName: "",
            handle: "",
            date,
          });
        } catch (error) {
          api.logger.warn(`[maia] bootstrap failed for user ${userId}: ${String(error)}`);
        }
      }

      return {
        appendSystemContext: buildMaiaPromptContext({ userId, peopleDir }),
      };
    });
  },
};
