import React from "react";
import { AddCircleOutlineOutlined, SaveOutlined } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";

export const NewEntry = () => {
  return (
    <Box sx={{marginBottom: 2, paddingX: 2}}>
      <Button
        startIcon={<AddCircleOutlineOutlined />}
        fullWidth
        variant="outlined"
      >
        Agregar Tarea
      </Button>

      <TextField
        fullWidth
        sx={{ marginTop: 2, marginBottom: 1 }}
        placeholder="Nueva Entrada"
        autoFocus
        multiline
        label="Nueva Entrada"
        helperText="Ingrese un valor"
      />

      <Box display={"flex"} justifyContent="space-between">
        <Button variant="text" color="secondary">
          Cancelar
        </Button>
        <Button variant="outlined" color="secondary" endIcon={<SaveOutlined />}>
          Guardar
        </Button>
      </Box>
    </Box>
  );
};
