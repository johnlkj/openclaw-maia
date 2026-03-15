// MAIA session helpers / MAIA 会话辅助

/**
 * Parse a likely direct-message user id from OpenClaw session keys like:
 * agent:bonny:telegram:bonny:direct:5063338251
 *
 * 从类似上面的 session key 中提取直聊用户 id。
 */
export function parseDirectUserIdFromSessionKey(sessionKey) {
  if (!sessionKey || typeof sessionKey !== "string") return null;
  const parts = sessionKey.split(":");
  if (parts.length < 2) return null;
  const maybePeer = parts[parts.length - 1];
  const maybeKind = parts[parts.length - 2];
  if (maybeKind !== "direct") return null;
  return maybePeer || null;
}

export function isLikelyDirectSession(sessionKey) {
  return parseDirectUserIdFromSessionKey(sessionKey) !== null;
}
