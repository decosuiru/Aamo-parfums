"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-6 pt-40 pb-24">
      <h1 className="text-4xl font-serif tracking-widest text-center mb-16">CONTACT US</h1>
      
      <form onSubmit={handleSubmit} className="space-y-12">
        <div>
          <label className="block text-xs tracking-widest mb-4 uppercase">Name</label>
          <input 
            required 
            name="name" 
            type="text" 
            className="w-full border-b border-gray-300 pb-2 outline-none focus:border-black transition-colors bg-transparent"
          />
        </div>

        <div>
          <label className="block text-xs tracking-widest mb-4 uppercase">Email</label>
          <input 
            required 
            name="email" 
            type="email" 
            className="w-full border-b border-gray-300 pb-2 outline-none focus:border-black transition-colors bg-transparent"
          />
        </div>

        <div>
          <label className="block text-xs tracking-widest mb-4 uppercase">Message</label>
          <textarea 
            required 
            name="message" 
            rows={4} 
            className="w-full border-b border-gray-300 pb-2 outline-none focus:border-black transition-colors bg-transparent resize-none"
          ></textarea>
        </div>

        <button 
          disabled={status === "loading"}
          type="submit" 
          className="w-full bg-black text-white py-4 tracking-[0.2em] text-sm hover:bg-gray-800 transition-colors disabled:opacity-50"
        >
          {status === "loading" ? "SENDING..." : "SEND MESSAGE"}
        </button>

        {status === "success" && <p className="text-green-600 text-center tracking-widest text-sm mt-4">Message sent successfully.</p>}
        {status === "error" && <p className="text-red-600 text-center tracking-widest text-sm mt-4">Something went wrong. Please try again.</p>}
      </form>
    </div>
  );
}