import { Box, Flex, Tag, Text, useCheckboxGroup } from '@chakra-ui/react'

// Types
import { TagGroup } from '@/types'

interface IResourceProps {
  title: string
  initialValues: Array<string | number>
  handleTagsChange: (text: string[]) => void
  tagGroup: TagGroup[]
}

const ResourceGroup = ({
  title,
  initialValues,
  handleTagsChange: handleTagChange,
  tagGroup,
}: IResourceProps) => {
  const { value: selectedValues, onChange } = useCheckboxGroup({
    defaultValue: initialValues,
    onChange: handleTagChange,
  })

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
        {tagGroup.map(({ id, text }) => {
          const isSelected = selectedValues.includes(text)
          return (
            <Tag
              key={id}
              id={id}
              variant={isSelected ? 'success' : 'outline'}
              onClick={() => onChange(text)}
            >
              {text}
            </Tag>
          )
        })}
      </Flex>
    </Box>
  )
}

export default ResourceGroup
