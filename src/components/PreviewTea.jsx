import { Box, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isSend } from '../components/slices/inputNameSlice';
import { lighter, calculateScale, getRandomNumber } from '../tools/functions';
import { tea, bubble, fonts } from '../tools/data';
import './PreviewTea.css';

const PreviewTea = () => {
  const dispatch = useDispatch();

  //recuperation des states de redux
  const teaState = useSelector((state) => state.tea.tea);
  const cupState = useSelector((state) => state.cup.cup);
  const tapiocaState = useSelector((state) => state.tapioca.tapioca);
  const sizeState = useSelector((state) => state.size.size);
  const nameState = useSelector((state) => state.name.name);
  const isNameSend = useSelector((state) => state.name.isSend);
  const isAnimated = useSelector((state) => state.animation.isAnimated);
  const fontState = useSelector((state) => state.font.font);
  const fillingState = useSelector((state) => state.filling.filling);

  //recuperation des values

  const foundTea = teaState || 0;
  const foundCup = cupState || 0;
  const foundTapioca = tapiocaState || 0;
  const foundSize = sizeState || 'S';
  const foundFont = fontState ? fontState : 0;
  const bubbleClass = isAnimated ? 'bubble' : '';
  const scaledSize = calculateScale(foundSize);

  const [name, setName] = useState('');
  useEffect(() => {
    if (isNameSend === true) {
      setName(nameState);
      dispatch(isSend(false));
    }
  }, [isNameSend, dispatch, nameState]);

  let filling;
  if (fillingState === 0) {
    filling = 1;
  } else {
    filling = fillingState;
  }

  return (
    <Box justifyContent="center">
      <Paper
        sx={{
          height: '60vh',
          borderRadius: '16px 16px 4px 4px ',
        }}
        elevation={0}
      >
        <Box>
          <Box
            sx={{
              height: '50vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={220}
              viewBox={`0 0 133.2 188.9`}
              style={{
                animation: isAnimated ? 'imageAnimation 3s infinite' : '',
              }}
              transform={`scale(${scaledSize}, ${scaledSize})`}
            >
              <defs>
                <clipPath id="cut-off">
                  <path
                    d="M109.1,71.7l-8.9,81.9c-1.4,13-12.3,22.9-25.4,22.9l-2.3,0l-14.8,0c-0.8,0-1.5,0-2.2-0.1h0c-12-1.1-21.7-10.6-23-22.8l-8.6-82c3.8,1.4,7.6,2.7,11.3,3.7c1.7,0.5,3.4,0.9,5.1,1.3h0c2.1,0.5,4.3,0.9,6.4,1.3l0,0c1.9,0.3,3.7,0.6,5.6,0.8c2.5,0.3,5,0.5,7.5,0.6c8,0.4,16.1,0,24.3-1.3C92.5,76.8,100.8,74.7,109.1,71.7z"
                    transform={`scale(1, ${100 / filling})`}
                  />
                </clipPath>
              </defs>

              <g id="background">
                <path
                  fill={`${lighter(tea[foundCup], 90)}`}
                  d="M19.5,50c1.4-7.1,4.4-13.9,8.8-19.7c2.9-3.8,6.3-7.2,10.2-10.1c8.2-5.9,17.9-9.1,28.1-9.1c10.3,0,20,3.2,28.2,9.2c3.9,2.8,7.3,6.2,10.2,10.1c4.4,5.9,7.3,12.6,8.7,19.7L19.5,50z"
                />
                <path
                  fill={`${lighter(tea[foundCup], 90)}`}
                  d="M41.4,182.9c-4,0-7.6-2.2-9.6-5.7c-0.7-1.2-1.1-2.6-1.3-4l-12-108.6l-7.6,0c-2.8,0-5.1-2.3-5.1-5.1c0-0.2,0-0.4,0-0.6c0.3-2.6,2.5-4.5,5.1-4.5H14l105.1,0.2h3.1c2.8,0,5.1,2.3,5.1,5.1c0,0.2,0,0.4,0,0.6c-0.3,2.6-2.5,4.5-5,4.5h-7.6l-12.4,108.6c-0.2,1.9-1,3.8-2.1,5.3c-2.1,2.8-5.3,4.4-8.7,4.4L41.4,182.9z"
                />
              </g>
              <g id="border">
                <path
                  fill="none"
                  stroke={`${tea[foundCup]}`}
                  strokeWidth="2.1561"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  d="M119.2,49.7L14,49.5c0.9-10.2,4.7-19.6,10.5-27.4c3.2-4.2,7-7.9,11.2-11.1c8.7-6.3,19.4-10,30.9-10c11.5,0,22.2,3.8,30.9,10.1c4.3,3.1,8,6.9,11.2,11.1C114.6,30.1,118.3,39.5,119.2,49.7z"
                />
                <path
                  fill="none"
                  stroke={`${tea[foundCup]}`}
                  strokeWidth="2.1561"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  d="M132.1,59.6c0,0.4,0,0.8-0.1,1.2c-0.6,4.9-4.8,8.7-9.8,8.7h-3.4l-11.9,104.4c-0.3,2.9-1.4,5.5-3,7.6c-2.9,3.9-7.5,6.3-12.6,6.3l-50-0.1c-5.9,0-11.1-3.3-13.7-8.2c-1-1.8-1.6-3.7-1.8-5.8L14.3,69.3l-3.4,0c-5.4,0-9.8-4.4-9.8-9.9c0-0.4,0-0.8,0.1-1.2c0.6-4.9,4.7-8.7,9.8-8.7H14l105.2,0.2h3.1C127.7,49.7,132.1,54.2,132.1,59.6z"
                />
                <path
                  fill="none"
                  stroke={`${tea[foundCup]}`}
                  strokeWidth="2.1561"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  d="M73.5,1.6c4.4,0.6,6.7,1.7,6.7,3.1c0,2-6.1,3.5-13.5,3.5c-7.5,0-13.5-1.6-13.5-3.6c0-1.6,3.6-2.9,9.2-3.3"
                />
              </g>
              <g id="tea" clipPath="url(#cut-off)">
                <path
                  opacity="0.52"
                  fill={`${lighter(tea[foundTea], -20)}`}
                  d="M109.1,71.7l-8.9,81.9c-1.4,13-12.3,22.9-25.4,22.9l-2.3,0l-14.8,0c-0.8,0-1.5,0-2.2-0.1h0c-12-1.1-21.7-10.6-23-22.8l-8.6-82c3.8,1.4,7.6,2.7,11.3,3.7c1.7,0.5,3.4,0.9,5.1,1.3h0c2.1,0.5,4.3,0.9,6.4,1.3l0,0c1.9,0.3,3.7,0.6,5.6,0.8c2.5,0.3,5,0.5,7.5,0.6c8,0.4,16.1,0,24.3-1.3C92.5,76.8,100.8,74.7,109.1,71.7z"
                />
                <path
                  fill={`${lighter(tea[foundTea], -40)}`}
                  d="M28.9,119.1l3.6,34.5c1.4,13,12.3,22.9,25.3,22.9l17.1,0c13,0,24-9.8,25.4-22.9l6.2-57.2C79.6,85,61.3,112.6,28.9,119.1z"
                />
              </g>
              <g id={`${bubbleClass}`} clipPath="url(#cut-off)">
                <path
                  fill={`${bubble[foundTapioca]}`}
                  d="M95.9,144.5c-0.7,2.3-3.2,3.6-5.4,2.8c-2.3-0.7-3.5-3.2-2.8-5.5c0.7-2.3,3.2-3.6,5.4-2.8C95.4,139.7,96.6,142.2,95.9,144.5z"
                  className={`${bubbleClass}_1`}
                  style={{
                    transform: `translate(1px, ${getRandomNumber()}px)`,
                  }}
                />
                <path
                  fill={`${lighter(bubble[foundTapioca], -10)}`}
                  d="M80.1,127.4c-0.8,2.6-3.5,4-6.1,3.2c-2.6-0.8-4-3.6-3.2-6.1c0.8-2.6,3.5-4,6.1-3.2C79.5,122,80.9,124.8,80.1,127.4z"
                  className={`${bubbleClass}`}
                  style={{
                    transform: `translate(1px, ${getRandomNumber()}px)`,
                  }}
                />
                <path
                  fill={`${lighter(bubble[foundTapioca], 8)}`}
                  d="M47.8,137.6c-0.8,2.5-3.5,3.9-6,3.1c-2.5-0.8-3.9-3.5-3.1-6.1c0.8-2.5,3.5-3.9,6-3.1C47.2,132.4,48.6,135.1,47.8,137.6z"
                  className={`${bubbleClass}_2`}
                  style={{
                    transform: `translate(1px, ${getRandomNumber()}px)`,
                  }}
                />
                <path
                  fill={`${lighter(bubble[foundTapioca], 10)}`}
                  d="M65.6,140.6c-0.6,1.8-2.4,2.7-4.2,2.2c-1.7-0.6-2.7-2.4-2.2-4.2c0.6-1.8,2.4-2.7,4.2-2.2C65.2,136.9,66.2,138.8,65.6,140.6z"
                  className={`${bubbleClass}_1`}
                  style={{
                    transform: `translate(1px, ${getRandomNumber()}px)`,
                  }}
                />
                <path
                  fill={`${lighter(bubble[foundTapioca], -16)}`}
                  d="M56.2,162.6c-0.7,2.2-3,3.4-5.2,2.7c-2.2-0.7-3.4-3-2.7-5.2c0.7-2.2,3-3.4,5.2-2.7C55.7,158.1,56.9,160.4,56.2,162.6z"
                  className={`${bubbleClass}_2`}
                  style={{
                    transform: `translate(1px, ${getRandomNumber()}px)`,
                  }}
                />
                <path
                  fill={`${lighter(bubble[foundTapioca], 12)}`}
                  d="M48.9,116.3c-0.7,2.2-3,3.4-5.1,2.7c-2.1-0.7-3.3-3-2.7-5.2c0.7-2.2,3-3.4,5.1-2.7C48.4,111.8,49.6,114.1,48.9,116.3z"
                  className={`${bubbleClass}`}
                  style={{
                    transform: `translate(1px, ${getRandomNumber()}px)`,
                  }}
                />
                <path
                  fill={`${bubble[foundTapioca]}`}
                  d="M82.8,161.8c-0.9,2.7-3.8,4.3-6.5,3.4c-2.7-0.9-4.2-3.8-3.4-6.5c0.9-2.7,3.8-4.3,6.5-3.4C82.1,156.1,83.6,159,82.8,161.8z"
                  className={`${bubbleClass}`}
                  style={{
                    transform: `translate(1px, ${getRandomNumber()}px)`,
                  }}
                />
              </g>
            </svg>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              fontFamily: fonts[foundFont],
              fontSize: 40,
              fontWeight: 500,
            }}
          >
            {name}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default PreviewTea;
