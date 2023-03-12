import { Button } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'

function HomeNavigation() {
  return (
    <div>
        <Box sx={{display:'flex',flexDirection:"row",m:2 ,mr:20}}>
                <Button lg={6} variant="contained" sx={{mx:2}}>Hire Photographer</Button>
                <Button lg={6} variant="contained" sx={{mx:2}}>Purchase Masterpieces</Button>
        </Box>
    </div>
  )
}

export default HomeNavigation