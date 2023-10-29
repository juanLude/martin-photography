import React, { useEffect, useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
//images
import OK from "../../assets/images/ok.png";

// dotenv.config();
//keys
const serviceId = process.env.REACT_APP_SERVICE_ID!;
const templateId = process.env.REACT_APP_TEMPLATE_ID!;
const userId = process.env.REACT_APP_USER_ID!;
const serverUrl = process.env.REACT_APP_SERVER_URL!;
const captchaSecret = process.env.REACT_APP_CAPTCHA_S!;
const captchaKey = process.env.REACT_APP_CAPTCHA_K!;

console.log(serverUrl);

export interface formValueI {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
}

export interface errorObjI {
  firstname?: string;
  lastname?: string;
  email?: string;
  message?: string;
}

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const captchaRef = useRef<ReCAPTCHA>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // State to track whether the success message is displayed
  const [successMessageDisplayed, setSuccessMessageDisplayed] = useState(false);
  const [formValue, setFormValue] = useState<formValueI>({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });
  const [formError, setFormError] = useState<errorObjI>({});
  const [submit, setSubmit] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setFormError(validateForm(formValue));
    setLoading(true);
    //retrieve submission token
    let token = captchaRef.current?.getValue();

    let formVal = form.current;
    formVal?.current?.reset();
    captchaRef.current?.reset();
    //wait till token is confirmed
    await verifyToken(token!);
    if (Object.keys(validateForm(formValue)).length > 0) {
      setLoading(false);
      return null;
    } else {
      emailjs.sendForm(serviceId, templateId, formVal!, userId).then(
        (result) => {
          if (result.text === "OK") {
            setSubmit(true);
            setFormValue({
              firstname: "",
              lastname: "",
              email: "",
              message: "",
            });
            setSuccessMessageDisplayed(true); // Display the success message
          }
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  };
  // Use useEffect to trigger navigation after 2 seconds
  useEffect(() => {
    if (successMessageDisplayed) {
      const timeout = setTimeout(() => {
        navigate("/"); // Navigate to the root page
      }, 2000); // 2 seconds
      return () => clearTimeout(timeout); // Clean up the timeout if the component unmounts
    }
  }, [successMessageDisplayed, navigate]);

  const validateForm = (value: formValueI) => {
    let errors: errorObjI = {};
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!value.firstname) {
      errors.firstname = "Please enter your name";
    } else if (value.firstname.length < 3) {
      errors.firstname = "Please enter a valid name";
    }
    if (!value.lastname) {
      errors.lastname = "Please enter your lastname";
    } else if (value.lastname.length < 4) {
      errors.lastname = "Please enter a valid lastname";
    }
    if (!value.email) {
      errors.email = "Please enter your email";
    } else if (!emailRegex.test(value.email)) {
      errors.email = "Please enter valid email";
    }
    if (!value.message) {
      errors.message = "Please write a message";
    } else if (value.message.length < 5) {
      errors.message = "Please enter at least 5 characters";
    }

    return errors;
  };
  const handleValidation = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormValue({ ...formValue, [e.currentTarget.id]: e.currentTarget.value });
  };

  const verifyToken = async (token: string) => {
    try {
      const response = await fetch(serverUrl, {
        method: "POST",
        body: JSON.stringify({
          secret: captchaSecret,
          token,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      if (data.response === "Successful") {
        return true;
      } else return false;
      // Handle the response from the server here
    } catch (error: any) {
      console.error("Error while verifying reCAPTCHA:", error.message);
      return false;
    }
  };
  console.log("captchaKey", captchaKey);

  return (
    <React.Fragment>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="loader-container">
            <img
              className="spinner"
              // src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2dzNDhuejZ1d2VhNnY1bmxrNjl2ZmZiaXM2dDVzZjMzb2hjN2ZieCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/Rd755PrtAEhZLLTt2N/giphy.gif"
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTdvMTBhYzQ5ZWZ2cmNrbXNrNmgwM2VqanY5ejEwNDI0bmg0bGV4OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zUYnySVEILN50cDUls/giphy.gif"
              alt=""
              aria-hidden="true"
            />
          </div>
        </div>
      ) : submit && Object.keys(formError).length === 0 ? (
        <div className="flex justify-center items-center min-h-screen">
          <article className="flex flex-col gap-2  items-center w-90 max-w-lg mt-20">
            <img max-w-full="true" src={OK} alt="" aria-hidden="true" />
            <h2 className=" tracking-wide text-black uppercase text-2xl ">
              Thank you!
            </h2>
            <p className=" tracking-wide text-black ">
              Your message has been sent successfully
            </p>
            {/* <p className="block tracking-wide text-black mb-2 text-center">
            In order for me to answer you back via email, please make sure to
            provide your real email. You can also contact me on socials which
            you can find in the side menu.
          </p> */}
            {/* <button
            onClick={() => setSubmit(false)}
            className="shadow bg-black hover:bg-blue-400 smooth-transition focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          >
            Send again
          </button> */}
          </article>
        </div>
      ) : (
        <>
          <article className="flex flex-col min-h-screen sm:col-span-5 md:col-span-4 justify-center items-center p-2 gap-16 mb-10 ">
            <h2 className="text-4xl text-center uppercase text-black mt-32">
              Contact
            </h2>
            <p>Submit an enquiry to see if your date is available.</p>

            <form
              ref={form}
              id="recaptcha"
              className="w-full max-w-lg"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs  mb-2"
                    htmlFor="firstname"
                  >
                    First Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    id="firstname"
                    onChange={handleValidation}
                    value={formValue.firstname}
                    name="firstname"
                  />
                  <span className="input-validation-error text-red-600">
                    {formError.firstname}
                  </span>
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs mb-2"
                    htmlFor="lastname"
                  >
                    Last Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="lastname"
                    type="text"
                    onChange={handleValidation}
                    value={formValue.lastname}
                    name="lastname"
                  />
                  <span className="input-validation-error text-red-600">
                    {formError.lastname}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs mb-2"
                    htmlFor="email"
                  >
                    E-mail
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    type="email"
                    onChange={handleValidation}
                    value={formValue.email}
                    name="email"
                  />
                  <span className="input-validation-error text-red-600">
                    {formError.email}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs  mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                    id="message"
                    onChange={handleValidation}
                    value={formValue.message}
                    name="message"
                  />
                  <span className="input-validation-error text-red-600">
                    {formError.message}
                  </span>
                </div>
              </div>
              <ReCAPTCHA
                className="flex flex-wrap mb-6 g-recaptcha"
                sitekey={captchaKey}
                ref={captchaRef}
              />
              <div className="md:flex md:items-center">
                <div className="md:w-1/3">
                  <button
                    className="shadow bg-blue-600 hover:bg-blue-400 smooth-transition focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
                <div className="md:w-2/3"></div>
              </div>
            </form>
          </article>
        </>
      )}
    </React.Fragment>
  );
};

export default ContactForm;
