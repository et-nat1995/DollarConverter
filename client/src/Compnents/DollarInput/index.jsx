import React from 'react'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

const defaultMaskOptions = {
  prefix: '$',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ',',
  allowDecimal: true,
  decimalSymbol: '.',
  decimalLimit: 2, // how many digits allowed after the decimal
  integerLimit: 7, // limit length of integer numbers
  allowNegative: false,
  allowLeadingZeroes: false,
  placeholder: "$0.00",
  type: "text",
  inputMode: 'numeric'
}

const DollarInput = ({ maskOptions, handleInput, ...inputProps }) => {
  const currencyMask = createNumberMask(defaultMaskOptions)

  return <MaskedInput mask={currencyMask} {...inputProps} onChange={event => handleInput(event.target.value)} />
}


export default DollarInput;
