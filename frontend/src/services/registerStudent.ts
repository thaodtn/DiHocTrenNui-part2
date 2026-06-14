"use server";

export interface RegisterStudentState {
    success?: boolean;
    error?: string | null;
    data?: {
        id: string;
        full_name: string;
        date_of_birth: string;
        gender: string;
        phone: string;
        address: string;
        grade: string;
        family_condition: string;
        is_active: boolean;
        monthly_amount: number;
    } | null;
}

/**
 * Server action to handle student registration submissions.
 * It extracts, validates, and forwards the registration details to the backend API.
 */
export async function registerStudentAction(
    preState: RegisterStudentState,
    formData: FormData
): Promise<RegisterStudentState> {
    const full_name = formData.get("full_name") as string;
    const date_of_birth = formData.get("date_of_birth") as string;
    const gender = formData.get("gender") as string;
    const phone = formData.get("phone") as string;
    const address = formData.get("address") as string;
    const grade = formData.get("grade") as string;
    const family_condition = formData.get("family_condition") as string;

    // Check for empty fields
    if (!full_name || !date_of_birth || !gender || !phone || !address || !grade || !family_condition) {
        return { success: false, error: "Tất cả các trường thông tin là bắt buộc.", data: null };
    }

    // Name validation
    if (full_name.trim().length < 3) {
        return { success: false, error: "Họ và tên phải có ít nhất 3 ký tự.", data: null };
    }

    // Address validation
    if (address.trim().length < 5) {
        return { success: false, error: "Địa chỉ chi tiết phải có ít nhất 5 ký tự.", data: null };
    }

    // Family condition validation
    if (family_condition.trim().length < 10) {
        return { success: false, error: "Vui lòng mô tả hoàn cảnh gia đình chi tiết hơn (tối thiểu 10 ký tự).", data: null };
    }

    // Date of birth: Ensure student is not born in the future
    const dobDate = new Date(date_of_birth);
    const today = new Date();
    if (isNaN(dobDate.getTime())) {
        return { success: false, error: "Ngày sinh không hợp lệ.", data: null };
    }
    if (dobDate > today) {
        return { success: false, error: "Ngày sinh không thể ở tương lai.", data: null };
    }

    // Phone validation (Vietnamese mobile number format)
    const phoneRegex = /^(0[3|5|7|8|9])[0-9]{8}$/;
    if (!phoneRegex.test(phone.trim())) {
        return {
            success: false,
            error: "Số điện thoại không hợp lệ. Vui lòng nhập số điện thoại Việt Nam gồm 10 chữ số (ví dụ: 0987654321).",
            data: null
        };
    }

    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
        const res = await fetch(`${apiUrl}/register/student`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                full_name: full_name.trim(),
                date_of_birth,
                gender,
                phone: phone.trim(),
                address: address.trim(),
                grade,
                family_condition: family_condition.trim()
            })
        });

        const response = await res.json();

        if (!res.ok) {
            console.log("Student registration failed:", response.message);
            return {
                success: false,
                error: response.message || "Đăng ký học sinh không thành công.",
                data: null
            };
        }

        console.log("Student registration successful:", response.data);
        return {
            success: true,
            error: null,
            data: response.data
        };
    } catch (e: any) {
        console.error("Student registration error:", e);
        return {
            success: false,
            error: "Không thể kết nối tới máy chủ. Vui lòng thử lại sau.",
            data: null
        };
    }
}
