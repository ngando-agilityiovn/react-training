import { Box, Tab, TabList, Tabs, Text } from '@chakra-ui/react'

interface TagList {
  id: string
  text: string
  img: string
}

interface ITagGroupProps {
  title: string
  tagsList: TagList[]
  onChange: (value: string, name: string) => void
  selectedTab: number
}

const ProjectTagManager = ({
  title,
  tagsList,
  onChange,
  selectedTab,
}: ITagGroupProps) => {
  const handleChangeManager = (img: string) => {
    onChange(img, 'manager')
  }

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
          {tagsList.map(({ id, text, img }) => {
            console.log(typeof id)
            console.log(typeof selectedTab)
            return (
              <Tab
                m="0.5"
                key={id}
                {...(id === selectedTab && {
                  _selected: {
                    color: 'primary',
                    bg: 'white',
                    boxShadow: 'secondary',
                    borderRadius: '6',
                  },
                })}
                onClick={() => handleChangeManager(img)}
              >
                {text}
              </Tab>
            )
          })}
        </TabList>
      </Tabs>
    </Box>
  )
}

export default ProjectTagManager
