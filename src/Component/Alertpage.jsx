import {Alert, Box, Collapse, IconButton } from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from "@mui/icons-material/Close"
const Alertpage = () => {
    const [open, SetOpen]= useState(true)
    return (
      <div style={{ marginTop: "1%", width: "30%", marginLeft: "30%" }}>
        <Box sx={{ "& >legend": { mt: 2 } }}>
          <Collapse in={open}>
            <Alert
              action={
                <IconButton onClick={()=>{
                    SetOpen(false)
                }}>
                  <CloseIcon></CloseIcon>
                </IconButton>
              }
            >
              Paid Successfully!
            </Alert>
          </Collapse>
        </Box>
      </div>
    );
}

export default Alertpage;
