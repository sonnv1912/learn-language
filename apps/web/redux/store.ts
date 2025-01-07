import { createStore } from '@packages/providers';
import { useDispatch, useSelector } from 'react-redux';

const reducer = {};

const store = createStore('web', [], [], reducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export { reducer, store };
