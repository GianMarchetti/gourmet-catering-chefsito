import { useState } from "react";
import AnimatedInput from "./animatedInput";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [peopleAmount, setPeopleAmount] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          date,
          peopleAmount,
          message,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="contact-form my-3">
      <h2>Contact Us</h2>
      <p className="py-2">
        We offer full-service catering for any event, large or small. We
        understand your needs and we will cater the food to satisfy the biggerst
        criteria of them all, both look and taste. Do not hesitate to contact
        us.
      </p>
      <p className="text-lg text-gray-600 py-4">
        <b>Catering Service, 42nd Living St, 43043 New York, NY</b>
      </p>
      <p className="py-2">
        You can also contact us by phone 00553123-2323 or email
        catering@catering.com, or you can send us a message here:
      </p>
      <form onSubmit={handleSubmit} className="my-2">
        <AnimatedInput
          placeholder="Name"
          className="px-2 py-4 border-b w-full formInput"
          type="text"
          required
          name="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <AnimatedInput
          placeholder="Email"
          className="px-2 py-4 border-b w-full formInput"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <AnimatedInput
          placeholder="Phone"
          className="px-2 py-4 border-b w-full formInput"
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        
        <p className="py-2">
          <input
            className="px-2 py-4 border-b w-full formInput"
            type="datetime-local"
            placeholder="Date and time"
            required
            name="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </p>

        <AnimatedInput
          placeholder="How many people"
          className="px-2 py-4 border-b w-full formInput"
          type="number"
          required
          name="People"
          value={peopleAmount}
          onChange={(event) => setPeopleAmount(event.target.value)}
        />

        <AnimatedInput
          placeholder="Message \ Special requirements"
          className="px-2 py-4 border-b w-full formInput"
          type="text"
          required
          name="Message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />

          <button className="my-4 p-2 font-semibold btnSend" type="submit">
            <span>Send Message</span>
          </button>
      </form>
      {submitted ? (
        <p className="bg-green-500 w-fit p-2">
          ✔️ Thank you for contacting us! We will get back to you soon.
        </p>
      ) : (
        <p className="bg-yellow-400 w-fit p-2">
          ⚠️ Please fill out the form and we will check if the date is
          available.
        </p>
      )}
    </div>
  );
};

export default Contact;
