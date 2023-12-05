import { useEffect, useMemo, useState } from 'react'
import { AddIcon } from '@chakra-ui/icons'
import { Button, Flex, Text } from '@chakra-ui/react'
import { formatLongDateTime } from '@/utils'

// Constants
import { API, TABLE_HEADER, TAG_LIST } from '@/constants'

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

const projectDataFormInitial: Omit<
  Project,
  'index' | 'onEditItem' | 'onDeleteItem'
> = {
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

  // const { isOpen, onClose } = useDisclosure()

  const [projects, setProjects] = useState<Project[]>([])
  const [tabView, setTabView] = useState(0)
  const [isEdit, setIsEdit] = useState(false)
  const [idEdit, setIdEdit] = useState('')

  const [isOpenProductModal, setIsOpenProductModal] = useState(false)
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)

  const handleToggleProductModal = () => {
    setIsOpenProductModal(!isOpenProductModal)
  }

  const handleToggleDeleteModal = () => {
    setIsOpenDeleteModal(!isOpenDeleteModal)
  }

  const getData = async () => {
    const response = await fetch(`${API.BASE_URL}${API.PROJECT_COLLECTION}`)
    const data = await response.json()

    setProjects(data)
  }

  useEffect(() => {
    getData()
  }, [])

  const handleResetForm = () => {
    handleToggleProductModal()
    setProjectDataForm(projectDataFormInitial)
    getData()
    setIsEdit(false)
  }

  const handleSubmitForm = async (
    data: Omit<Project, 'index' | 'onEditItem' | 'onDeleteItem'>,
  ) => {
    const updatedTime = new Date()
    const newData = { ...data, updatedAt: formatLongDateTime(updatedTime) }

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

  const deleteProject = async () => {
    await fetch(`${API.BASE_URL}${API.PROJECT_COLLECTION}/${idEdit}`, {
      method: 'DELETE',
    })

    handleToggleDeleteModal()
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

  const handleEditProject = (
    project: Omit<Project, 'index' | 'onEditItem' | 'onDeleteItem'>,
  ) => {
    handleToggleProductModal()
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
  }

  const handleDeleteProject = (
    project: Omit<Project, 'index' | 'onEditItem' | 'onDeleteItem'>,
  ) => {
    const { id } = project
    setIdEdit(id)
    handleToggleDeleteModal()
  }

  const SORT_OPTIONS = [
    {
      value: 'name',
      text: 'Project name',
      handleClick: () => console.log('Project click'), //NOTE: update later
    },
    {
      value: 'updatedAt',
      text: 'Last update',
      handleClick: () => console.log('Last update click'), // NOTE: update later
    },
  ]

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

        <Button
          leftIcon={<AddIcon />}
          variant="solid"
          onClick={handleToggleProductModal}
        >
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
            onDeleteItem={handleDeleteProject}
          />
        )}
      />

      {isOpenProductModal && (
        <ModalCustom
          title={isEdit ? 'Edit project' : 'Add project'}
          onClose={handleToggleProductModal}
          isOpen={isOpenProductModal}
        >
          <Form
            isEdit={isEdit}
            onClose={handleToggleProductModal}
            onSubmitForm={handleSubmitForm}
            projectDataForm={projectDataForm}
            setProjectDataForm={setProjectDataForm}
          />
        </ModalCustom>
      )}

      {isOpenDeleteModal && (
        <ModalCustom
          title="Delete project"
          isOpen={isOpenDeleteModal}
          onClose={handleToggleDeleteModal}
        >
          <Text px="6">
            Are you sure you want to delete MicroRaptor website? If you delete,
            it will be permanently lost.
          </Text>
          <Flex px="6" justifyContent="flex-end" gap="5" mt="8">
            <Button variant="outline" onClick={handleToggleDeleteModal}>
              Cancel
            </Button>
            <Button variant="error" onClick={deleteProject}>
              Delete
            </Button>
          </Flex>
        </ModalCustom>
      )}
    </>
  )
}

export default ProjectsPages
