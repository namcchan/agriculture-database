import { Button, Grid, OutlinedInput, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import heroImage from '../../assets/images/hero.svg';
import styled from '@emotion/styled';

const SearchInput = styled(OutlinedInput)({
  borderRadius: '24px',
  backgroundColor: 'white',
  '&:focus': {
    border: 'none',
    outline: 'none',
  },
});

export const HomeHero = () => {
  return (
    <Grid
      container
      height={{
        xs: 'auto',
        lg: 420,
      }}
      spacing={3}
    >
      <Grid item xs={12} md={7}>
        <Stack
          py={10}
          pr={{
            xs: 0,
            lg: 10,
          }}
          height="100%"
        >
          <SearchInput size="small" fullWidth placeholder="Bạn cần tìm kiếm dữ liệu gì?" />
          <Typography mt={4} color="white" variant="h3" fontWeight="bold">
            Cơ sở dữ liệu nông nghiệp
          </Typography>
          <Typography mt={2} color="white">
            Điểm đầu mối công bố dữ liệu mở, cung cấp thông tin về chia sẻ dữ liệu của cơ quan nhà
            nước
          </Typography>
        </Stack>
      </Grid>
      <Grid
        item
        xs={12}
        md={5}
        width="100%"
        height={{
          xs: 300,
          lg: 420,
        }}
        position="relative"
      >
        <Image
          src={heroImage}
          layout="fill"
          alt="Hero image"
          objectFit="contain"
          objectPosition="center"
        />
      </Grid>
    </Grid>
  );
};
