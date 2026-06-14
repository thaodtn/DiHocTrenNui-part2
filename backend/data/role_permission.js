const ROLE_PERMISSIONS = [
  // Admin (Role ID 1) - All permissions 1-36
  ...Array.from({ length: 36 }, (_, i) => ({ id: i + 1, role_id: 1, permission_id: i + 1 })),

  // Volunteer (Role ID 2)
  { id: 30, role_id: 2, permission_id: 2 }, // STUDENT_READ
  { id: 31, role_id: 2, permission_id: 3 }, // STUDENT_UPDATE
  { id: 32, role_id: 2, permission_id: 6 }, // SPONSOR_READ
  { id: 33, role_id: 2, permission_id: 10 }, // SCHOOL_READ
  { id: 34, role_id: 2, permission_id: 13 }, // BANK_TRANSACTION_CREATE
  { id: 35, role_id: 2, permission_id: 14 }, // BANK_TRANSACTION_READ
  { id: 36, role_id: 2, permission_id: 15 }, // BANK_TRANSACTION_UPDATE
  { id: 37, role_id: 2, permission_id: 22 }, // IMAGE_CREATE
  { id: 38, role_id: 2, permission_id: 23 }, // IMAGE_READ
  { id: 39, role_id: 2, permission_id: 24 }, // IMAGE_DELETE
  { id: 40, role_id: 2, permission_id: 25 }, // REPORT_READ
  { id: 41, role_id: 2, permission_id: 30 }, // TEACHER_READ
  { id: 42, role_id: 2, permission_id: 34 }, // VOLUNTEER_READ
  { id: 43, role_id: 2, permission_id: 26 }, // DISBURSEMENT_CREATE
  { id: 44, role_id: 2, permission_id: 27 }, // DISBURSEMENT_READ
  { id: 45, role_id: 2, permission_id: 28 }, // DISBURSEMENT_UPDATE

  // Teacher (Role ID 3)
  { id: 46, role_id: 3, permission_id: 2 }, // STUDENT_READ
  { id: 47, role_id: 3, permission_id: 3 }, // STUDENT_UPDATE
  { id: 48, role_id: 3, permission_id: 10 }, // SCHOOL_READ
  { id: 49, role_id: 3, permission_id: 22 }, // IMAGE_CREATE
  { id: 50, role_id: 3, permission_id: 23 }, // IMAGE_READ
  { id: 51, role_id: 3, permission_id: 24 }, // IMAGE_DELETE
  { id: 52, role_id: 3, permission_id: 30 }, // TEACHER_READ
  { id: 53, role_id: 3, permission_id: 6 },  // SPONSOR_READ
  { id: 54, role_id: 3, permission_id: 34 }, // VOLUNTEER_READ

  // Sponsor (Role ID 4)
  { id: 55, role_id: 4, permission_id: 2 }, // STUDENT_READ
  { id: 56, role_id: 4, permission_id: 6 }, // SPONSOR_READ
  { id: 57, role_id: 4, permission_id: 10 }, // SCHOOL_READ
  { id: 58, role_id: 4, permission_id: 30 }, // TEACHER_READ
  { id: 59, role_id: 4, permission_id: 34 }, // VOLUNTEER_READ
  { id: 60, role_id: 4, permission_id: 23 }, // IMAGE_READ
];

module.exports = ROLE_PERMISSIONS;