'use client';

import { ChangeEvent, useState } from 'react';
import Sentences from '@/mock/sentence.json';
import Link from 'next/link';
import shuffle from '@/utils/shuffle';
import styles from './page.module.css';

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

    if (
      inputEvent.inputType !== 'deleteContentBackward' &&
      inputEvent.inputType !== 'deleteContentForward'
    ) {
      e.target.value = '';
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>🧩 Kelime Oyunu 🧩</h2>
      <div>
        <p className={styles.instructions}>Hadi bu kelimeleri birleştirelim</p>
        <div className={styles.wordsContainer}>
          {words.map((word, index) => (
            <button
              onClick={() => {
                setInputValue(inputValue + `${word} `);
                const newWords = words.filter((_, i) => i !== index);
                setWords(newWords);
              }}
              key={`${word}-${index}`}
              className={styles.wordButton}
            >
              {word}
            </button>
          ))}
        </div>
        <input
          type="text"
          id="answer"
          placeholder="Cevabınızı girin"
          value={inputValue}
          onChange={handleChange}
          className={styles.inputField}
          onKeyDown={(e) => {
            const key = e.key || e.keyCode || e.which;
            const keyCode = e.keyCode || e.which;

            if (
              key === 'Backspace' ||
              key === 'Delete' ||
              keyCode === 8 ||
              keyCode === 46 ||
              keyCode === 229
            ) {
              const value = inputValue.split(' ').filter(Boolean);
              if (value.length !== 0) {
                setInputValue('');
                const suffeledWords = shuffle([...words, ...value]);
                setWords(suffeledWords);
              }
            }
          }}
        />
      </div>
      <div className={styles.buttonContainer}>
        {!sentenceIndex && (
          <button onClick={startGame} className={styles.actionButton}>
            Oyuna Başla
          </button>
        )}
        <button onClick={checkAnswer} className={styles.actionButton}>
          Cevabı Kontrol Et
        </button>
        <button onClick={nextQuestion} className={styles.actionButton}>
          Sonraki Soru
        </button>
      </div>
      <Link href="/" className={styles.linkButton}>
        Word Game
      </Link>
    </div>
  );
};

export default WordCombination;
