import React from 'react';
import LegalPage from '../components/LegalPage';

export default function Terms() {
    return (
        <LegalPage title="Terms of Service" lastUpdated="December 8, 2025">
            <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p>
                    By accessing or using the Aether Automotive website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Use of Services</h2>
                <p>
                    You agree to use our services only for lawful purposes and in accordance with these Terms. You are prohibited from violating or attempting to violate the security of the website or our systems.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property</h2>
                <p>
                    All content, features, and functionality on this website, including but not limited to text, graphics, logos, and software, are the exclusive property of Aether Automotive and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
                <p>
                    In no event shall Aether Automotive be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Governing Law</h2>
                <p>
                    These Terms shall be governed and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
                </p>
            </section>
        </LegalPage>
    );
}
