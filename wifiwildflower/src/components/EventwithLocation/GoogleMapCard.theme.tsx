import { createTheme } from "@mui/material";

export const mapTheme = createTheme({
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "16px"
                }
            }
        }
    }
});
