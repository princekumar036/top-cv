
import emptyCV from './Utils/emptyCV';
import Input from './Utils/Input'

import './PersonalInfo.css'

const PersonalInfo = ({ onchange }) => {

    return (
        <>
            <>
                <label htmlFor="profile_pic">
                    <img src={emptyCV.personalInfo.photo} alt="" />
                </label>
                <input name="profile_pic" id="profile_pic" type="file" accept="image/*" hidden />
            </>

            <Input sectionName="personalInfo" type="text" fieldName="First Name" onchange={onchange} />
            <Input sectionName="personalInfo" type="text" fieldName="Last Name" onchange={onchange} />
            <Input sectionName="personalInfo" type="text" fieldName="Address" onchange={onchange} />
            <Input sectionName="personalInfo" type="number" fieldName="Phone Number" onchange={onchange} />
            <Input sectionName="personalInfo" type="email" fieldName="Email" onchange={onchange} />
            <Input sectionName="personalInfo" type="text" fieldName="Description" onchange={onchange} />
            {/* <textarea name="description" placeholder="Description" onChange={onchange}>{}</textarea> */}
        </>
    );
};

export default PersonalInfo;
