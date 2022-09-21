import React from 'react';
import { useDarkMode } from 'hooks/use-dark-mode';
import { RiMoonLine, RiSunLine } from 'react-icons/ri';
import { useTheme } from 'styled-components';
import * as S from './styles';

export function ThemeSwitcher() {
  const theme = useTheme();

  const audios = [
    '/audio/t_flashbang01.wav',
    '/audio/t_flashbang03.wav',
    '/audio/t_flashbang04.wav',
  ];

  const audio =
    typeof Audio !== 'undefined'
      ? new Audio(audios[Math.floor(Math.random() * audios.length)])
      : undefined;

  const { isDarkMode, disable, enable } = useDarkMode();

  const toggleLightMode = () => {
    audio?.play();

    setTimeout(() => {
      disable();
    }, 850);
  };

  return (
    <S.Container>
      <S.Toggle isActive={!isDarkMode} onClick={toggleLightMode}>
        <RiSunLine size={15} color={theme.colors.text} />
      </S.Toggle>
      <S.Toggle isActive={isDarkMode} onClick={enable}>
        <RiMoonLine size={15} color={theme.colors.text} />
      </S.Toggle>
    </S.Container>
  );
}
