import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Linkedin, Calendar, MessageCircle } from "lucide-react";
import Aurora from "../components/Aurora";

export function ContactUs() {
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    const SERVICE_ID = "service_bf0zusv";
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
    <div className="bg-white">

      {/* ── Hero Header with Aurora ── */}
      <div className="relative bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <Aurora colorStops={["#0F172A", "#F59E0B", "#0F172A"]} blend={0.4} amplitude={0.8} speed={0.5} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10 flex items-center">
          <div
            className="inline-block px-10 py-8 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              border: "1px solid rgba(255,255,255,0.10)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
            }}
          >
            <h1 className="text-white font-bold text-[32px] sm:text-5xl mb-3">Contact Us</h1>
            <div className="w-20 h-[6px] bg-[#F59E0B]" />
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          {/* Intro */}
          <div className="mb-14 text-center">
            <p className="max-w-2xl mx-auto text-[#1F2937] text-lg">
              Ready to transform your operations? Get in touch with us to discuss how we can help you achieve sustainable competitive advantage.
            </p>
          </div>

          {/* ── Calendly Inline Embed — FIRST ── */}
          <div className="rounded-xl overflow-hidden border border-[#0F172A]/10 shadow-lg mb-16">
            <div className="bg-[#0F172A] px-8 py-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <h2 className="text-white font-bold text-[22px]">Book a Strategic Consultation</h2>
                <p className="text-white/60 text-[13px]">Select a time that works for you — no back-and-forth needed</p>
              </div>
            </div>
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/mk-muigaikamau/strategic-consultation-booking?month=2026-04"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

            {/* ── Contact Form ── */}
            <div className="bg-[#F9FAFB] p-8 md:p-12 rounded-lg border border-[#0F172A]/5">
              <h2 className="text-[#0F172A] font-bold text-[26px] mb-6">Send Us a Message</h2>

              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="user_name" className="block text-[#0F172A] font-medium mb-2 text-sm">Full Name *</label>
                    <input type="text" id="user_name" name="user_name" required className="w-full px-4 py-3 rounded border border-[#0F172A]/20 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="reply_to" className="block text-[#0F172A] font-medium mb-2 text-sm">Email Address *</label>
                    <input type="email" id="reply_to" name="reply_to" required className="w-full px-4 py-3 rounded border border-[#0F172A]/20 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent" />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[#0F172A] font-medium mb-2 text-sm">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded border border-[#0F172A]/20 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent" />
                </div>

                <div>
                  <label htmlFor="company" className="block text-[#0F172A] font-medium mb-2 text-sm">Company / Organization</label>
                  <input type="text" id="company" name="company" className="w-full px-4 py-3 rounded border border-[#0F172A]/20 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent" />
                </div>

                <div>
                  <label htmlFor="service_interest" className="block text-[#0F172A] font-medium mb-2 text-sm">Service Interest</label>
                  <select id="service_interest" name="service_interest" className="w-full px-4 py-3 rounded border border-[#0F172A]/20 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent">
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
                  <label htmlFor="message" className="block text-[#0F172A] font-medium mb-2 text-sm">Message *</label>
                  <textarea id="message" name="message" required rows={5} className="w-full px-4 py-3 rounded border border-[#0F172A]/20 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent resize-none" placeholder="Tell us about your operational challenges..."></textarea>
                </div>

                <button type="submit" className="w-full bg-[#F59E0B] text-[#0F172A] px-8 py-4 rounded font-bold text-lg hover:bg-[#b8952b] transition-colors flex items-center justify-center gap-2">
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* ── Contact Info ── */}
            <div className="space-y-8">
              <div>
                <h2 className="text-[#0F172A] font-bold text-[26px] mb-6">Get in Touch</h2>
                <p className="text-[#1F2937] text-[15px] leading-relaxed mb-8">
                  Whether you're looking to optimize your supply chain, execute a strategic transformation, or navigate a complex M&A integration, our team is here to help. Reach out to schedule a consultation.
                </p>
              </div>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0F172A] rounded flex items-center justify-center text-[#D4AF37] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[#0F172A] font-semibold text-lg mb-1">Our Location</h3>
                    <p className="text-[#1F2937] text-[15px] leading-relaxed">
                      Nairobi, Kenya<br />
                      Serving clients across East Africa, West Africa, and beyond
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0F172A] rounded flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[#0F172A] font-semibold text-lg mb-1">Email Us</h3>
                    <a href="mailto:mk@muigaikamau.pro" className="text-[#1F2937] text-[15px] hover:text-[#D4AF37] transition-colors">
                      mk@muigaikamau.pro
                    </a>
                    <p className="text-[#1F2937]/60 text-sm mt-1">Response within one business day guaranteed</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0F172A] rounded flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[#0F172A] font-semibold text-lg mb-1">Call Us</h3>
                    <a href="tel:+254757808808" className="text-[#1F2937] text-[15px] hover:text-[#D4AF37] transition-colors">
                      +254 757 808 808
                    </a>
                    <p className="text-[#1F2937]/60 text-sm mt-1">Monday - Friday: 8:00 AM - 5:00 PM EAT</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0F172A] rounded flex items-center justify-center text-[#D4AF37] shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[#0F172A] font-semibold text-lg mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/254757808808"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded font-semibold text-[14px] hover:bg-[#1ebe5d] transition-colors mt-1"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0F172A] rounded flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[#0F172A] font-semibold text-lg mb-1">Connect on LinkedIn</h3>
                    <a
                      href="https://www.linkedin.com/in/muigai-kamau"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#0F172A] text-white px-5 py-2.5 rounded font-semibold text-[14px] hover:bg-[#D4AF37] hover:text-[#0F172A] transition-colors mt-1"
                    >
                      <Linkedin className="w-4 h-4" />
                      Follow Muigai Kamau
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Service Commitment ── */}
          <div className="bg-[#0F172A] rounded-lg p-8 text-center">
            <h3 className="text-white font-bold text-xl mb-4">Service Commitment</h3>
            <p className="text-[#F9FAFB]/70 text-[15px] leading-relaxed max-w-2xl mx-auto">
              We guarantee a response to all inquiries within one business day. For urgent matters, please call or WhatsApp our office directly.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}