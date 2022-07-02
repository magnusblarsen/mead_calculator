import Image from "next/image";
import { Button, Container } from "react-bootstrap";

export default function Home() {
  return (
    <Container>
      <h1>Vær Hilset</h1>
      {/* <Image alt="Billede af hula holdet"/> */}
      <div>
        <h2>Hvem er vi?</h2>
        <p>Vi er HulaHoldet eller Bjældebanden (alt afhængig af hvilken årstid det er), Danmarks førende gruppe bande/hold, og vi laver alt fra dumme ting til ubrugelige ting, men har det sjovt imens vi gør dette.</p>
      </div>
    </Container>
  )
}
