import { Box, Button, Typography, Link as MuiLink, } from "@mui/material"
import { textTransform } from "@mui/system"
import Image from "next/image"
import Link from 'next/link'

export default function Home() {
  return (
    <Box
      mt={{ xs: 0, md: 15 }}
      mx={{ xs: 0, md: 2 }}
      display="grid"
      gridTemplateColumns={{
        xs: '1fr',
        md: '1fr 1fr',
      }}
      gridTemplateRows={{
        xs: 'minmax(min-content, max-content)',
        md: 'repeat(5, 1fr)',
      }}
      gridTemplateAreas={{
        xs: '"text" "text" "image" "image" "image" "image" "button"',
        md: '"image ." "image text" "image text" "image button" "image ." '
      }}>
      <Box gridArea="text" textAlign={{ xs: "center", md: "right" }} width={{ md: "575px" }}>
        <Typography component="h1" fontSize="64px" lineHeight="64px" fontWeight={700} color="#240D57">Imagine if</Typography>
        <Typography component="h1" fontSize="64px" lineHeight="64px" fontWeight={700}
          sx={{
            background: "linear-gradient(to right, #8456EC, #E87BF8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>Snapchat</Typography>
        <Typography component="h1" fontSize="64px" lineHeight="64px" fontWeight={700} color="#240D57">had events.</Typography>
        <Typography component="h2" fontSize="24px" fontWeight={300} color="#4F4F4F">Easily host and share events with your friends across any social media.</Typography>
      </Box>
      <Box gridArea="image" textAlign="center">
        <Image alt="Movie night event" src="/movie-night-event.svg" width="375px" height="735px" />
      </Box>
      <Box gridArea="button" textAlign={{ xs: "center", md: "right" }} width={{ md: "575px" }}>
        <Button
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
          <Link href="/create" passHref>
            <MuiLink color="#FFF" underline="none">
              Create my event
            </MuiLink>
          </Link>
        </Button>
      </Box>



    </Box>

    // Below: Initial design, doesn't account for mobile or tablet

    // <Box display="flex" justifyContent="space-evenly" alignItems="center">
    //   <Box>
    //     <Typography component="h1" fontSize="64px" fontWeight={700} color="#240D57">Imagine if</Typography>
    //     <Typography component="h1" fontSize="64px" fontWeight={700}
    //       sx={{
    //         background: "linear-gradient(to right, #8456EC, #E87BF8)",
    //         WebkitBackgroundClip: "text",
    //         WebkitTextFillColor: "transparent"
    //       }}>Snapchat</Typography>
    //     <Typography component="h1" fontSize="64px" fontWeight={700} color="#240D57">had events.</Typography>
    //     <Typography component="h2" fontSize="24px" fontWeight={300} color="#4F4F4F">Easily host and share events with your friends across any social media.</Typography>
    //     
    //   </Box>
    // </Box>
  )
}
