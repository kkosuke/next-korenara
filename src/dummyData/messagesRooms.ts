import { dummyMessages } from "./messages";
import { dummyUser2, dummyUser3 } from "./user";

export const dummyMessagesRooms = [
  {
    id: "u9wqoeqow",
    receive: dummyUser2,
    messages: dummyMessages,
  },
  {
    id: "gwevwe",
    receive: dummyUser3,
    messages: [
      {
        id: "dfmp3",
        createAt: "2023年4月22日 23:52",
        updateAt: "2023年4月22日 23:52",
        detail:
          "もちろんです！もしアクション映画がお好きなら、『ジョン・ウィック』シリーズがおすすめです。キアヌ・リーブスが主演し、スタイリッシュなアクションと緻密なアクション・シーンが魅力です。また、コメディ映画で笑いたい場合は、『デッドプール』シリーズがおもしろいですよ。ライアン・レイノルズが活躍するブラック・コメディ作品です。",
        user: dummyUser3,
      },
    ],
  },
];
