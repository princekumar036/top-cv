
import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import './components/style.css'

import emptyCV from './components/Utils/emptyCV';
import exampleCV from './components/Utils/exampleCV';

function App() {
  const [cv, setCV] = useState(emptyCV)

  const loadExampleCV = () => {
    setCV(exampleCV)
  }

  const clearCV = () => {
    setCV(emptyCV)
  }

  const componentRef = useRef();
  const printCV = useReactToPrint({
      content: () => componentRef.current,
    })

  const changeBio = (e) => {
    const data = {...cv}
    data.bio[e.target.name] = e.target.value
    setCV(data)
  }

  const changeContact = (e) => {
    const data = {...cv}
    data.contact[e.target.name] = e.target.value
    setCV(data)
  }

  const changeSocial = (e) => {
    const data = {...cv}
    data.social[e.target.name] = e.target.value
    setCV(data)
  }

  const addEducation = () => {
    const newEducation = {
      university: '',
      degree: '',
      city: '',
      from: '',
      to: '',
    }
    setCV(prevState => ({...prevState, education: [...prevState.education, newEducation]}))
  }

  const changeEducation = (e, i) => {
    const data = {...cv}
    data.education[i][e.target.name] = e.target.value
    setCV(data)
  }

  const addExperience = () => {
    const newExperience = {
      company: '',
      position: '',
      city: '',
      from: '',
      to: '',
    }
    setCV(prevState => ({...prevState, experience: [...prevState.experience, newExperience]}))
  }

  const changeExperince = (e, i) => {
    const data = {...cv}
    data.experience[i][e.target.name] = e.target.value
    setCV(data)
  }

  return (
    <div className='body'>

      <header className='header'>
        <a href='/'><h1>CV Buider 🛠️</h1></a>
      </header>

      <div className='cv-body' ref={componentRef}>
        <div className='cv-left'>
          <section className='bio'>

            <div className='bio_img_container'>
              <label htmlFor="bio_img">
                  <img src={cv.bio.photo} alt="" className='bio_img' />
              </label>
              <div className='bio_icon_container'><i className="bio_icon fa-solid fa-upload"></i></div>
              <input name="bio_img" id="bio_img" type="file" accept="image/*" hidden />
            </div>

            {/* <Input fieldName="First Name" value={cv.bio.firstName} /> */}
            <input type="text" name="firstName" placeholder='First Name' value={cv.bio.firstName} onChange={changeBio} />
            <input type="text" name="lastName" placeholder='Last Name' value={cv.bio.lastName} onChange={changeBio} />
            <input className='designation' type="text" name="designation" placeholder='Designation' value={cv.bio.designation} onChange={changeBio} />
          </section>

          <section className='contact'>
            <h3 className='section_title'><i className="fa-solid fa-address-card"></i>Contact</h3>

            <div className='input_div'>
              <label htmlFor='email'><i className="fa-solid fa-envelope"></i></label>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder='Email' value={cv.contact.email} onChange={changeContact} />
            </div>

            <div className='input_div'>
              <label htmlFor="number"><i className="fa-solid fa-phone"></i></label>
              <label htmlFor="number">Phone</label>
              <input type="number" name="phone" id='phone' placeholder='Phone' value={cv.contact.phone} onChange={changeContact} />
            </div>

            <div className='input_div'>
              <label htmlFor="address"><i className="fa-solid fa-location-dot"></i></label>
              <label htmlFor="address">Address</label>
              <input type="text" name="address" id='address' placeholder='Address' value={cv.contact.address} onChange={changeContact} />
            </div>
          </section>

          <section className='social'>
            <h3 className='section_title'><i className="fa-solid fa-users"></i>Social</h3>

            <div className='input_div'>
              <label htmlFor="linkedin"><i className="fa-brands fa-linkedin"></i></label>
              <label htmlFor="linkedin">LinkedIn</label>
              <input type="url" name="linkedin" id='linkedin' placeholder='LinkedIn' value={cv.social.linkedin} onChange={changeSocial} />
            </div>
            
            <div className='input_div'>
              <label htmlFor="github"><i className="fa-brands fa-github"></i></label>
              <label htmlFor="github">GitHub</label>
              <input type="url" name="github" id='github' placeholder='GitHub' value={cv.social.github} onChange={changeSocial} />
            </div>
          </section>        
        </div>

        <div className='cv-right'>
          <section className='profile'>
            <h3 className='section_title'><i className="fa-solid fa-user"></i>Profile</h3>

            <div>
              <textarea placeholder='Describe yourself...' value={cv.profile.description}></textarea>
            </div>
          </section>

          <section className='education'>
            <div>
              <h3 className='section_title'><i className="fa-solid fa-building-columns"></i>Education</h3>
              <button onClick={addEducation}><i className="fa-solid fa-plus"></i> Add</button>
            </div>

            {cv.education.map((eduBlock, i) => 
              <div className='eduBlock' key={i}>
                <div className='eduBlock_icon'><i className="fa-solid fa-circle-chevron-right"></i></div>
                <div className='eduBlock_years'>
                  <input type="number" name="from" placeholder="From" value={eduBlock.from} onChange={(e) => changeEducation(e, i)} />
                  <span> - </span>
                  <input type="number" name="to" placeholder="To" value={eduBlock.to} onChange={(e) => changeEducation(e, i)} />
                </div>
                <div className='eduBlock_inputs'>
                  <input id='edu_university' type="text" name="university" placeholder='University' value={eduBlock.university} onChange={(e) => changeEducation(e, i)} />
                  <input id='edu_degree' type="text" name="degree" placeholder='Degree' value={eduBlock.degree} onChange={(e) => changeEducation(e, i)} />
                  <input id='edu_city' type="text" name="city" placeholder='City' value={eduBlock.city} onChange={(e) => changeEducation(e, i)} />
                </div>
              </div>
            )}
          </section>

          <section className='experience'>
            <div>
              <h3 className='section_title'><i className="fa-solid fa-briefcase"></i>Experience</h3>
              <button onClick={addExperience}><i className="fa-solid fa-plus"></i> Add</button>
            </div>

            {cv.experience.map((expBlock, i) => 
              <div className='expBlock' key={i}>
                <div className='expBlock_icon'><i className="fa-solid fa-circle-chevron-right"></i></div>
                <div className='expBlock_years'>
                  <input type="number" name="from" placeholder='From' value={expBlock.from} onChange={(e) => changeExperince(e, i)} />
                  <span> - </span>
                  <input type="number" name="to" placeholder='To' value={expBlock.to} onChange={(e) => changeExperince(e, i)} />
                </div>
                <div className='expBlock_inputs'>
                  <input type="text" name="company" placeholder='Company' value={expBlock.company} onChange={(e) => changeExperince(e, i)} />
                  <input type="text" name="position" placeholder='Position' value={expBlock.position} onChange={(e) => changeExperince(e, i)} />
                  <input type="text" name="city" placeholder='City' value={expBlock.city} onChange={(e) => changeExperince(e, i)} />
                </div>
              </div>
            )}
          </section>
        </div>
      </div>

      <div className='helper-buttons'>
        <button onClick={loadExampleCV}>Load Example</button>
        <button onClick={clearCV}>Clear</button>
        <button onClick={printCV}>Print</button>
      </div>

      <footer className='footer'>
        <p>All rights reserved.</p>
      </footer>
      
    </div>
  );
}

export default App;