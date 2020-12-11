import { useContext } from 'react';

import Context from '../../store/context';

export const TestHookContext = () => {
  const context = useContext(Context)

  return (
    <div>
      <button onClick={context.changeTextProp}>
        Change Text
      </button>
      <p>{context.stateProp}</p>
    </div>
  )
}

export default TestHookContext;
