import { Outlet } from 'react-router-dom'
import { Content, Layout, Sidebar } from 'presentation'

function Home() {
  return (
    <Layout>
      <Sidebar />
      <Content>
        <Outlet />
      </Content>
    </Layout>
  )
}

export default Home
