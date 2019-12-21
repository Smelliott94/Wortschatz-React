import React, {useState} from 'react';
import { Grid, Icon, Card, Accordion } from 'semantic-ui-react';

interface topWord {
  id: number;
  word: string;
  translation: string;
}

interface topWords {
  words: topWord[]
}

const dummydata: topWord[] = [  // Done and returned by the backend
    {
      id: 1,
      word: 'eins',
      translation: 'one'
    },
    {
      id: 2,
      word: 'zwei',
      translation: 'two'
    },
    {
      id: 3,
      word: 'drei',
      translation: 'three'
    },
    {
      id: 4,
      word: 'vier',
      translation: 'four'
    },
    {
      id: 5,
      word: 'funf',
      translation: 'five'
    },
    {
      id: 6,
      word: 'sechs',
      translation: 'six'
    },
    {
      id: 7,
      word: 'sieben',
      translation: 'seven'
    },
    {
      id: 8,
      word: 'acht',
      translation: 'eight'
    }
]

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

function TopWordsGrid(props: topWords) {
  let words = props.words;
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

const Lesson: React.FC = () => {

  const [active, setActive] = useState(true);
  
  return (
    <Accordion styled>
      <Accordion.Title
        active={active}
        index={0}
        onClick={() => setActive(!active)}
      >
        <Icon name='dropdown' />
        Top 8 Words
      </Accordion.Title>
      <Accordion.Content active={active}>
        <TopWordsGrid words={dummydata} />
      </Accordion.Content>
    </Accordion>
  )
}

export default Lesson;