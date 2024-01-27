import getConn from '../common/db.js'

const sql = {
    checkId: 'SELECT * FROM userTBL WHERE id = ?',
    signup: 'INSERT INTO userTBL (id, password, nickname, phone, email, addr) VALUES (?,?,?,?,?,?)',
}

//귀찮아서 대충 짰으니까 수정하세용
export async function signup(id) {
    const conn = await getConn();
    try {
        const [results] = await conn.query(sql.checkId, id);
        return true;
    } catch (error) {
        console.error('Error executing query', error.stack)
        throw new Error('user dao signup error');
    } finally {
        conn.end();
    }
}

//귀찮아서 대충 짰으니까 수정하세용
export async function signin(id) {
    const conn = await getConn();
    try {
        const [results] = await conn.query(sql.checkId, id);
        return true;
    } catch (error) {
        console.error('Error executing query', error.stack)
        throw new Error('user dao signin error');
    } finally {
        conn.end();
    }
}