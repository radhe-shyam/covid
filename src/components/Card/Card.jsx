import React from 'react';

import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Card.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    if (!confirmed || !recovered || !deaths) {
        return ''
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                {
                    [confirmed, recovered, deaths].map((x, i) => (
                        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles[['confirmed', 'recovered', 'deaths'][i]])} key={i}>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>{['Confirmed', 'Recovered', 'Deaths'][i]}</Typography>
                                <Typography variant="h5">
                                    <CountUp start={0} end={x.value} duration={1.5} separator="," />
                                </Typography>
                                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                                <Typography variant="body2">Number of {['Confirmed', 'Recovered', 'Death'][i]} cases</Typography>
                            </CardContent>
                        </Grid>))
                }
            </Grid>
        </div>
    );
}

export default Cards;