import React from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { CellestialDTO } from '../dto/CelestialDTO';
import { LARGE_PHONE_WIDTH } from '../utils/constants';

export interface CelestialCardProps {
  celestialDTO: CellestialDTO;
}

const StyledCard = styled(Card)`
  width: 100%;
  margin-top: 10px;

  @media (max-width: ${LARGE_PHONE_WIDTH}) {
   font-size: 0.75em;
  }
`;

const StyledBadge = styled(Badge)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 0.8em;
`

export const CelestialCard = ({ celestialDTO }: CelestialCardProps) => {
  return (
    <StyledCard>
      <Card.Body>
        <Card.Title>
          <strong>{celestialDTO?.name}</strong>
        </Card.Title>
        {celestialDTO?.nakedEyeObject && (
          <StyledBadge pill>
            Naked Eye Object
          </StyledBadge>
        )}
        <Card.Text>
          <strong>Constellation:</strong> {celestialDTO?.constellation}
          <br />
          <strong>Right Ascension:</strong> {celestialDTO?.rightAscension},{' '}
          <strong>Declination:</strong> {celestialDTO?.declination}
          <br />
          <strong>Altitude:</strong> {celestialDTO?.altitude},{' '}
          <strong>Azimuth:</strong> {celestialDTO?.azimuth}
          <br />
          <strong>Magnitude:</strong> {celestialDTO?.magnitude}
        </Card.Text>
      </Card.Body>
    </StyledCard>
  );
};
