import { DervieKeyReturnType } from 'app/types/CryptoUtilTypes'
import _sodium from 'libsodium-wrappers-sumo'

const protocolLatest = 'v1'
const additionalData = JSON.stringify({ protocolLatest })

export const derive_key = async (password: string): Promise<DervieKeyReturnType> => {
  await _sodium.ready
  const sodium = _sodium

  // Argon2 params
  const memLimit = 67108864 // 64 mb
  const bytesLength = 64 // 512 bits
  const pwBuffer = sodium.from_string(password)
  const salt = sodium.randombytes_buf(16)
  const opsLimit = 3

  const key = sodium.crypto_pwhash(
    bytesLength,
    pwBuffer,
    salt,
    opsLimit,
    memLimit,
    sodium.crypto_pwhash_ALG_ARGON2ID13,
    'uint8array'
  )

  const masterKey = key.slice(0, 32)
  const pwKey = key.slice(32, 64)

  const saltString = sodium.to_base64(salt, sodium.base64_variants.URLSAFE_NO_PADDING)
  const masterKeyString = sodium.to_base64(masterKey, sodium.base64_variants.URLSAFE_NO_PADDING)
  const pwKeyString = sodium.to_base64(pwKey, sodium.base64_variants.URLSAFE_NO_PADDING)
  console.log(sodium.crypto_secretbox_NONCEBYTES)
  return {
    salt: saltString,
    masterKey: masterKeyString,
    pwKey: pwKeyString,
  }
}

export const crypto_encrypt = async (message: string, key: string): Promise<string> => {
  await _sodium.ready
  const sodium = _sodium

  if (!key) {
    throw new Error('Could not encrypt message')
  }

  const keyBuffer = sodium.from_base64(key, sodium.base64_variants.URLSAFE_NO_PADDING)
  const messageBuffer = sodium.from_string(message)

  const nonce = sodium.randombytes_buf(sodium.crypto_secretbox_NONCEBYTES) // 24 bytes
  const cipher = sodium.crypto_aead_xchacha20poly1305_ietf_encrypt(
    messageBuffer,
    additionalData, // Bind protocol version to ciphertext
    null,
    nonce,
    keyBuffer,
    'uint8array'
  )

  const nonceString = sodium.to_base64(nonce, sodium.base64_variants.URLSAFE_NO_PADDING)
  const cipherString = sodium.to_base64(cipher, sodium.base64_variants.URLSAFE_NO_PADDING)

  return `${nonceString}:${cipherString}`
}

export const crypto_decrypt = async (cipherString: string, key: string): Promise<string> => {
  await _sodium.ready
  const sodium = _sodium

  const keyBuffer = sodium.from_base64(key, sodium.base64_variants.URLSAFE_NO_PADDING)

  const [nonce, cipher] = cipherString.split(':')

  if (!nonce || !cipher) {
    throw new Error('Could not decrypt message')
  }

  const nonceBuffer = sodium.from_base64(nonce as string, sodium.base64_variants.URLSAFE_NO_PADDING)
  const cipherBuffer = sodium.from_base64(
    cipher as string,
    sodium.base64_variants.URLSAFE_NO_PADDING
  )

  const messageBuffer = sodium.crypto_aead_xchacha20poly1305_ietf_decrypt(
    null,
    cipherBuffer,
    additionalData,
    nonceBuffer,
    keyBuffer,
    'uint8array'
  )
  const message = sodium.to_string(messageBuffer)

  return message
}
