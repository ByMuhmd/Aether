import React from 'react';

export default function Privacy() {
    return (
        <div className="bg-black min-h-screen text-white pt-32 pb-20">
            <div className="container max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
                <p className="text-gray-400 mb-12">Last updated: December 8, 2025</p>

                <div className="space-y-12 text-gray-300 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                        <p className="mb-4">
                            We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, request a test drive, or contact customer support. This may include your name, email address, phone number, and location.
                        </p>
                        <p>
                            When you use our vehicles, we may collect telematics data, including vehicle performance, location, and usage patterns, to improve our services and safety features.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                        <p>
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>Provide, maintain, and improve our products and services.</li>
                            <li>Process transactions and send related information.</li>
                            <li>Send you technical notices, updates, security alerts, and support messages.</li>
                            <li>Respond to your comments, questions, and requests.</li>
                            <li>Communicate with you about products, services, offers, and events.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
                        <p>
                            We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@aether.com" className="text-blue-500 hover:underline">privacy@aether.com</a>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
