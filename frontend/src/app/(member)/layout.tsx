"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import DashboardHeader from "@/components/member/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/member/dashboard/DashboardSidebar";
import DashboardFooter from "@/components/member/dashboard/DashboardFooter";
import { PermissionProvider, usePermission } from "@/contexts/PermissionContext";

interface MemberLayoutProps {
  children: React.ReactNode;
}

export default function MemberLayout({ children }: MemberLayoutProps) {
  return (
    <PermissionProvider>
      <MemberLayoutContent>{children}</MemberLayoutContent>
    </PermissionProvider>
  );
}

const getPageTitle = (pathname: string): string => {
  if (pathname === "/dashboard") return "Dashboard";

  if (pathname.startsWith("/students")) {
    if (pathname.endsWith("/new")) return "Thêm học sinh mới";
    if (pathname !== "/students") return "Chi tiết học sinh";
    return "Quản lý học sinh";
  }

  if (pathname.startsWith("/sponsors")) {
    if (pathname.endsWith("/new")) return "Thêm nhà tài trợ mới";
    if (pathname !== "/sponsors") return "Chi tiết nhà tài trợ";
    return "Quản lý nhà tài trợ";
  }

  if (pathname.startsWith("/schools")) {
    if (pathname.endsWith("/new")) return "Thêm trường học mới";
    if (pathname !== "/schools") return "Chi tiết trường học";
    return "Quản lý trường học";
  }

  if (pathname.startsWith("/teachers")) {
    if (pathname.endsWith("/new")) return "Thêm giáo viên mới";
    if (pathname !== "/teachers") return "Chi tiết giáo viên";
    return "Quản lý giáo viên";
  }

  if (pathname.startsWith("/volunteers")) {
    if (pathname.endsWith("/new")) return "Thêm tình nguyện viên mới";
    if (pathname !== "/volunteers") return "Chi tiết tình nguyện viên";
    return "Quản lý tình nguyện viên";
  }

  if (pathname.startsWith("/images")) {
    if (pathname !== "/images") return "Chi tiết hình ảnh";
    return "Quản lý hình ảnh";
  }

  if (pathname.startsWith("/transactions")) {
    if (pathname !== "/transactions") return "Chi tiết giao dịch";
    return "Quản lý giao dịch";
  }

  if (pathname.startsWith("/allocations")) {
    if (pathname.endsWith("/new")) return "Tạo phân bổ mới";
    if (pathname !== "/allocations") return "Chi tiết phân bổ";
    return "Quản lý phân bổ";
  }

  if (pathname.startsWith("/reports")) {
    return "Báo cáo tổng hợp";
  }

  if (pathname.startsWith("/profile")) {
    return "Thông tin cá nhân";
  }

  if (pathname.startsWith("/accounts")) {
    if (pathname.endsWith("/new")) return "Thêm tài khoản mới";
    if (pathname !== "/accounts") return "Chi tiết tài khoản";
    return "Quản lý tài khoản";
  }

  if (pathname.startsWith("/settings")) {
    return "Cài đặt hệ thống";
  }

  return "Dashboard Overview";
};

function MemberLayoutContent({ children }: MemberLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { account, loading } = usePermission();
  const pathname = usePathname();

  const ROLE_MAP: Record<number, string> = {
    1: "Quản trị viên",
    2: "Tình nguyện viên",
    3: "Giáo viên",
    4: "Nhà tài trợ",
  };

  const userProp = account
    ? { name: account.username, role: ROLE_MAP[account.role_id] || "Người dùng" }
    : loading
    ? { name: "Đang tải...", role: "..." }
    : { name: "Admin", role: "Quản trị viên" };

  const pageTitle = getPageTitle(pathname);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Sticky Header — h-16 */}
      <DashboardHeader
        pageTitle={pageTitle}
        mobileMenuOpen={mobileMenuOpen}
        onMobileMenuToggle={() => setMobileMenuOpen((prev) => !prev)}
        user={userProp}
      />

      {/* Sidebar — fixed, starts below header */}
      <DashboardSidebar
        mobileOpen={mobileMenuOpen}
        onMobileClose={() => setMobileMenuOpen(false)}
      />

      {/* Main content — offset for header (top-16) and sidebar (lg:pl-60) and footer (pb-10) */}
      <main className="pt-16 pb-10 lg:pl-60 min-h-screen transition-all duration-300">
        <div className="p-4 sm:p-6 lg:p-8">{children}</div>
      </main>

      {/* Sticky Footer — h-10 */}
      <DashboardFooter />
    </div>
  );
}