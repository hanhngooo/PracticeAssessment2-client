import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// import { selectUser } from "../../store/user/selectors";
import { selectToken } from "../../store/user/selectors";
import { selectMyHomepage } from "../../store/user/selectors";
import Homepage from "../../components/Homepage/index";
import StoryCards from "../../components/StoryCards/index";
import Loading from "../../components/Loading";
import PostStoryForm from "./PostStoryForm";
import EditPageForm from "./EditPageForm";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function MyHomePage() {
  const [postStory, setPostStory] = useState(false);
  const [editPage, setEditPage] = useState(false);
  const token = useSelector(selectToken);
  const homepage = useSelector(selectMyHomepage);

  const history = useHistory();

  if (token === null) {
    history.push("/");
  }

  if (homepage === null) {
    return <Loading />;
  }
  //   console.log("homepage of user", homepage);

  const buttons = postStory === false && editPage === false;
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
      {buttons ? (
        <Container>
          <Button onClick={() => setPostStory(true)}>
            Post cool story bro
          </Button>
          <Button onClick={() => setEditPage(true)}>Edit my Homepage</Button>
        </Container>
      ) : null}
      {postStory ? <PostStoryForm /> : null}
      {editPage ? <EditPageForm /> : null}
      <Container>
        <StoryCards homepage={homepage} />
      </Container>
    </>
  );
}
