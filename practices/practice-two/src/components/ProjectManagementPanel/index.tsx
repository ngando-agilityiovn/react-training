import { Badge, Tab, TabList, Tabs, Text } from '@chakra-ui/react'

interface IProjectManagementPanelProps {
  tabs: {
    text: string
    total: number
  }[]
  onChangeTab: (tabIndex: number) => void
}

const ProjectManagementPanel = ({
  onChangeTab,
  tabs,
}: IProjectManagementPanelProps) => {
  return (
    <Tabs onChange={(tabIndex) => onChangeTab(tabIndex)}>
      <TabList>
        {tabs.map(({ text, total }) => (
          <Tab
            value={text}
            key={text}
            _selected={{ color: 'primary', borderBottomColor: 'primary' }}
          >
            <Text
              _selected={{ color: 'primary', fontWeight: 'bold' }}
              fontWeight="medium"
              mr="1.5"
              lineHeight="5"
              letterSpacing="wider"
            >
              {text}
            </Text>
            <Badge variant="primary" boxSize="30px" color="_selected">
              {total}
            </Badge>
          </Tab>
        ))}
      </TabList>
    </Tabs>
  )
}

export default ProjectManagementPanel
