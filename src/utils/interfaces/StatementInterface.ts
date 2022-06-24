export default interface StatementInterface {
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
