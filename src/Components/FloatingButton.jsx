import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function FloatingButton() {
    const navigate=useNavigate();
    const fabStyle = {
        position: "absolute",
    bottom: 16,
    right: 16,
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    '&:hover': {
        transform: "scale(1.1)",
        boxShadow: 6,
    }
    };
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Tooltip title="Add new entry" arrow>
                <Fab onClick={()=>navigate("/add")}sx={fabStyle} 
                size="medium" color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>

        </Box>
    );
}
