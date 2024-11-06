import { openDB } from 'idb';

const DB_NAME = 'blockpick';
const VERSION = 1;

async function _openDB() {
  return await openDB(DB_NAME, VERSION, {
    upgrade(db) {
      // Creates an object store:
      if (!db.objectStoreNames.contains('picks')) {
        const store = db.createObjectStore('picks', {
          autoIncrement: true,
          keyPath: 'id',
        });
        store.createIndex('blockpickId', 'blockpickId', { unique: false });
      }
    },
  });
}

async function addPick({
  key,
  iv,
  encrypted,
  blockpickId,
  pickId,
}: {
  key: string;
  iv: string;
  encrypted: string;
  blockpickId: number;
  pickId: number;
}) {
  const db = await _openDB();

  const tx = db.transaction('picks', 'readwrite');
  await tx.store.add({
    key,
    iv,
    encrypted,
    blockpickId,
    pickId,
    createdAt: new Date(),
  });
  await tx.done;
}

async function getPicks(blockpickId: number) {
  const db = await _openDB();
  const tx = db.transaction('picks', 'readonly');
  const store = tx.objectStore('picks');
  const idx = store.index('blockpickId');
  const result = await idx.getAll(blockpickId);

  return result;
}

async function deletePick(id: number) {
  const db = await _openDB();

  return await db.delete('picks', id);
}

export default {
  addPick,
  getPicks,
  deletePick,
};
