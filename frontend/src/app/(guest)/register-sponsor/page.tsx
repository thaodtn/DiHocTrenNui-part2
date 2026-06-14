"use client";
import React, { useActionState } from "react";
import { User, Mail, ShieldAlert, Lock, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import heartBg from "@/assets/images/background/heart.jpg";
import { registerSponsorAction } from "@/services/registerSponsor";

export default function RegisterSponsorPage() {
    const [state, formAction, isPending] = useActionState(registerSponsorAction, {
        success: false,
        error: null,
        data: null
    });

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-yellow-400 selection:text-primary-900 flex items-center justify-center p-6 md:p-12 lg:p-16">
            {/* Main Card */}
            <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[550px] animate-in fade-in zoom-in duration-300">

                {/* Left Side - Image Background */}
                <div className="relative w-full md:w-1/2 bg-primary-900 overflow-hidden flex items-center justify-center min-h-[250px] md:min-h-full">
                    <Image
                        src={heartBg}
                        alt="Heart background"
                        className="absolute inset-0 w-full h-full object-cover opacity-80"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-transparent flex flex-col justify-end p-8 text-white">
                        <h3 className="text-2xl font-bold mb-2">Đồng Hành Cùng Trẻ Em Vùng Cao</h3>
                        <p className="text-sm opacity-90 leading-relaxed">
                            Mỗi sự đóng góp từ các Nhà tài trợ đều góp phần mang lại tương lai tươi sáng và cơ hội đi học cho trẻ em nghèo vùng núi.
                        </p>
                    </div>
                </div>

                {/* Right Side - Form/Content */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white relative">
                    {state.success && state.data ? (
                        /* Success View */
                        <div className="w-full space-y-6 animate-in slide-in-from-bottom duration-500">
                            <div className="flex justify-center">
                                <div className="bg-green-100 p-3 rounded-full text-green-600 animate-bounce">
                                    <CheckCircle2 size={48} />
                                </div>
                            </div>

                            <div className="text-center">
                                <h2 className="text-2xl font-bold text-gray-800">Đăng ký thành công!</h2>
                                <p className="text-sm text-gray-500 mt-2">
                                    Tài khoản Nhà tài trợ của bạn đã được khởi tạo trong hệ thống.
                                </p>
                            </div>

                            {/* Credentials Display Card */}
                            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 space-y-4">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-500 font-medium">Tên đăng nhập:</span>
                                    <span className="font-semibold text-gray-800">{state.data.username}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm border-t border-gray-200/50 pt-2.5">
                                    <span className="text-gray-500 font-medium">Email liên kết:</span>
                                    <span className="font-semibold text-gray-800">{state.data.email}</span>
                                </div>
                            </div>

                            {/* Status warning alert */}
                            <div className="flex items-start space-x-2 bg-amber-50 border border-amber-200 p-3.5 rounded-xl text-amber-800 text-xs">
                                <ShieldAlert size={16} className="shrink-0 text-amber-600 mt-0.5" />
                                <span className="leading-relaxed">
                                    <strong>Lưu ý:</strong> Tài khoản của bạn đang ở trạng thái chờ kích hoạt. Một email xác nhận sẽ được gửi đến email đăng ký của bạn để kích hoạt tài khoản.
                                </span>
                            </div>

                            {/* Back to Login link */}
                            <div className="pt-2 text-center">
                                <Link
                                    href="/login"
                                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-800 to-primary-900 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all font-semibold text-sm tracking-wide"
                                >
                                    <span>Đến trang Đăng nhập</span>
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    ) : (
                        /* Registration Form View */
                        <div className="w-full max-w-sm mx-auto space-y-6">
                            <div className="text-center md:text-left">
                                <h2 className="text-3xl font-bold text-gray-800">Đăng ký Nhà tài trợ</h2>
                                <p className="text-sm text-gray-500 mt-2">
                                    Vui lòng nhập thông tin để tạo tài khoản tài trợ mới.
                                </p>
                            </div>

                            <form className="space-y-5" action={formAction}>
                                {/* Username input */}
                                <div className="space-y-1.5">
                                    <label htmlFor="username" className="text-xs font-semibold text-gray-600 uppercase tracking-wider pl-1">
                                        Tên tài khoản (username)
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-yellow-600/70">
                                            <User size={18} />
                                        </div>
                                        <input
                                            className="block w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-colors bg-gray-50/50 font-medium"
                                            id="username"
                                            type="text"
                                            name="username"
                                            placeholder="username_cua_ban"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Email input */}
                                <div className="space-y-1.5">
                                    <label htmlFor="email" className="text-xs font-semibold text-gray-600 uppercase tracking-wider pl-1">
                                        Địa chỉ email (email)
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-yellow-600/70">
                                            <Mail size={18} />
                                        </div>
                                        <input
                                            className="block w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-colors bg-gray-50/50 font-medium"
                                            id="email"
                                            type="email"
                                            name="email"
                                            placeholder="vi_du@gmail.com"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Password input */}
                                <div className="space-y-1.5">
                                    <label htmlFor="password" className="text-xs font-semibold text-gray-600 uppercase tracking-wider pl-1">
                                        Mật khẩu (password)
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-yellow-600/70">
                                            <Lock size={18} />
                                        </div>
                                        <input
                                            className="block w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-colors bg-gray-50/50 font-medium"
                                            id="password"
                                            type="password"
                                            name="password"
                                            placeholder="••••••••"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Submit button */}
                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={isPending}
                                        className="w-full bg-gradient-to-r from-[#9dc84c] to-[#7aa335] text-white py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-103 active:scale-98 transition-all duration-300 font-bold text-sm tracking-wide uppercase"
                                    >
                                        {isPending ? "Đang xử lý..." : "Đăng ký ngay"}
                                    </button>
                                </div>

                                {/* Error handling display */}
                                {state.error && (
                                    <div className="bg-red-50 border border-red-200 rounded-xl p-3.5 flex items-center space-x-2 text-red-600 text-xs font-medium animate-shake">
                                        <span className="leading-relaxed">{state.error}</span>
                                    </div>
                                )}

                                {/* Redirect link back to Login */}
                                <div className="text-center pt-4 border-t border-gray-100">
                                    <span className="text-xs text-gray-400">Bạn đã có tài khoản? </span>
                                    <Link href="/login" className="text-xs text-green-600 hover:underline font-bold transition-colors">
                                        Đăng nhập
                                    </Link>
                                </div>
                            </form>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}