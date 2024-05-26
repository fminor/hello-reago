import React from 'react';
import Button from '@mui/material/Button';
import { ButtonOwnProps } from '@mui/material/Button';

export interface CommonButtonProps {
    children?: ButtonOwnProps["children"];
    color?: ButtonOwnProps["color"];
    disabled?: ButtonOwnProps["disabled"];
    size?: ButtonOwnProps["size"];
    sx?: ButtonOwnProps["sx"];
    variant?: ButtonOwnProps["variant"];
}

function CommonButton({ children, color, disabled, size, sx, variant }: CommonButtonProps) {
    return (
        <Button
            color={color}
            disabled={disabled}
            size={size}
            sx={sx}
            variant={variant}
        >
            {children}
        </Button>
    )
}

export default CommonButton
