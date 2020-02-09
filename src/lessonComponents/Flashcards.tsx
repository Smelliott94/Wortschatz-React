import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Loader, Dimmer, Reveal, Image, Container, Grid, Segment, Header } from 'semantic-ui-react';
import { API_ROOT } from "../App";

interface flashcard {
  id: number;
  word: string;
  translation: string;
  image: string
}

function Flashcards() {

  const [flashcards, setFlashcards] = useState([{
    id: 1,
    word: 'ein',
    translation: 'one',
    image: ''
  }]);

  const [cardsLoaded, setCardsLoaded] = useState(false)

  useEffect(() => {
    axios.get(API_ROOT + 'words')
      .then((response: AxiosResponse<flashcard[]>) => {
        setFlashcards(response.data)
        setCardsLoaded(true)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  const imgStyle = { height: '100%' }

  const flashcardReveals = () => (
    flashcards.map(flashcard =>

      <Grid.Column>
        <Reveal animated='fade' key={flashcard.id}>
          <Reveal.Content visible >
            <Segment textAlign='center'>
              <Header as='h2'> {flashcard.word} </Header>
              <Image src={flashcard.image} />
            </Segment>
          </Reveal.Content>
          <Reveal.Content hidden>
            <Segment textAlign='center'>
              <Header as='h2'> {flashcard.translation} </Header>
              <Image src={flashcard.image} />
            </Segment>
          </Reveal.Content>
        </Reveal>
      </Grid.Column>
    )
  )

  return (
    <Grid container columns='equal' verticalAlign='middle'>
      <Dimmer active={!cardsLoaded}>
        <Loader size="large"></Loader>
      </Dimmer>
      <Grid.Row stretched>
      {flashcardReveals()}
      </Grid.Row>
    </Grid>
  )
}
export default Flashcards