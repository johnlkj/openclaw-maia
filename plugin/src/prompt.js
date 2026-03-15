// MAIA prompt guidance / MAIA prompt 注入

export function buildMaiaPromptContext({ userId, peopleDir = "people" }) {
  return [
    "[MAIA] Multi-Agent Multi-Account Isolation Architecture is active.",
    "[MAIA] Treat root USER.md and root MEMORY.md as global agent files, not shared personal memory.",
    `[MAIA] Current direct user id: ${userId}`,
    `[MAIA] Canonical personal files live under ${peopleDir}/${userId}/`,
    `[MAIA] Read order for this direct chat: ${peopleDir}/${userId}/PROFILE.md -> ${peopleDir}/${userId}/MEMORY.md -> ${peopleDir}/${userId}/memory/today and yesterday.`,
    `[MAIA] Write stable preferences to ${peopleDir}/${userId}/PROFILE.md.`,
    `[MAIA] Write durable personal memory to ${peopleDir}/${userId}/MEMORY.md.`,
    `[MAIA] Write day notes to ${peopleDir}/${userId}/memory/YYYY-MM-DD.md.`,
    "[MAIA] Never mix this user's personal data into another user's files.",
    "[MAIA] If this is a first contact, stay neutral-warm and only write confirmed facts.",
  ].join("\n");
}
