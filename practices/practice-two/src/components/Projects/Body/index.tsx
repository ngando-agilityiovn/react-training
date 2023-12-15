import { Box, Spinner } from '@chakra-ui/react'

// Types
import { ProjectParent, ProjectSub } from '@/types'

// Components
import { ProjectManagementPanel, TableProject } from '@/components'
import TableRow from '@/components/Table/Row'
import { TABLE_HEADER } from '@/constants'

interface IProjectBodyProps {
  setTabView: (tabIndex: number) => void
  tabs: {
    text: string
    total?: number
  }[]
  isLoadingProjects: boolean
  projectsDisplay: ProjectSub[]
  handleEditProject: (project: ProjectParent) => void
  handleDeleteProject: (project: ProjectParent) => void
}

const ProjectBody = ({
  setTabView,
  tabs,
  isLoadingProjects,
  projectsDisplay,
  handleEditProject,
  handleDeleteProject,
}: IProjectBodyProps) => {
  return (
    <>
      <ProjectManagementPanel onChangeTab={setTabView} tabs={tabs} />

      {isLoadingProjects ? (
        <Box py="6" textAlign="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Box>
      ) : (
        <TableProject<ProjectSub>
          tableHeader={TABLE_HEADER}
          dataTable={projectsDisplay}
          renderBody={(dataTable, index) => (
            <TableRow
              {...dataTable}
              index={index}
              onEditItem={handleEditProject}
              onDeleteItem={handleDeleteProject}
            />
          )}
        />
      )}
    </>
  )
}

export default ProjectBody
