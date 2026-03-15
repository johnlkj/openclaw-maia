// MAIA bootstrap scaffold / MAIA 建档骨架

import fs from "node:fs/promises";
import { profileTemplate, memoryTemplate, dailyTemplate } from "./templates/index.js";

export async function bootstrapUserFiles({ paths, userId, displayName, handle, date }) {
  await fs.mkdir(paths.dailyDir, { recursive: true });

  await writeIfMissing(paths.profilePath, profileTemplate({ userId, displayName, handle }));
  await writeIfMissing(paths.memoryPath, memoryTemplate({ userId, displayName, handle }));
  await writeIfMissing(paths.todayDailyPath, dailyTemplate({ userId, displayName, handle, date }));
}

async function writeIfMissing(filePath, content) {
  try {
    await fs.access(filePath);
  } catch {
    await fs.writeFile(filePath, content, "utf8");
  }
}
