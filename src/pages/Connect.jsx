import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Toast from "../components/Toast";

const Connect = () => {
  const [toastOpen, setToastOpen] = useState(false);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_stw1s5d",
        "template_01yzk8i",
        formRef.current,
        "bNuS0t7MjBy6nfplM"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setToastOpen(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleCloseToast = () => {
    setToastOpen(false);
  };

  return (
    <div id="contact-section" className="mt-20 sm:10">
      <p className="text-slate-400 text-3xl text-center sm:text-6xl hover:text-slate-300 duration-300">
        Contact
      </p>
      <main className=" place-items-center">
        <Toast
          message="Message Send to Sahil..."
          open={toastOpen}
          onClose={handleCloseToast}
        />

        <div className="flex flex-col md:flex-row justify-center items-centergap-y-8 md:gap-y-0 md:gap-x-20 p-4">
          <div className="w-full md:w-auto">
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="flex flex-col gap-y-4"
            >
              <label className="text-white">Name</label>
              <input
                type="text"
                className="bg-transparent text-white outline-none border-[0.1px] border-zinc-400 p-2"
                name="from_name"
                required
              />
              <label className="text-white">Email</label>
              <input
                type="email"
                className="bg-transparent text-white outline-none border-[0.1px] border-zinc-400 p-2"
                name="from_email"
                required
              />
              <label className="text-white">Message</label>
              <textarea
                className="bg-transparent text-white outline-none border-[0.1px] border-zinc-400 p-2"
                name="message"
                required
              />
              <input
                type="submit"
                className="text-white border-[0.1px] border-zinc-400 p-2 cursor-pointer hover:bg-zinc-800 transition-colors"
                value="Send"
              />
            </form>
          </div>

          <div className="w-full md:w-auto mt-10 sm:mt-10 flex justify-center">
            <img
              src="https://img.hotimg.com/Space.png"
              className="w-48 h-48 md:w-80 md:h-80 object-cover floating"
              alt="Astronaut in Space"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Connect;
