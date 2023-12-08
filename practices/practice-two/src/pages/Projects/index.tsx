import { useEffect, useMemo, useState } from 'react'
import { AddIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Spinner, Text } from '@chakra-ui/react'

// Utils
import { formatDataByStatus, formatLongDateTime, sorting } from '@/utils'

// Constants
import { API, TABLE_HEADER, TAG_LIST } from '@/constants'

// Types
import { Project, ProjectStatus } from '@/types'

// Icon components
import { DropdownIcon } from '@/components/Icons'

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

  const [projects, setProjects] = useState<Record<string, Project[]>>()
  const [tabView, setTabView] = useState(0)
  const [isEdit, setIsEdit] = useState(false)
  const [idEdit, setIdEdit] = useState('')

  const [isOpenProductModal, setIsOpenProductModal] = useState(false)
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)

  const [isLoadingProjects, setIsLoadingProjects] = useState(false)

  const handleOnSort = (
    sortBy: string = 'name',
    orderBy: string = 'ascending',
  ) => {
    const tempDataAfterSorted: Record<string, Project[]> = {}

    const isDateValue = sortBy === 'updatedAt'

    Object.values(ProjectStatus).forEach((status) => {
      const tempData = sorting(projects![status], sortBy, orderBy, isDateValue)

      tempDataAfterSorted[status] = tempData
    })
    tempDataAfterSorted.all = sorting(
      projects!.all,
      sortBy,
      orderBy,
      isDateValue,
    )

    setProjects(tempDataAfterSorted)
  }

  const handleToggleProductModal = () => {
    setIsOpenProductModal(!isOpenProductModal)
  }

  const handleToggleDeleteModal = () => {
    setIsOpenDeleteModal(!isOpenDeleteModal)
  }

  const getData = async () => {
    setIsLoadingProjects(true)
    const response = await fetch(`${API.BASE_URL}${API.PROJECT_COLLECTION}`)
    const data = (await response.json()) as Project[]

    setProjects(formatDataByStatus(data))

    // NOTE: Just for testing purposes
    setTimeout(() => {
      setIsLoadingProjects(false)
    }, 1000)
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

  const tabs = useMemo(
    () => [
      {
        text: 'All',
        total: projects?.all.length,
      },
      {
        text: 'Risk',
        total: projects?.[ProjectStatus.AT_RISK].length,
      },
      {
        text: 'On hold',
        total: projects?.[ProjectStatus.ON_HOLD].length,
      },
      {
        text: 'Potential risk',
        total: projects?.[ProjectStatus.POTENTIAL_RISK].length,
      },

      {
        text: 'On track',
        total: projects?.[ProjectStatus.ON_TRACK].length,
      },
    ],
    [projects],
  )

  const projectsDisplay = useMemo(() => {
    const projectsMapping = {
      0: projects?.all,
      1: projects?.[ProjectStatus.AT_RISK],
      2: projects?.[ProjectStatus.ON_HOLD],
      3: projects?.[ProjectStatus.POTENTIAL_RISK],
      4: projects?.[ProjectStatus.ON_TRACK],
    }

    return projectsMapping[tabView as keyof typeof projectsMapping]
  }, [projects, tabView])

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

  const handleSearch = (keySearch: string) => {
    const tempProjects: Record<string, Project[]> = {}

    if (!keySearch) {
      getData()
    }

    if (projects) {
      Object.values(ProjectStatus).forEach((value) => {
        const searchByStatus = projects[value].filter((item) =>
          item.name.includes(keySearch),
        )

        tempProjects[value] = searchByStatus
      })

      const searchAll = projects.all.filter((item) =>
        item.name.includes(keySearch),
      )

      tempProjects.all = searchAll

      setProjects(tempProjects)
    }
  }

  const SORT_OPTIONS = [
    {
      value: 'name-asc',
      text: 'Project name (Asc)',
      handleClick: () => handleOnSort(),
    },
    {
      value: 'name-desc',
      text: 'Project name (Desc)',
      handleClick: () => handleOnSort('name', 'descending'),
    },
    {
      value: 'updatedAt-asc',
      text: 'Recently updated',
      handleClick: () => handleOnSort('updatedAt', 'descending'),
    },
    {
      value: 'updatedAt-desc',
      text: 'Least recently updated',
      handleClick: () => handleOnSort('updatedAt', 'ascending'),
    },
  ]

  return (
    <>
      <Flex mt="5" mb="7" mx="5" justifyContent="space-between">
        <Flex w="370px" border="2px solid #e2e8f0" borderRadius="1.5">
          <MenuSelect
            rightIcon={<DropdownIcon />}
            title="Sort by"
            options={SORT_OPTIONS}
          />
          <Search width="280px" onChange={handleSearch} />
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
      )}

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
            Are you sure you want to delete this project? If you delete, it will
            be permanently lost.
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
