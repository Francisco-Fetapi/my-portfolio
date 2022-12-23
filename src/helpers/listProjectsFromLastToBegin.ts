import { IProject } from "../database/useProjects";

export function listProjectsFromLastToBegin(projects: IProject[]) {
  return projects.sort((a, b) => {
    if (a.createdAt < b.createdAt) return 1;
    if (a.createdAt > b.createdAt) return -1;
    return 0;
  });
}
