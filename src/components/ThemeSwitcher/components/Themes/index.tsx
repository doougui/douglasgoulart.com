import { useFlashbang } from 'components/ThemeSwitcher/contexts/flashbang-context';
import { useColorTheme } from 'contexts/ColorThemeContext';
import React from 'react';
import { RiMoonLine, RiSunLine } from 'react-icons/ri';
import { Flashbang } from '../Flashbang';
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

export function Themes() {
  const [canPlay, setCanPlay] = React.useState(false);

  const { colorMode, setColorMode } = useColorTheme();
  const { setIsOpen } = useFlashbang();

  const audio = React.useMemo(() => {
    return typeof Audio !== 'undefined'
      ? new Audio(audios[Math.floor(Math.random() * audios.length)])
      : undefined;
  }, []);

  const toggleLightMode = () => {
    if (colorMode === 'light') return;

    if (!canPlay) {
      setColorMode('light');
      return;
    }

    const getBangTime = () => {
      let time = 0;
      (Object.keys(bangTimes) as (keyof typeof bangTimes)[]).forEach(
        (fileName) => {
          if (audio?.src?.endsWith(fileName)) time = bangTimes[fileName];
        },
      );
      return time;
    };

    audio?.play();

    const FADE_OUT_TIME = 500;
    const time = getBangTime();

    setTimeout(() => {
      setColorMode('light');
      setIsOpen(true);
      setTimeout(() => setIsOpen(false), FADE_OUT_TIME);
    }, time);
  };

  React.useEffect(() => {
    const enableAudio = () => setCanPlay(true);
    const handlePlaying = () => setCanPlay(false);
    const handleEnded = () => setCanPlay(true);

    audio?.addEventListener('canplaythrough', enableAudio);
    audio?.addEventListener('playing', handlePlaying);
    audio?.addEventListener('ended', handleEnded);

    return () => {
      audio?.removeEventListener('canplaythrough', enableAudio);
      audio?.removeEventListener('playing', handlePlaying);
      audio?.removeEventListener('ended', handleEnded);
    };
  }, [audio]);

  return (
    <>
      <Flashbang />
      <S.Toggle
        data-testid="light-toggle"
        isActive={colorMode === 'light'}
        onClick={toggleLightMode}
      >
        <RiSunLine size={15} />
      </S.Toggle>
      <S.Toggle
        data-testid="dark-toggle"
        isActive={colorMode === 'dark'}
        onClick={() => setColorMode('dark')}
      >
        <RiMoonLine size={15} />
      </S.Toggle>
    </>
  );
}
