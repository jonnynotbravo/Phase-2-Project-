import React from 'react'
import NewCharacterForm from './NewCharacterForm'
import PickCharacter from './PickCharacter'
import MemberSelection from './MemberSelection'

function CharacterScreen() {
  return (
    <div className='container'>
      <MemberSelection id="member-selection"/>
      <NewCharacterForm id="new-character-form"/>
      <PickCharacter id="pick-character"/>
    </div>
  )
}

export default CharacterScreen
