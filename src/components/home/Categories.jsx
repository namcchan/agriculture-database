import { Box, Card, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import nongNghiep from '../../assets/icons/icon-nongnghiep.svg';
import kttm from '../../assets/icons/icon-KTTM.svg';
import giaoduc from '../../assets/icons/icon-giaoduc.svg';
import yte from '../../assets/icons/icon-yte.svg';
import laodong from '../../assets/icons/icon-laodong.svg';
import moitruong from '../../assets/icons/icon-moitruong.svg';
import taiching from '../../assets/icons/icon-taichinh.svg';
import nangluong from '../../assets/icons/icon-nangluong.svg';
import cosohatang from '../../assets/icons/icon-hatang.svg';
import xahoi from '../../assets/icons/icon-xahoi.svg';
import congnghe from '../../assets/icons/icon-congnghe.svg';
import diaphuong from '../../assets/icons/icon-diaphuong.svg';

const categories = [
  {
    title: 'Nông nghiệp',
    img: nongNghiep,
  },
  {
    title: 'Kinh tế, thương mại',
    img: kttm,
  },
  {
    title: 'Giáo dục',
    img: giaoduc,
  },
  {
    title: 'Y tế',
    img: yte,
  },
  {
    title: 'Lao động',
    img: laodong,
  },
  {
    title: 'Môi trường',
    img: moitruong,
  },
  {
    title: 'Tài chính',
    img: taiching,
  },
  {
    title: 'Năng lượng',
    img: nangluong,
  },
  {
    title: 'Cơ sở hạ hầng',
    img: cosohatang,
  },
  {
    title: 'Xã hội',
    img: xahoi,
  },
  {
    title: 'Công nghệ',
    img: congnghe,
  },
  {
    title: 'Địa phương',
    img: diaphuong,
  },
];

export const Categories = () => {
  const CategoryComponents = categories.map((item, index) => (
    <Grid item xs={6} md={3} lg={2} key={item.title} sx={{ cursor: 'pointer' }}>
      <Card
        sx={{
          px: 2,
          py: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 2px 6px 0 rgb(32 103 221 / 20%), 0 4px 20px 0 rgb(32 103 221 / 19%)',
        }}
      >
        <Box position="relative" width={55} height={55} mb={2}>
          <Image src={item.img} layout="fill" objectFit="contain" alt={item.title} />
        </Box>
        <Typography fontWeight="bold" fontSize={14}>
          {item.title}
        </Typography>
      </Card>
    </Grid>
  ));

  return (
    <Grid container spacing={3} mt={6}>
      {CategoryComponents}
    </Grid>
  );
};
