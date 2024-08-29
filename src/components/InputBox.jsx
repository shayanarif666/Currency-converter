import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

function InputBox({
    label,
    amount = 0,
    onAmountChange,
    currencyOptions = [],
    defaultCurrency = "inr",
    onCurrencyChange,
    disabled = false,
}) {
    return (
        <>
            <form action="" className='d-flex align-items-center justify-content-between'>
                <div className="amount">
                    <label htmlFor="" className='d-block mb-2 fw-bold'>{label}</label>
                    <input type="number" disabled={disabled} id='amount' className='form-control' value={amount} onChange={(e) => onAmountChange && onAmountChange(e.target.value)} />
                </div>
                <div className="currency">
                    <label htmlFor="" className='d-block text-end mb-2 fw-bold'>Currency Type</label>
                    {/* <select name="" value={defaultCurrency} defaultValue={defaultCurrency} className='form-select' id="currencyOptions" onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>
                        {
                            currencyOptions.slice(7).map((currency, index) => {
                                return <option key={currency} value={currency}>{currency}</option>
                            })
                        }
                    </select> */}
                    <Box>
                        <FormControl>
                            <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={defaultCurrency}
                                style={{ width: "150px" }}
                                label="Age"
                                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                            >
                                {
                                    currencyOptions.slice(7).map((currency, index) => {
                                        return <MenuItem key={currency} value={currency}>{currency}</MenuItem>
                                    })
                                }
                            </Select>
                        </FormControl>
                    </Box>
                </div>
            </form>
        </>
    )
}

export default InputBox
