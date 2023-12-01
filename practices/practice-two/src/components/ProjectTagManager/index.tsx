import { Box, Tab, TabList, Tabs, Text } from '@chakra-ui/react'

// Types
import { TagGroup } from '@/types'

interface ITagGroupProps {
  title: string
  tagsList: TagGroup[]
}

const ProjectTagManager = ({ title, tagsList }: ITagGroupProps) => {
  return (
    <Box mb="8">
      <Text
        fontSize="sm"
        letterSpacing="wider"
        fontWeight="medium"
        lineHeight="shorter"
        color="secondary"
      >
        {title}
      </Text>
      <Tabs mt="2" bg="backgroundInactive" borderRadius="6">
        <TabList>
          {tagsList.map(({ id, text }) => (
            <Tab
              m="0.5"
              key={id}
              _selected={{
                color: 'primary',
                bg: 'white',
                boxShadow: 'secondary',
                borderRadius: '6',
              }}
            >
              {text}
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </Box>
  )
}

export default ProjectTagManager
