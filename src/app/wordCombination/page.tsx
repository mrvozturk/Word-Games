'use client';

import { useState } from 'react';
import Sentences from '@/mock/sentence.json';

import Link from 'next/link';
import shuffle from '@/utils/shuffle';

const WordCombination = () => {
  const [words, setWords] = useState<string[]>([]);
  const [sentenceIndex, setSentenceIndex] = useState<number>(0);

  const startGame = () => {
    const index = Math.floor(Math.random() * Sentences.length);
    const sentence = Sentences[index];
    const words = sentence.split(' ');

    const shuffledWords: string[] = shuffle(words);

    setSentenceIndex(index);
    setWords(shuffledWords);
  };

  const checkAnswer = () => {
    const input = document.getElementById('answer') as HTMLInputElement;
    const answer = input.value.trim().toLowerCase();

    const sentence = Sentences[sentenceIndex];
    const words = sentence.split(' ');

    console.log('words', words);

    const correctAnswer = words.join(' ').toLowerCase();

    if (answer === correctAnswer) {
      alert('Tebrikler, doğru cevap!');
    } else {
      alert('Üzgünüm, yanlış cevap! Doğru cevap: ' + correctAnswer);
    }
  };

  const nextQuestion = () => {
    const input = document.getElementById('answer') as HTMLInputElement;
    input.value = '';

    startGame();
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
                const input = document.getElementById(
                  'answer'
                ) as HTMLInputElement;
                input.value += `${word} `;

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
