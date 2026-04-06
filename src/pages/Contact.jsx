import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    repairId: ''
  });
  const [status, setStatus] = useState({ loading: false, success: null, message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (data.success) {
        setStatus({ loading: false, success: true, message: 'Message sent successfully! We will get back to you soon.' });
        setFormData({ name: '', email: '', subject: '', message: '', repairId: '' });
      } else {
        setStatus({ loading: false, success: false, message: 'Failed to send message. Please try again or call us.' });
      }
    } catch (error) {
      setStatus({ loading: false, success: false, message: 'Error connecting to server. Please try again later.' });
    }
  };

  return (
    <section className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-glow backdrop-blur-xl sm:p-8">
      <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr]">
        <div className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-primary">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold text-white heading-mono sm:text-4xl">
              Talk to our technical team.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Send a request, check repair status, or book an installation appointment. Our shop is ready to help with any electronics or security need.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5 rounded-[2rem] border border-white/10 bg-slate-950/85 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="relative block overflow-hidden rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="peer w-full bg-transparent text-sm text-slate-100 outline-none placeholder-transparent"
                  placeholder="Name"
                />
                <span className="pointer-events-none absolute left-4 top-4 text-xs text-slate-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-[10px]">
                  Name
                </span>
              </label>
              <label className="relative block overflow-hidden rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="peer w-full bg-transparent text-sm text-slate-100 outline-none placeholder-transparent"
                  placeholder="Email"
                />
                <span className="pointer-events-none absolute left-4 top-4 text-xs text-slate-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-[10px]">
                  Email
                </span>
              </label>
            </div>
            <label className="relative block overflow-hidden rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-4">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="peer w-full bg-transparent text-sm text-slate-100 outline-none placeholder-transparent"
                placeholder="Subject"
              />
              <span className="pointer-events-none absolute left-4 top-4 text-xs text-slate-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-[10px]">
                Subject
              </span>
            </label>
            <label className="relative block overflow-hidden rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                className="peer w-full bg-transparent text-sm text-slate-100 outline-none placeholder-transparent"
                placeholder="Message"
              />
              <span className="pointer-events-none absolute left-12 top-4 text-xs text-slate-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-[10px]">
                Message
              </span>
            </label>
            <label className="relative block overflow-hidden rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-4">
              <input
                type="text"
                name="repairId"
                value={formData.repairId}
                onChange={handleChange}
                className="peer w-full bg-transparent text-sm text-slate-100 outline-none placeholder-transparent"
                placeholder="Repair Status Lookup / ID"
              />
              <span className="pointer-events-none absolute left-4 top-4 text-xs text-slate-400 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-[10px]">
                Repair Status Lookup / ID
              </span>
            </label>
            
            {status.message && (
              <div className={`rounded-xl p-3 text-sm ${status.success ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                {status.message}
              </div>
            )}

            <button 
              type="submit" 
              disabled={status.loading}
              className="btn-tech w-full justify-center py-3 text-sm font-semibold text-slate-950 disabled:opacity-50"
            >
              {status.loading ? 'Sending Request...' : 'Submit Request'}
            </button>
          </form>
        </div>
        <div className="space-y-5">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-6">
            <p className="text-sm uppercase tracking-[0.35em] text-primary">Location</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Visit our shop at Buruburu Jimlizer building ground floor for diagnostics, pickup, and expert sales support in a secure store environment.
            </p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90">
            <iframe
              title="Larrium Tech location map"
              className="h-80 w-full border-0"
              src="https://maps.google.com/maps?q=Buruburu%20Jimlizer%20building%20ground%20floor&t=&z=16&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
