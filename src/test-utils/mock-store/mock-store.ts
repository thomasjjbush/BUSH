import thunk from 'redux-thunk';
import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';

export const mockStore = (initialState = {}): MockStoreEnhanced => configureMockStore([thunk])(initialState);
