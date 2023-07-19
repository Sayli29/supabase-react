import { useState, useEffect } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    TextField,
    InputLabel,
    Paper,
    Button,
    Modal,
    Box
} from '@mui/material';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 10,
    p: 4,
};

const EditDialog = ({ tableName, supabase }) => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [seleectedid,setSelectedId] = useState()

    useEffect(() => {
        getDetails();
    }, []);

    async function getDetails() {
        const { data, error } = await supabase
            .from(tableName)
            .select()
        setData(data);
    }

    async function updateDetails() {
        const { error } = await supabase
            .from(tableName)
            .update({ name: name, email: email })
            .eq('id', seleectedid)

        setName('');
        setEmail('');
        getDetails();
    }

    async function deleteDetails(id) {
        const { error } = await supabase
            .from(tableName)
            .delete()
            .eq('id', id)
        getDetails();
    }

    function handleClose() {
        setOpen(false);
    }

    function handleOpen(id,name,email) {
        setOpen(true);
        setSelectedId(id);
        setName(name);
        setEmail(email);
    }

    return (
        <>
            <TableContainer component={Paper} sx={{ marginTop: '1rem' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Operations</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((detail) => (
                            <TableRow key={detail.id}>
                                <TableCell>{detail.name}</TableCell>
                                <TableCell>{detail.email}</TableCell>
                                <TableCell>
                                    <Button
                                        sx={{ margin: '0.3rem' }}
                                        variant="outlined"
                                        color="primary"
                                        onClick={()=>handleOpen(detail.id, detail.name, detail.email)} >
                                        Edit
                                    </Button>
                                    <Button
                                        sx={{ margin: '0.3rem' }}
                                        variant="outlined"
                                        color="secondary"
                                        onClick={() => deleteDetails(detail.id)}>
                                        Delete
                                    </Button>
                                    <Modal open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-title"
                                        aria-describedby="modal-description">
                                        <Box sx={style}>
                                            <Typography sx={{ marginBottom: '0.5rem' }} id="modal-title" variant="h6" component="h2">
                                                Fill Details
                                            </Typography>
                                            <form >
                                                <InputLabel required>Name</InputLabel>
                                                <TextField
                                                    value= {name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    label="name" size='small'
                                                    fullWidth margin="normal" />
                                                <InputLabel
                                                    sx={{ marginTop: '0.5rem' }}
                                                    required >Email Address</InputLabel>
                                                <TextField
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    label="email"
                                                    size='small'
                                                    fullWidth margin="normal" />
                                                <br />
                                                <Button
                                                    onClick={updateDetails}
                                                    sx={{ margin: '0.2rem' }}
                                                    variant='contained'
                                                >Update</Button>
                                                <Button
                                                    onClick={handleClose}
                                                    sx={{ margin: '0.2rem' }}
                                                    variant='contained'
                                                >Close</Button>
                                            </form>
                                        </Box>
                                    </Modal>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
export default EditDialog;