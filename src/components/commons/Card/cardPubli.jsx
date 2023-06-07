import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Box,Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator, Spacer, Center, Conteiner, useColorModeValue, Avatar, Wrap, WrapItem, Container, Link } from '@chakra-ui/react'




export default function CardPublico() {
    return(
<Container alignItems={'center'} maxW={'7xl'} p="12" flexDirection="column" >
        <Wrap >
        <WrapItem>
        <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Box> 
                <Box>   
                    <Center>
                    <Box
                        maxW={'350px'}
                        w={'250px'}
                        bg={useColorModeValue('white', 'gray.900')}
                        boxShadow={'2xl'}
                        rounded={'md'}
                        p={6}
                        overflow={'hidden'}
                        >

                        <Box
                        h={'210px'}
                        bg={'gray.100'}
                        mt={-6}
                        mx={-6}
                        mb={6}
                        pos={'relative'}
                        >
                               
                        <Image
                        
                            src={
                            'https://www.pontotel.com.br/wp-content/uploads/2022/05/imagem-corporativa.webp'
                            }
                            layout={'fill'}
                        />

                    </Box>
                    <Stack>
                    <Text
                        color={'green.500'}
                        textTransform={'uppercase'}
                        fontWeight={800}
                        fontSize={'sm'}
                        letterSpacing={1.1}>
                        Blog
                    </Text>
                    <Heading 
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        Boost your conversion rate
                    </Heading>
                    <Text textAlign={'left'} color={'gray.500'}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy 
                    </Text>
                    </Stack>
                    <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                    <Avatar
                        src={'https://avatars.githubusercontent.com/u/129197782?s=400&u=a7139774a8484ee2174822c8b12ab0c913a5c1c2&v=4'}
                        alt={'Author'}
                    />
                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                        <Text fontWeight={600}>Achim Rolle</Text>
                        <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>

                    </Stack>
                    </Stack>
                    
                </Box>
                </Center>
                </Box>
                </Box>
                </Link>
                </WrapItem>
                <WrapItem>
                <Box> 
                <Box>   
                    <Center>
                    <Box
                        maxW={'350px'}
                        w={'250px'}
                        bg={useColorModeValue('white', 'gray.900')}
                        boxShadow={'2xl'}
                        rounded={'md'}
                        p={6}
                        overflow={'hidden'}
                        >

                        <Box
                        h={'210px'}
                        bg={'gray.100'}
                        mt={-6}
                        mx={-6}
                        mb={6}
                        pos={'relative'}
                        >

                        <Image
                            src={
                            'https://www.pontotel.com.br/wp-content/uploads/2022/05/imagem-corporativa.webp'
                            }
                            layout={'fill'}
                        />
                    </Box>
                    <Stack>
                    <Text
                        color={'green.500'}
                        textTransform={'uppercase'}
                        fontWeight={800}
                        fontSize={'sm'}
                        letterSpacing={1.1}>
                        Blog
                    </Text>
                    <Heading 
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        Boost your conversion rate
                    </Heading>
                    <Text textAlign={'left'} color={'gray.500'}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy 
                    </Text>
                    </Stack>
                    <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                    <Avatar
                        src={'https://avatars.githubusercontent.com/u/129197782?s=400&u=a7139774a8484ee2174822c8b12ab0c913a5c1c2&v=4'}
                        alt={'Author'}
                    />
                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                        <Text fontWeight={600}>Achim Rolle</Text>
                        <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>

                    </Stack>
                    </Stack>
                </Box>
                </Center>
                </Box>
                </Box>
                </WrapItem> 
                <WrapItem>
                <Box> 
                <Box>   
                    <Center>
                    <Box
                        maxW={'350px'}
                        w={'250px'}
                        bg={useColorModeValue('white', 'gray.900')}
                        boxShadow={'2xl'}
                        rounded={'md'}
                        p={6}
                        overflow={'hidden'}
                        >

                        <Box
                        h={'210px'}
                        bg={'gray.100'}
                        mt={-6}
                        mx={-6}
                        mb={6}
                        pos={'relative'}
                        >

                        <Image
                            src={
                            'https://www.pontotel.com.br/wp-content/uploads/2022/05/imagem-corporativa.webp'
                            }
                            layout={'fill'}
                        />
                    </Box>
                    <Stack>
                    <Text
                        color={'green.500'}
                        textTransform={'uppercase'}
                        fontWeight={800}
                        fontSize={'sm'}
                        letterSpacing={1.1}>
                        Blog
                    </Text>
                    <Heading 
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        Boost your conversion rate
                    </Heading>
                    <Text textAlign={'left'} color={'gray.500'}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy 
                    </Text>
                    </Stack>
                    <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                    <Avatar
                        src={'https://avatars.githubusercontent.com/u/129197782?s=400&u=a7139774a8484ee2174822c8b12ab0c913a5c1c2&v=4'}
                        alt={'Author'}
                    />
                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                        <Text fontWeight={600}>Achim Rolle</Text>
                        <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>

                    </Stack>
                    </Stack>
                </Box>
                </Center>
                </Box>
                </Box>
                </WrapItem>
                <WrapItem>
                <Box> 
                <Box>   
                    <Center>
                    <Box
                        maxW={'350px'}
                        w={'250px'}
                        bg={useColorModeValue('white', 'gray.900')}
                        boxShadow={'2xl'}
                        rounded={'md'}
                        p={6}
                        overflow={'hidden'}
                        >

                        <Box
                        h={'210px'}
                        bg={'gray.100'}
                        mt={-6}
                        mx={-6}
                        mb={6}
                        pos={'relative'}
                        >

                        <Image
                            src={
                            'https://www.pontotel.com.br/wp-content/uploads/2022/05/imagem-corporativa.webp'
                            }
                            layout={'fill'}
                        />
                    </Box>
                    <Stack>
                    <Text
                        color={'green.500'}
                        textTransform={'uppercase'}
                        fontWeight={800}
                        fontSize={'sm'}
                        letterSpacing={1.1}>
                        Blog
                    </Text>
                    <Heading 
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        Boost your conversion rate
                    </Heading>
                    <Text textAlign={'left'} color={'gray.500'}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy 
                    </Text>
                    </Stack>
                    <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                    <Avatar
                        src={'https://avatars.githubusercontent.com/u/129197782?s=400&u=a7139774a8484ee2174822c8b12ab0c913a5c1c2&v=4'}
                        alt={'Author'}
                    />
                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                        <Text fontWeight={600}>Achim Rolle</Text>
                        <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>

                    </Stack>
                    </Stack>
                </Box>
                </Center>
                </Box>
                </Box>
                </WrapItem>
                </Wrap>
                </Container>
                
    )
}