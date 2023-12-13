import { useEffect, useMemo, useState } from 'react'
import { useToast } from '@chakra-ui/react'

// Utils
import { formatLongDateTime, sorting, formatDataByStatus } from '@/utils'

// Constants
import { API, TAG_LIST } from '@/constants'

// Types
import { ProjectParent, ProjectStatus, ProjectSub } from '@/types'

// Services
import { apiRequest } from '@/services'

// Components
import {
  ProjectBody,
  ProjectDeleteModal,
  ProjectEditModal,
  ProjectHeader,
} from '@/components/Projects'

const projectDataFormInitial: ProjectParent = {
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

const Dashboard = () => {
  const [projectDataForm, setProjectDataForm] = useState(projectDataFormInitial)

  const [projects, setProjects] = useState<Record<string, ProjectSub[]>>()
  const [tabView, setTabView] = useState(0)

  const [isEdit, setIsEdit] = useState(false)
  const [idEdit, setIdEdit] = useState('')

  const [isOpenProductModal, setIsOpenProductModal] = useState(false)
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)

  const [isLoadingProjects, setIsLoadingProjects] = useState(false)

  const toast = useToast()

  // Show and hide modal
  const handleToggleProductModal = () => {
    setIsOpenProductModal((prevIsOpenProductModal) => !prevIsOpenProductModal)
  }

  const handleToggleDeleteModal = () => {
    setIsOpenDeleteModal((prevIsOpenDeleteModal) => !prevIsOpenDeleteModal)
  }

  const handleOnSort = (
    sortBy: string = 'name',
    orderBy: string = 'ascending',
  ) => {
    const tempDataAfterSorted: Record<string, ProjectSub[]> = {}

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

  const getData = async () => {
    setIsLoadingProjects(true)
    const response = await apiRequest<null, ProjectSub[]>(
      `${API.BASE_URL}${API.PROJECT_COLLECTION}`,
      'GET',
    )

    if (typeof response == 'string') {
      toast({
        title: 'Fail',
        description: 'You do not get data the project',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    } else {
      setProjects(formatDataByStatus(response))
    }

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

  const handleSubmitForm = async (data: ProjectParent) => {
    const updatedTime = new Date()
    const newData = { ...data, updatedAt: formatLongDateTime(updatedTime) }

    const url = isEdit
      ? `${API.BASE_URL}${API.PROJECT_COLLECTION}/${data?.id}`
      : `${API.BASE_URL}${API.PROJECT_COLLECTION}`
    const response = await apiRequest(url, isEdit ? 'PUT' : 'POST', newData)
    if (typeof response == 'string') {
      toast({
        title: 'API Error!',
        description: response,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    } else {
      handleResetForm()
      toast({
        title: 'Account created!',
        description: 'You have successfully created the project',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  const deleteProject = async () => {
    await apiRequest(
      `${API.BASE_URL}${API.PROJECT_COLLECTION}/${idEdit}`,
      'DELETE',
    )

    handleToggleDeleteModal()
    getData()
    toast({
      title: 'Project deleted.',
      description: 'You have successfully deleted the project',
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
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

  // Handle edit project
  const handleEditProject = (project: ProjectParent) => {
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

  // Handle delete project
  const handleDeleteProject = (project: ProjectParent) => {
    const { id } = project
    setIdEdit(id)
    handleToggleDeleteModal()
  }

  // Handle search by project name
  const handleSearch = (keySearch: string) => {
    const tempProjects: Record<string, ProjectSub[]> = {}

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
      <ProjectHeader
        handleSearch={handleSearch}
        options={SORT_OPTIONS}
        handleToggleProductModal={handleToggleProductModal}
      />

      {projectsDisplay?.length && (
        <ProjectBody
          setTabView={setTabView}
          tabs={tabs}
          isLoadingProjects={isLoadingProjects}
          projectsDisplay={projectsDisplay}
          handleEditProject={handleEditProject}
          handleDeleteProject={handleDeleteProject}
        />
      )}

      <ProjectEditModal
        isOpenProductModal={isOpenProductModal}
        isEdit={isEdit}
        handleToggleProductModal={handleToggleProductModal}
        handleSubmitForm={handleSubmitForm}
        setProjectDataForm={setProjectDataForm}
        projectDataForm={projectDataForm}
      />

      <ProjectDeleteModal
        isOpenDeleteModal={isOpenDeleteModal}
        handleToggleDeleteModal={handleToggleDeleteModal}
        deleteProject={deleteProject}
      />
    </>
  )
}

export default Dashboard
