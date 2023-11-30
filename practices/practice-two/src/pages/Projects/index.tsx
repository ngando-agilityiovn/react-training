import { useEffect, useMemo, useState } from 'react'
import { AddIcon } from '@chakra-ui/icons'
import { Button, Flex, useDisclosure } from '@chakra-ui/react'

// Components
import {
  Form,
  MenuSelect,
  ModalCustom,
  Search,
  ProjectManagementPanel,
  TableProject,
  ProjectRow,
} from '@/components'
import { DropdownIcon, FilterIcon } from '@/components/Icons'

// Constants
import { API, sortOptions, tableHeader } from '@/constants'

// Types
import { Project, ProjectStatus } from '@/types'

const ProjectsPages = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [projects, setProjects] = useState<Project[]>([])
  const [tabView, setTabView] = useState(0)

  const getData = async () => {
    const response = await fetch(`${API.BASE_URL}${API.PROJECT_COLLECTION}`)

    setProjects(await response.json())
  }

  useEffect(() => {
    getData()
  }, [])

  const addProject = async (data: object) => {
    const updatedTime = new Date()
    const newData = { ...data, updatedAt: updatedTime }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newData),
    }
    await fetch(`${API.BASE_URL}${API.PROJECT_COLLECTION}`, requestOptions)

    onClose()

    getData()
  }

  const riskProjects = useMemo(
    () => projects.filter(({ status }) => status === ProjectStatus.AT_RISK),
    [projects],
  )

  const holdProjects = useMemo(
    () => projects.filter(({ status }) => status === ProjectStatus.ON_HOLD),
    [projects],
  )

  const potentialProjects = useMemo(
    () =>
      projects.filter(({ status }) => status === ProjectStatus.POTENTIAL_RISK),
    [projects],
  )

  const trackProjects = useMemo(
    () => projects.filter(({ status }) => status === ProjectStatus.ON_TRACK),
    [projects],
  )

  const tabs = useMemo(
    () => [
      {
        text: 'All',
        total:
          riskProjects.length +
          holdProjects.length +
          potentialProjects.length +
          trackProjects.length,
      },
      {
        text: 'Risk',
        total: riskProjects.length,
      },
      {
        text: 'On hold',
        total: holdProjects.length,
      },
      {
        text: 'Potential risk',
        total: potentialProjects.length,
      },
      {
        text: 'On track',
        total: trackProjects.length,
      },
    ],
    [
      holdProjects.length,
      potentialProjects.length,
      riskProjects.length,
      trackProjects.length,
    ],
  )

  const projectsDisplay = useMemo(() => {
    const projectsMapping = {
      0: projects,
      1: riskProjects,
      2: holdProjects,
      3: potentialProjects,
      4: trackProjects,
    }

    return projectsMapping[tabView as keyof typeof projectsMapping]
  }, [
    holdProjects,
    potentialProjects,
    projects,
    riskProjects,
    tabView,
    trackProjects,
  ])

  return (
    <>
      <Flex mt="5" mb="7" mx="5" justifyContent="space-between">
        <Flex w="370px" border="2px solid #e2e8f0" borderRadius="1.5">
          <MenuSelect
            leftIcon={<FilterIcon />}
            rightIcon={<DropdownIcon />}
            title="All"
            options={sortOptions}
          />
          <Search width="280px" />
        </Flex>

        <Button leftIcon={<AddIcon />} variant="solid" onClick={onOpen}>
          Add project
        </Button>
      </Flex>

      <ProjectManagementPanel onChangeTab={setTabView} tabs={tabs} />

      <TableProject<Project>
        tableHeader={tableHeader}
        dataTable={projectsDisplay}
        renderBody={(dataTable) => <ProjectRow {...dataTable} />}
      />

      <ModalCustom title="Add project" onClose={onClose} isOpen={isOpen}>
        <Form onClose={onClose} addProject={addProject} />
      </ModalCustom>
    </>
  )
}

export default ProjectsPages
