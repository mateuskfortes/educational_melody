import { createContext, useContext } from "react";
import { MusicContextType } from "@/types/music-library/sheetMusicTemplates";

/**
 * Context for managing a library of sheet music.
 * Initialized as undefined to enforce usage within a provider.
 */
const SheetMusicLibraryContext = createContext<MusicContextType | undefined>(undefined);

/**
 * Hook to access the SheetMusicLibrary context
 */
export const useSheetMusicLibraryContext = (): MusicContextType => {
  const context = useContext(SheetMusicLibraryContext);
  if (!context) {
    throw new Error(
      "useSheetMusicLibrary must be used within a SheetMusicLibraryProvider"
    );
  }
  return context;
};

export default SheetMusicLibraryContext;
