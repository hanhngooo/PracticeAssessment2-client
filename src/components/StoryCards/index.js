import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

export default function StoryCards(props) {
  return (
    <Carousel>
      {props.homepage.stories.map((story) => {
        return (
          <Carousel.Item key={story.id}>
            <img
              src={story.imageUrl}
              alt={story.name}
              className="d-block w-100 "
            />
            <Carousel.Caption
              style={{
                backgroundColor: `${props.homepage.backgroundColor}99`,
                color: `${props.homepage.color}`,
              }}
            >
              <h4>{story.name}</h4>
              <h5>{story.content}</h5>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
