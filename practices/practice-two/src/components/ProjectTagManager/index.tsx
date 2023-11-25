import { Box, Tab, TabList, Tabs, Text } from '@chakra-ui/react'
import { TagGroup } from '..'

interface ITagGroupProps {
  title: string
  tagsList: TagGroup[]
}

export const ProjectTagManager = ({ title, tagsList }: ITagGroupProps) => {
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
      <Tabs mt="0.5rem" bg="backgroundInactive">
        <TabList border="0px">
          {tagsList.map(({ id, text }) => (
            <Tab
              border="0px"
              m="0.125rem"
              key={id}
              _selected={{
                color: 'primary',
                bg: 'white',
                boxShadow: 'secondary',
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
