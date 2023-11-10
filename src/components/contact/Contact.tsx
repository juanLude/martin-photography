import { useEffect } from "react";
import ContactForm from "./ContactForm";
import Footer from "../Footer/Footer";

const Contact = () => {
  useEffect(() => {
    document.title = "Martin Scarponi | Photgraphy";
  });
  return (
    <>
      <ContactForm />
      <Footer />
    </>
    // <article className="flex flex-col min-h-screen sm:col-span-5 md:col-span-4 justify-center items-center p-2 gap-16 mb-10 ">
    /* <h2 className="text-4xl text-center uppercase text-black mt-32">
        Contact
      </h2>
      <p>Submit an enquiry to see if your date is available.</p> */

    // </article>
  );
};

export default Contact;
