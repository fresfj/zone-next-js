import type { ICourseLessonProp } from 'src/types/course';

import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

import { Player } from 'src/components/player';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = {
  open: boolean;
  playing: boolean;
  onPlay: () => void;
  onClose: () => void;
  onReady: () => void;
  onEnded: () => void;
  onPause: () => void;
  lessons: ICourseLessonProp[];
  selectedLesson: ICourseLessonProp | null;
  onSelectedLesson: (lesson: ICourseLessonProp) => void;
};

export function ElearningCourseDetailsLessonsDialog({
  open,
  onPlay,
  lessons,
  onClose,
  playing,
  onReady,
  onEnded,
  onPause,
  selectedLesson,
  onSelectedLesson,
}: Props) {
  const renderVideo = (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        width: { xs: 1, md: 0.5 },
        height: { xs: 320, md: 640 },
      }}
    >
      {selectedLesson?.videoPath ? (
        <Player
          controls
          url={selectedLesson?.videoPath}
          playing={playing}
          onReady={onReady}
          onEnded={onEnded}
          onPlay={onPlay}
          onPause={onPause}
        />
      ) : (
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            width: 1,
            height: 1,
            typography: 'h6',
            color: 'text.disabled',
            bgcolor: 'background.neutral',
          }}
        >
          No Data
        </Stack>
      )}
    </Stack>
  );

  const renderList = (
    <Stack
      spacing={0.5}
      sx={{
        p: 1,
        overflowY: 'scroll',
        width: { xs: 1, md: 0.5 },
        height: { xs: 320, md: 640 },
      }}
    >
      {lessons?.map((lesson) => {
        const selected = selectedLesson?.id === lesson.id;

        const playIcon = selected ? 'solar:pause-circle-outline' : 'solar:play-outline';

        return (
          <ListItemButton
            key={lesson.id}
            selected={selected}
            disabled={!lesson.unLocked}
            onClick={() => onSelectedLesson(lesson)}
            sx={{ borderRadius: 1 }}
          >
            <Iconify
              width={24}
              icon={!lesson.unLocked ? 'solar:lock-password-outline' : playIcon}
              sx={{
                mr: 2,
                ...(selected && {
                  color: 'primary.main',
                }),
                ...(!lesson.unLocked && {
                  color: 'text.disabled',
                }),
              }}
            />

            <ListItemText
              primary={lesson.title}
              secondary={lesson.description}
              primaryTypographyProps={{
                typography: 'subtitle1',
                sx: {
                  ...(selected && {
                    color: 'primary.main',
                  }),
                },
              }}
              secondaryTypographyProps={{
                noWrap: true,
                component: 'span',
              }}
            />
          </ListItemButton>
        );
      })}
    </Stack>
  );

  return (
    <Dialog
      fullWidth
      maxWidth="lg"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { overflow: 'hidden' },
      }}
    >
      <IconButton onClick={onClose} sx={{ top: 8, left: 8, zIndex: 9, position: 'absolute' }}>
        <Iconify icon="eva:close-outline" />
      </IconButton>

      <Stack direction={{ xs: 'column', md: 'row' }} sx={{ height: 1 }}>
        {renderVideo}

        {renderList}
      </Stack>
    </Dialog>
  );
}
