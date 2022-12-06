import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React, { FunctionComponent } from 'react';


type CardProps = {
    titleCard: string,
    descriptionCard: string,
    urlDirection: string,
    titleButton: string
}


const CardOptions: FunctionComponent<CardProps> = ({titleCard, descriptionCard, urlDirection, titleButton}) => {



    function actionCard(){
        console.log(urlDirection)
    }

    return(
        <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {titleCard}
          </Typography>
          <Typography variant="body2">
            {descriptionCard}
          </Typography>
        </CardContent>
        <CardActions>
            <Button
                sx={{backgroundColor : "#3feea5"}}
                variant="contained"
                onClick={actionCard}>{titleButton}
            </Button>
        </CardActions>
      </Card>
    )
}

export default CardOptions