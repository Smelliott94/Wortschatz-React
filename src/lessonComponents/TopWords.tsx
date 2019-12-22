import React, {useState, useEffect} from 'react';
import { Grid, Icon, Card, Accordion, Button } from 'semantic-ui-react';
import axios, { AxiosResponse } from 'axios';

interface topWord {
  id: number;
  word: string;
  translation: string;
}

interface topWords {
  words: topWord[]
}


const getGridColumn = (words: topWord[]) => {
  const centered = {textAlign: 'center'}
  return (
    words.map((word) =>
    <Grid.Column style={{minWidth: '25%'}} key={"word-" + word.id }>
      <Card style = {{maxWidth: 'fit-content', minWidth: '100%'}}>
        <Card.Header as="h2" style={centered} >{word.word}</Card.Header>
        <Card.Description style={centered}>{word.translation}</Card.Description>
      </Card>
    </Grid.Column>
  ));
}

const TopWordsGrid = (props: topWords) => {
  const words = props.words
  const words1 = words.slice(0, words.length/2)
  const words2 = words.slice(words.length/2)
  const gridItems1 = getGridColumn(words1);
  const gridItems2 = getGridColumn(words2);

  return (
    <Grid columns={5}>
      <Grid.Row>{gridItems1}</Grid.Row>
      <Grid.Row>{gridItems2}</Grid.Row>
    </Grid>
  )
}

function getWords(setter: React.Dispatch<React.SetStateAction<topWord[]>>) {
  axios.get('https://wortschatz-me.herokuapp.com/topWords')
  .then((response: AxiosResponse<topWord[]>) => {
    setter(response.data)
  })
  .catch((e) => {
    console.log(e)
  })
}


function TopWords() {

  const [active, setActive] = useState(true);
  const [words, setWords] = useState([{
    id: 1,
    word: 'eins',
    translation: 'one'
  }])

  useEffect(() => {
    axios.get('http://localhost:5000/topWords')
    .then((response: AxiosResponse<topWord[]>) => {
      setWords(response.data)
    })
    .catch((e) => {
      console.log(e)
    })
  }, [])
  
  return (
    <Accordion style={{maxWidth: "80%", margin: "auto"}}>
      <Accordion.Title
        active={active}
        index={0}
        onClick={() => setActive(!active)}
      >
        <Icon name='dropdown' />
        Top 8 Words
      </Accordion.Title>
      <Accordion.Content active={active}>
        <div style={{padding: '10px'}}>
          <Button primary onClick={() => {getWords(setWords)}}>Generate</Button>
        </div>
        <TopWordsGrid words={words}/>
      </Accordion.Content>
    </Accordion>
  )
}

export default TopWords;