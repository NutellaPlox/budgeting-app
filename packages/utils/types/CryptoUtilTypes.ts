export type DeriveKeyReturnType = {
  salt: string
  key: string
}

export type DerivePwKeyReturnType = {
  salt: string
  masterKey: string
  pwKey: string
}
