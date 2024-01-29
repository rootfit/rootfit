import getConn from '../common/db.js'

const sql = {
    list: 'SELECT boardTBL.id, boardTBL.title, boardTBL.cnt, boardTBL.createdAt, userTBL.nickname FROM boardTBL LEFT JOIN userTBL ON boardTBL.user_id=userTBL.id ORDER BY boardTBL.createdAt DESC;',
    mostview: 'SELECT boardTBL.id, boardTBL.title, boardTBL.cnt, boardTBL.createdAt, userTBL.nickname FROM boardTBL LEFT JOIN userTBL ON boardTBL.user_id=userTBL.id ORDER BY boardTBL.cnt DESC;',
    // insert: ';',
    increaseCnt: 'UPDATE boardTBL SET cnt = cnt +1 WHERE id = ?',
    detail: 'SELECT boardTBL.*,userTBL.nickname FROM boardTBL LEFT JOIN userTBL ON boardTBL.user_id = userTBL.id WHERE boardTBL.id = ?',
    // update: ';',
    // delete: ';'
}

export async function list() {
    const conn = await getConn();
    try {
        const [results] = await conn.query(sql.list);
        return results;
    } catch (error) {
        console.error('Error executing query', error.stack);
        throw new Error('board dao list error');
    } finally {
        conn.end();
    }
}

export async function mostview() {
    const conn = await getConn();
    try {
        const [results] = await conn.query(sql.mostview);
        return results;
    } catch (error) {
        console.error('Error executing query', error.stack)
        throw new Error('board dao list error');
    } finally {
        conn.end();
    }
}

export async function increaseCnt(id) {
    const conn = await getConn();
    try {
        const [results] = await conn.query(sql.increaseCnt, [id]);
        return results;
    } catch (error) {
        console.error('Error executing query', error.stack)
        throw new Error('board dao view error');
    } finally {
        conn.end();
    }
}

export async function detail(id) {
    const conn = await getConn();
    try {
        const [results] = await conn.query(sql.detail, [id]);
        return results;
    } catch (error) {
        console.error('Error executing query', error.stack)
        throw new Error('board dao detail error');
    } finally {
        conn.end();
    }
}

