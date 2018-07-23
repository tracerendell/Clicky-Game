import React, { Component } from 'react';
import Image from './Image'
import characters from "../characters.json"

class Images extends Component {

  state = {
    shuffledCharacters: this.shuffle(characters),
    imagesClickedIds: []
  }

  shuffle(array) {
    //console.log('shuffling');
    let counter = array.length;
    //console.log(`counter: ${counter}`);
    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
    //console.log('after shuffle')
    //console.log({ array });
    return array;
  }

  handleImageClick(id) {
    //console.log('clicked');
    //console.log('id clicked:', id)
    //console.log('imagesClickedArray:', this.state.imagesClickedIds)
    if (this.state.imagesClickedIds.includes(id)) {
      alert("game over");
      this.setState({ imagesClickedIds: []});
      this.props.handleResetScore();
    }
    else {
      let tempClicks = [...this.state.imagesClickedIds, id]
      let tempCharacters = this.shuffle(characters)
      this.props.handleScore();
      //
      this.setState({
        imagesClickedIds: tempClicks,
        shuffledCharacters: tempCharacters
      })
      
    }

    let temp = this.shuffle(characters)
    this.setState.shuffledCharacters = temp;
  }

  render() {
    return (
      <div className="Images container" >
        <div className="row" >
          {this.state.shuffledCharacters.map(character => {
            return <Image handleImageClick={() => this.handleImageClick(character.id)}
              key={character.id} id={character.id} path={character.path}

            />
          })
          }
        </div>
      </div>
    );
  }
}

export default Images;