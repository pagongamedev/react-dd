import { ProviderUI } from './contextUI';
import { ProviderUser } from './contextUser';

export const Context = (props: any) => {
  return (
    <>
      <ProviderUI>
        <ProviderUser>{props.children}</ProviderUser>
      </ProviderUI>
    </>
  );
};
