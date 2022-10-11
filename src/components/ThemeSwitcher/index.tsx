import React from 'react';
import { useDarkMode } from 'hooks/use-dark-mode';
import { RiMoonLine, RiSunLine } from 'react-icons/ri';
import { useTheme } from 'styled-components';
import * as S from './styles';

const audios = [
  '/audio/t_flashbang01.mp3',
  '/audio/t_flashbang03.mp3',
  '/audio/t_flashbang04.mp3',
  '/audio/t_flashbang05.mp3',
];

type BangTimes = Record<
  | 't_flashbang01.mp3'
  | 't_flashbang03.mp3'
  | 't_flashbang04.mp3'
  | 't_flashbang05.mp3',
  number
>;

const bangTimes: BangTimes = {
  't_flashbang01.mp3': 640,
  't_flashbang03.mp3': 990,
  't_flashbang04.mp3': 1010,
  't_flashbang05.mp3': 2140,
};

export function ThemeSwitcher() {
  const [canPlay, setCanPlay] = React.useState(false);

  const theme = useTheme();

  const audio = React.useMemo(() => {
    return typeof Audio !== 'undefined'
      ? new Audio(audios[Math.floor(Math.random() * audios.length)])
      : undefined;
  }, []);

  const { isDarkMode, disable, enable } = useDarkMode();

  const toggleLightMode = () => {
    if (canPlay) audio?.play();

    let time = 0;
    (Object.keys(bangTimes) as (keyof typeof bangTimes)[]).forEach(
      (fileName) => {
        if (audio?.src?.endsWith(fileName)) time = bangTimes[fileName];
      },
    );

    setTimeout(() => {
      disable();
    }, time);
  };

  React.useEffect(() => {
    function enableAudio() {
      setCanPlay(true);
    }

    audio?.addEventListener('canplaythrough', enableAudio);

    return () => {
      audio?.removeEventListener('canplaythrough', enableAudio);
    };
  }, [audio]);

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
