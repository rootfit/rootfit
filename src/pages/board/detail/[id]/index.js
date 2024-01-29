import { useRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import React, { useCallback, useState, useEffect } from 'react'

const BoardDetail = () => {
  
  const router = useRouter()
  // 글아이디 얻어내기
  const { id } = router.query
  // status handler, 사용될 데이터 명시
  const [detail, setDetail] = useState({ title: '', content: '', createdAt: '', reccnt: '', cnt: '', nickname: '' })

  // 주소 연결 & 해당 데이터 가져오기
  const getDetail = async () => {
    const resp = await axios.get(`/api/board/detail/${id}`)
    console.log('11', resp.data.data)
    setDetail(resp.data.data[0])
  }

  // 생명주기 hook
  // id들어오면..
  useEffect(() => {
    getDetail()
  }, [id]);

  console.log('BoardDetail.....', detail)

  return (
    <main id="detailmain">
      <section className="intro-single">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="title-single-box">
                <h1 className="title-single">Our Health</h1>
                <span className="color-text-a">상세보기</span>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="property-grid grid">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <table className="table">
                <tbody>
                  <tr>
                    <td>nickname</td>
                    <td>
                      {detail.nickname}
                    </td>
                  </tr>
                  <tr>
                    <td>title</td>
                    <td>
                      {detail.title}
                    </td>
                  </tr>
                  <tr>
                    <td>content</td>
                    <td>
                      {detail.content}
                    </td>
                  </tr>
                  <tr>
                    <td>createdAt</td>
                    <td>
                      {detail.createdAt}
                    </td>
                  </tr>
                  <tr>
                    <td>cnt</td>
                    <td>
                      {detail.cnt}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div>
                <button type='button' className='btn btn-primary btn-sm' onClick={() => {
                  router.push('/board/list')
                  console.log('here')
                }}>목록</button>
                {" "}
                <button type='button' className='btn btn-primary btn-sm' onClick={() => router.push('/board/update/' + boardtbl.id)}>수정</button>
                {" "}
                <button type='button' className='btn btn-primary btn-sm' onClick={() => deleteBoard(boardtbl.id)}>삭제</button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
export default BoardDetail