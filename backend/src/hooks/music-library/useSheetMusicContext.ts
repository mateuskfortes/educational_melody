import { createContext, useContext } from "react";
import { SheetMusicContextType } from "@/types/music-library/sheetMusicTemplates";

/**
 * Create SheetMusic context with undefined initial value
 * to force usage within a provider.
 */
const SheetMusicContext = createContext<SheetMusicContextType | undefined>(undefined);

/**
 * Hook to access SheetMusic context
 */
export const useSheetMusicContext = (): SheetMusicContextType => {
  const context = useContext(SheetMusicContext);
  if (!context) {
    throw new Error(
      "useSheetMusicContext must be used within a SheetMusicProvider"
    );
  }
  return context;
};

export default SheetMusicContext;
