import { useState, ChangeEvent } from 'react';
import { listLang } from '../../utils/constants';

export const SwitchLang = (): JSX.Element => {
  const [lang, setLang] = useState<string>(listLang[0].value);

  return (
    <select
      name="language-picker-select"
      className="language-picker-select"
      value={lang}
      onChange={(e: ChangeEvent<HTMLSelectElement>) => setLang(e.target.value)}
    >
      {listLang.map((lang) => (
        <option key={lang.value} value={lang.value}>
          {lang.lang}
        </option>
      ))}
    </select>
  );
};

export default SwitchLang;
