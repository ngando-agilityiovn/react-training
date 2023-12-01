import { Box, Button, Flex, FormControl } from '@chakra-ui/react'

// Constants
import { TAGSGROUP, TAGSLIST } from '@/constants'

// Components
import { InputField, ProjectTagManager, ResourceGroup, Timeline } from '..'

const Form = () => {
  return (
    <FormControl>
      <Box bg="darkToLight" py="4">
        <Box px="6">
          <InputField
            label="Project name"
            name="name"
            type="text"
            placeholder=""
            marginBot="6"
          />
          <ProjectTagManager title="Project manager (PM)" tagsList={TAGSLIST} />
          <ResourceGroup
            title="Resources"
            variant="outline"
            tagGroup={TAGSGROUP}
          />
          <Timeline title="Timeline project" />
          <InputField
            label="Estimation"
            name="name"
            type="number"
            placeholder="00.00"
            addOn="US$"
          />
        </Box>
      </Box>

      <Flex px="6" justifyContent="flex-end" gap="5" mt="8">
        <Button variant="outline">Cancel</Button>
        <Button variant="solid">Add project</Button>
      </Flex>
    </FormControl>
  )
}

export default Form
