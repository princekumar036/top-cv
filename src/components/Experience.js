
import emptyCV from './Utils/emptyCV';
import Input from './Utils/Input'

const Experience = ({ onchange }) => {

    

    return (
        <>
            <Input sectionName="experience" type="text" fieldName="Company" onchange={onchange} />
            <Input sectionName="experience" type="text" fieldName="Position" onchange={onchange} />
            <Input sectionName="experience" type="text" fieldName="City" onchange={onchange} />
            <Input sectionName="experience" type="date" fieldName="From" onchange={onchange} />
            <Input sectionName="experience" type="date" fieldName="To" onchange={onchange} />
        </>
    );
};

export default Experience;
