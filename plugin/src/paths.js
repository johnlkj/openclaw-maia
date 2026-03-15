// MAIA path helpers / MAIA 路径辅助

import path from "node:path";

export function resolveMaiaPaths({ workspaceDir, peopleDir = "people", userId, date }) {
  if (!workspaceDir) throw new Error("workspaceDir is required");
  if (!userId) throw new Error("userId is required");
  if (!date) throw new Error("date is required");

  const peopleRoot = path.join(workspaceDir, peopleDir);
  const userRoot = path.join(peopleRoot, String(userId));
  const dailyDir = path.join(userRoot, "memory");

  return {
    peopleRoot,
    userRoot,
    profilePath: path.join(userRoot, "PROFILE.md"),
    memoryPath: path.join(userRoot, "MEMORY.md"),
    dailyDir,
    todayDailyPath: path.join(dailyDir, `${date}.md`),
  };
}
