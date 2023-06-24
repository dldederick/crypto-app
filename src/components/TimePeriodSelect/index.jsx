import React from 'react';
import { StyledTimePeriodSelect, Circle,
    Period } from './TimePeriodSelect.styles';

const TimePeriodSelect = (props) => {
    const timePeriods = ["1d", "7d", "30d", "90d", "1y", "MAX"];

    const handleClick = (item) => {
        props.handleClick(item);
    }

    return(
        <StyledTimePeriodSelect>
        {timePeriods.map((item) => (
          <Period key={item}>
            <Circle
              onClick={() => handleClick(item)}
              isSelected={props.isSelected}
              item={item}
            ></Circle>
            <p>{item}</p>
          </Period>
        ))}
      </StyledTimePeriodSelect>
    )
}

export default TimePeriodSelect;