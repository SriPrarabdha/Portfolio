import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gif from "../../Assets/Projects/gif-search.png";
import protein from "../../Assets/Projects/protein.png";
import reddit from "../../Assets/Projects/reddit.png";
import content from "../../Assets/Projects/contentGenerator.png";
import doctalk from "../../Assets/Projects/doctalk.png";
import rickbot from "../../Assets/Projects/rickbot.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={content}
              isBlog={false}
              title="Content Generator"
              description="This project is a content generator that uses Next.js and Open AI API to generate viral content such as Twitter threads, LinkedIn posts, and YouTube video scripts. It is designed to give users the power to quickly create engaging, shareable content with minimal effort.."
              ghLink="https://github.com/SriPrarabdha/AI-Content-Generator"
              demoLink="https://ai-content-generator-six.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rickbot}
              isBlog={false}
              title="RickBot"
              description="This project is a Discord Bot that talks like Rick from the popular sci-fi show Rick and Morty. To make this happen, I scraped transcripts from various fandom sites to collect data. I then fine tuned a Google's T5 Transformer Model and deployed this model on Hugging Face as an API. Finally, I deployed a Flask server that is our Discord Bot. It’s a fun way to interact with your favorite characters and have a conversation with them!."
              ghLink="https://github.com/SriPrarabdha/RickBot"
              demoLink="https://discord.com/api/oauth2/authorize?client_id=1056096258747547769&permissions=2048&scope=bot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reddit}
              isBlog={false}
              title="Reddit Comment Scraper Package"
              description="This is a Python package that allows users to scrape multi-level comment trees from Reddit. It employs a depth-first search algorithm to traverse the comment tree of a Reddit post and retrieves the comment tree in the form of a JSON file. This package is useful for analyzing the structure of Reddit comments, as well as gathering data for further analysis."
              ghLink="https://github.com/SriPrarabdha/reddit-scrapper-package"
              demoLink="https://pypi.org/project/reddit-comment-scrapper/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gif}
              isBlog={false}
              title="GIF Search"
              description="This project is a Streamlit webapp that uses Semantic Search to improve the ability of search engines. It utilizes Sentence Transformer to embed the input query into a vector space and this vector representation is stored in a Pinecone. With this, the application is able to return the most relevant sentences to the input query by finding the sentences that are closest to the vector embedding of the query. This project provides an efficient and accurate search experience, helping users quickly find the information they need."
              ghLink="https://github.com/SriPrarabdha/gif-search"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={doctalk}
              isBlog={false}
              title="DOC Talk"
              description="ChatGPT Over Your Data : 
              This project is a web application that allows users to upload documents and then ask questions related to the document. The application uses the power of language models to embed the document into a vector space, allowing it to generate questions and answers related to the document content. This makes it easier for users to quickly gain insights from the document and understand its contents."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={protein}
              isBlog={false}
              title="Protein Structure Prediction App"
              description="TThis project is powered by Meta AI's latest Transformer model, ESMARTS, and enables users to upload a protein sequence to a Streamlit interface and then view and interact with the structure of that protein. Through this project, users can analyze the structure of their proteins and gain new insights into their properties. This project also provides a number of unique features, such as the ability to view the protein structure in different forms, as well as the ability to interact with and manipulate the protein structure. This project is ideal for scientists and researchers who are looking for an easy and efficient way to analyze their proteins."
              ghLink="https://github.com/SriPrarabdha/gif-search"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
