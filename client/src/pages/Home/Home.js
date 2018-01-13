import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Panel from "../../components/Panel";
import Article from "../../components/Article";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List } from "../../components/List";

class Home extends Component {
  state = {
    articles: [],
    message: "Click Get Articles"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getArticles = () => {
    API.getArticles()
      .then(res => {
          console.log(res.data);
        this.setState({
          articles: res.data,
          message: !res.data.length
            ? "No New Articles Found, Try a Different Query"
            : ""
        })
    }
      )
      .catch(err => console.log(err));
  };

  handleArticleSave = id => {
    const article = this.state.articles.find(article => article._id === id);
    API.saveArticle(article).then(res => this.getArticles());
  };

  render() {
    return (
        <div>
            <Jumbotron>
                <h1 className="text-center">
                <strong>Medical News Today Reader</strong>
                </h1>
                <h2 className="text-center">
                Get the lattest &amp; save medical articles.
                </h2>
            </Jumbotron>
            <Container>
                <Row>
                <Col size="md-12">
                    <Panel title="Query" icon="newspaper-o">
                    <button onClick={() => this.getArticles()}>Get Articles</button>
                    </Panel>
                </Col>
                </Row>
                <Row>
                <Col size="md-12">
                    <Panel title="Results">
                    {this.state.articles.length ? (
                        <List>
                        {this.state.articles.map(article => (
                            <Article
                            key={article.url}
                            _id={article.url}
                            title={article.title}
                            url={article.url}
                            date={article.publishedAt}
                            handleClick={this.handleArticleSave}
                            buttonText="Save Article"
                            />
                        ))}
                        </List>
                    ) : (
                        <h2 className="text-center">{this.state.message}</h2>
                    )}
                    </Panel>
                </Col>
                </Row>
                <Footer />
            </Container>
        </div>
    );
  }
}

export default Home;
