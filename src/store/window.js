import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useWindowStore = create(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

   openWindow: (windowKey, data = null) =>
  set((state) => {
    // If window doesn't exist or is a dynamic file window → create it
    if (
      windowKey.startsWith("txtfile") ||
      windowKey.startsWith("imgfile") ||
      !state.windows[windowKey]
    ) {
      state.windows[windowKey] = {
        isOpen: true,
        isMinimized: false,
        isMaximized: false,
        zIndex: state.nextZIndex,
        data: data,
      };
      state.nextZIndex++;
      return;
    }

    // Otherwise update existing window
    const win = state.windows[windowKey];
    win.isOpen = true;
    win.isMinimized = false;
    win.isMaximized = false;
    win.zIndex = state.nextZIndex++;
    win.data = data ?? win.data;
  }),

    closeWindow: (windowKey) =>
      set((state) => {
        // remove dynamic instances entirely for tidiness
        if (windowKey.startsWith("txtfile-") || windowKey.startsWith("imgfile-")) {
          delete state.windows[windowKey];
          return;
        }

        const win = state.windows[windowKey];
        win.isOpen = false;
        win.isMinimized = false;
        win.isMaximized = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
      }),

    minimizeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.isMinimized = true;
        win.isMaximized = false;
      }),

    toggleMaximizeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.isMinimized = false;
        win.isMaximized = !win.isMaximized;
      }),

    focusWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.zIndex = state.nextZIndex++;
      }),
  }))
);

export default useWindowStore;
