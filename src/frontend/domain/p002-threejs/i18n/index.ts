import en from './en/index.json';
import th from './th/index.json';

export default ({ name = '' }: { name: string }) => {
  return {
    name: name,
    locate: { en, th },
  };
};
