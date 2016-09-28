import React from 'react';

const Letter = ({name, accepted }) => {
  let body;
  if (accepted) {
    body = `We are pleased to inform you that you have a place at Hogwarts School of
Witchcraft and Wizardry. Please find enclosed a list of all necessary books and
equipment.

Term begins on 1 September. We await your owl by no later than 31 July.`
  } else {
    body = `We regret to inform you that we are unable to offer you a place at Hogwarts
School of Witchcraft and Wizardry. After reviewing your application and
Github profile, we recognize that you are indeed a "coding wizard".
Unfortunately, we have concluded that you do not have actual magical
abilities, which you must have to be admitted into Hogwarts.`
  }

  return (
    <div>
      <h1> HOGWARTS SCHOOL OF WITCHRAFT AND WIZARDRY </h1>
      <h3>
          Headmaster: Albus Dumbledore
          (Order of Merlin, First Class, Grand Sorc., Chf. Warlock, Supreme Mugwump,
          International Confed. of Wizards)
      </h3>
      <p>
        Dear {name},
        {body}
      </p>
      <p>
        Your sincerely,

        Minerva McGonagall
        Deputy Headmistress
      </p>
    </div>
  )
}

export default Letter;
