import styles from '../styles/Layout.module.scss'
import Meta from './Meta'
import { Container } from 'react-bootstrap'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Header/>
      <Container>
        <main>
          {children}
        </main>
      </Container>
    </>
  )
}
