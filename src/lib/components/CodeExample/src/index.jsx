import React from 'react';
import PropTypes from 'prop-types';
import { Select, Code, Grid, Pane, Settings, Typography } from '@firstclasspostcodes/sw14';

const { useSetting } = Settings;

const selectLanguage = (language, languages) => {
  const element = languages.find(({ code }) => code.language === language);
  if (element) {
    return element;
  }
  return selectLanguage(CodeExample.staticConfig.defaultLanguage, languages);
};

const getLanguages = languages => languages.map(({ code }) => code.language);

export const CodeExample = ({ title, languages }) => {
  const [
    defaultLanguage = CodeExample.staticConfig.defaultLanguage,
    setDefaultLanguage,
  ] = useSetting(CodeExample.staticConfig.languageDisplayKey);

  if (!languages || languages.length === 0) {
    return null;
  }

  const { code } = selectLanguage(defaultLanguage, languages);

  const languagesList = getLanguages(languages);

  const handleChange = e => setDefaultLanguage(e.target.value);

  const languageSelect = (
    <Select
      value={defaultLanguage}
      onChange={handleChange}
      placeholder="Select a language"
      border="transparent"
      background="transparent"
    >
      <option disabled>Select a language...</option>
      {languagesList.map(language => (
        <option key={language} value={language}>
          {CodeExample.staticConfig.languageDisplayNames[language] || language}
        </option>
      ))}
    </Select>
  );

  return (
    <Pane background={['gray', 0]} spacing={{ p: 2, my: 4 }}>
      <Grid halign="right" valign="center">
        <Grid.Unit grow>
          <Typography.H4>{title}</Typography.H4>
        </Grid.Unit>
        <Grid.Unit shrink>{languagesList.length > 1 && languageSelect}</Grid.Unit>
      </Grid>
      <Pane spacing={{ pt: 2 }}>
        <Code language={code.language}>{code.code}</Code>
      </Pane>
    </Pane>
  );
};

CodeExample.staticConfig = {
  defaultLanguage: 'javascript',
  languageDisplayKey: 'language',
  languageDisplayNames: {
    json: 'JSON',
    javascript: 'Javascript',
    php: 'PHP',
  },
};

CodeExample.propTypes = {
  languages: PropTypes.array.isRequired,
  title: PropTypes.string,
};

CodeExample.defaultProps = {
  title: '',
};
