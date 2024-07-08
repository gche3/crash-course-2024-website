import styled from "styled-components";
import { Element } from "react-scroll";
// Data
import { summer2024 } from "../data";
// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "../components/globalStyledComponents";

const StyledSummerLog = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
`;

export default function Summer2024() {
  return (
    <main>
      <Element name={"Log"} id="log">
        <StyledSummerLog className="section">
          <Container>
            <Container className="d-flex">
              <Title>
                <h1>Summer 2024 Log</h1>
                <div className="underline"></div>
                <h3>5/28/2024 - 8/2/2024</h3>
              </Title>
            </Container>
            <Col className="align-items-center mt-1">

              {summer2024.map((entry) => {
                return (
                  <Container>
                    <Row className="d-flex flex-column text-start mt-5">
                      <h3>{entry.title}</h3>
                      <Container className="mx-5 mt-2">
                        {entry.description}
                      </Container>
                    </Row>
                  </Container>
                );
              })}

            </Col>
          </Container>
        </StyledSummerLog>
      </Element>
    </main>
  );
}
