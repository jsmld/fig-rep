import { Paper, Box, Button, FormControl, Link as MuiLink, TextField, InputLabel, Typography } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';


export default function Create() {

  // TODO:
    // create state for each of the inputs (useState)
    // useEffect which updates the state with what user inputs
    // handleSumbit function which sends data to /event page   

    const handleSumbit = () => {};

  return (
    <>

      <Box height="100vh" display="flex" flexDirection={["column", "row"]} justifyContent="center" alignItems="center">
        <Typography component="h1" fontSize="64px" lineHeight="64px" fontWeight={700} width={["300px", "300px", "500px", "700px"]} pb={2}
          sx={{
            background: "linear-gradient(to right, #8456EC, #E87BF8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>Tell everyone about your event!</Typography>
        <FormControl>
          <TextField label="Event Name" type="text" focused
            sx={{
              pb: 2,
              // This was trying to change the border color of each input

              // '& .Mui-InputBase-root-MuiOutlinedInput': {
              //   borderColor: 'red',
              //   '& .Mui-focused': {
              //     borderColor: 'red',
              //     '& .MuiOutlinedInput-notchedOutline': {
              //       borderColor: 'red'
              //     }
              //   }
              // }
            }} />
          <TextField label="Host Name" type="text" focused
            sx={{
              pb: 2,
              // '& .Mui-InputBase-root-MuiOutlinedInput': {
              //   borderColor: 'red',
              //   '& .Mui-focused': {
              //     borderColor: 'red',
              //     '& .MuiOutlinedInput-notchedOutline': {
              //       borderColor: 'red'
              //     }
              //   }
              // }
            }} />
          <TextField label="Start Time" type="datetime-local" focused
            sx={{
              pb: 2,
              // '& .Mui-InputBase-root-MuiOutlinedInput': {
              //   borderColor: 'red',
              //   '& .Mui-focused': {
              //     borderColor: 'red',
              //     '& .MuiOutlinedInput-notchedOutline': {
              //       borderColor: 'red'
              //     }
              //   }
              // }
            }} />
          <TextField label="End Time" type="datetime-local" focused
            sx={{
              pb: 2,
              // '& .Mui-InputBase-root-MuiOutlinedInput': {
              //   borderColor: 'red',
              //   '& .Mui-focused': {
              //     borderColor: 'red',
              //     '& .MuiOutlinedInput-notchedOutline': {
              //       borderColor: 'red'
              //     }
              //   }
              // }
            }} />
          <TextField label="Location" type="text" focused
            sx={{
              pb: 2,
              // '& .Mui-InputBase-root-MuiOutlinedInput': {
              //   borderColor: 'red',
              //   '& .Mui-focused': {
              //     borderColor: 'red',
              //     '& .MuiOutlinedInput-notchedOutline': {
              //       borderColor: 'red'
              //     }
              //   }
              // }
            }} />
          <TextField label="Event Image" type="text" focused
            sx={{
              pb: 2,
              // '& .Mui-InputBase-root-MuiOutlinedInput': {
              //   borderColor: 'red',
              //   '& .Mui-focused': {
              //     borderColor: 'red',
              //     '& .MuiOutlinedInput-notchedOutline': {
              //       borderColor: 'red'
              //     }
              //   }
              // }
            }} />
          <Button
            type="submit"
            onCLick={handleSumbit}
            sx={{
              borderRadius: "10px",
              width: "320px",
              height: "55px",
              fontSize: "20px",
              fontWeight: 700,
              background: "linear-gradient(to right, #8456EC, #E87BF8)",
              color: "#FFF",
              textTransform: "none",
            }}>
            <Link href="/event" passHref>
              <MuiLink color="#FFF" underline="none">
                Next
              </MuiLink>
            </Link>
          </Button>
        </FormControl>
      </Box>
    </>
  )
}