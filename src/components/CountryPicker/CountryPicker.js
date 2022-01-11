import React, {useState, useEffect} from 'react'
import {NavtiveSelect, FormControl} from '@material-ui/core'
import { StylesContext } from '@material-ui/styles'

function CountryPicker() {
    return (
        <div>
            <FormControl className={StylesContext.FormControl}>
                <NavtiveSelect>
                    <option value='global'>Global</option>
                </NavtiveSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker
