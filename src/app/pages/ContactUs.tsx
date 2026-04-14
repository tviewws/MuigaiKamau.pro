import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function ContactUs() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    // These IDs are now synced with your dashboard configuration
    const SERVICE_ID = "service_bb92r5u"; 
    const TEMPLATE_ID = "template_u3bimlr";
    const PUBLIC_KEY = "x0aTl9NHPhD_NzaFg";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
          alert("Success! We have received your message.");
          form.current?.reset();
      }, (error) => {
          alert("Something went wrong. Please check your browser console for details.");
          console.log(error.text);
      });
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h1 className="text-[#0F172A] font-bold text-[32px] sm:text-5xl mb-4">Contact Us</h1>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-[#1F2937] text-lg">
            Ready to transform your operations? Get in touch with us to discuss how we can help you achieve sustainable competitive advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <div className="bg-[#F9FAFB] p-8 md:p-12 rounded-lg border border-[#0F172A]/5">
            <h2 className="text-[#0F172A] font-bold text-[26px] mb-6">Send Us a Message</h2>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="user_name" className="block text-[#0F172A] font-medium mb-2 text-sm">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"  /* Matches {{user_name}} in your dashboard */
                    required
                    className="w-full px-4 py-3 rounded border border-[#0F172A]/20 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="reply_to" className="block text-[#0F172A] font-medium mb-2 text-sm">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="reply_to"
                    name="reply_to" /* Matches {{reply_to}} in your dashboard */
                    required
                    className="w-full px-4 py-3 rounded border border-[#0F172A]/20 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-[#0F172A] font-medium mb-2 text-sm">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone" /* Matches {{phone}} in your dashboard */
                  className="w-full px-4 py-3 rounded border border-[#0F172A]/20 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-[#0F172A] font-medium mb-2 text-sm">
                  Company / Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company" /* Matches {{company}} in your dashboard */
                  className="w-full px-4 py-3 rounded border border-[#0F172A]/20 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="service_interest" className="block text-[#0F172A] font-medium mb-2 text-sm">
                  Service Interest
                </label>
                <select
                  id="service_interest"
                  name="service_interest" /* Matches {{service_interest}} in your dashboard */
                  className="w-full px-4 py-3 rounded border border-[#0F172A]/20 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                >
                  <option value="">Select a service...</option>
                  <option value="Supply Chain Optimization">Supply Chain Optimization</option>
                  <option value="Operational Efficiency">Operational Efficiency & Performance</option>
                  <option value="M&A Due Diligence">M&A Due Diligence & Integration</option>
                  <option value="Digital Transformation">Digital Transformation & Automation</option>
                  <option value="Strategic Execution">Strategic Execution</option>
                  <option value="Executive Advisory">Executive & Board Advisory</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-[#0F172A] font-medium mb-2 text-sm">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message" /* Matches {{message}} in your dashboard */
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded border border-[#0F172A]/20 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent resize-none"
                  placeholder="Tell us about your operational challenges..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#D4AF37] text-[#0F172A] px-8 py-4 rounded font-bold text-lg hover:bg-[#b8952b] transition-colors flex items-center justify-center gap-2"
              >
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-[#0F172A] font-bold text-[26px] mb-6">Get in Touch</h2>
              <p className="text-[#1F2937] text-[15px] leading-relaxed mb-8">
                Whether you're looking to optimize your supply chain, execute a strategic transformation, or navigate a
                complex M&A integration, our team is here to help. Reach out to schedule a consultation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0F172A] rounded flex items-center justify-center text-[#D4AF37] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0F172A] font-semibold text-lg mb-1">Our Location</h3>
                  <p className="text-[#1F2937] text-[15px] leading-relaxed">
                    Nairobi, Kenya
                    <br />
                    Serving clients across East Africa, West Africa, and beyond
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0F172A] rounded flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0F172A] font-semibold text-lg mb-1">Email Us</h3>
                  <a href="mailto:info@mkconsulting.co.ke" className="text-[#1F2937] text-[15px] hover:text-[#D4AF37] transition-colors">
                    info@mkconsulting.co.ke
                  </a>
                  <p className="text-[#1F2937]/60 text-sm mt-1">Response within one business day guaranteed</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0F172A] rounded flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[#0F172A] font-semibold text-lg mb-1">Call Us</h3>
                  <a href="tel:+254700000000" className="text-[#1F2937] text-[15px] hover:text-[#D4AF37] transition-colors">
                    +254 (0) 700 000 000
                  </a>
                  <p className="text-[#1F2937]/60 text-sm mt-1">Monday - Friday: 9:00 AM - 6:00 PM EAT</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0F172A] rounded-lg p-8 mt-12">
              <h3 className="text-white font-bold text-xl mb-4">Service Commitment</h3>
              <p className="text-[#F9FAFB]/70 text-[15px] leading-relaxed">
                We guarantee a response to all inquiries within one business day. For urgent matters, please call our office directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}