import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
// import Footer from '../Layout/Footer'
import Navbar from '../Layout/Navbar'

const Contact = () => {
    return (
        <>
            <Navbar />
            <Box className='contact-container'>
                <Box className='contact-info' display='flex' margin={5} padding={5} boxShadow={3}>

                    <Box className='address' width='40%'>

                        <Typography variant='h3'>Our Store</Typography>
                        <Typography variant='h5'>Balaju Kathmandu</Typography>
                        <Typography variant='h5'>01-888888225, info@ouestore.com</Typography>
                        <Typography variant='h5'>www.ourstore.com</Typography>
                    </Box>

                    <Box className='contact-form' width='60%' margin={5} paddingX={5} borderLeft={1}>

                        <TextField id='standard-basic' label="Email" variant='outlined' fullWidth className='mb6'/>
                        <TextField id='standard-basic' label="Sublect" variant='outlined' fullWidth className='mb6'/>
                        <TextField id='standard-basic' label="Massage" variant='outlined'  rosw={5} fullWidth className='mb6'/>

                        <Button color='primary' fullWidth vareient='contained'>Send Massage</Button>
                    </Box>



                </Box>

                
            </Box>
            {/* <Footer/> */}
        </>
    )
}

export default Contact