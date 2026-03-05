import React, { useState } from "react";

function SingUp() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.username && formData.email && formData.password === formData.confirmPassword) {
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({ username: "", email: "", password: "", confirmPassword: "" });
            }, 3000);
        }
    };

    return (
        <div className="min-h-screen bg-[#f0f6f4] font-sans antialiased text-gray-800">
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
                    <button className="px-5 py-2.5 border-2 border-[#2A7B9B] text-[#2A7B9B] rounded-full font-semibold text-sm hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-sm">
                        Sign In
                    </button>
                </div>
            </nav>

            {/* Sign Up Section */}
            <section className="container mx-auto px-6 lg:px-8 py-16 flex items-center justify-center min-h-[calc(100vh-100px)]">
                <div className="w-full max-w-md">
                    {/* Card */}
                    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-white/50">
                        <div className="text-center mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                                Create Account
                            </h1>
                            <p className="text-gray-600">
                                Join thousands of students on StudySwap
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Username Field */}
                            <div>
                                <label htmlFor="username" className="block text-sm font-semibold text-gray-800 mb-2">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    placeholder="Choose your username"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#57C785] focus:border-transparent transition-all duration-300"
                                    required
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#57C785] focus:border-transparent transition-all duration-300"
                                    required
                                />
                            </div>

                            {/* Password Field */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-semibold text-gray-800 mb-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Create a strong password"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#57C785] focus:border-transparent transition-all duration-300"
                                    required
                                />
                            </div>

                            {/* Confirm Password Field */}
                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-800 mb-2">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Confirm your password"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#57C785] focus:border-transparent transition-all duration-300"
                                    required
                                />
                            </div>

                            {/* Sign Up Button */}
                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-[#57C785] text-[#0c2e20] rounded-full font-semibold text-lg shadow-lg shadow-green-200 hover:bg-[#45b372] hover:scale-105 transition-all duration-300 mt-6"
                            >
                                Create Account
                            </button>
                        </form>

                        {/* Sign In Link */}
                        <div className="text-center mt-6">
                            <p className="text-gray-600">
                                Already have an account?{" "}
                                <a href="#" className="text-[#2A7B9B] font-semibold hover:text-[#1f607b] transition-colors">
                                    Sign In
                                </a>
                            </p>
                        </div>

                        {/* Terms & Conditions */}
                        <p className="text-xs text-gray-400 text-center mt-6">
                            By signing up, you agree to our{" "}
                            <a href="#" className="text-[#2A7B9B] hover:underline">
                                Terms & Conditions
                            </a>
                        </p>

                        {/* Success Message */}
                        {isSubmitted && (
                            <div className="mt-4 p-4 bg-[#57C785]/20 border border-[#57C785] rounded-xl text-[#0c2e20] text-center font-semibold animate-bounce">
                                ✅ Account created successfully!
                            </div>
                        )}
                    </div>

                    {/* Features Highlight */}
                    <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                        <div>
                            <div className="text-2xl font-bold text-[#2A7B9B]">✨</div>
                            <p className="text-xs text-gray-600 mt-1">Free to Join</p>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-[#57C785]">🎓</div>
                            <p className="text-xs text-gray-600 mt-1">Start Learning</p>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-[#2A7B9B]">🚀</div>
                            <p className="text-xs text-gray-600 mt-1">Instant Access</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SingUp;