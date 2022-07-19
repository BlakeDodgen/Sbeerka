import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState, useEffect } from "react";
import GetCookie from "../cookies/GetCookie";
import SetCookie from "../cookies/SetCookie";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#fbc014",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export default function BasicModal() {
    const [open, setOpen] = useState(false);
    const [stop, setStop] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        SetCookie("agecheck", true);
    };

    const cookie = GetCookie("agecheck");

    useEffect(() => {
        if (cookie) {
            return setOpen(false);
        }
        handleOpen();
    }, [stop]);

    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                open={open}
                // onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        Are you at least 18, dear visitor?
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <button onClick={handleClose}>YES</button>
                        <button>
                            <a href="https://www.google.com">NO</a>
                        </button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
