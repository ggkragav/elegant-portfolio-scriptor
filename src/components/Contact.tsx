const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-8">Get in Touch</h2>
        <p className="text-lg mb-8">
          Interested in collaborating or just want to say hello?
        </p>
        <a 
          href="mailto:hello@example.com"
          className="inline-block px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300"
        >
          Send a Message
        </a>
      </div>
    </section>
  );
};

export default Contact;