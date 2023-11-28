import { Box, Tab, TabList, Tabs, Text } from '@chakra-ui/react'
import { TagGroup } from '../ResourceGroup'

interface ITagGroupProps {
  title: string
  tagsList: TagGroup[]
}

const ProjectTagManager = ({ title, tagsList }: ITagGroupProps) => {
  return (
    <Box mb="2rem">
      <Text
        fontSize="sm"
        letterSpacing="wider"
        fontWeight="medium"
        lineHeight="shorter"
        color="secondary"
      >
        {title}
      </Text>
      <Tabs mt="0.5rem" bg="backgroundInactive" borderRadius="0.375rem">
        <TabList>
          {tagsList.map(({ id, text }) => (
            <Tab
              m="0.125rem"
              key={id}
              _selected={{
                color: 'primary',
                bg: 'white',
                boxShadow: 'secondary',
                borderRadius: '0.375rem',
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
