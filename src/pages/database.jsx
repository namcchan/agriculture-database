import { Box, Button, Container, Stack } from '@mui/material';
import Image from 'next/image';
import logo from '../assets/images/logo.svg';

export default function Database() {
  return (
    <Stack direction="column" minHeight="100vh" width="100%" position="relative">
      <Box bgcolor="primary.main" position="sticky" top={0}>
        <Container maxWidth="xl">
          <Box display="flex" alignItems="center" justifyContent="space-between" py={2}>
            <Box height={44} width={350} position="relative">
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
      </Box>
      <Container maxWidth="xl" sx={{ flex: 1, mb: 10 }}>
        Content
      </Container>
    </Stack>
  );
}
