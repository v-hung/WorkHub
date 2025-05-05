import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
} from "react";
import { useProjects } from "../hooks/useProjects";
import { useProjectAction } from "../hooks/useProjectAction";
import { ProjectDtoPaginated, ProjectSearchRequest } from "@/generate-api";

type ProjectsContextType = {
  projectPaginated: ProjectDtoPaginated;
  setRequest: Dispatch<SetStateAction<ProjectSearchRequest>>;
  loading: boolean;
  deleteRecord: (id: number) => Promise<void>;
};

const ProjectsContext = createContext<ProjectsContextType | null>(null);

export const ProjectProvider: FC<PropsWithChildren> = ({ children }) => {
  const { projectPaginated, setRequest, loading } = useProjects();
  const { deleteRecord } = useProjectAction();

  return (
    <ProjectsContext.Provider
      value={{ projectPaginated, setRequest, loading, deleteRecord }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjectsContext = () => {
  const currentContext = useContext(ProjectsContext);

  if (!currentContext) {
    throw new Error("currentContext has to be used");
  }

  return currentContext;
};
