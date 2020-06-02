import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectUser } from "../../store/user/selectors";
import { selectToken } from "../../store/user/selectors";
import { selectMyHomepage } from "../../store/user/selectors";
import Homepage from "../../components/Homepage/index";
import StoryCards from "../../components/StoryCards/index";
import Loading from "../../components/Loading";

import Container from "react-bootstrap/Container";

export default function MyHomePage() {
  const token = useSelector(selectToken);
  //   console.log("token", token);
  const homepage = useSelector(selectMyHomepage);

  const history = useHistory();

  if (token === null) {
    history.push("/");
  }

  if (homepage === null) {
    return <Loading />;
  }

  //   console.log("homepage of user", homepage);
  return (
    <>
      <Homepage
        id={homepage.id}
        title={homepage.title}
        description={homepage.description}
        backgroundColor={homepage.backgroundColor}
        color={homepage.color}
        showLink={false}
      />
      <Container>
        <StoryCards homepage={homepage} />
      </Container>
    </>
  );
}
