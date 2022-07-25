export interface ApplicantInterface {
  id?: number
  user_id: number //filterga+ cols +
  boss_name: string //filterga+ cols +
  website: string
  address: string
  certificate: string // yuridik shaxs guvohnomasi
  inn: string // soliq to'lovchining identifikatsion raqami cols +
  name: string // Company name
  phone: string // filterga+ cols +
  fax: string
  country: string //filterga +
  eds: string //elektron raqamli imzo
  is_national: boolean // mahalliy yoki chet el firmasiligini aniqlash uchun //filterga+ cols +
  status_id: number //filterga+ cols +
  verified_at: Date // tasdiqlangan firma ekaninni belgilash uchun (true => tasdiqlangan)
  blocked_at: Date // block qilingan vaqt
  block_reason: Text
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
