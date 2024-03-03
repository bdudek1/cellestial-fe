import React from 'react';
import styled from 'styled-components';
import { CelestialWeatherDTO } from '../dto/CelestialWeatherDTO';
import { Container, Tooltip, Row, Col } from 'react-bootstrap';
import {
  convertDateTimeStringToTime,
  convertDateTimeStringToDate,
} from '../utils/functions';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { LARGE_PHONE_WIDTH } from '../utils/constants';
import { CelestialCard } from './CelestialCard';

export interface CelestialPresentationProps {
  celestialData: CelestialWeatherDTO;
}

const StyledChartContainer = styled.div`
  width: 800px;
  height: 300px;
  margin: 0 auto;

  @media (max-width: ${LARGE_PHONE_WIDTH}) {
    width: 300px;
    height: 250px;
    margin: 0 auto;
  }
`;

const StyledHeader = styled.h6`
  text-align: center;
`;

const StyledObjectsHeader = styled.h5`
  margin-top: 10px;
  text-align: center;
`;

export const CelestialPresentation = ({
  celestialData,
}: CelestialPresentationProps) => {
  const mappedDataPoints = celestialData.cloudCoverage.map((coverage) => {
    return {
      name: convertDateTimeStringToTime(coverage.dateString),
      value: coverage.cloudCoverage,
    };
  });

  return (
    <Container className="justify-content-center">
      <StyledHeader>
        Data for{' '}
        {convertDateTimeStringToDate(celestialData.cloudCoverage[0].dateString)}
      </StyledHeader>

      <StyledChartContainer>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={mappedDataPoints}
            margin={{
              top: 0,
              right: 10,
              left: -25,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis type="number" domain={[0, 100]} />
            <Legend />
            <Tooltip />
            <Line
              name="Cloud coverage [%]"
              type="monotone"
              dataKey="value"
              stroke="#2b23bc"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </StyledChartContainer>
      <StyledObjectsHeader>
            Visible Objects
      </StyledObjectsHeader>
      <Row>
        {celestialData.visibleCellestials.map((celestial) => {
          return (
            <Col key={celestial.name} lg={12} xl={4}>
              <CelestialCard celestialDTO={celestial} key={celestial.name} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
