import { useState } from 'react'

const Accordion = () => {
  const [active, setActive] = useState(0);
  return (
    <div>
      <h2>글목록</h2>
      <Panel title="쇼핑라이브" isActive={active === 0} onShow={() => { setActive(0) }}>
        박여사의 꽃기린이 풍성한 이유_ 꽃 잘피는 알비료, 물박여사의 꽃기린이 풍성한 이유_ 꽃 잘피는 알비료, 물
      </Panel>
      <Panel title="원쁠딜" isActive={active === 1} onShow={() => { setActive(1) }}>
        JTBC드라마 닥터 차정숙 10회 예고 10화 최승희가 감JTBC드라마 닥터 차정숙 10회 예고 10화 최승희가 감
      </Panel>
    </div>
  )
}
function Panel({ title, children, isActive, onShow }) {

  return (
    <section>
      <h3>{title}</h3>
      {/* active ? true : false */}
      {isActive ? (<p>{children}</p>) : (<button onClick={onShow}> 더보기</button>)}

    </section>
  )
}


export default Accordion;