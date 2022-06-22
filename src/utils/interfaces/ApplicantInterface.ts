export default interface ApplicantInterface {
  id?: number
  user_id: number //filterga+ cols +
  status_id: number //filterga+ cols +
  boss_name: string //filterga+ cols +
  website: string
  address: string
  certificate: string // yuridik shaxs guvohnomasi
  inn: string // soliq to'lovchining identifikatsion raqami cols +
  name: string // filterga+ cols +
  phone: string // filterga+ cols +
  fax: string
  country: string //filterga +
  eds: string //elektron raqamli imzo
  is_national: boolean // mahalliy yoki chet el firmasiligini aniqlash uchun //filterga+ cols +
  verified_at: Date // tasdiqlangan firma ekaninni belgilash uchun (true => tasdiqlangan)
  blocked_at: Date // block qilingan vaqt
  block_reason: Text
}
