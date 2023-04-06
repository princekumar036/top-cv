
import emptyCV from './Utils/emptyCV';
import Input from './Utils/Input'

const Education = ({ onchange }) => {

    

    return (
        <>
            <Input sectionName="education" type="text" fieldName="University Name" onchange={onchange} />
            <Input sectionName="education" type="text" fieldName="Degree" onchange={onchange} />
            <Input sectionName="education" type="text" fieldName="Subject" onchange={onchange} />
            <Input sectionName="education" type="text" fieldName="City" onchange={onchange} />
            <Input sectionName="education" type="date" fieldName="From" onchange={onchange} />
            <Input sectionName="education" type="date" fieldName="To" onchange={onchange} />
        </>
    );
};

export default Education;
