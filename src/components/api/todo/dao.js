import getConn from '../common/db.js';

const sql = {
  list: 'SELECT * FROM healthlistTBL',
  // healthSelect: 'INSERT INTO userTBL () VALUES (?)',
  // healthSelectInsert:
  //   'INSERT INTO healthselectTBL (healthNo, user_id, healthSelect) VALUES (?, ?, ?)',
};

// 유저가 모달창을 열면 admin이 입력해둔 헬스리스트 목록 출력
export async function healthList() {
  const conn = await getConn();
  try {
    const [results] = await conn.query(sql.list);
    console.log('todo dao healthList success');
    return results;
  } catch (error) {
    console.error('Error executing query', error.stack);
    throw new Error('todo dao healthList error');
  } finally {
    conn.end();
  }
}

// 유저가 선택한 헬스리스트를 저장 (작업 전)

// 유저의 누적 데이터를 db에 저장 (작업 중)
export async function healthSelectInsert(select) {
  const conn = await getConn();
  try {
    const [results] = await conn.query(sql.healthSelectInsert, [
      select.healthNo,
      select.user_id,
      select.healthSelect,
    ]);
    console.log('todo dao healthSelectInsert success');
    return results;
  } catch (error) {
    console.error('Error executing query', error.stack);
    throw new Error('todo dao healthSelectInsert error');
  } finally {
    conn.end();
  }
}
