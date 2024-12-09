import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="mb-6 text-lg text-gray-400">Feel free to reach out to me for any questions or opportunities!</p>
      <form className="w-full max-w-md bg-gray-800 p-6 rounded-md shadow-md">
        <h3 className="text-xl font-bold mb-4">Email Me 🚀</h3>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="w-full p-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full p-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-purple-500 outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-purple-600 rounded hover:bg-purple-700 transition duration-300 text-white font-bold"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
