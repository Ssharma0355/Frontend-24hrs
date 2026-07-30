import React, { useState } from 'react'
import Modal from './Modal';

function AppFile() {
    const [open, setOpen] = useState(false);
  return (
    <>
        <button onClick={()=>setOpen(true)}>Open Modal</button>
        <Modal
        open={open}
        title={"Are you sure?"}
        close = {()=>setOpen(false)}
        footer ={
            <>
            <button onClick={()=>setOpen(false)}>Close</button>
            </>
        }
        />
      
    </>
  )
}

export default AppFile
