'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
}

interface FormErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    message?: string;
}

export default function ContactPage() {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error for this field when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            // Simulate API call - replace with actual endpoint
            await new Promise(resolve => setTimeout(resolve, 1500));

            // In production, send to your API endpoint:
            // const response = await fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData)
            // });

            console.log('Form submitted:', formData);
            setIsSubmitted(true);

            // Reset form after 3 seconds
            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    subject: 'General Inquiry',
                    message: ''
                });
            }, 3000);

        } catch (error) {
            console.error('Submission error:', error);
            // Handle error - could set an error state here
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="pt-24 pb-24 min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h1 className="text-5xl font-bold text-slate-900 mb-6">Get in Touch</h1>
                        <p className="text-xl text-slate-600 mb-12">
                            Whether you have a question about our services, pricing, or want to discuss a potential partnership, our team is ready to answer all your questions.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900">Location</h4>
                                    <p className="text-slate-500">Maldives</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900">Phone</h4>
                                    <p className="text-slate-500">+960 123 4567</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900">Email</h4>
                                    <a href="mailto:info@fasmala.com" className="text-slate-500 hover:text-orange-600 transition-colors">
                                        info@fasmala.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-lg">
                        {isSubmitted ? (
                            <div className="flex flex-col items-center justify-center py-12">
                                <CheckCircle className="w-16 h-16 text-green-600 mb-4" />
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                                <p className="text-slate-600 text-center">
                                    Thank you for contacting us. We'll get back to you within 24 hours.
                                </p>
                            </div>
                        ) : (
                            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-semibold text-slate-700 mb-2">
                                            First Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-xl border ${errors.firstName ? 'border-red-500' : 'border-slate-200'} focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all`}
                                            placeholder="John"
                                            aria-invalid={!!errors.firstName}
                                            aria-describedby={errors.firstName ? "firstName-error" : undefined}
                                        />
                                        {errors.firstName && (
                                            <p id="firstName-error" className="mt-1 text-sm text-red-500">{errors.firstName}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-semibold text-slate-700 mb-2">
                                            Last Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-xl border ${errors.lastName ? 'border-red-500' : 'border-slate-200'} focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all`}
                                            placeholder="Doe"
                                            aria-invalid={!!errors.lastName}
                                            aria-describedby={errors.lastName ? "lastName-error" : undefined}
                                        />
                                        {errors.lastName && (
                                            <p id="lastName-error" className="mt-1 text-sm text-red-500">{errors.lastName}</p>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-slate-200'} focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all`}
                                        placeholder="john@company.com"
                                        aria-invalid={!!errors.email}
                                        aria-describedby={errors.email ? "email-error" : undefined}
                                    />
                                    {errors.email && (
                                        <p id="email-error" className="mt-1 text-sm text-red-500">{errors.email}</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                                        Subject
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white"
                                    >
                                        <option>General Inquiry</option>
                                        <option>FMCG Trade</option>
                                        <option>Travel Agency Services</option>
                                        <option>Tax & Business Consultancy</option>
                                        <option>Construction Services</option>
                                        <option>Security Services</option>
                                        <option>Shipping Services</option>
                                        <option>Cleaning Services</option>
                                        <option>Multiple Services</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500' : 'border-slate-200'} focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all`}
                                        placeholder="How can we help you?"
                                        aria-invalid={!!errors.message}
                                        aria-describedby={errors.message ? "message-error" : undefined}
                                    />
                                    {errors.message && (
                                        <p id="message-error" className="mt-1 text-sm text-red-500">{errors.message}</p>
                                    )}
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full justify-center"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                            </form>
                        )}
                    </div>
                </div>

                <div className="mt-16 h-96 bg-slate-200 rounded-3xl relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 grayscale opacity-50 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center"></div>
                    <div className="bg-white px-6 py-4 rounded-xl shadow-xl z-10 flex items-center gap-3 animate-bounce">
                        <MapPin className="text-orange-600" />
                        <span className="font-bold text-slate-900">Maldives</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
