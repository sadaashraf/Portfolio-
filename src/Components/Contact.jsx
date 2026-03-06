const Contact = () => {
  return (
    <section
      id="contact"
      className="px-10 py-24 bg-gradient-to-b from-black via-slate-900 to-black"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Contact Info */}
        <div>

          <h2 className="text-3xl font-bold mb-4">
            Get <span className="text-purple-500">In Touch</span>
          </h2>

          <p className="text-gray-400 mb-6">
            Feel free to contact me for collaboration or any project
            discussion.
          </p>

          <div className="space-y-3 text-gray-300">

            <p>
              📧 <span className="text-gray-400">Email:</span>{" "}
              nayeemashraf92@gmail.com
            </p>

            <p>
              📍 <span className="text-gray-400">Location:</span>{" "}
              Islamabad, Pakistan
            </p>

          </div>

        </div>

        {/* Contact Form */}
        <form className="space-y-4 bg-slate-900/60 p-8 rounded-xl border border-slate-800 backdrop-blur-md">

          <input
            className="w-full bg-slate-900 border border-slate-800 p-3 rounded-lg focus:border-purple-500 outline-none"
            placeholder="Your Name"
          />

          <input
            type="email"
            className="w-full bg-slate-900 border border-slate-800 p-3 rounded-lg focus:border-purple-500 outline-none"
            placeholder="Email"
          />

          <textarea
            rows="4"
            className="w-full bg-slate-900 border border-slate-800 p-3 rounded-lg focus:border-purple-500 outline-none"
            placeholder="Message"
          />

          <button className="bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 rounded-lg w-full hover:opacity-90 transition">
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
};

export default Contact;