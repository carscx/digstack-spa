import { Outlet } from 'react-router-dom'
import { Content, Layout, Sidebar } from 'presentation'
import s from './home.module.scss'

function Home() {
  return (
    <div className={s.home}>
      <Layout>
        <Sidebar />
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </div>
  )
}

export default Home
