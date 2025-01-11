'use client';

import type { Lexis } from '@packages/types';
import type { MouseEvent } from 'react';
import { createStore } from 'zustand';

type LexisItemState = {
   edit: boolean;
   data: Lexis;
};

type LexisItemAction = {
   onPressTrash?: (
      e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
   ) => void;
   onPressClose?: () => void;
   onPressConfirm?: () => void;
   onPressShowMore?: () => void;
};

type LexisItemProps = LexisItemState & LexisItemAction;

const DEFAULT_PROPS: LexisItemProps = {
   edit: false,
   data: {
      date_created: '',
      description: '',
      examples: [],
      image: '',
      language: '',
      tags: [],
      translate: '',
   },
};

const createLexisItemStore = (initProps?: Partial<LexisItemProps>) => {
   return createStore<LexisItemProps>()(() => ({
      ...DEFAULT_PROPS,
      ...initProps,
   }));
};

type LexisItemStore = ReturnType<typeof createLexisItemStore>;

export { createLexisItemStore };
export type { LexisItemState, LexisItemAction, LexisItemProps, LexisItemStore };
