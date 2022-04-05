import XLSX from 'xlsx';
import path from 'path';
import getConfig from 'next/config';
const { serverRuntimeConfig } = getConfig();

export default function handler(req, res) {
  const response = [];

  const workbook = XLSX.readFile(
    path.join(serverRuntimeConfig.PROJECT_ROOT, 'src/assets/PHỤ BIỂU HƯNG YÊN BÁO CÁO TỈNH 2.xls'),
  );
  const sheetNames = workbook.SheetNames;

  sheetNames.forEach((sheetName) => {
    const worksheet = workbook.Sheets[sheetName];
    let headers = {};
    let allowSetHeader = true;
    let title = '';
    let unit = '';
    let data = [];

    for (let z in worksheet) {
      if (z[0] === '!') continue;
      //parse out the column, row, and value
      let tt = 0;
      for (let i = 0; i < z.length; i++) {
        if (!isNaN(z[i])) {
          tt = i;
          break;
        }
      }

      const column = z.substring(0, tt);
      const row = parseInt(z.substring(tt));
      let value = worksheet[z].v;

      if (typeof value === 'string') {
        value = value.trim();
      }

      if (typeof value === 'string' && value.startsWith('Phụ lục')) {
        if (title) {
          response.push({
            title,
            unit,
            items: data.filter((value) => value !== null),
          });
          allowSetHeader = true;
          headers = {};
          data = [];
          title = '';
          unit = '';
        }
        title = value;
        continue;
      }

      if (typeof value === 'string' && value.startsWith('Đơn vị')) {
        unit = value;
        continue;
      }
      //store header names
      if (Object.keys(headers).length === 8) {
        allowSetHeader = false;
      }
      if (allowSetHeader && value) {
        headers[column] = value;
        continue;
      }

      if (!data[row]) data[row] = {};
      data[row][headers[column]] = value;
    }
    response.push({
      title,
      unit,
      items: data.filter((value) => value !== null),
    });
  });

  res.status(200).json({ response });
}
