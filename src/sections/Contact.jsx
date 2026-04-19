import React, { useState } from "react";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = form;
        window.location.href = `mailto:iqbalfirman.a25@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`;
    };

    return (
        <div id="contact" className="bg-blue-500 py-8 px-8 md:px-0">
            <div className="flex flex-col md:items-center">
                <p className="text-2xl font-semibold text-white self-center">Contact</p>
                <div className="rounded md:w-1/2 bg-white px-8 py-8 mt-4">
                    <p className="font-bold text-lg">Let's Discuss</p>
                    <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            id="contact-name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="py-2 px-4 bg-gray-100 rounded-md text-sm"
                            placeholder="Name"
                        />
                        <input
                            type="email"
                            name="email"
                            id="contact-email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="py-2 px-4 bg-gray-100 rounded-md text-sm"
                            placeholder="Email"
                        />
                        <textarea
                            name="message"
                            id="contact-message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            className="py-2 px-4 bg-gray-100 rounded-md text-sm h-[150px] resize-none"
                            placeholder="Message"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 rounded-md py-2 px-2 font-semibold text-white hover:bg-yellow-500 transition-colors"
                        >
                            Submit Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
