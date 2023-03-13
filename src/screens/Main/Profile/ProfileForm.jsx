import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/Profile.css'
import Cookies from 'universal-cookie';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { getImformation, updateInformation } from '../../../store/action/ProfileAction';
const cookies = new Cookies();

function ProfileForm() {
  const Dispatch = useDispatch();
  const navigate = useNavigate();

  const getInformationReducer = useSelector((state) => state.getInformationReducer)
  const updateInformationReducer = useSelector((state) => state.updateInformationReducer)

  useEffect(() => {
    if (!cookies.get('ddAdminToken')) {
      navigate("/");
    }
    Dispatch(getImformation());
  }, []);
  const [registerForm, setRegisterForm] = useState({
    name: "",
    lastName: "",
    phone: "",
    gender: "",
    country: "",
  });
  const [fieldError, setfieldError] = useState(null);
  const { data } = updateInformationReducer;
  const history = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = registerForm.name;
    const lastName = registerForm.lastName;
    const phone = registerForm.phone;
    const gender = registerForm.gender;
    const country = registerForm.country;


    if (!registerForm.name || !registerForm.lastName || !registerForm.phone || !registerForm.gender || !registerForm.country) {
      setfieldError("Please fill all the fields");
      return false;
    } else {
      setfieldError(null);
    }
   
   
    // console.log(name,lastName,phone,gender[0].toUpperCase,country,"valuecheck")
    if (name && lastName && phone && country && gender) {
      Dispatch(
        updateInformation(
          registerForm.name,
          registerForm.lastName,
          registerForm.phone,
          registerForm.gender[0],
          registerForm.country,
          history
        )
      );
    }
  };

  useEffect(() => {
    if (!cookies.get('ddAdminToken')) {
      history("/");
    }
  }, [history, data]);
  const Fname = useState(
    getInformationReducer && getInformationReducer.allUserData && getInformationReducer.allUserData.data && getInformationReducer.allUserData.data.user && getInformationReducer.allUserData.data.user.firstName
  )
  const Lname = useState(
    getInformationReducer && getInformationReducer.allUserData && getInformationReducer.allUserData.data && getInformationReducer.allUserData.data.user && getInformationReducer.allUserData.data.user.lastName
  )
  const email = useState(
    getInformationReducer && getInformationReducer.allUserData && getInformationReducer.allUserData.data && getInformationReducer.allUserData.data.user && getInformationReducer.allUserData.data.user.email
  )
  const phone = useState(
    getInformationReducer && getInformationReducer.allUserData && getInformationReducer.allUserData.data && getInformationReducer.allUserData.data.user && getInformationReducer.allUserData.data.user.phone
  )
  const gender = useState(
    getInformationReducer && getInformationReducer.allUserData && getInformationReducer.allUserData.data && getInformationReducer.allUserData.data.user && getInformationReducer.allUserData.data.user.gender
  )
  const country = useState(
    getInformationReducer && getInformationReducer.allUserData && getInformationReducer.allUserData.data && getInformationReducer.allUserData.data.user && getInformationReducer.allUserData.data.user.country
  )
  // console.log(gender[0], 'checek')
 
  return (
    <div className='form-div'>
      <h1>Profile</h1>
      <Form className='Profile-form'>
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', margin: '5%' }}>
          <div style={{ width: '100%' }}>
            <Form.Group className="input-field" controlId="formBasicName">
              <Form.Label>First Name</Form.Label>
              <Form.Control className='input-place' type="text" placeholder={Fname[0]}
                onChange={(e) =>
                  setRegisterForm({ ...registerForm, name: e.target.value })
                }
                value={registerForm.name} />
            </Form.Group>
            <Form.Group className="input-field" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control className='input-place'readOnly type="email" placeholder={email[0]} />

            </Form.Group>
            <Form.Group className="input-field">
              <Form.Label>Gender</Form.Label>
              <Form.Control className='input-place' type="text" placeholder={gender[0]}
                onChange={(e) =>
                  setRegisterForm({ ...registerForm, gender: e.target.value })
                }
                value={registerForm.gender} />
             
            </Form.Group>
          </div>
          <div style={{ width: '100%' }}>
            <Form.Group className="input-field" controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control className='input-place' type="text" placeholder={Lname[0]}
                onChange={(e) =>
                  setRegisterForm({ ...registerForm, lastName: e.target.value })
                }
                value={registerForm.lastName} />
            </Form.Group>
            <Form.Group className="input-field">
              <Form.Label>Contact</Form.Label>
              <Form.Control className='input-place' type="text" placeholder={phone[0]}
                onChange={(e) =>
                  setRegisterForm({ ...registerForm, phone: e.target.value })
                }
                value={registerForm.phone} />

            </Form.Group>

            <Form.Group className="input-field">
              <Form.Label>Country</Form.Label>
              <Form.Control className='input-place' type="text" placeholder={country[0]}
                onChange={(e) =>
                  setRegisterForm({ ...registerForm, country: e.target.value })
                }
                value={registerForm.country} />
             
            </Form.Group>
            
           
          </div>


        </div>
        <Button variant="primary" type="submit" className='btn' onClick={(e) => handleSubmit(e)}>


          Submit
        </Button>
        {fieldError && <p style={{
          color: "red", margin: '0%',

          marginLeft: '50%'
        }}>{fieldError}</p>}
      </Form>

    </div>
  )
}

export default ProfileForm
