import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"
import { Box } from '@chakra-ui/react'


const Layout = () => {
    return (
        <div>
            <Header />

            <Box p='0' m='16px 0' borderRadius='1rem' bg='white'>
                <Outlet />
            </Box>
        </div>
    )
}

export default Layout