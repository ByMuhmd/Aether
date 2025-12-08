import React from 'react';

export default function Cookies() {
    return (
        <div className="bg-black min-h-screen text-white pt-32 pb-20">
            <div className="container max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-8">Cookie Policy</h1>
                <p className="text-gray-400 mb-12">Last updated: December 8, 2025</p>

                <div className="space-y-12 text-gray-300 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
                        <p>
                            Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
                        <p className="mb-4">
                            We use cookies for the following purposes:
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li><strong className="text-white">Essential Cookies:</strong> Necessary for the website to function properly.</li>
                            <li><strong className="text-white">Performance Cookies:</strong> Help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
                            <li><strong className="text-white">Functional Cookies:</strong> Allow the website to remember choices you make (such as your username, language, or the region you are in).</li>
                            <li><strong className="text-white">Marketing Cookies:</strong> Used to track visitors across websites to display ads that are relevant and engaging.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
                        <p>
                            You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
