'use client';

import { useEffect, useMemo, useState } from 'react';
import Words from '@/mock/_words.json';

import styles from './page.module.css';
import Link from 'next/link';
import shuffle from '@/utils/shuffle';

type Option = {
  text: string;
  isCorrect: boolean;
  id: number | null;
};

const defaultOption: Option = {
  text: '',
  isCorrect: false,
  id: null
};

export default function Home() {
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [isClient, setIsClient] = useState<boolean>(false);
  const [selectItem, setSelectItem] = useState<Option>(defaultOption);

  useEffect(() => {
    setIsClient(true);

    return () => {
      setIsClient(false);
    };
  }, []);

  const getRandomInt = (min: number, max: number) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
  };

  const wordData = useMemo(() => {
    const question = Words[questionIndex].eng;
    const successOption = {
      text: Words[questionIndex].tr,
      isCorrect: true
    };
    const options = [{ ...successOption, id: 0 }];

    while (options.length < 4) {
      const randomIndex = getRandomInt(0, Words.length);
      if (randomIndex !== questionIndex) {
        options.push({
          text: Words[randomIndex].tr,
          isCorrect: false,
          id: options.length
        });
      }
    }
    return {
      question,
      options: shuffle(options)
    };
  }, [questionIndex]);

  const resetOptionColors = () => {
    wordData.options.forEach((option: Option) => {
      document
        .getElementById(option.id?.toString() ?? '')
        ?.style.setProperty('background-color', '#ddd');
    });
  };

  const nextQuestion = () => {
    resetOptionColors(); 
    setSelectItem(defaultOption);
    setQuestionIndex(Math.floor(Math.random() * Words.length));
  };

  const checkAnswer = () => {
    if (selectItem.isCorrect) {
      document
        .getElementById(selectItem.id?.toString() ?? '')
        ?.style.setProperty('background-color', 'green');
    } else {
      const correctOption = wordData.options.find(
        (option: Option) => option.isCorrect
      )?.id;

      document
        .getElementById(correctOption?.toString() ?? '')
        ?.style.setProperty('background-color', 'green');

      document
        .getElementById(selectItem.id?.toString() ?? '')
        ?.style.setProperty('background-color', 'red');
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🧩Word Game🧩</h1>

      <p className={styles.question}>{wordData.question}</p>
      <div className={styles.buttonContainer}>
        {wordData.options.map((option: Option, index: number) => (
          <button
            onClick={() => {
              if (selectItem.text === option.text) {
                setSelectItem(defaultOption);
              } else {
                setSelectItem(option);
              }
            }}
            key={option.id}
            id={option.id?.toString()}
            className={`${styles.optionButton} ${
              option.text === selectItem.text ? styles.optionButtonSelected : ''
            }`}
          >
            <p>{option.text}</p>
          </button>
        ))}
      </div>
      <div className={styles.actionButtons}>
        <button
          onClick={checkAnswer}
          disabled={!selectItem.text}
          className={styles.actionButton}
        >
          Cevabı Kontrol Et
        </button>
        <button className={styles.actionButton} onClick={nextQuestion}>
          Sonraki Soru
        </button>
      </div>
      <button className={styles.linkButton}>
        <Link href='/wordCombination' className={styles.linkText}>
          Word Combination Game
        </Link>
      </button>
    </div>
  );
}
