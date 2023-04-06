
import emptyCV from './emptyCV';

// HELPER FUCTION TO CONVERT STRING TO CAMEL CASE
const camalize = (str) => {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, function(match, chr)
    {
        return chr.toUpperCase();
    });
}

const Input = ({sectionName, fieldName, type, onchange}) => {
    const camalizedName = camalize(fieldName)

    return (
        <input 
            type={type}
            name={camalizedName} 
            placeholder={fieldName} 
            value={emptyCV[sectionName][camalizedName]} 
            onChange={onchange} 
        />
    )
}

export default Input