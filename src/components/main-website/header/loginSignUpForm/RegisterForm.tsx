import { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "src/utils/services";
const registerDataInitalState = {
  email: "",
  password: "",
  name: "",
  phone: "",

}
// const headerStyle = {
//   borderRadius: "8px",
//   boxShadow: "5px -5px 10px #fff, 4px 5px 10px rgba(216, 218, 225, 0.7)",
//   boder: "1px solid #fff",
// }

export default function RegisterForm({ setShowLoginForm, setShowRegisterForm }: any) {
  const [next, setNext] = useState(false);
  const [registerData, setRegisterData] = useState(registerDataInitalState);
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  // const [errorMessages, setErrorMessages] = useState({
  //   name: '',
  //   phone: '',
  //   collegeName:"",
  // });

  async function handleSubmit(e: any) {
    e.preventDefault();
    const payload = {
      name: registerData.name,
      email: registerData.email,
      phone: registerData.phone,
      password: registerData.password
    }
    if (!isChecked) {
      setErrorMessage("Please accept the terms and conditions to proceed.");
      return;
    }
    if (!next) {
      setNext(true)
      return
    } else {
      const resp = await register(payload)
      if (resp) {
        setShowLoginForm(true)
        setShowRegisterForm(false)
        setNext(false)
        setRegisterData(registerDataInitalState)
      } else {
        setRegisterData(registerDataInitalState)
      }
    }
  }

  function handleChange(e: any) {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value
    })

  }
  // const handleInvalid = (event:React.FormEvent<HTMLInputElement>, name:string) => {
  //   event.preventDefault();
  //   setErrorMessages({
  //     ...errorMessages,
  //     [name]: 'Please enter a valid value'
  //   });
  // };
  function handleCheckboxChange() {
    setIsChecked(!isChecked);
    setErrorMessage(""); // Clear error when checkbox is checked
  }
  return (
    <div>
      <form className="font-popins w-full" onSubmit={handleSubmit}>
        {!next ?
          <>
            <div className="google-btn w-full h-full mt-7 flex justify-center">
              <h1 className="font-bold font-poppins text-2xl">Registration Form</h1>
            </div>
            <div className="user-form">
              <div className="form-middle lg:px-5">
                <div className="user-login-form mt-8 max-h-[300px] overflow-y-auto pr-2">
                <MyInput placeholder="Full Name"
                    name="name"
                    value={registerData.name}
                    onChange={handleChange}
                    required
                    pattern="^[a-zA-Z\s]*$"
                    title="please enter valid name"
                  />
                  <MyInput
                    placeholder="Your Email"
                    name="email"
                    value={registerData.email}
                    onChange={handleChange}
                    type="email"
                    required

                  />
                  <MyInput
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={registerData.password}
                    onChange={handleChange}
                    required

                  />
                  
                  <MyInput placeholder="Mobile No"
                    type="tel"
                    name="phone"
                    value={registerData.phone}
                    onChange={handleChange}
                    required
                    maxLength={10}
                    minLength={10}
                    pattern="^[0-9]{10}$"
                    title="please enter valid number"
                  />
                  <div className="form-footer mt-8 lg:px-5">
                    <div className="mx-2 flex items-start gap-2">
                      <input
                        type="checkbox"
                        id="termsCheckbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        className="mt-[3px]"
                      />
                      <label htmlFor="termsCheckbox" className="text-xs text-slate-600">
                        By submitting this form, you accept and agree to our{" "}
                        <Link to={"/terms-and-conditions"}>
                          <span className="text-xs text-blue-600">terms and conditions</span>
                        </Link>
                      </label>
                    </div>
                    {errorMessage && <p className="text-red-500 text-xs mt-1">{errorMessage}</p>}
                  </div>
                </div>
              </div>
              <div className="form-footer mt-8 lg:px-5">
                <div className="submit-btn w-full flex justify-center">
                  <button type="submit" className="popUpDropBox w-3/4 h-10 lg:h-12 font-bold rounded-[5px] border-[#e3e3e3] border-[1px] shadow-md bg-[#fefefe] text-blue-500 hover:text-[#e67e22]transition-all duration-500 ">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </>
          :
          <>
            <div className="user-form my-[5rem]">
              <div className="form-middle mt-5 lg:px-5">
                <div className="user-login-form mt-10">
                  <MyInput placeholder="Full Name"
                    name="name"
                    value={registerData.name}
                    onChange={handleChange}
                    required
                    pattern="^[a-zA-Z\s]*$"
                    title="please enter valid name"
                  />
                  <MyInput placeholder="Mobile No"
                    type="tel"
                    name="phone"
                    value={registerData.phone}
                    onChange={handleChange}
                    required
                    maxLength={10}
                    minLength={10}
                    pattern="^[0-9]{10}$"
                    title="please enter valid number"
                  />
                </div>
              </div>
              <div className="form-footer mt-8 lg:px-5">
                <div className="mx-2">
                  <p className="text-xs text-slate-600">By submitting this form , you accept and agree to our <Link to={"/terms-and-conditions"}><span className="text-xs text-blue-600">terms and conditions</span></Link></p>
                </div>
                <div className="submit-btn w-full mt-8 flex justify-center">
                  <button type="submit" className="popUpDropBox w-3/4 h-10 lg:h-12 font-bold rounded-[5px] border-[#e3e3e3] border-[1px] shadow-md bg-[#fefefe] text-blue-500 hover:text-[#e67e22]transition-all duration-500 ">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </>}
      </form>

    </div>

  )
}

function MyInput({ type = "text", placeholder, ...props }: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
  return (
    <div className="mb-4">
      <input {...props} className="shadow appearance-none border h-[2.5rem] rounded-[5px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type={type} placeholder={placeholder} />
    </div>
  );
}