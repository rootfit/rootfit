import bcrypt from 'bcrypt'
import getConn from '../common/db.js'

const sql = {
    checkId: 'SELECT * FROM userTBL WHERE id = ?',
    signup: 'INSERT INTO userTBL (id, password, nickname, phone, email, addr) VALUES (?,?,?,?,?,?)',
}

//귀찮아서 대충 짰으니까 수정하세용
export async function signup(item) {
    const { id, password, nickname, phone, email, addr } = item
    const conn = await getConn();

    try {
        const [results] = await conn.query(sql.checkId, id);

        if (results[0]) {
            return { status: 500, message: '사용자가 이미 존재합니다.' };
        } else {
            const salt = await bcrypt.genSalt();
            const hashPassword = await bcrypt.hash(password, salt);
            const [results] = await conn.query(sql.signup, [id, hashPassword, nickname, phone, email, addr]);
            return { status: 200, message: 'OK', data: results };
        }
    } catch (error) {
        console.error('Error executing query', error.stack)
        return { status: 500, message: '유저가 입력에 실패했습니다.', error: error };
    } finally {
        conn.end();
    }
}

//귀찮아서 대충 짰으니까 수정하세용
export async function signin(item) {
    const { id, password } = item;
    const conn = await getConn();

    try {
        const [user] = await conn.query(sql.checkId, [id]);

        if (!user[0]) {
            return { status: 500, message: '아이디 또는 패스워드를 확인해주세요.' };
        } else {
            const result = await bcrypt.compare(password, user[0].password);

            if (result) {
                return {
                    status: 200,
                    message: 'OK',
                    data: {
                        id: user[0].id,
                        nickname: user[0].nickname,
                        phone: user[0].phone,
                        email: user[0].email,
                        addr: user[0].addr,
                        isAdmin: user[0].isAdmin,
                    },
                };
            } else {
                return { status: 500, message: '아이디 또는 패스워드를 확인해주세요.' };
            }
        }
    } catch (error) {
        console.error('Error executing signin query', error.stack);
        return { status: 500, message: '로그인 실패', error: error };
    } finally {
        conn.end();
    }
}