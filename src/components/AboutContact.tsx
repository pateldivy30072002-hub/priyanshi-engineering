import { useState, FormEvent } from 'react';
import { Shield, Zap, Award, Mail, Phone, MapPin, Send, CheckCircle2, FileText, User, Loader2, AlertCircle, ExternalLink } from 'lucide-react';
import { IMAGES } from '../constants/images';
import { PILLARS } from '../data/engineeringData';
import { motion } from 'motion/react';

export default function AboutContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    range: 'Lifecycle Service',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // Send inquiry live via FormSubmit API to priyanshiengineering2020@gmail.com
      const response = await fetch('https://formsubmit.co/ajax/priyanshiengineering2020@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email || 'Not provided',
          phone: formData.phone,
          range: formData.range,
          message: formData.message || 'No additional details provided',
          _subject: `Priyanshi Engineering RFQ: ${formData.range} from ${formData.name}`
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setFormData({ name: '', email: '', phone: '', range: 'Lifecycle Service', message: '' });
        }, 5000);
      } else {
        throw new Error('Server response error');
      }
    } catch (err) {
      console.error('Submission error:', err);
      // Even if API is blocked by CORS/network, allow graceful fallback & mailto
      setErrorMessage('Network transmission encountered an issue. You can also send directly via your email client below.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getIcon = (id: string) => {
    switch (id) {
      case '01': return <Zap className="w-5 h-5 text-red" />;
      case '02': return <Shield className="w-5 h-5 text-red" />;
      case '03': return <Award className="w-5 h-5 text-red" />;
      default: return <Zap className="w-5 h-5 text-red" />;
    }
  };

  return (
    <section id="about" className="relative bg-white overflow-hidden border-b border-slate-200/60">
      {/* Background blueprint details */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-[0.22] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_right,rgba(226,59,54,0.03)_0%,transparent_70%)] pointer-events-none z-0" />

      {/* --- Part 1: About Us (Who We Are) --- */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Quote, and Compact Pillars */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <h2 className="font-sans text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                An engineering-first partner for substation assets.
              </h2>
              <p className="font-serif italic text-lg sm:text-xl text-slate-700 leading-relaxed border-l-2 border-red pl-6 py-2">
                “We support Odisha's industries, utilities, and infrastructure with premium, non-obsolete electrical supplies and expert engineering support.”
              </p>
            </motion.div>

            {/* Vertical Stacked Pillars list with Staggered Entrance Animations */}
            <div className="space-y-6">
              {PILLARS.map((pillar, index) => (
                <motion.div 
                  key={pillar.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                  className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl relative overflow-hidden group hover:border-red/40 hover:bg-slate-100/50 transition-colors flex flex-col sm:flex-row gap-5 items-start"
                >
                  <div className="absolute top-0 right-0 p-4 font-mono text-xl font-black text-slate-200/85 group-hover:text-red/10 transition-colors">
                    {pillar.id}
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-red/30 transition-colors">
                    {getIcon(pillar.id)}
                  </div>
                  <div className="space-y-2 flex-1">
                    <span className="block font-mono text-[9px] font-bold text-slate-500 group-hover:text-red uppercase tracking-widest transition-colors">
                      {pillar.tag}
                    </span>
                    <h3 className="font-sans text-base font-bold text-slate-900">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-xs text-slate-600 leading-relaxed font-light">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: High-Fidelity Visual Stack */}
          <div className="lg:col-span-5 relative space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Image 1: Industrial Switchgear Panel */}
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10 opacity-70" />
                <img 
                  src={IMAGES.switchgear} 
                  alt="Industrial Switchgear Assets" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-grid-blueprint opacity-15 pointer-events-none" />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="font-mono text-[9px] text-white bg-red border border-red-deep px-2.5 py-1 rounded-md shadow-sm uppercase tracking-wider font-bold">
                    PRIMARY SWITCHGEAR SEGMENT
                  </span>
                </div>
              </div>

              {/* Decorative Tech Blueprint Tag */}
              <div className="absolute -top-4 -right-4 bg-white border border-slate-200 px-3 py-1.5 rounded-lg font-mono text-[8px] text-slate-500 uppercase tracking-widest hidden sm:block shadow-lg">
                VCB OVERHAULING & SERV.
              </div>
            </motion.div>

            {/* Image 2: Grid Control Center */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="relative"
            >
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10 opacity-70" />
                <img 
                  src={IMAGES.controlCenter} 
                  alt="Odisha Grid Control Center Sourcing" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-grid-blueprint opacity-15 pointer-events-none" />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="font-mono text-[9px] text-white bg-slate-800 border border-slate-700 px-2.5 py-1 rounded-md shadow-sm uppercase tracking-wider font-bold">
                    GRID SOURCING LOGISTICS
                  </span>
                </div>
              </div>

              {/* Technical Indicator */}
              <div className="absolute -bottom-4 -left-4 bg-white border border-red/25 px-3 py-1.5 rounded-lg font-mono text-[8px] text-red uppercase tracking-widest hidden sm:block shadow-lg animate-pulse">
                STATEWIDE DISPATCH SYSTEM
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Elegant visual line separator between About and Contact */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-slate-200/80" />
      </div>

      {/* --- Part 2: Contact Us (Direct Coordinates & Inquiry Gateway) --- */}
      <div id="contact" className="max-w-7xl mx-auto px-6 pt-16 pb-24 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12"
        >
          <h2 className="font-sans text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
            Secure project initiation &amp; consultation.
          </h2>
          <p className="font-sans text-slate-600 font-light text-base sm:text-lg max-w-2xl">
            Initiate pricing requests, schedule emergency VCB breakdown services, or arrange a technical consultation with Snehamayee Das (Proprietor).
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact cards with Staggered Entrance Animations */}
            <div className="space-y-4">
              {/* Phone */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
                className="flex items-center gap-4 p-4.5 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-red/10 border border-red/35 flex items-center justify-center text-red shrink-0">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="block text-[9px] text-slate-500 uppercase tracking-widest font-semibold">Direct Hotline</span>
                  <a href="tel:+919853313256" className="block text-slate-900 font-bold text-base hover:text-red transition-colors">
                    +91 98533 13256
                  </a>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
                className="flex items-center gap-4 p-4.5 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="block text-[9px] text-slate-500 uppercase tracking-widest font-semibold">Email Correspondence</span>
                  <a href="mailto:priyanshiengineering2020@gmail.com" className="block text-slate-900 font-bold text-base hover:text-red transition-colors break-all">
                    priyanshiengineering2020@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* Offices */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
                className="flex items-start gap-4 p-4.5 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div className="space-y-2">
                  <div>
                    <span className="block text-[9px] text-slate-500 uppercase tracking-widest font-semibold">Corporate Office</span>
                    <span className="block text-slate-800 text-sm font-light mt-0.5">
                      Plot No. 129, Jajpur Road, Jajpur, Odisha - 755019
                    </span>
                  </div>
                  <div className="pt-2 border-t border-slate-200/80">
                    <span className="block text-[9px] text-slate-500 uppercase tracking-widest font-semibold">Bhubaneswar Branch</span>
                    <span className="block text-slate-800 text-sm font-light mt-0.5">
                      Plot No. 44, Patia, Bhubaneswar, Odisha - 751024
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Licensing */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.24 }}
                className="flex items-center gap-4 p-4.5 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-red/10 border border-red/25 flex items-center justify-center text-red shrink-0">
                  <Award className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="block text-[9px] text-slate-500 uppercase tracking-widest font-semibold">Regulatory Credentials</span>
                  <span className="block text-slate-800 text-xs font-semibold">
                    Class A Electrical License (Lic No. 1621-A/2016-Odisha)
                  </span>
                </div>
              </motion.div>
            </div>

          </div>

          {/* Right Column: Secure Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-7 bg-slate-50 border border-slate-200/90 p-8 md:p-10 rounded-3xl relative overflow-hidden shadow-sm"
          >
            <div className="absolute inset-0 bg-grid-blueprint-fine opacity-[0.15] pointer-events-none" />
            
            {isSubmitted ? (
              <div className="min-h-[400px] flex flex-col justify-center items-center text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-red animate-bounce" />
                <h3 className="font-sans font-black text-2xl text-slate-900">Message Sent Successfully</h3>
                <p className="font-sans text-slate-600 max-w-sm">
                  Thank you for contacting us. We've received your message and will get back to you as soon as possible.
                </p>
                <span className="font-mono text-[10px] text-red uppercase tracking-widest pt-4">
                  We appreciate your inquiry.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <span className="font-mono text-[9px] text-red font-bold tracking-widest uppercase block">Get in Touch</span>
                  <h3 className="font-sans font-extrabold text-2xl text-slate-900 tracking-tight">Contact Us</h3>
                </div>

                {/* Input Name */}
                <div className="space-y-2">
                  <label htmlFor="name-input" className="block font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    Full Name / Designation
                  </label>
                  <div className="relative">
                    <input
                      id="name-input"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rajesh Kumar Mohanty"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl font-sans text-sm text-slate-900 placeholder:text-slate-400 focus:border-red focus:outline-none transition-colors shadow-sm"
                    />
                  </div>
                </div>

                {/* Dual Row: Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="email-input" className="block font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      Business Email
                    </label>
                    <input
                      id="email-input"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. engineering.lead@company.com"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl font-sans text-sm text-slate-900 placeholder:text-slate-400 focus:border-red focus:outline-none transition-colors shadow-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone-input" className="block font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      Contact Phone
                    </label>
                    <input
                      id="phone-input"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 94370 12345"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl font-sans text-sm text-slate-900 placeholder:text-slate-400 focus:border-red focus:outline-none transition-colors shadow-sm"
                    />
                  </div>
                </div>

                {/* Dropdown: Range of Interest */}
                <div className="space-y-2">
                  <label htmlFor="range-select" className="block font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    Subject
                  </label>
                  <select
                    id="range-select"
                    value={formData.range}
                    onChange={(e) => setFormData({ ...formData, range: e.target.value })}
                    className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl font-sans text-sm text-slate-900 focus:border-red focus:outline-none transition-colors shadow-sm cursor-pointer"
                  >
                    <option value="Transformer Spares">Transformer Spares</option>
                    <option value="Switchgear Products">Switchgear Products</option>
                    <option value="MV Switchgear">MV Switchgear</option>
                    <option value="Numerical Relays">Numerical Relays</option>
                    <option value="Refurbished Relays">Refurbished Relays</option>
                    <option value="Lifecycle Service">Lifecycle Service &amp; AMC</option>
                    <option value="Other">Other (Please specify below)</option>
                  </select>
                </div>

                {/* Message Body */}
                <div className="space-y-2">
                  <label htmlFor="message-input" className="block font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    id="message-input"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please specify your technical requirements, equipment brand/model, substation voltage rating, or required services..."
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl font-sans text-sm text-slate-900 placeholder:text-slate-400 focus:border-red focus:outline-none transition-colors resize-none shadow-sm"
                  />
                </div>

                {/* Error Banner if API fails */}
                {errorMessage && (
                  <div className="p-4 bg-amber-50 border border-amber-200 text-amber-900 rounded-xl text-xs space-y-2">
                    <div className="flex items-center gap-2 font-semibold">
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                    <a
                      href={`mailto:priyanshiengineering2020@gmail.com?subject=${encodeURIComponent(`RFQ: ${formData.range} - ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nDivision: ${formData.range}\n\nDetails:\n${formData.message}`)}`}
                      className="inline-flex items-center gap-1.5 font-bold text-red hover:underline pt-1"
                    >
                      <span>Click here to open email client directly</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}

                {/* Submit button */}
                <div className="space-y-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-red hover:bg-red-deep disabled:bg-slate-400 text-white font-sans font-extrabold text-sm tracking-wider uppercase flex items-center justify-center gap-2.5 shadow-md active:scale-[0.98] transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending your message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-slate-500 font-mono text-center">
                    Messages are sent to <a href="mailto:priyanshiengineering2020@gmail.com" className="text-slate-700 underline font-semibold">priyanshiengineering2020@gmail.com</a>
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
