import * as React from 'react';
import {Container,
        InputLabel,
        TextField, 
        Button,
        Typography,
        Box, 
        Modal } from '@mui/material';
import Formtable from '../DetailsTable/Formtable'
import {useState} from 'react';

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
const Formcontainer = ({supabase,tableName}) =>{
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const[open, setOpen] = useState(false);
    

    async function getDetails() {
        const { data, error } = await supabase
            .from(tableName)
            .select()
        setData(data);
    }

    async function insertDetails(event){
        event.preventDefault();
        if(name!='' && email!=''){ 
        const { data, error } = await supabase
                                .from(tableName)
                                .insert({name: name, email: email })
                getDetails();
                handleClose();
                
        }
    }

    function handleClose(){
        setOpen(false);
        setName('');
        setEmail('');
    }

    function handleOpen(){
        setOpen(true);
    }

    return(
        <>  
            <Box display="flex" justifyContent="center">
                <Button 
                variant="contained" 
                color="primary" 
                size='large' 
                sx={{ marginTop: '5rem' }} 
                onClick={handleOpen}>
                    Insert Details
                </Button>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                >
                <Box sx={style} id="box-modal">
                    <Typography sx={{ marginBottom: '0.5rem' }} id="modal-title" variant="h6" component="h2">
                        Fill Details
                    </Typography>
                    <form >
                        <InputLabel required>Name</InputLabel>
                        <TextField
                            value={name}
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
                            onClick={insertDetails}
                            sx={{ margin: '0.5rem' }}
                            variant='contained'
                        >Insert</Button>
                        <Button
                            onClick={handleClose}
                            sx={{ margin: '0.5rem' }}
                            variant='contained'
                        >Close</Button>
                    </form>
                </Box>
            </Modal>
            
            <Container maxWidth="xl" sx={{ height: '60vh', marginTop: '1rem' }}>
                <Typography variant="h5" component="h5" gutterBottom>
                    All Details
                </Typography>
                <Formtable tableName={tableName} supabase={supabase} style={style} />
            </Container>
        </>
    );
}
export default Formcontainer;