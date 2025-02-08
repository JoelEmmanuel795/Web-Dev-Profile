import { useState } from "react";
import emailjs from "emailjs-com";

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    setLoading(true);
    try {
      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          to_name: "Joel Gamonez",
          from_name: data.firstName,
          reply_to: data.email,
          type: data.type, // Send type of enquiry
          message: data.comment,
        },
        process.env.REACT_APP_EMAILJS_USER_ID
      );

      if (result.status === 200) {
        setResponse({
          type: "success",
          message: `Thanks for your submission, ${data.firstName}! I have received your email and will get back to you shortly.`,
        });
      } else {
        throw new Error("EmailJS API call failed");
      }
    } catch (error) {
      setResponse({
        type: "error",
        message: "Something went wrong, please try again later!",
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
