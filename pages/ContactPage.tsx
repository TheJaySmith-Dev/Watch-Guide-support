import React, { useState } from 'react';
import { Mail, MessageSquare, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    device: 'iPhone',
    iosVersion: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-[80vh]">
      <div className="bg-slate-50 border-b border-slate-200 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Contact Support</h1>
          <p className="text-slate-600 max-w-xl mx-auto">Found a bug? Have a feature request? We'd love to hear from you. Fill out the form below or send us an email directly.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Info Sidebar */}
          <div className="md:col-span-1 space-y-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-600" /> Direct Email
              </h3>
              <p className="text-slate-600 mb-2">Prefer email? Reach us at:</p>
              <a href="mailto:support@watchguide.app" className="text-blue-600 font-medium hover:underline">support@watchguide.app</a>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" /> Response Time
              </h3>
              <p className="text-slate-600">We aim to respond to all inquiries within <span className="font-semibold text-slate-900">24 hours</span> during business days.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h4 className="font-semibold text-slate-900 mb-2">Before you ask...</h4>
              <p className="text-sm text-slate-600 mb-4">Have you checked our troubleshooting guide?</p>
              <a href="#/troubleshooting" className="text-sm text-blue-600 font-medium hover:underline">View Troubleshooting &rarr;</a>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-in fade-in duration-500">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-green-900 mb-2">Message Sent!</h3>
                <p className="text-green-800">Thank you for contacting us. We'll get back to you shortly at {formData.email}.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-green-700 font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <input 
                      required
                      type="email" 
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Device Model</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="e.g. iPhone 15 Pro"
                      value={formData.device}
                      onChange={e => setFormData({...formData, device: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">iOS Version</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="e.g. iOS 17.4"
                      value={formData.iosVersion}
                      onChange={e => setFormData({...formData, iosVersion: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">How can we help?</label>
                  <textarea 
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Please describe the issue or your feedback in detail..."
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
