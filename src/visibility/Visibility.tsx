import React, { useState, useLayoutEffect, FC } from 'react';
import styled from 'styled-components';
import {
  Container,
  Row,
  Col,
  Button,
  ButtonProps,
  Alert,
} from 'react-bootstrap';
import { Map } from './map/Map';
import { DateTimeSelector, Value } from './datetimepicker/DateTimeSelector';
import { Position } from './map/Map';
import { isDateValid } from '../validation/validators';
import { LARGE_PHONE_WIDTH } from '../utils/constants';
import { CelestialWeatherDTO } from '../dto/CelestialWeatherDTO';
import { getCelestialData } from '../http-handlers/CelestialHttpHandler';
import { LoadingToast } from '../commons/LoadingToast';
import { CelestialPresentation } from './CelestialPresentation';

const StyledHeader = styled.h2`
  text-align: center;
`;

const StyledButton: FC<ButtonProps> = styled(Button)`
  margin-top: 0.5rem;
  @media (max-width: ${LARGE_PHONE_WIDTH}) {
    width: 100%;
  }
`;

const StyledAlert = styled(Alert)`
  width: 500px;
  margin: 10px auto;
  @media (max-width: ${LARGE_PHONE_WIDTH}) {
    width: 97%;
    padding: 8px;
  }
`;

export const Visibility = () => {
  const [position, setPosition] = useState<Position>({ lat: 52, lng: 21 });
  const [dateTime, setDateTime] = useState<Value>(new Date());
  const [dateValidation, setDateValidation] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [celestialWeather, setCelestialWeather] =
    useState<CelestialWeatherDTO | null>(null);
  const [error, setError] = useState<string>('');

  useLayoutEffect(() => {
    if (!dateTime) {
      setDateTime(new Date());
    }
    if (isDateValid(dateTime)) {
      setDateValidation('');
    } else {
      setDateValidation('Date cannot be further than 2 weeks!');
    }
  }, [dateTime]);

  const handleGetCelestialWeatherClick = async () => {
    if (!dateTime) {
      return;
    }
    try {
      setError('');
      setIsLoading(true);
      const celestialData = await getCelestialData(
        position.lat,
        position.lng,
        new Date(dateTime.toString()).getTime(),
      );
      console.log(celestialData);
      setCelestialWeather(celestialData);
    } catch (e) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container fluid>
      {celestialWeather === null && (
        <>
          <StyledHeader>
            Select place and time of planned star gazing!
          </StyledHeader>
          <StyledAlert variant="danger" show={!!error}>
            {error}
          </StyledAlert>
          <Map position={position} setPosition={setPosition} />
          <Row className="justify-content-end mt-3 p-1">
            <Col xxl={7} lg={6} sm={1} xs={0} />
            <Col xxl={3} lg={4} sm={7} xs={12}>
              <DateTimeSelector
                value={dateTime}
                onChange={setDateTime}
                validation={dateValidation}
              />
            </Col>
            <Col xxl={2} lg={2} sm={4} xs={12}>
              <StyledButton
                variant="outline-primary"
                disabled={!!dateValidation}
                onClick={handleGetCelestialWeatherClick}
              >
                Get Celestial Weather!
              </StyledButton>
            </Col>
          </Row>
        </>
      )}

      {celestialWeather !== null && (
        <CelestialPresentation celestialData={celestialWeather} />
      )}
      <LoadingToast show={isLoading} />
    </Container>
  );
};
