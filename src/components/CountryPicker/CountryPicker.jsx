import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect(() => {
        (async () => {
            setFetchedCountries(await fetchCountries());
        })();
    }, [setFetchedCountries])
    return (
        <FormControl className={styles.FormControl}>
            <NativeSelect defaultValue="" onChange={(e) => { handleCountryChange(e.target.value) }}>
                {fetchedCountries.map((c, i) => (<option key={i} value={c}>{c}</option>))}
                <option value="">Global</option>
            </NativeSelect>
        </FormControl>
    );
}

export default CountryPicker;