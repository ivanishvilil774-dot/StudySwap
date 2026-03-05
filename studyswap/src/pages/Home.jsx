import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home(){
    const [email, setEmail] = useState("");
    const [isNewsletterSubmitted, setIsNewsletterSubmitted] = useState(false);

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        if (email) {
        setIsNewsletterSubmitted(true);
        setEmail("");
        setTimeout(() => setIsNewsletterSubmitted(false), 3000);
        }
    };

    return (
        <div className="bg-[#f0f6f4] font-sans antialiased text-gray-800">
        {/* Navigation */}
        <nav className="container mx-auto px-6 lg:px-8 py-5 flex items-center justify-between flex-wrap gap-4">
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-[#57C785] rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-green-200 group-hover:scale-110 transition-transform duration-300">
                <span>SS</span>
            </div>
            <span className="text-[#2A7B9B] font-semibold text-2xl tracking-tight group-hover:text-[#1f607b] transition-colors">StudySwap</span>
            </div>

            {/* Nav Buttons */}
            <div className="flex gap-3">
                <Link to="/signin">
                    <button className="px-5 py-2.5 border-2 border-[#2A7B9B] text-[#2A7B9B] rounded-full font-semibold text-sm hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-sm">
                        Sign In
                    </button>
                </Link>
                <Link to="/signup">
                    <button className="px-5 py-2.5 bg-[#2A7B9B] text-white rounded-full font-semibold text-sm shadow-md shadow-blue-200 hover:bg-[#1f607b] hover:scale-105 transition-all duration-300">
                        Sign Up
                    </button>
                </Link>
            </div>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-6 lg:px-8 pt-16 pb-20 md:pt-20 md:pb-28">
            <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-[#57C785]/20 rounded-full text-[#0c2e20] font-semibold text-sm mb-6 animate-pulse">
                🎓 10,000+ students already learning
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-800 leading-tight">
                Learn Anything. <br />
                <span className="text-[#2A7B9B] relative">
                Teach Anything.
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                    <path d="M1 10C50 4 150 4 199 10" stroke="#57C785" strokeWidth="3" strokeLinecap="round"/>
                </svg>
                </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Exchange knowledge with fellow students using StudySwap's credit
                system. Earn credits by helping others, spend them to get the help
                you need.
            </p>
            
            {/* Stats Bar */}
            <div className="mt-8 flex justify-center gap-8 flex-wrap">
                <div className="text-center">
                <div className="text-2xl font-bold text-[#2A7B9B]">50K+</div>
                <div className="text-sm text-gray-500">Study Sessions</div>
                </div>
                <div className="text-center">
                <div className="text-2xl font-bold text-[#2A7B9B]">15K+</div>
                <div className="text-sm text-gray-500">Happy Students</div>
                </div>
                <div className="text-center">
                <div className="text-2xl font-bold text-[#2A7B9B]">100+</div>
                <div className="text-sm text-gray-500">Subjects</div>
                </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup" className="px-8 py-4 bg-[#57C785] text-[#0c2e20] rounded-full font-semibold text-lg shadow-lg shadow-green-200 hover:bg-[#45b372] hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center">
                    Get Started <span className="text-xl">→</span>
                </Link>
                <Link to="/signin" className="px-8 py-4 border-2 border-[#2A7B9B] text-[#2A7B9B] rounded-full font-semibold text-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300">
                    Sign In
                </Link>
            </div>
            </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-6 lg:px-8 py-16 md:py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-14">
            How it <span className="text-[#2A7B9B] relative">
                works
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#57C785] rounded-full"></span>
            </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/70 border border-white/50 backdrop-blur-sm text-center hover:scale-105 hover:shadow-2xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-[#2A7B9B]/10 rounded-2xl flex items-center justify-center mx-auto mb-5 text-3xl font-bold text-[#2A7B9B] group-hover:bg-[#2A7B9B] group-hover:text-white transition-all duration-300">
                1
                </div>
                <h3 className="text-xl font-semibold mb-3">Create an account</h3>
                <p className="text-gray-500">
                Sign up in seconds and join a community of learners.
                </p>
            </div>
            {/* Step 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/70 border border-white/50 text-center hover:scale-105 hover:shadow-2xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-[#57C785]/20 rounded-2xl flex items-center justify-center mx-auto mb-5 text-3xl font-bold text-[#57C785] group-hover:bg-[#57C785] group-hover:text-white transition-all duration-300">
                2
                </div>
                <h3 className="text-xl font-semibold mb-3">
                Help others & earn credits
                </h3>
                <p className="text-gray-500">
                Teach subjects you know and get credits for every session.
                </p>
            </div>
            {/* Step 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/70 border border-white/50 text-center hover:scale-105 hover:shadow-2xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-[#2A7B9B]/10 rounded-2xl flex items-center justify-center mx-auto mb-5 text-3xl font-bold text-[#2A7B9B] group-hover:bg-[#2A7B9B] group-hover:text-white transition-all duration-300">
                3
                </div>
                <h3 className="text-xl font-semibold mb-3">
                Use credits to get help
                </h3>
                <p className="text-gray-500">
                Spend credits to learn from other students whenever you're stuck.
                </p>
            </div>
            </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-6 lg:px-8 py-16 md:py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-14">
            Why students <span className="text-[#57C785] relative">
                love
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#2A7B9B] rounded-full"></span>
            </span> StudySwap
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
            {/* feature 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-[#57C785] hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-[#2A7B9B]/10 rounded-xl flex items-center justify-center mb-5 text-xl text-[#2A7B9B] group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-users text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                Browse by subject
                </h3>
                <p className="text-gray-500">
                Find helpers in math, languages, programming, and more — all in one place.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#f0f6f4] text-sm rounded-full">Math</span>
                <span className="px-3 py-1 bg-[#f0f6f4] text-sm rounded-full">Programming</span>
                <span className="px-3 py-1 bg-[#f0f6f4] text-sm rounded-full">Languages</span>
                </div>
            </div>
            {/* feature 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-[#57C785] hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-[#57C785]/20 rounded-xl flex items-center justify-center mb-5 text-xl text-[#57C785] group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-coins text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                Credit-based system
                </h3>
                <p className="text-gray-500">
                Fair exchange: earn credits when you teach, spend them when you learn.
                </p>
                <div className="mt-4 flex items-center gap-2">
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#57C785] rounded-full" style={{width: '75%'}}></div>
                </div>
                <span className="text-sm font-semibold text-[#57C785]">75 earned</span>
                </div>
            </div>
            {/* feature 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-[#57C785] hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-[#2A7B9B]/10 rounded-xl flex items-center justify-center mb-5 text-xl text-[#2A7B9B] group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-star text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                Rating system
                </h3>
                <p className="text-gray-500">
                Trusted helpers with ratings so you always get quality support.
                </p>
                <div className="mt-4 flex items-center gap-1">
                {[1,2,3,4,5].map((star) => (
                    <i key={star} className="fas fa-star text-yellow-400"></i>
                ))}
                <span className="ml-2 text-sm text-gray-500">4.9/5 average</span>
                </div>
            </div>
            </div>
        </section>

        {/* Testimonials Section - NEW */}
        <section className="container mx-auto px-6 lg:px-8 py-16 md:py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-14">
            What <span className="text-[#2A7B9B]">students</span> say
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg relative">
                <i className="fas fa-quote-left absolute text-4xl text-[#57C785]/20 top-4 right-4"></i>
                <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2A7B9B] to-[#57C785] rounded-full flex items-center justify-center text-white font-bold">
                    JD
                </div>
                <div>
                    <h4 className="font-semibold">Jessica Davis</h4>
                    <p className="text-sm text-gray-500">Computer Science</p>
                </div>
                </div>
                <p className="text-gray-600 relative z-10">
                "StudySwap helped me pass my algorithms final! Used my programming credits to get math tutoring."
                </p>
                <div className="mt-3 flex items-center gap-1">
                {[1,2,3,4,5].map((star) => (
                    <i key={star} className="fas fa-star text-yellow-400 text-sm"></i>
                ))}
                </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg relative">
                <i className="fas fa-quote-left absolute text-4xl text-[#57C785]/20 top-4 right-4"></i>
                <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2A7B9B] to-[#57C785] rounded-full flex items-center justify-center text-white font-bold">
                    MR
                </div>
                <div>
                    <h4 className="font-semibold">Mike Rodriguez</h4>
                    <p className="text-sm text-gray-500">Biology Major</p>
                </div>
                </div>
                <p className="text-gray-600 relative z-10">
                "I've earned 200+ credits teaching Spanish. Now learning French for free!"
                </p>
                <div className="mt-3 flex items-center gap-1">
                {[1,2,3,4,5].map((star) => (
                    <i key={star} className="fas fa-star text-yellow-400 text-sm"></i>
                ))}
                </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg relative md:col-span-2 lg:col-span-1">
                <i className="fas fa-quote-left absolute text-4xl text-[#57C785]/20 top-4 right-4"></i>
                <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2A7B9B] to-[#57C785] rounded-full flex items-center justify-center text-white font-bold">
                    AL
                </div>
                <div>
                    <h4 className="font-semibold">Anna Liu</h4>
                    <p className="text-sm text-gray-500">Engineering</p>
                </div>
                </div>
                <p className="text-gray-600 relative z-10">
                "The rating system is amazing - always find qualified tutors. Highly recommend!"
                </p>
                <div className="mt-3 flex items-center gap-1">
                {[1,2,3,4,5].map((star) => (
                    <i key={star} className="fas fa-star text-yellow-400 text-sm"></i>
                ))}
                </div>
            </div>
            </div>
        </section>

        {/* Newsletter Section - NEW */}
        <section className="container mx-auto px-6 lg:px-8 py-16">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                📬 Stay updated with StudySwap
                </h2>
                <p className="text-gray-600 mb-6">
                Get tips, new subject announcements, and success stories straight to your inbox.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#57C785] focus:border-transparent"
                    required
                />
                <button
                    type="submit"
                    className="px-6 py-3 bg-[#2A7B9B] text-white rounded-full font-semibold hover:bg-[#1f607b] transition-colors duration-300"
                >
                    Subscribe
                </button>
                </form>
                {isNewsletterSubmitted && (
                <div className="mt-4 text-[#57C785] font-semibold animate-bounce">
                    ✅ Thanks for subscribing!
                </div>
                )}
                <p className="text-xs text-gray-400 mt-4">
                No spam, unsubscribe anytime.
                </p>
            </div>
            </div>
        </section>

        {/* Call To Action */}
        <section className="container mx-auto px-6 lg:px-8 py-16 md:py-24">
            <div className="bg-gradient-to-br from-[#2A7B9B] to-[#57C785] rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-32 translate-y-32"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
                Ready to swap knowledge?
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-10 relative z-10">
                Join thousands of students already learning and teaching on StudySwap.
            </p>
            <Link to="/signup" className="px-10 py-4 bg-white text-[#2A7B9B] rounded-full font-semibold text-lg shadow-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 relative z-10">
                Create free account
            </Link>
            <p className="mt-4 text-sm opacity-75 relative z-10">
                ✨ No credit card required • Free credits for new members
            </p>
            </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 mt-10">
            <div className="container mx-auto px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-4 gap-10">
                {/* Brand & description */}
                <div className="col-span-1">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-[#57C785] rounded-lg flex items-center justify-center text-white font-bold">
                    SS
                    </div>
                    <span className="text-[#2A7B9B] font-semibold text-xl">StudySwap</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    A student-friendly platform to exchange knowledge through a fair credit system.
                </p>
                <div className="flex gap-3">
                    <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#57C785] hover:text-white transition-colors">
                    <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#57C785] hover:text-white transition-colors">
                    <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#57C785] hover:text-white transition-colors">
                    <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
                </div>

                {/* Quick links */}
                <div>
                <h4 className="font-semibold text-gray-800 mb-4">Links</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                    <li><a href="#" className="hover:text-[#2A7B9B] transition-colors">About</a></li>
                    <li><a href="#" className="hover:text-[#2A7B9B] transition-colors">How it works</a></li>
                    <li><a href="#" className="hover:text-[#2A7B9B] transition-colors">Subjects</a></li>
                    <li><a href="#" className="hover:text-[#2A7B9B] transition-colors">FAQ</a></li>
                </ul>
                </div>

                {/* Support */}
                <div>
                <h4 className="font-semibold text-gray-800 mb-4">Support</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                    <li><a href="#" className="hover:text-[#2A7B9B] transition-colors">Contact</a></li>
                    <li><a href="#" className="hover:text-[#2A7B9B] transition-colors">Privacy</a></li>
                    <li><a href="#" className="hover:text-[#2A7B9B] transition-colors">Terms</a></li>
                    <li><a href="#" className="hover:text-[#2A7B9B] transition-colors">Help Center</a></li>
                </ul>
                </div>

                {/* Download App - NEW */}
                <div>
                <h4 className="font-semibold text-gray-800 mb-4">Download App</h4>
                <div className="space-y-2">
                    <button className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors">
                    <i className="fab fa-apple text-xl"></i>
                    <div className="text-left">
                        <div className="text-xs">Download on the</div>
                        <div className="text-sm font-semibold">App Store</div>
                    </div>
                    </button>
                    <button className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors">
                    <i className="fab fa-google-play text-xl"></i>
                    <div className="text-left">
                        <div className="text-xs">GET IT ON</div>
                        <div className="text-sm font-semibold">Google Play</div>
                    </div>
                    </button>
                </div>
                </div>
            </div>

            <div className="border-t border-gray-100 mt-10 pt-6 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} StudySwap. All rights reserved. Made with ❤️ for students.
            </div>
            </div>
        </footer>
        </div>
    );
};

export default Home;