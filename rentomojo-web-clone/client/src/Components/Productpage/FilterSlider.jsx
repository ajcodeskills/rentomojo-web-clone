import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';



const marks = [
  {
    value: 3,
    label: '3+',
  },
  {
    value: 7.5,
    label: '6+',
  },
  {
    value: 12,
    label: '12+',
  }
];



function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

export default function DiscreteSlider({handleMonths, color, width}) {
 
  const [slide, setSlide] = useState(12)
  const useStyles = makeStyles({
    root: {
      width: width ? width : 300,
    },
    slide: {
      color: color ? color : "rgb(220,50,38)",
      fontWeight: "bold"
    }
  });
  const classes = useStyles();
  function valuetext(value) {
    if(value === 7.5) {
      setSlide(6)
    }
    else {
      setSlide(value)
    }
  }

  useEffect(()=> {
    handleMonths(slide)
  },[slide])

  return (
    <div className={classes.root}>
      <Slider
        className={classes.slide}
        defaultValue={12}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        //valueLabelDisplay="auto"
        marks={marks}
        min={3}
        max={12}
      />
    </div>
  );
}