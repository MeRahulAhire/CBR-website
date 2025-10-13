import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const comparisonData = [
  {
    category: 'Description',
    secureCloud: 'Secure Cloud is managed directly by RunPod using its own GPUs and infrastructure in secure data centers.',
    communityCloud: 'Community Cloud is a distributed network of GPU instances located across the globe and may not reside in data centers.',
  },
  {
    category: 'Security',
    secureCloud: 'Security is ensured through various enterprise-grade compliance standards. Learn more about it here.',
    communityCloud: 'Security is offered on a best-effort basis and is not guaranteed like Secure Cloud due to its distributed nature.',
  },
  {
    category: 'Price',
    secureCloud: '20–30% more expensive than Community Cloud.',
    communityCloud: 'Lowest price option available.',
  },
  {
    category: 'Which to use',
    secureCloud: 'Use Secure Cloud for high-stakes projects where security and privacy are critical.',
    communityCloud: 'Use Community Cloud if your workload doesn\'t require enterprise-grade compliance or for casual projects.',
  },
];

export default function ComparisonTable() {
  return (
    <TableContainer 
      component={Paper} 
      sx={{ 
        width: '100%',
        backgroundColor: '#0a1929',
      }}
    >
      <Table sx={{ width: '100%' }} aria-label="comparison table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold', width: '20%', color: '#f7f7f7', borderBottom: '1px solid #1e3a5f' }}></TableCell>
            <TableCell sx={{ fontWeight: 'bold', width: '40%', color: '#f7f7f7', borderBottom: '1px solid #1e3a5f' }}>Secure Cloud</TableCell>
            <TableCell sx={{ fontWeight: 'bold', width: '40%', color: '#f7f7f7', borderBottom: '1px solid #1e3a5f' }}>Community Cloud</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {comparisonData.map((row) => (
            <TableRow
              key={row.category}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', color: '#fff', borderBottom: '1px solid #1e3a5f' }}>
                {row.category}
              </TableCell>
              <TableCell sx={{ color: '#b0bec5', borderBottom: '1px solid #1e3a5f' }}>{row.secureCloud}</TableCell>
              <TableCell sx={{ color: '#b0bec5', borderBottom: '1px solid #1e3a5f' }}>{row.communityCloud}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}