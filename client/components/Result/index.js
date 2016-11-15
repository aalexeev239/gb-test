import React from 'react';

export default ({restart, challenge: {validating, validated, validationFail, result: {correct, total}}}) => {

  let text = (<div></div>);

  if (validated) {
    text = (<div>
      Ваш результат: {correct} из {total} <br/>
      <button onClick={restart}>Пройти ещё раз</button>
    </div>)
  } else {
    if (validating) {
      text = (<div>
        Обрабатываем результаты...
      </div>)
    } else if (validationFail) {
      text = (<div>
        Хьюстон, у нас проблемы: на сервер напали инопланетяне.
        В пылу яростной битвы мы так и не смогли проверить результаты.
      </div>)
    }
  }

  return (
    <div>
      Тест завершён.
      {text}
    </div>
  )
};
