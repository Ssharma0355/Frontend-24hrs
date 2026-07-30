import React from 'react'

function Modal({open, close, footer, title}) {
 if(!open) return null;

 const styles = {
    overlay:{
        position:"fixed",
        inset: 0,
        backgroundColor:"rgba(0,0,0,0.5)",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        zIndex:1000,
    },
    modal:{
        width: "500px",
        maxWidth: "90%",
        backgroundColor: "#fff",
        borderRadius: "10px",
        padding: "20px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    }
 }
  return (
    <div style={styles.overlay} onClick={close}>
        <div style={styles.modal} onClick={(e)=>e.stopPropagation()}>
        <h1>{title}</h1>
            {footer}
        </div>
    </div>
  )
}

export default Modal
