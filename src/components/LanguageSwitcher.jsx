import React from 'react';
import { useTranslation } from 'react-i18next';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import eng from '../assets/64px-Flag_of_the_United_Kingdom_(3-5).svg.png'
import fr from '../assets/64px-Flag_of_France.svg.png'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <FormControl variant='outlined' size='small' style={{ marginLeft: '10px' }}>
      <Select
        labelId="language-switcher-label"
        id="language-switcher"
        value={i18n.language}
        onChange={changeLanguage}
      >
        <MenuItem value="en"><img style={{width:'32px',height:'auto'}} src={eng}/></MenuItem>
        <MenuItem value="fr"><img style={{width:'32px',height:'auto'}} src={fr}/></MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageSwitcher;
