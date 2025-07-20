import { IshopcareLibProvider } from 'ishopcare-lib';
import { Routes } from './Routes';
import { OverlayProvider } from 'overlay-kit';

export function App() {
  return (
    <OverlayProvider>
      <IshopcareLibProvider>
        <Routes />
      </IshopcareLibProvider>
    </OverlayProvider>
  );
}
