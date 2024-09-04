// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import content from "../../content/content";
import classNames from "classnames";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xkgwbwrz");

  if (state.succeeded) {
    return (
      <div className="body-responsive text-white py-3">
        {content.footer.form_submit}
      </div>
    );
  }

  const formInput = classNames(
    "bg-black border-b-2 border-white text-white body-responsive p-3 outline-none placeholder:opacity-100 placeholder:text-white placeholder:body-responsive focus:placeholder:opacity-50"
  );

  return (
    <form
      autoComplete="off"
      className="flex flex-col gap-4 laptop:w-1/2 mobile:w-full h-full"
      onSubmit={handleSubmit}
    >
      <input
        className={formInput}
        required
        id="name"
        type="name"
        name="name"
        placeholder="Full name"
      />
      <input
        className={formInput}
        required
        id="email"
        type="email"
        name="email"
        placeholder="Email address"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        className={formInput + " border-2" + " pl-4" + " resize-none" + " h-28"}
        required
        id="message"
        name="message"
        placeholder="Your message"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        className="lg-button-white"
        type="submit"
        disabled={state.submitting}
      >
        {content.footer.button}
      </button>
    </form>
  );
}

// import React, { useEffect, useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import content from '../../content/content';

// export default function ContactForm() {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_7zjr7n5', 'template_gw2f2h8', form.current, {
//         publicKey: 'Tkf2hcdmEgqyP5msr',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//   };

//   return (
//     <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
//         <div id="contact-name" className='NAMES-WRAPPER flex flex-row'>
//         <label className='text-white bg-black border-white border'>First Name</label>
//         <input required className="bg-black border-white border text-white" type="text" name="from_firstName" />
//         <label className='text-white bg-black border-white border'>Last Name</label>
//         <input required className="bg-black border-white border text-white" type="text" name="from_lastName" />
//         </div>
//       <label>Email</label>
//       <input required type="email" id="contact-email" name="from_email" />
//       <label>Message</label>
//       <textarea id="contact-msg" name="message" />
//         <div className="FOOTER-LINK w-fit">
//             <input id="sendMsg" className="FOOTER-BUTTON cursor-pointer w-fit border-2 rounded-md border-white text-white tablet:heading2-5 mobile:mobile-heading3 uppercase py-2 px-10 hover:text-black hover:bg-white transition-all duration-200" type="submit" value={content.footer.button} />
//             </div>

//     </form>
//   );
// };
