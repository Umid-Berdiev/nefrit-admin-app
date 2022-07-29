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
  status?: Object //filterga+ cols +
  user?: UserData //filterga+ cols +
  verified_at?: Date // tasdiqlangan firma ekaninni belgilash uchun (true => tasdiqlangan)
  website?: string
  certificate?: string // yuridik shaxs guvohnomasi
}

export interface StatementInterface {
  id: number // int [pk, increment]
  legal_entity_id: number // int [ref:> legal_entities.id] // ariza topshirgan yuridik shaxs
  representative_id: number // int [ref: - entities.id] // vakili
  drug_id: number // int [ref: - drugs.id]
  date: Date // datetime
  applicant: string // string // arizachi fio si
  status_id: number // int [ref:> statuses.id] // ariza holatini aniqlash uchun
  is_approved: boolean // boolean // ariza tasdiqlangan yoki yo'qligini aniqlash uchun
  stage_id: number // int [ref:> stages.id]
  chat_id: number // int [ref:> chats.id]
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

export interface StatementData {
  applicant: string
  code: string
  contract_id: number
  date: Date
  drug: DrugData
  id: number
  is_approved: boolean
  is_payed: null | boolean
  legal_entity: LegalEntityData
  stage: StageData
  status: StatementStatusType
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
