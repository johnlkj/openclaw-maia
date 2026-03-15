// MAIA templates / MAIA 模板

export function profileTemplate({ userId, displayName, handle }) {
  return `# PROFILE.md\n\n- **User ID:** ${userId ?? ""}\n- **Name:** ${displayName ?? ""}\n- **Handle:** ${handle ?? ""}\n- **Preferred title:** \n- **Preferred tone:** \n- **Notes:** New user bootstrap. Preferences not established yet. / 新用户建档，偏好尚未建立。\n`;
}

export function memoryTemplate({ userId, displayName, handle }) {
  return `# MEMORY.md\n\n## Identity\n\n- User ID: ${userId ?? ""}\n- Name: ${displayName ?? ""}\n- Handle: ${handle ?? ""}\n\n## Notes\n\n- This file stores long-term memory for this user only. / 此文件仅存放该用户的长期记忆。\n`;
}

export function dailyTemplate({ userId, displayName, handle, date }) {
  return `# ${date}\n\n- New interaction bootstrap. / 新会话建档。\n- User ID: ${userId ?? ""}\n- Name: ${displayName ?? ""}\n- Handle: ${handle ?? ""}\n- Confirmed preferences: \n`;
}
