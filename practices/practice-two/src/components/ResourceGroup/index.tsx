// Components
import { Box, Flex, Tag, Text } from '@chakra-ui/react'

export interface TagGroup {
  id: string
  text: string
}

interface IResourceProps {
  title: string
  variant: string
  tagGroup: TagGroup[]
  onChange: (value: string, name: string) => void
}

const ResourceGroup = ({
  title,
  variant,
  tagGroup,
  onChange,
}: IResourceProps) => {
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
      <Flex gap="2.5" mt="2" flexWrap="wrap">
        {tagGroup.map(({ id, text }) => (
          <Tag
            key={id}
            variant={variant}
            onClick={() => onChange(text, 'resource')}
          >
            {text}
          </Tag>
        ))}
      </Flex>
    </Box>
  )
}

export default ResourceGroup
