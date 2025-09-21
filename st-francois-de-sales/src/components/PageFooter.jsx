import { Box } from "@mui/material";

const PageFooter = () => {
    return (
        <Box 
            sx={{ 
                backgroundColor: "#f5f5f5", 
                color: "#000000",
                padding: "1rem",
                textAlign: "left",
                marginTop: "auto",
                gap: 2
            }}
            component="footer"
        >
            <Box>
                <h3>Adresse</h3>
                <a href="https://www.google.com/maps/place/7070+Bd+des+Mille-Îles,+Laval,+QC+H7A+4B3/@45.5809004,-73.7090005,17z/data=!3m1!4b1!4m6!3m5!1s0x4cc9199000000000:0x6600000000000000!8m2!3d45.5809004!4d-73.7068118!16s%2Fg%2F11c48_q5tp?entry=ttu&g_ep=EgoyMDI1MDIyMi4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                    7070 Bd des Mille-Îles, Laval, QC H7A 4B3
                </a>
            </Box>
            <Box>
                <h3>
                Contact
                </h3>
                123456
            </Box>
        </Box>
    )
}

export default PageFooter;