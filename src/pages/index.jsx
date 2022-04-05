import { Box, Button, Container, Stack } from '@mui/material';
import Image from 'next/image';

import backgroundHero from '../assets/images/background-hero.png';
import logo from '../assets/images/logo.svg';
import { Categories } from '../components/home/Categories';
import { HomeHero } from '../components/home/HomeHero';

export default function Home() {
  return (
    <Stack direction="column" minHeight="100vh" width="100%" position="relative">
      <Box height="500px" position="absolute" top={0} left={0} right={0} zIndex={-1}>
        <Image
          loading="lazy"
          src={backgroundHero}
          layout="fill"
          objectFit="center"
          alt="background hero"
        />
      </Box>
      <Container maxWidth="xl">
        <Box display="flex" alignItems="center" justifyContent="space-between" py={2}>
          <Box height={64} width={350} position="relative">
            <Image src={logo} layout="fill" objectFit="contain" alt="logo" />
          </Box>
          <Box display="flex" justifyContent="flex-end" flex={1}>
            <Button variant="text" sx={{ color: 'white', mx: 2 }}>
              CSDL Ngành
            </Button>
            <Button variant="text" sx={{ color: 'white', mx: 2 }}>
              Giới thiệu
            </Button>
            <Button variant="text" sx={{ color: 'white', mx: 2 }}>
              Liên hệ
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: 'white', color: 'text.primary', ml: 2 }}
            >
              Đăng nhập
            </Button>
          </Box>
        </Box>
      </Container>
      <Container maxWidth="lg" sx={{ flex: 1, mb: 10 }}>
        <HomeHero />
        <Categories />
      </Container>
      <Box minHeight={250} bgcolor="primary.main" width="100%">
        <Container maxWidth="lg"></Container>
      </Box>
    </Stack>
  );
}
