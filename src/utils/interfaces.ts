export interface StatusData {
  color: string
  description: string
  id: number
  name: string
  type: string
}

export interface UserData {
  avatar: string
  department: string
  email: string
  firstname: string
  id: number
  is_employee: boolean
  lastname: string
  name: string
  role_id: number
  username: string
}

export interface ApplicantData {
  address?: string
  block_reason?: Text
  blocked_at?: Date // block qilingan vaqt
  boss_name?: string //filterga+ cols +
  country?: string //filterga +
  eds?: string //elektron raqamli imzo
  fax?: string
  id?: number
  inn?: string // soliq to'lovchining identifikatsion raqami cols +
  is_national?: boolean // mahalliy yoki chet el firmasiligini aniqlash uchun //filterga+ cols +
  name?: string // Company name
  phone?: string // filterga+ cols +
  status?: StatusData //filterga+ cols +
  user?: UserData //filterga+ cols +
  verified_at?: Date // tasdiqlangan firma ekaninni belgilash uchun (true => tasdiqlangan)
  website?: string
  certificate?: string // yuridik shaxs guvohnomasi
}

export interface UserFilterForm {
  applicantUser?: string
  applicantStatus?: string
  applicantBossName?: string
  applicantName?: string
  applicantPhone?: string
  applicantsCountry?: string
}

export interface TabHeader {
  label: string
  value: string
  icon: string
}

export interface DrugData {
  id?: number
  name: string
  trade_name: string
  patent: string
}

export interface LegalEntityData {
  id?: number
  name: string
  phone: string
  country: string
}

export interface StageData {
  id: number
  stage: number
  name: string
  description: null | string
  next_stage: null | string
}

export type StatementStatusType = 'completed' | 'created'

export interface StatementCertificateData {
  application_id?: string | number
  file?: File
  id?: number
  number?: string | number
  drug_name: string
  start_date: string
  end_date: string
  manufacturer_name: string
  status_id: number
}

export interface StatementData {
  applicant: string
  code: string
  contract_id: number
  date: string
  drug: DrugData
  id: number
  is_approved: boolean
  is_payed: null | boolean
  legal_entity: LegalEntityData
  stage: StageData
  status: StatementStatusType
  certificate: StatementCertificateData
}

export interface DepartmentNameData {
  id: number
  field: string
  language: string
  value: string
}

export interface DepartmentData {
  id?: number
  names: {
    uz: string
    ru: string
    en: string
  }
}

export interface RoleData {
  id?: number
  name: {
    uz: string
    ru: string
    en: string
  }
  department: {
    uz: string
    ru: string
    en: string
  }
}

export interface NoticeData {
  id?: number
  message: string
  text: string
  application_id?: number
  status_id?: number
  status?: StatusData
}

export interface ConclusionData {
  application?: StatementData
  application_id?: number
  created_at?: string
  department?: string
  id?: number
  message?: string
  read_at?: string
  status?: StatusData
  status_id?: number
  text: string
  files: File[]
  removed_files: number[]
}
