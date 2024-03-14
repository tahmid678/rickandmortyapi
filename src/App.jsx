import React, { useEffect } from 'react'
import MainComponent from './components/MainComponent';
import { connect } from 'react-redux';
import { getCharacters } from './redux/Reducer';

const mapStateToProps = state => {
  return {
    characters: state.characters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch
  }
}

function App(props) {

  useEffect(() => {
    getCharacters(props.dispatch);
  }, [])

  console.log(props.characters);

  return (
    <div>
      <MainComponent />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
