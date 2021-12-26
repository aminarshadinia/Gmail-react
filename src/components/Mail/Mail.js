import React from 'react'
import './Mail.css'
import { IconButton } from '@material-ui/core'
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ErorrIcon from '@material-ui/icons/Erorr';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import EmailIcon from '@material-ui/icons/Email';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Mail = () => {
  return (
    <div className='mail'>
      <div className='mail__tools'>
        <div className='mail__toolsLeft'>
          <IconButton><ArrowBackIcon /></IconButton>
          <IconButton><MoveToInboxIcon /></IconButton>
          <IconButton><ErorrIcon /></IconButton>
          <IconButton><DeleteIcon /></IconButton>
          <IconButton><EmailIcon /></IconButton>
          <IconButton><WatchLaterIcon /></IconButton>
          <IconButton><CheckCircleIcon /></IconButton>
          <IconButton><LabelImportantIcon /></IconButton>
          <IconButton><MoreVertIcon /></IconButton>
        </div>
        <div className='mail__toolsRight'></div>
      </div>
    </div>
  )
}

export default Mail
