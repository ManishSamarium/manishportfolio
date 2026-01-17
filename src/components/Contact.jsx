export default function Contact() {
  const contactLinks = [
    { icon: "📞", title: "Phone", value: "+91 8887435095", link: "tel:+918887435095" },
    { icon: "✉️", title: "Email", value: "sam68iiitr@gmail.com", link: "mailto:sam68iiitr@gmail.com" },
    { icon: "🐙", title: "GitHub", value: "github.com/ManishSamarium", link: "https://github.com/ManishSamarium" },
    { icon: "💼", title: "LinkedIn", value: "linkedin.com/in/manish-yadav", link: "https://www.linkedin.com/in/manish-yadav-91a0aa285/" },
  ];

  return (
    <section id="contact" className="w-full py-24 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-white">
            Get In <span className="text-teal-400">Touch</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out for collaboration, projects, or just a quick chat!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactLinks.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target={contact.link.startsWith('http') ? '_blank' : undefined}
              rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center hover:border-teal-500 hover:bg-gray-700 transition group transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition">{contact.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{contact.title}</h3>
              <p className="text-teal-400 font-medium text-sm hover:text-teal-300 transition break-all">
                {contact.value}
              </p>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
