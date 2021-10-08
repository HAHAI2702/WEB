import React, { useState, useRef } from 'react';
import { TextField, Button, Card, Paper, CardContent, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { getProducts  } from '../../actions/products';

const FormFind =  () => {
  const [productData, setProductData] = useState({ content: ''});
  const [isShow, setIsShow] =  useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();
  const qrRef = useRef(null);

  const clear = () => {
    setProductData({ content: ' ' });
  };

  const handleChange=(e)=>{
    setProductData({ ...productData, [e.target.name] : e.target.value.trim() })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(productData.content){
      await dispatch(getProducts(productData.content));
    }
    clear()
  };
  const showScanQR = () =>{
    isShow === 0 ? setIsShow(1) : setIsShow(0)
  }

  const showScanQRWebcam = () =>{
    isShow === 0 ? setIsShow(2) : setIsShow(0)
  }

  const handleErrorFile = (error) => {
    console.log(error);
  }
  const handleScanFile = (result) => {
    if (result) {
      setProductData({content: result});
    }
}
  const onScanFile = () => {
    qrRef.current.openImageDialog();
  }

  const handleErrorWebCam = (error) => {
    console.log(error);
  }
  const handleScanWebCam = (result) => {
    if (result){
      setProductData({content: result});
    }
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        
        <TextField name="content" variant="outlined" label="Token" fullWidth value={productData.content} onChange={handleChange} />
    
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
      
    </Paper>
  );
};

export default FormFind;
