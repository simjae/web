async function encode(str: string) {
  const enc = new TextEncoder();
  const encoded = enc.encode(str);

  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await getKey();
  const encrypted = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, encoded);

  const exportedKey = await crypto.subtle.exportKey('raw', key);
  return {
    key: Buffer.from(exportedKey).toString('base64'),
    iv: Buffer.from(iv).toString('base64'),
    encrypted: Buffer.from(encrypted).toString('base64'),
  };
}

async function decode(_key: string, _iv: string, _encrypted: string) {
  const encrypted = Buffer.from(_encrypted, 'base64');
  const iv = Buffer.from(_iv, 'base64');
  const key = await crypto.subtle.importKey('raw', Buffer.from(_key, 'base64'), 'AES-GCM', true, [
    'encrypt',
    'decrypt',
  ]);
  const decrypted = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, encrypted);

  const decoder = new TextDecoder();
  return decoder.decode(decrypted);
}

async function getKey() {
  return await crypto.subtle.generateKey(
    {
      name: 'AES-GCM',
      length: 256,
    },
    true,
    ['encrypt', 'decrypt'],
  );
}

export default {
  encode,
  decode,
};
