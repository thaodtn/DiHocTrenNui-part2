"use client";

import React, { useActionState } from "react";
import { 
    User, 
    Calendar, 
    MapPin, 
    Phone, 
    GraduationCap, 
    FileText, 
    CheckCircle2, 
    AlertCircle, 
    ArrowRight,
    Sparkles
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import studentBg from "@/assets/images/Girl to school.jpg";
import { registerStudentAction } from "@/services/registerStudent";

export default function RegisterStudentPage() {
    const [state, formAction, isPending] = useActionState(registerStudentAction, {
        success: false,
        error: null,
        data: null
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50/30 font-sans text-gray-900 selection:bg-yellow-400 selection:text-primary-900 flex items-center justify-center p-4 sm:p-6 md:p-10 lg:p-12">
            {/* Main Container Card */}
            <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-emerald-100/40 overflow-hidden flex flex-col md:flex-row min-h-[650px] animate-in fade-in zoom-in-95 duration-300">
                
                {/* Left Side: Hero Section with Visual Image Overlay */}
                <div className="relative w-full md:w-5/12 bg-primary-900 overflow-hidden flex flex-col justify-between min-h-[300px] md:min-h-full">
                    <Image
                        src={studentBg}
                        alt="Học sinh đến trường vùng cao"
                        className="absolute inset-0 w-full h-full object-cover opacity-75 hover:scale-105 transition-transform duration-700 ease-out"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-950/95 via-primary-900/60 to-transparent" />
                    
                    {/* Top Content */}
                    <div className="relative z-10 p-6 sm:p-8">
                        <Link 
                            href="/" 
                            className="inline-flex items-center space-x-2 text-white bg-white/10 hover:bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all"
                        >
                            <span>← Trang chủ</span>
                        </Link>
                    </div>

                    {/* Bottom Info Content */}
                    <div className="relative z-10 p-6 sm:p-8 text-white mt-auto">
                        <div className="inline-flex items-center space-x-2 bg-yellow-400/25 border border-yellow-400/30 px-3 py-1 rounded-full text-yellow-300 text-xs font-bold mb-4 uppercase tracking-wider">
                            <Sparkles size={12} className="animate-pulse" />
                            <span>Nâng Bước Em Đến Trường</span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold font-serif leading-tight mb-3">
                            Kết Nối Yêu Thương
                        </h3>
                        <p className="text-sm text-emerald-100/90 leading-relaxed font-light mb-6">
                            Mỗi hồ sơ đăng ký là một nhịp cầu giúp kết nối các học sinh hiếu học vùng cao có hoàn cảnh khó khăn với những tấm lòng hảo tâm bảo trợ học tập lâu dài.
                        </p>
                        
                        {/* Benefits list */}
                        <div className="space-y-2.5 border-t border-emerald-800/40 pt-5 text-xs text-emerald-200/95 font-medium">
                            <div className="flex items-center space-x-2.5">
                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">✓</span>
                                <span>Bảo trợ chi phí học tập định kỳ hàng tháng</span>
                            </div>
                            <div className="flex items-center space-x-2.5">
                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">✓</span>
                                <span>Kết nối trực tiếp, xác thực thông tin rõ ràng</span>
                            </div>
                            <div className="flex items-center space-x-2.5">
                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">✓</span>
                                <span>Theo sát tiến trình học tập của các em</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form and Dynamic View Container */}
                <div className="w-full md:w-7/12 p-6 sm:p-10 lg:p-12 flex flex-col justify-center bg-white relative">
                    
                    {state.success && state.data ? (
                        /* SUCCESS VIEW */
                        <div className="w-full space-y-6 animate-in slide-in-from-bottom duration-500">
                            <div className="flex justify-center">
                                <div className="bg-emerald-100 p-4 rounded-full text-emerald-600 animate-bounce">
                                    <CheckCircle2 size={48} className="stroke-[2.5]" />
                                </div>
                            </div>

                            <div className="text-center max-w-md mx-auto">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-tight">Gửi hồ sơ thành công!</h2>
                                <p className="text-sm text-gray-500 mt-2.5 leading-relaxed">
                                    Thông tin đăng ký của học sinh đã được lưu vào hệ thống của dự án <strong>Đi Học Trên Núi</strong>.
                                </p>
                            </div>

                            {/* Enriched Student Info Display */}
                            <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100 space-y-4 max-w-md mx-auto">
                                <h3 className="text-xs font-semibold text-emerald-800 uppercase tracking-widest border-b border-emerald-100/60 pb-2.5">
                                    Chi tiết hồ sơ học sinh
                                </h3>
                                <div className="grid grid-cols-2 gap-y-3.5 text-sm">
                                    <div>
                                        <span className="text-gray-500 block text-xs">Mã hồ sơ (ID):</span>
                                        <span className="font-semibold text-gray-800">{state.data.id}</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500 block text-xs">Họ và tên học sinh:</span>
                                        <span className="font-semibold text-emerald-900">{state.data.full_name}</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500 block text-xs">Ngày sinh:</span>
                                        <span className="font-medium text-gray-700">{state.data.date_of_birth}</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500 block text-xs">Giới tính / Lớp học:</span>
                                        <span className="font-medium text-gray-700">{state.data.gender} / Lớp {state.data.grade}</span>
                                    </div>
                                    <div className="col-span-2 border-t border-emerald-100/60 pt-3">
                                        <span className="text-gray-500 block text-xs">Số điện thoại liên hệ:</span>
                                        <span className="font-medium text-gray-700">{state.data.phone}</span>
                                    </div>
                                    <div className="col-span-2">
                                        <span className="text-gray-500 block text-xs">Địa chỉ học sinh:</span>
                                        <span className="font-medium text-gray-700">{state.data.address}</span>
                                    </div>
                                    <div className="col-span-2 bg-white/70 p-3 rounded-xl border border-emerald-100/50">
                                        <span className="text-gray-500 block text-xs mb-1 font-semibold">Hoàn cảnh gia đình:</span>
                                        <span className="text-xs text-gray-600 italic leading-relaxed">{state.data.family_condition}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Status and Verification Flow Alert */}
                            <div className="flex items-start space-x-3 bg-amber-50 border border-amber-200 p-4 rounded-xl max-w-md mx-auto text-amber-800 text-xs leading-relaxed shadow-sm">
                                <AlertCircle size={18} className="shrink-0 text-amber-600 mt-0.5" />
                                <span>
                                    <strong>Trạng thái hồ sơ:</strong> Chờ kiểm duyệt. Điều phối viên sẽ trực tiếp khảo sát và xác minh tính xác thực của thông tin. Sau khi xác thực thành công, hồ sơ sẽ được hiển thị công khai để các Nhà tài trợ nhận bảo trợ học phí (mức 500,000đ/tháng).
                                </span>
                            </div>

                            {/* Navigation options */}
                            <div className="pt-3 text-center flex flex-col sm:flex-row justify-center items-center gap-3">
                                <button
                                    onClick={() => window.location.reload()}
                                    className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
                                >
                                    Đăng ký thêm học sinh khác
                                </button>
                                <Link
                                    href="/"
                                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-800 to-primary-900 text-white px-7 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-102 transition-all font-semibold text-sm tracking-wide"
                                >
                                    <span>Về trang chủ</span>
                                    <ArrowRight size={15} />
                                </Link>
                            </div>
                        </div>
                    ) : (
                        /* REGISTRATION FORM VIEW */
                        <div className="w-full space-y-6">
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-tight">Đăng ký Học sinh</h2>
                                <p className="text-sm text-gray-500 mt-2">
                                    Vui lòng cung cấp chính xác thông tin để hồ sơ học sinh được tiếp nhận nhanh chóng.
                                </p>
                            </div>

                            <form className="space-y-4 sm:space-y-5" action={formAction}>
                                
                                {/* Full Name & Date of Birth */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label htmlFor="full_name" className="text-[11px] font-bold text-gray-500 uppercase tracking-wider pl-1">
                                            Họ và tên học sinh
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-emerald-700/60">
                                                <User size={16} />
                                            </div>
                                            <input
                                                className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-primary-700 focus:ring-1 focus:ring-primary-700 transition-colors bg-gray-50/50 font-medium text-gray-800"
                                                id="full_name"
                                                type="text"
                                                name="full_name"
                                                placeholder="Nguyễn Văn A"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label htmlFor="date_of_birth" className="text-[11px] font-bold text-gray-500 uppercase tracking-wider pl-1">
                                            Ngày sinh học sinh
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-emerald-700/60">
                                                <Calendar size={16} />
                                            </div>
                                            <input
                                                className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-primary-700 focus:ring-1 focus:ring-primary-700 transition-colors bg-gray-50/50 font-medium text-gray-800"
                                                id="date_of_birth"
                                                type="date"
                                                name="date_of_birth"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Gender, Grade & Phone */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div className="space-y-1.5">
                                        <label htmlFor="gender" className="text-[11px] font-bold text-gray-500 uppercase tracking-wider pl-1">
                                            Giới tính
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-emerald-700/60">
                                                <User size={16} />
                                            </div>
                                            <select
                                                id="gender"
                                                name="gender"
                                                required
                                                defaultValue=""
                                                className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary-700 focus:ring-1 focus:ring-primary-700 transition-colors bg-gray-50/50 font-medium text-gray-800 appearance-none"
                                            >
                                                <option value="" disabled>Chọn...</option>
                                                <option value="Nam">Nam</option>
                                                <option value="Nữ">Nữ</option>
                                                <option value="Khác">Khác</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label htmlFor="grade" className="text-[11px] font-bold text-gray-500 uppercase tracking-wider pl-1">
                                            Học lớp
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-emerald-700/60">
                                                <GraduationCap size={16} />
                                            </div>
                                            <select
                                                id="grade"
                                                name="grade"
                                                required
                                                defaultValue=""
                                                className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary-700 focus:ring-1 focus:ring-primary-700 transition-colors bg-gray-50/50 font-medium text-gray-800 appearance-none"
                                            >
                                                <option value="" disabled>Lớp học...</option>
                                                {Array.from({ length: 12 }, (_, i) => i + 1).map((g) => (
                                                    <option key={g} value={String(g)}>
                                                        Lớp {g}
                                                    </option>
                                                ))}
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label htmlFor="phone" className="text-[11px] font-bold text-gray-500 uppercase tracking-wider pl-1">
                                            SĐT liên hệ (người giám hộ)
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-emerald-700/60">
                                                <Phone size={16} />
                                            </div>
                                            <input
                                                className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-primary-700 focus:ring-1 focus:ring-primary-700 transition-colors bg-gray-50/50 font-medium text-gray-800"
                                                id="phone"
                                                type="tel"
                                                name="phone"
                                                placeholder="0987654321"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="space-y-1.5">
                                    <label htmlFor="address" className="text-[11px] font-bold text-gray-500 uppercase tracking-wider pl-1">
                                        Địa chỉ hiện tại
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-emerald-700/60">
                                            <MapPin size={16} />
                                        </div>
                                        <input
                                            className="block w-full pl-10 pr-4 py-3.5 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-primary-700 focus:ring-1 focus:ring-primary-700 transition-colors bg-gray-50/50 font-medium text-gray-800"
                                            id="address"
                                            type="text"
                                            name="address"
                                            placeholder="Bản Lùng Cát, Xã Cán Chu Phìn, Huyện Mèo Vạc, Hà Giang"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Family Condition */}
                                <div className="space-y-1.5">
                                    <label htmlFor="family_condition" className="text-[11px] font-bold text-gray-500 uppercase tracking-wider pl-1">
                                        Hoàn cảnh gia đình
                                    </label>
                                    <div className="relative">
                                        <div className="absolute top-3.5 left-3.5 pointer-events-none text-emerald-700/60">
                                            <FileText size={16} />
                                        </div>
                                        <textarea
                                            className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:border-primary-700 focus:ring-1 focus:ring-primary-700 transition-colors bg-gray-50/50 font-medium text-gray-800 min-h-[100px] max-h-[160px]"
                                            id="family_condition"
                                            name="family_condition"
                                            placeholder="Gia đình thuộc diện hộ nghèo đặc biệt khó khăn, bố mẹ làm nông rẫy bấp bênh, nhà có 5 anh chị em..."
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Submit button */}
                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={isPending}
                                        className="w-full bg-gradient-to-r from-[#9dc84c] to-[#7aa335] text-white py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:hover:scale-100 transition-all duration-300 font-bold text-sm tracking-wide uppercase flex items-center justify-center space-x-2 cursor-pointer"
                                    >
                                        {isPending ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                <span>Đang xử lý...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Gửi hồ sơ đăng ký</span>
                                                <ArrowRight size={16} />
                                            </>
                                        )}
                                    </button>
                                </div>

                                {/* Error handling display */}
                                {state.error && (
                                    <div className="bg-red-50 border border-red-200 rounded-xl p-3.5 flex items-start space-x-2.5 text-red-600 text-xs font-medium animate-shake">
                                        <AlertCircle size={16} className="shrink-0 mt-0.5" />
                                        <span className="leading-relaxed">{state.error}</span>
                                    </div>
                                )}
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}