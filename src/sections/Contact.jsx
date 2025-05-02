import React from "react";

const Contact = () => {
    return (
        <div id="contact" className="bg-blue-500 py-4 md:px-0 px-8">
            <div className="flex flex-col md:items-center">
                <p className="text-2xl font-semibold text-white self-center">Contact</p>
                <div className="rounded md:w-1/2 bg-white px-8 py-8 mt-4">
                    <p className="font-bold text-lg">Let's Discuss</p>
                    <form className="flex flex-col gap-4 mt-4">
                        <input type="text" name="" id="" className="py-2 px-4 bg-gray-100 rounded-md text-sm" placeholder="Name" />
                        <input type="text" name="" id="" className="py-2 px-4 bg-gray-100 rounded-md text-sm" placeholder="Email" />
                        <textarea name="" id="" className="py-2 px-4 bg-gray-100 rounded-md text-sm h-[150px]" placeholder="Message"></textarea>
                        <button className="bg-blue-500 rounded-md py-2 px-2 font-semibold text-white hover:bg-yellow-500">Submit Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;