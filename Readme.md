# Вот тестовое задание:

Спроектировать и реализовать clientside SPA на основе макета страницы прохождения теста:

Рекомендованные технологии: ReactJS, Redux, Webpack, Slim/Jade/Pug, SASS/Stylus, JS/CoffeeScript.

Функционал:

* Клиентсайдный рендеринг вопросов и ответов из моков (например из JSON файла или застабленного ответа из API)
* Тикающий таймер обратного отсчёта
* Валидация выбранности ответа, дизейбл кнопки "Ответить", если не выбран ни один вариант
* Сохранение в localstorage выбранных вариантов ответов на вопросы

Вёрстка:

* Адаптивная
* Нижняя панель фиксирована (при скролле остается на месте)
* Подсветка синтаксиса в вопросах и ответах (например с помощью highlightjs)
* Боковое меню с навигацией можно не делать (а можно взять с сайта)
* Кастомные radio кнопки
* Использовать CSS фрейморк не обязательно

Ценится:

* Качество выполненной работы и внимание к деталям
* Pixel perfect соответствие макету
* Следование принципам БЭМ в нейминге
* Охват технологий из списка рекомендованных
* Количество выполненной работы

Наша оценка разработки - 16 часов. Это много, поэтому какой-то функционал можно скипать.

Было бы круто получить краткий итог по проделанной работе и принятым решениям.


# Frontend Boilerplate

A boilerplate of things that mostly shouldn't exist.

## Contains

- [x] [Webpack](https://webpack.github.io)
- [x] [React](https://facebook.github.io/react/)
- [x] [Redux](https://github.com/reactjs/redux)
- [x] [Babel](https://babeljs.io/)
- [x] [Autoprefixer](https://github.com/postcss/autoprefixer)
- [x] [PostCSS](https://github.com/postcss/postcss)
- [x] [CSS modules](https://github.com/outpunk/postcss-modules)
- [x] [Rucksack](http://simplaio.github.io/rucksack/docs)
- [x] [React Router Redux](https://github.com/reactjs/react-router-redux)
- [x] [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension)
- [ ] Redux effects
- [x] TodoMVC example

## Setup

```
$ npm install
```

## Running

```
$ npm start
```

## Build

```
$ npm run build
```

## Note

My personal projects have diverged from this quite a bit, I use browserify now instead etc, but feel free to use this if it fits your needs! I won't be updating it a ton for now unlesse I have time to update it to match my current workflow.

# License

MIT
