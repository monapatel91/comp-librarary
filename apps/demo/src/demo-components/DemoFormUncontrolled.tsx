import React, { ChangeEvent, FormEvent, useState } from 'react';
import {
  DotButton,
  DotCard,
  DotCheckboxGroup,
  DotForm,
  DotInputText,
  DotInputSelect,
  DotRadioGroup,
  DotSwitch,
  RadioButtonProps,
} from '@digital-ai/dot-components';

export const DemoFormUncontrolled = () => {
  const [key, setKey] = useState(0);
  const [message, setMessage] = useState(null);
  const [showHintDisabled, setShowHintDisabled] = useState(true);
  const [showHint, setShowHint] = useState(false);
  const [hint, setHint] = useState(null);
  const [bowieSelected, setBowieSelected] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [artistError, setArtistError] = useState(false);
  const [lyricError, setLyricError] = useState(null);

  const mustNotBeBlank = 'Must not be blank';

  const resetForm = () => {
    setMessage(null);
    setNameError(false);
    setArtistError(false);
    setLyricError(null);
    setKey(key + 1);
  };

  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      artist: { value: string };
      lyric: { value: string };
      name: { value: string };
      receive: { values: () => Array<RadioButtonProps> };
    };
    const receiveArray = [];
    for (const value of target.receive.values()) {
      if (value.checked && (!bowieSelected || value.value === 'poster')) {
        receiveArray.push(value.value);
      }
    }
    const lyricCorrect =
      (bowieSelected && target.lyric.value === 'waitingFor') ||
      (target.artist.value === 'Labrinth' && target.lyric.value === 'myName') ||
      (target.artist.value === 'U2' && target.lyric.value === 'lookingFor');
    setNameError(!target.name.value);
    setArtistError(!target.artist.value);
    if (!target.lyric.value) {
      setLyricError('Please complete the lyric');
    } else {
      setLyricError(lyricCorrect ? null : 'Wrong answer!');
    }
    if (target.name.value && target.artist.value && lyricCorrect) {
      const valOfForm = {
        name: target.name.value,
        artist: target.artist.value,
        lyric: target.lyric.value,
        showHint: showHint,
        hint: hint,
        receive: receiveArray,
      };
      setMessage(
        `Great! Successfully Submitted form! ${JSON.stringify(valOfForm)}`
      );
    } else {
      setMessage(null);
    }
  };

  const onArtistSelected = (event: ChangeEvent<HTMLInputElement>) => {
    setBowieSelected(event.target.value === 'David Bowie');
    setShowHintDisabled(event.target.value.length === 0 && !hint);
    switch (event.target.value) {
      case '':
        setHint('Pick an artist first!');
        break;
      case 'David Bowie':
        setHint('Not Godot!');
        break;
      case 'Labrinth':
        setHint("That's it, don't wear it out!");
        break;
      case 'U2':
        setHint('Then how do you expect to find it?');
        break;
    }
  };

  const toggleShowHint = () => {
    setShowHint(!showHint);
  };

  return (
    <>
      {message && <DotCard>{message}</DotCard>}
      <DotForm key={key} onSubmit={handleOnSubmit}>
        <DotInputText
          error={nameError}
          helperText={nameError ? mustNotBeBlank : null}
          id="name"
          label="Name"
          name="name"
          required
          size="small"
        />

        <DotInputSelect
          defaultValue=""
          error={artistError}
          helperText={artistError ? mustNotBeBlank : null}
          id="artist"
          label="Artist"
          name="artist"
          onChange={onArtistSelected}
          options={['', 'David Bowie', 'Labrinth', 'U2']}
          required
          size="small"
        />

        <DotRadioGroup
          defaultValue=""
          error={lyricError}
          helperText={lyricError}
          id="lyric"
          name="lyric"
          label="Still don't know..."
          required
          options={[
            { label: 'what happened in Las Vegas', value: 'lasVegas' },
            { label: 'what I want to be when I grow up', value: 'growUp' },
            { label: "what I'm looking for", value: 'lookingFor' },
            { label: 'what I was waiting for', value: 'waitingFor' },
            { label: 'my name', value: 'myName' },
          ]}
        />

        <DotSwitch
          disabled={showHintDisabled}
          id="showHint"
          label="Show hint (artist must be selected first)"
          onChange={toggleShowHint}
        />

        {showHint && <DotCard>{hint}</DotCard>}

        <DotCheckboxGroup
          label="I would like to receive:"
          id="receive"
          name="receive"
          required
          options={[
            {
              disabled: bowieSelected,
              label: 'Notification of new releases',
              value: 'releases',
            },
            {
              disabled: bowieSelected,
              label: 'Concert schedule information',
              value: 'concerts',
            },
            { label: 'A free poster', value: 'poster' },
          ]}
        />

        <DotButton type="outlined" onClick={resetForm}>
          Clear
        </DotButton>
        <DotButton isSubmit={true}>Submit</DotButton>
      </DotForm>
    </>
  );
};
