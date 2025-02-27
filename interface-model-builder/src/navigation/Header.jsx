import React, {useContext} from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { FormControl, InputLabel, Select, MenuItem, Button  } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import { styled } from '@mui/material/styles';

import SpecificationLoader from './SpecificationLoader';
import { FlexiBLEVersions, FlexiBLEDefaultVersion } from '../utilities/SpecificationUtils';
import SpecMenu from "./SpecMenu";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    position: 'absolute',
    top: 0,
}));

const StyledVersionSelect = styled(Select)(({ theme }) => ({
    color: 'white',
    p: 1,
    font: '"Courier New", monospace',
    fontSize: '0.8rem',
    border: 'none',  // Removes border
    bgcolor: 'transparent',  // Ensures the background color is transparent
    '&:focus': {
        outline: 'none'  // Removes outline when focused
    }
}));

function Header({spec, setSpec, version, setVersion}) {
    const [configDialogOpen, setConfigDialogOpen] = React.useState(false);

    const openConfigDialog = () => {
        setConfigDialogOpen(true);
    };

        const closeConfigDialog = () => {
        setConfigDialogOpen(false);
    };

    const handleVersionChange = (event) => {
        setVersion(event.target.value);
    }

    return (
        <StyledAppBar>
            <Toolbar>
                <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
                    FlexiBLE Device Specification Editor
                </Typography>
                <SpecMenu />
                <StyledVersionSelect
                    value={version}
                    onChange={handleVersionChange}
                >
                    {FlexiBLEVersions.map((ver) => (
                        <MenuItem key={ver} value={ver}>
                            {ver}
                        </MenuItem>
                    ))}
                </StyledVersionSelect>
                <IconButton color="inherit" href="https://github.com" target="_blank">
                    <GitHubIcon />
                </IconButton>
            </Toolbar>
        </StyledAppBar>
    );
}

export default Header;
