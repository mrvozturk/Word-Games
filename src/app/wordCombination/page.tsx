'use client';

import { ChangeEvent, useState } from 'react';
import Sentences from '@/mock/sentence.json';

import Link from 'next/link';
import shuffle from '@/utils/shuffle';

const WordCombination = () => {
  const [words, setWords] = useState<string[]>([]);
  const [sentenceIndex, setSentenceIndex] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>('');

  const startGame = () => {
    const index = Math.floor(Math.random() * Sentences.length);
    const sentence = Sentences[index];
    const words = sentence.split(' ');

    const shuffledWords: string[] = shuffle(words);

    setSentenceIndex(index);
    setWords(shuffledWords);
    setInputValue('');
  };

  const checkAnswer = () => {
    const answer = inputValue.trim().toLowerCase();

    const sentence = Sentences[sentenceIndex];
    const words = sentence.split(' ');

    const correctAnswer = words.join(' ').toLowerCase();

    if (answer === correctAnswer) {
      alert('Tebrikler, doğru cevap!' + ' Cevabınız: ' + inputValue);
    } else {
      alert(
        'Üzgünüm, yanlış cevap! Doğru cevap: ' +
          correctAnswer +
          '.' +
          ' Cevabınız: ' +
          inputValue
      );
    }
  };

  const nextQuestion = () => {
    setInputValue('');
    startGame();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputEvent = e.nativeEvent as InputEvent;

    // Eğer burada istenmeyen bir input girildiğinde işlemi engellemek için kullanabilirsiniz.
    if (
      inputEvent.inputType !== 'deleteContentBackward' &&
      inputEvent.inputType !== 'deleteContentForward'
    ) {
      e.target.value = ''; // Kullanıcının yazmasını engellemek için input'u temizliyoruz.
    }
  };

  return (
    <div
      style={{
        width: '75%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          color: '#000'
        }}
      >
        🧩 Kelime Oyunu 🧩
      </h2>
      <div>
        <p
          style={{
            textAlign: 'center',
            fontWeight: 600,
            color: '#000'
          }}
        >
          Hadi bu kelimeleri birleştirelim
        </p>
        <div
          style={{
            marginTop: 40,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 20,
            justifyContent: 'center'
          }}
        >
          {words.map((word, index) => (
            <button
              onClick={() => {
                setInputValue(inputValue + `${word} `);

                const newWords = words.filter((_, i) => i !== index);
                setWords(newWords);
              }}
              key={`${word}-${index}`}
              style={{
                listStyleType: 'none',
                backgroundColor: '#ffff',
                color: '#000',
                padding: '10px 15px',
                textAlign: 'center',
                cursor: 'pointer',
                borderRadius: '10px',
                marginRight: '5px',
                border: 'none'
              }}
            >
              {word}
            </button>
          ))}
        </div>
        <input
          type='text'
          id='answer'
          placeholder='Cevabınızı girin'
          value={inputValue}
          onChange={handleChange}
          style={{
            width: '100%',
            textAlign: 'center',
            height: '50px',
            marginTop: '10px',
            margin: '15px auto',
            backgroundColor: '#f1f1f1',
            border: 'none',
            borderRadius: '10px',
            padding: '10px',
            boxSizing: 'border-box',
            fontSize: '16px',
            color: '#000'
          }}
          onKeyDown={e => {
            const key = e.key || e.keyCode || e.which;

            // Eğer key "Unidentified" ise, keyCode veya which kullanılır
            const keyCode = e.keyCode || e.which;

            // Backspace veya Delete tuşuna basıldığında işlem yapılacak
            if (
              key === 'Backspace' ||
              key === 'Delete' ||
              keyCode === 8 ||
              keyCode === 46 ||
              keyCode === 229
            ) {
              // inputValue değerini boşluklarla bölüp filtreleme yapıyoruz
              const value = inputValue.split(' ').filter(Boolean);

              // Eğer inputValue'de hala kelime varsa
              if (value.length !== 0) {
                setInputValue(''); // input'u temizle

                const suffeledWords = shuffle([...words, ...value]);

                setWords(suffeledWords); // kelimeleri karıştır
              }
            }
          }}
        />
      </div>
      <div
        style={{
          marginTop: '10px',
          display: 'flex',
          justifyContent: 'center',
          gap: '10px'
        }}
      >
        {!sentenceIndex && (
          <button
            onClick={startGame}
            style={{
              textDecoration: 'none',
              alignSelf: 'center',
              color: '#000',
              backgroundColor: '#f1f1f1',
              border: 'none',
              padding: '10px 20px',
              cursor: 'pointer',
              borderRadius: '15px',
              fontSize: '13px',
              height: '75px'
            }}
          >
            Oyuna Başla
          </button>
        )}
        <button
          onClick={checkAnswer}
          style={{
            backgroundColor: '#f1f1f1',
            color: '#000',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            borderRadius: '15px',
            height: '75px'
          }}
        >
          Cevabı Kontrol Et
        </button>
        <button
          onClick={nextQuestion}
          style={{
            backgroundColor: '#f1f1f1',
            color: '#000',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            borderRadius: '15px',
            height: '75px'
          }}
        >
          Sonraki Soru
        </button>
      </div>
      <Link
        style={{
          marginTop: '10px',
          textDecoration: 'none',
          alignSelf: 'center',
          color: '#000',
          backgroundColor: '#f1f1f1',
          border: 'none',
          padding: '10px 20px',
          cursor: 'pointer',
          borderRadius: '5px',
          fontSize: '13px'
        }}
        href='/'
      >
        Word Game
      </Link>
    </div>
  );
};

export default WordCombination;
