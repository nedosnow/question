require('dotenv').config()

const { connect, disconnect } = require('./src/db/db')
const Quest = require('./src/models/questModel')
const posts = [
  {
    quest: "Самая большая планета Солнечной системы?",
    picture: 'https://cs6.pikabu.ru/post_img/big/2017/09/15/9/1505487959152084058.jpg',
    right: "Юпитер",
    number:"1"

  },
  {
    title: "Назовите месяц, в котором Юрий Гагарин совершил первый полет в космос.",
    picture: 'https://cs6.pikabu.ru/post_img/big/2017/09/15/9/1505487959152084058.jpg',
    right: 'апрель',
    number:"2"
  },
  {
    title: "Изобретатель первых космических кораблей.",
    picture: 'https://cs6.pikabu.ru/post_img/big/2017/09/15/9/1505487959152084058.jpg',
    right: "Королев",
    number:"3"
  },
  {
    title: "Первый в истории искусственный объект, достигший границ космического пространства?",
    picture: 'https://cs6.pikabu.ru/post_img/big/2017/09/15/9/1505487959152084058.jpg',
    right: "ФАУ-2",
    number:"4"
  },
]


const posts2 = [
  {
    quest: "1 Какой фильм изображен на стоп-кадре?",
    picture: 'https://vibirai.ru/image/1116829.w640.jpg',
    right: "Интерстеллар",
    number:"5"

  },
  {
    title: "2 Какой фильм изображен на стоп-кадре?",
    picture: 'https://vibirai.ru/image/1116854.w640.jpg',
    right: "Бесславные ублюдки",
    number:"6"
  },
  {
    title: "3 Какой фильм изображен на стоп-кадре?",
    picture: 'https://vibirai.ru/image/1116862.w640.jpg',
    right: "Индиана Джонс",
    number:"7"
  },
  {
    title: "4 Какой фильм изображен на стоп-кадре?",
    picture: 'https://vibirai.ru/image/1117970.w640.jpg',
    right: "Москва слезам не верит",
    number:"8"
  },
]


const posts3 = [
  {
    quest: `Что выведет этот код? \n
    let y = 1; \n
    let x = y = 2; \n
    alert(x);`,
    picture: 'https://cs6.pikabu.ru/post_img/big/2017/09/15/9/1505487959152084058.jpg',
    right: "2",
    number:"9"

  },
  {
    title: `JavaScript является подвидом языка C++ — верно?`,
    picture: 'https://cs6.pikabu.ru/post_img/big/2017/09/15/9/1505487959152084058.jpg',
    right: "Нет",
    number:"10"
  },
  {
    title: "За сколько дней был разработан LiveScript — первая версия языка JavaScript?",
    picture: 'https://cs6.pikabu.ru/post_img/big/2017/09/15/9/1505487959152084058.jpg',
    right: "10",
    number:"11"
  },
  {
    title: "Метод массивов slice изменяет текущий массив?",
    picture: 'https://cs6.pikabu.ru/post_img/big/2017/09/15/9/1505487959152084058.jpg',
    right: "Нет",
    number:"12"
  },
]


async function seed() {
  connect()
  return Promise.all(posts.map((post) => Quest.create(post)))
}
seed().then(() => disconnect())
