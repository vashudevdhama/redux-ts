import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootStore } from '../redux';

export const useTypedSelector: TypedUseSelectorHook<RootStore> = useSelector;