import React, {useState} from 'react';
import { Grid, Icon, Card, Accordion, Button, Form, InputOnChangeData } from 'semantic-ui-react';
import axios, { AxiosResponse } from 'axios';

interface topWord {
  id: number;
  word: string;
  translation: string;
}

interface topWords {
  words: topWord[]
}
function TopWords() {

  const [active, setActive] = useState(true);
  const [words, setWords] = useState([{
    id: 0,
    word: 'german word / phrase',
    translation: 'translation'
  }])
  const [editWords, setEditWords] = useState(false);
    
  const apiRoot: string = 'https://wortschatz-me.herokuapp.com/'

  const handleWordChange = (word: topWord, data: InputOnChangeData) => {
    word.word = data.value // set word obj value to input field
    
    let newWords = words
    newWords[newWords.indexOf(word)] = word // replace word in word list
    setWords(newWords)
  }

  const handleTranslationChange = (word: topWord, data: InputOnChangeData) => {
    word.translation = data.value 
    
    let newWords = words
    newWords[newWords.indexOf(word)] = word
    setWords(newWords)
  }

  const handleSubmitWordChange = () => {
    console.log('send an API put to update the database with the current word state')
  }

  const getGridColumns = (words: topWord[]) => {

    const centered = {textAlign: 'center'}
    if (!editWords) {
      return (
      words.map((word) =>
      <Grid.Column style={{minWidth: '25%'}} key={"word-" + word.id }>
        <Card style={{maxWidth: 'fit-content', minWidth: '100%'}}>
          <Card.Header as="h2" style={centered} >{word.word}</Card.Header>
          <Card.Description style={centered}>{word.translation}</Card.Description>
        </Card>
      </Grid.Column>
    ));
    } else {
      return (
        words.map((word) =>
        
          <Grid.Column style={{minWidth: '25%'}} key={"word-" + word.id }>
            <Form  onSubmit={() => handleSubmitWordChange()}>
            <Card style={{maxWidth: 'fit-content', minWidth: '100%'}}>
              
              <Card.Header style={centered}>
                <Form.Input placeholder={word.word}
                  onChange={(e, data) => handleWordChange(word, data)}
                />
              </Card.Header>
              <Card.Description style={centered}>
                <Form.Input placeholder={word.translation}
                  onChange={(e, data) => handleTranslationChange(word, data)}
                />
                
              </Card.Description>
              <Button icon='save'></Button>
            </Card>
            </Form>
          </Grid.Column>
      ));
    }
    
  }

  const TopWordsGrid = () => {
    
    const words1 = words.slice(0, words.length/2)
    const words2 = words.slice(words.length/2)
    const gridItems1 = getGridColumns(words1);
    const gridItems2 = getGridColumns(words2);

    return (
      <Grid columns={5}>
        <Grid.Row>{gridItems1}</Grid.Row>
        <Grid.Row>{gridItems2}</Grid.Row>
      </Grid>
    )
  }

  const handleGetwords = () => {
    axios.get(apiRoot + 'topWords')
  .then((response: AxiosResponse<topWord[]>) => {
    setWords(response.data)
  })
  .catch((e) => {
    console.log(e)
  })
  }
  
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
          <Button primary onClick={handleGetwords}>Generate</Button>
          <Button circular icon={editWords ? 'check' : 'edit'} onClick={() => setEditWords(!editWords)}></Button>
        </div>
        {<TopWordsGrid />}
      </Accordion.Content>
    </Accordion>
  )
}

export default TopWords;