import { useEffect, useMemo, useState } from 'react'
import { AddIcon } from '@chakra-ui/icons'
import { Button, Flex, useDisclosure } from '@chakra-ui/react'
import { formatLongDateTime } from '@/utils'

// Constants
import { API, SORT_OPTIONS, TABLE_HEADER, TAG_LIST } from '@/constants'

// Types
import { Project, ProjectStatus } from '@/types'

// Icon components
import { DropdownIcon, FilterIcon } from '@/components/Icons'

// Components
import {
  Form,
  MenuSelect,
  ModalCustom,
  Search,
  ProjectManagementPanel,
  TableProject,
  TableRow,
} from '@/components'

const projectDataFormInitial: Omit<Project, 'index' | 'onEditItem'> = {
  id: '',
  name: '',
  manager: {
    id: TAG_LIST[0].id,
    img: TAG_LIST[0].img,
  },
  status: ProjectStatus.ON_HOLD,
  updatedAt: 0,
  resource: [],
  start: '',
  end: '',
  estimation: 0,
}

const ProjectsPages = () => {
  const [projectDataForm, setProjectDataForm] = useState(projectDataFormInitial)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const [projects, setProjects] = useState<Project[]>([])
  const [tabView, setTabView] = useState(0)
  const [isEdit, setIsEdit] = useState(false)

  const getData = async () => {
    const response = await fetch(`${API.BASE_URL}${API.PROJECT_COLLECTION}`)
    const data = await response.json()

    setProjects(data)
    console.log('response', data)
  }

  useEffect(() => {
    getData()
  }, [])

  const handleResetForm = () => {
    onClose()
    setProjectDataForm(projectDataFormInitial)
    getData()
    setIsEdit(false)
  }

  const handleSubmitForm = async (
    data: Omit<Project, 'index' | 'onEditItem'>,
  ) => {
    const updatedTime = new Date()
    const newData = { ...data, updatedAt: formatLongDateTime(updatedTime) }
    console.log(data)

    const requestOptions = {
      method: isEdit ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newData),
    }

    const url = isEdit
      ? `${API.BASE_URL}${API.PROJECT_COLLECTION}/${data?.id}`
      : `${API.BASE_URL}${API.PROJECT_COLLECTION}`
    await fetch(url, requestOptions)
    handleResetForm()
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

  const handleEditProject = (
    project: Omit<Project, 'index' | 'onEditItem'>,
  ) => {
    onOpen()
    setIsEdit(true)

    const {
      id,
      name,
      manager,
      status,
      updatedAt,
      resource,
      start,
      end,
      estimation,
    } = project
    console.log('handleEditProject', project)

    setProjectDataForm({
      id,
      name,
      manager,
      status,
      updatedAt,
      resource,
      start,
      end,
      estimation,
    })

    // editProject(projectDataForm)
  }

  return (
    <>
      <Flex mt="5" mb="7" mx="5" justifyContent="space-between">
        <Flex w="370px" border="2px solid #e2e8f0" borderRadius="1.5">
          <MenuSelect
            leftIcon={<FilterIcon />}
            rightIcon={<DropdownIcon />}
            title="All"
            options={SORT_OPTIONS}
          />
          <Search width="280px" />
        </Flex>

        <Button leftIcon={<AddIcon />} variant="solid" onClick={onOpen}>
          Add project
        </Button>
      </Flex>

      <ProjectManagementPanel onChangeTab={setTabView} tabs={tabs} />

      <TableProject<Project>
        tableHeader={TABLE_HEADER}
        dataTable={projectsDisplay}
        renderBody={(dataTable, index) => (
          <TableRow
            {...dataTable}
            index={index}
            onEditItem={handleEditProject}
          />
        )}
      />

      <ModalCustom
        title={isEdit ? 'Edit project' : 'Add project'}
        onClose={onClose}
        isOpen={isOpen}
      >
        <Form
          isEdit={isEdit}
          onClose={onClose}
          onSubmitForm={handleSubmitForm}
          projectDataForm={projectDataForm}
          setProjectDataForm={setProjectDataForm}
        />
      </ModalCustom>
    </>
  )
}

export default ProjectsPages
