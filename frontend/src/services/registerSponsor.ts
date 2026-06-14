"use server";

export interface RegisterSponsorState {
    success?: boolean;
    error?: string | null;
    data?: {
        username: string;
        email: string;
        password?: string;
        is_active: boolean;
    } | null;
}

export async function registerSponsorAction(preState: RegisterSponsorState, formData: FormData): Promise<RegisterSponsorState> {
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!username || !email || !password) {
        return { success: false, error: "Tất cả các trường là bắt buộc.", data: null };
    }

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register/sponsor`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, email, password })
        });

        const response = await res.json();

        if (!res.ok) {
            console.log("Sponsor registration failed:", response.message);
            return { success: false, error: response.message || "Đăng ký không thành công.", data: null };
        }

        console.log("Sponsor registration successful:", response.data);
        return {
            success: true,
            error: null,
            data: response.data
        };
    } catch (e: any) {
        console.error("Sponsor registration error:", e);
        return { success: false, error: "Không thể kết nối tới máy chủ API.", data: null };
    }
}
