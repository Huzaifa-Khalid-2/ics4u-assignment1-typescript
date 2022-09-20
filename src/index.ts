/*
 * This is Rock Paper Scissors Program
 *
 * @author  Huzaifa Khalid
 * @version 1.0
 * @since   2022-09-20
 */

import promptSync from 'prompt-sync'
const prompt = promptSync()

const choices = ['rock', 'paper', 'scissors']
console.log('This program is a rock paper scissor game')
const randomChoice = choices[Math.floor(Math.random() * 3)]
const choice = prompt('Enter rock, paper or scissors: ')

if (choice === randomChoice) {
  console.log('Its a tie')
} else if (
  (choice === 'rock' && randomChoice === 'paper') ||
  (choice === 'paper' && randomChoice === 'scissors') ||
  (choice === 'scissors' && randomChoice === 'rock')
) {
  console.log('You lost')
} else {
  console.log('You won')
}
console.log('\nDone.')
