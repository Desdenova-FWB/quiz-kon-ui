import { Table, TableContainer, TableHead, Paper, TableBody, TableRow, TableCell } from '@mui/material'
import React from 'react'
import { User } from '../../../Models/User'
import "./index.scss"

const MUITable = ({content = new Array<User>()}) => {

  return <TableContainer component={Paper} sx={{maxHeight: '400px', overflow: 'scroll', opacity: '80%', maxWidth:'90%'}}>
    <Table aria-label='scoreboard' stickyHeader={true} size='medium'  >
        <TableHead sx={{backgroundColor: '#1b1b1b'}}>
          <TableRow sx={{backgroundColor: '#1b1b1b'}}>
            <TableCell sx={{backgroundColor: '#1b1b1b', color: 'rgb(224, 224, 224)'}}>Ime</TableCell>
            <TableCell sx={{backgroundColor: '#1b1b1b', color: 'rgb(224, 224, 224)'}}>Rezultat</TableCell>
            <TableCell sx={{backgroundColor: '#1b1b1b', color: 'rgb(224, 224, 224)'}}>Vreme</TableCell>
            <TableCell sx={{backgroundColor: '#1b1b1b', color: 'rgb(224, 224, 224)'}}>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {content.map(user => (
            <TableRow key={user._id} sx={{ width: 1/4}}>
              <TableCell size='small'>{user.name}</TableCell>
              <TableCell size='small'>{user.score}</TableCell>
              <TableCell size='small'>{user.time}</TableCell>
              <TableCell size='small' style={{wordBreak: 'break-word', maxWidth: '60%'}} >{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
    </Table>
  </TableContainer>
}

export default MUITable