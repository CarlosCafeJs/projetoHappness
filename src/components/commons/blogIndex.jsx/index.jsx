import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from '@chakra-ui/react';

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
    return (
      <HStack boxSizing='10px' marginTop="5" spacing="2" display="flex" alignItems="center">
            <Image
              borderRadius="full"
              boxSize="40px"
              src="https://avatars.githubusercontent.com/u/129197782?s=400&u=a7139774a8484ee2174822c8b12ab0c913a5c1c2&v=4"
              alt={`Avatar of ${props.name}`}
            />
        <Text fontWeight="medium">{props.name}</Text>
        <Text>— </Text>
        <Text>{props.date.toLocaleDateString()}</Text>
      </HStack>
    );
};

const ArticleList = () => {
  return (
    
    <Container maxW={'7xl'} p="36">
       

      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
        >

          <Box
              display="flex"
              flex="1"
              marginRight="3"
              position="relative"
              alignItems="center"
              >

                  <Box
                    width={{ base: '100%', sm: '85%' }}
                    zIndex="2"
                    marginLeft={{ base: '0', sm: '5%' }}
                    marginTop="5%"
                    >

                    <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>

                      <Image
                      
                        borderRadius="lg"
                        src={
                          'https://ufla.br/images/noticias/2023/03_MAR/felicidade.JPG'
                        }
                        alt="some good alt text"
                        objectFit="contain"
                        
                      />

                    </Link>

                  </Box>

            <Box zIndex="1" width="100%" position="absolute" height="100%">
                <Box
                  bgGradient={useColorModeValue(
                    'radial(orange.600 1px, transparent 1px)',
                    'radial(orange.300 1px, transparent 1px)'
                  )}
                  backgroundSize="20px 20px"
                  opacity="0.4"
                  height="100%"
                />

            </Box>
        </Box>

      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        justifyContent="center"
        marginTop={{ base: '3', sm: '0' }}
        >

        <BlogTags tags={['Felicidade', 'Jornada do Cliente']}/>

        <Heading marginTop="1" textAlign={'left'}>
          <Link  textDecoration="none" _hover={{ textDecoration: 'none' }}>
            Jornada Do Cliente Serpro
          </Link>
        </Heading>

        <Text
          as="p"
          marginTop="2"
          color={useColorModeValue('gray.700', 'gray.200')}
          fontSize="lg"
          textAlign={'left'}>

          “O mapeamento da jornada do cliente ou Customer Journey Mapping é a 
          representação gráfica que procura retratar a dinâmica emocional estabelecida entre 
          o cliente e a marca/produto/serviço durante um determinado período.” 
          
          - Gart Capote
        </Text>

        <BlogAuthor name="Carlos H. Santos" date={new Date('2023-06-07T19:01:27Z')} />
        
      </Box>
      </Box>
      <Heading as="h2" marginTop="10">
        Nossa Jornada
      </Heading>
      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5">
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none">
                <Image
                  transform="scale(1.0)"
                  src={
                    'https://ufla.br/images/noticias/2023/03_MAR/felicidade.JPG'
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Link>
            </Box>
            <BlogTags tags={['Felicidade', 'Jornada do Cliente']} marginTop="3" />
            <Heading fontSize="xl" marginTop="2" textAlign={'left'}>
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Titulo Exemplo
              </Link>
            </Heading>
            <Text textAlign={'left'} as="p" fontSize="md" marginTop="2">
              texto exemplo Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
            <BlogAuthor
              name="John Doe"
              date={new Date('2021-04-06T19:01:27Z')}
            />
          </Box>
        </WrapItem>
        <WrapItem  width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  transform="scale(1.0)"
                  src={
                    'https://ufla.br/images/noticias/2023/03_MAR/felicidade.JPG'
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Link>
            </Box>
            <BlogTags tags={['Felicidade', 'Jornada do Cliente']} marginTop="3"  />
            <Heading fontSize="xl" marginTop="2" >
              <Link textAlign={'left'} textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Titulo Exemplo
              </Link>
            </Heading>
            <Text textAlign={'left'} as="p" fontSize="md" marginTop="2">
               texto exemplo Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
            <BlogAuthor
              name="John Doe"
              date={new Date('2021-04-06T19:01:27Z')}
            />
          </Box>
        </WrapItem>
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  transform="scale(1.0)"
                  src={
                    'https://ufla.br/images/noticias/2023/03_MAR/felicidade.JPG'
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Link>
            </Box>
            <BlogTags tags={['Felicidade', 'Jornada do Cliente']} marginTop="3" />
            <Heading textAlign={'left'} fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Titulo Exemplo
              </Link>
            </Heading>
            <Text textAlign={'left'} as="p" fontSize="md" marginTop="2">
               texto exemplo Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
            <BlogAuthor
              name="John Doe"
              date={new Date('2021-04-06T19:01:27Z')}
            />
          </Box>
        </WrapItem>
      </Wrap>
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2">TEXTO EXEMPLO</Heading>
        <Text textAlign={'left'} as="p" fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
          pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
          imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
          sapien. Suspendisse placerat vulputate posuere. Curabitur neque
          tortor, mattis nec lacus non, placerat congue elit.
        </Text>
        <Text textAlign={'left'} as="p" fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
          pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
          imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
          sapien. Suspendisse placerat vulputate posuere. Curabitur neque
          tortor, mattis nec lacus non, placerat congue elit.
        </Text>
        <Text textAlign={'left'} as="p" fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
          pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
          imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
          sapien. Suspendisse placerat vulputate posuere. Curabitur neque
          tortor, mattis nec lacus non, placerat congue elit.
        </Text>
      </VStack>
      
    </Container>
  );
};

export default ArticleList;