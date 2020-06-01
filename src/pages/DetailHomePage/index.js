import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchDetailHomepage } from "../../store/detailHomepage/actions";
import { selectDetailHomepage } from "../../store/detailHomepage/selectors";

import Homepage from "../../components/Homepage/index";
import StoryCards from "../../components/StoryCards/index";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

export default function DetailHomePage() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const homepage = useSelector(selectDetailHomepage);

  console.log("homepage by id", homepage);

  useEffect(() => {
    dispatch(fetchDetailHomepage(id));
  }, [dispatch, id]);

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
