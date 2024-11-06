export enum BlockPickStatus {
  OPEN = 'OPEN',
  START = 'START',
  CHECKPOINT = 'CHECKPOINT',
  END = 'END',
  DELETED = 'DELETED',
}

export type TBlockPick = {
  id: number;
  title: string;
  winningAmount: number;

  thumbnailImageUrl: string;
  bp: number;
  additional?: string;
  isEnded: boolean;
  isWon?: boolean;

  status: BlockPickStatus;
  steps: {
    size: number;
    backgroundImageUrl: string;
  }[];
};
export type TUser = {
  email: string;
  nickname: string;
  profileImageUrl: string;
};

export type TAnnouncement = {
  id: number;
  type: 'NOTICE';
  title: string;
  content: string;
  startedAt: string;
  endedAt: string;
};

export type TFaq = {
  id: number;
  question: string;
  answer: string;
};

export type TPolicyItem = {
  id: number;
  title: string;
  content: string;
  appliedAt: string;
};
