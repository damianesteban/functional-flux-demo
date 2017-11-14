import * as React from 'react';
import { Button, Card, Container, Header, Segment, Statistic } from 'semantic-ui-react'

const AppView = (props: any) => {
  return (
      <Segment>
        <Header as='h2' textAlign='center'>
          The Counter
        </Header>
        <Main {...props} />
      </Segment>
  )
}

const Main = (props: any) => {
  return (
      <Container>
      <Card className="ui centered card">
        <Card.Content>
          <Statistic className='ui centered aligned header'>
            <Statistic.Value>{props.counter}</Statistic.Value>
            <Statistic.Label>Things</Statistic.Label>
          </Statistic>
          <Segment>
            <Button.Group className='centered'>
              <Button negative onClick={props.onDecrementNumber}>Decrement</Button>
              <Button.Or />
              <Button positive onClick={props.onIncrementNumber}>Increment</Button>
            </Button.Group>
          </Segment>
          <Button.Group vertical widths='3'>
            <Button basic attached='top' onClick={props.onZeroNumber}>Reset</Button>
            <Button basic attached='bottom' onClick={props.onRandomNumber}>Random</Button>
          </Button.Group>
        </Card.Content>
      </Card>
      </Container>
  )
}

export default AppView;