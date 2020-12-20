import { useContext } from 'react';
import { AppStore } from 'store/AppStore';
import { LeftDrawer } from 'store/LeftDrawer';
import { AppStoreContext } from './AppStoreProdivider';

export const useAppStore = (): AppStore => useContext(AppStoreContext);
export const useLeftDrawer = (): LeftDrawer => useContext(AppStoreContext).leftDrawer;