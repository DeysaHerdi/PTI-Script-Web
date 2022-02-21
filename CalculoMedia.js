// a. Disciplina: <<nome da disciplina>>
// b. Autor: <<<seu nome>>>
// c. Data: <<formato dd/mm//aaaa>>
// d. Objetivo: <<coloque o objetivo do programa>></coloque>
const nota1 = 9.0
const nota2 = 8.5
const nota3 = 10.0
const nota4 = 5.1

const calculoDaMedia = (nota1, nota2, nota3, nota4) => {
  const media = nota1 * 0.1 + nota2 * 0.2 + nota3 * 0.3 + nota4 * 0.4
  return media
}

const media = calculoDaMedia(nota1, nota2, nota3, nota4)
console.log(`A media do aluno foi ${media}`)
