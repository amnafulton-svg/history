import archive from '../public/archive.json';
import {Composition} from 'remotion';
import {ArchiveDocumentary} from './ArchiveDocumentary';
import type {ArchiveData} from './types';

const data = archive as ArchiveData;
const fps = data.fps || 30;
const durationInFrames = Math.max(1, Math.ceil((data.duration || 8) * fps));

export const Root = () => {
  return (
    <Composition
      id="ArchiveDocumentary"
      component={ArchiveDocumentary}
      durationInFrames={durationInFrames}
      fps={fps}
      width={1920}
      height={1080}
      defaultProps={{data}}
    />
  );
};
