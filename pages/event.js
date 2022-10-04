import { Box, Icon, Typography } from '@mui/material';
import Image from "next/image"

export default function Event() {
  // TODO:
    // pass data from /create into fields
    // add onClick functions to edit arrows which open an edit model for time and location fields

  return (
    <Box display="flex" height="100vh" justifyContent="center" alignItems="center">
    <Box>
    <Box>
      <Typography>Event Name</Typography>
      <Typography>Hosted by <strong>Host</strong></Typography>
    </Box>
    <Box>
      <Icon />
      <Typography>Start Time</Typography>
      <Typography>to End Time</Typography>
      <Icon id="edit-time-arrow"/>
    </Box>
    <Box>
      <Icon />
      <Typography>Location details</Typography>
      <Icon id="edit-location-arrow"/>
    </Box>
    </Box>
    <Box>
      <Image alt="Event image" src="/birthday-cake.png" width="250px" height="250px"/>
    </Box>

    
    </Box>
  )
}