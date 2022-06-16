export default interface ApplicantInterface {
  id: number
  user_id: number
  status_id: number
  boss_name: string
  website: string
  address: string
  certificate: string // yuridik shaxs guvohnomasi
  inn: string // soliq to'lovchining identifikatsion raqami
  name: string
  phone: string
  fax: string
  country: string
  eds: string //elektron raqamli imzo
  is_national: boolean // mahalliy yoki chet el firmasiligini aniqlash uchun
  verified_at: Date // tasdiqlangan firma ekaninni belgilash uchun (true => tasdiqlangan)
  blocked_at: Date // block qilingan vaqt
  block_reason: Text
}
