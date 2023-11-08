import {useForm,ValidationError} from '@formspree/react'

export default function Contact() {
    const [state, handleSubmit] = useForm("xzblwvay");

  return (
    <div className="flex flex-col py-8 space-y-4 items-center">
      <h2 className="text-4xl text-darkblue">Contact Me</h2>
      <p className="text-gray-600">
        Have a question or want to get in touch? Feel free to reach out!
      </p>
      <div className="flex flex-col  items-center">
        <div className="bg-white rounded-lg p-4 shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-darkblue text-base font-semibold"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-darkblue text-base font-semibold"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Your Email"
                required
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-darkblue text-base font-semibold"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full px-3 py-2 border rounded-lg h-40"
                placeholder="Your Message"
                required
              ></textarea>
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-darkblue text-white py-2 rounded-lg font-semibold hover:bg-blue-700"
              disabled={state.submitting}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
