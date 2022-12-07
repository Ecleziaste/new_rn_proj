import {Layouts} from '@widgets';
import React, {FC} from 'react';
import {BootScreenProps} from 'src/shared/navigation';
import {Loaders} from 'src/shared/ui';

export const BootScreen: FC<BootScreenProps> = () => {
  // TODO: navigate to signUp or signIn after few seconds

  return (
    <Layouts.DefaultLayout>
      <Loaders.BootLoader />
    </Layouts.DefaultLayout>
  );
};
