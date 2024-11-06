import { BlockPickStatus, TFaq } from '../index';

interface IBasic {
  code: number;
  message: string;
}

export interface IBlockPickListResponse extends IBasic {
  data?: {
    blockpicks: {
      id: number;
      type: 'NORMAL' | 'OFFLINE';
      title: string;
      content: string;
      depth1SideSize: number;
      depth2SideSize: number;
      depth3SideSize: number;
      depth4SideSize: number;
      totalBlockCount: number;
      openAt: string;
      startAt: string;
      endAt: string;
      status: BlockPickStatus;
      blockpickNormal: {
        id: number;
        currentRound: number;
        defaultPrizeAmount: number;
        totalPrizeAmount: number;
        startBp: number;
        roundUpBp: number;
        roundUpTime: number;
        checkpointTime: number;
        rounds: {
          id: number;
          round: number;
          bp: number;
          roundPickCount: number;
          roundPrizeAmount: number;
          roundStartAt: string;
          roundEndAt: string;
          roundRemainingTime: number;
          checkpointRemainingTime: number;
        }[];
        prizes: {
          id: number;
          title: string;
          titleImageUrl: string;
          content: string;
          rankType: 'TOP_RANK' | 'KING_MAKER' | 'FAMOUS_PLACE';
          goods: 'BP' | 'BG' | 'LUCKY_BLOCK_TICKET' | 'DONATION';
          amount: number;
          rate: number;
          imageUrl: string;
          bgColor: string;
        }[];
      };
      advertising: {
        id: number;
        title: string;
        content: string;
        weightRate: string;
        depth1ImageUrl: string;
        depth2ImageUrl: string;
        depth3ImageUrl: string;
      }[];
    }[];
  };
}

export interface IFaqResponse extends IBasic {
  data?: {
    totalCount: number;
    take: number;
    faqs: TFaq[];
  };
}

export interface ISingupResponse extends IBasic {
  data?: {
    user: {
      id: number;
      createdAt: string;
      updatedAt: string;
      email: string;
      nickname: string;
      profileImageUrl: string;
      bp: number;
      bg: number;
      luckyBlockTicket: number;
      userRole: 'USER' | 'ADMIN' | 'PARTNER';
      isPushNotification: boolean;
      isMarketingNotification: boolean;
      isBan: boolean;
    };
    accessToken: string;
    refreshToken: string;
  };
}

export interface IUserAttendanceRewardListResponse extends IBasic {
  data?: {
    attendanceRewards: {
      id: number;
      days: number;
      isReceived: boolean;
      isActive: boolean;
      rewards: {
        rewardGoods: string;
        rewardAmount: number;
        rewardCount: number;
      }[];
    }[];
  };
}

export interface IPolicyItemResponse extends IBasic {
  data?: {
    policies: [
      {
        id: number;
        type: 'PRIVACY' | 'TERMS';
        title: string;
        content: string;
        appliedAt: string;
      },
    ];
  };
}

export interface INotificationResponse extends IBasic {
  data?: {
    totalCount: number;
    take: number;
    notifications: [
      {
        id: number;
        type: 'NOTICE';
        title: string;
        content: string;
        startedAt: string;
        endedAt: string;
      },
    ];
  };
}

export interface IUserAttendanceRewardResponse extends IBasic {
  data: {
    rewards: [
      {
        rewardGoods: 'BP' | 'LUCKY_BLOCK_TICKET';
        rewardAmount: number;
        rewardCount: number;
      },
    ];
  };
}
