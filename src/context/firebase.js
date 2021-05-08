import { createContext } from 'react';

const FirebaseContext = createContext(null);
// Context eliminates the inefficiency of passing props down to components by using
// providers and consumers that can give access to the firebase data deep inside components.
export default FirebaseContext;
