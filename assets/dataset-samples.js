// Dataset samples with embedded data
// This file works with file:// protocol (no fetch required)

const SAMPLES_RAW_DATA = [
  {
    "id": "pair_00000",
    "sentence_a": "무주택자 자녀가 1주택자 부모와 10년 이상 같이 살다가 상속을 받았을 때 공제한도가 기존 5억 원에서 6억 원으로 확대된다.",
    "sentence_b": "또 10인 이상 enterprise는 4만원을 추가 지원함에 따라 9만원에서 13만원으로 오른다.",
    "sentence_b_org": "또 10인 이상 기업은 4만원을 추가 지원함에 따라 9만원에서 13만원으로 오른다.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "기업",
        "to": "enterprise",
        "pos": "NNG"
      }
    ],
    "mixed_k": 1,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 0.1,
    "sim_b_vs_b_org": 0.9336816668510437
  },
  {
    "id": "pair_00003",
    "sentence_a": "이번주와 다음주 중에서 농구를 더 많이 한건 언제일까요?",
    "sentence_b": "이번주에 더 basketball을 많이 했습니까 다음주에 더 많이 했습니까?",
    "sentence_b_org": "이번주에 더 농구를 많이 했습니까 다음주에 더 많이 했습니까?",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "농구",
        "to": "basketball",
        "pos": "NNG"
      }
    ],
    "mixed_k": 1,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 4.0,
    "sim_b_vs_b_org": 0.9684880971908569
  },
  {
    "id": "pair_00004",
    "sentence_a": "옆에 있던 피자집 엄청 많이 갔던 것 같은데 맛있었어요!",
    "sentence_b": "옆에 있는 pizza place에 많이 간 것 같은데 맛있었어요!",
    "sentence_b_org": "옆에 있는 피자집에 많이 간 것 같은데 맛있었어요!",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "피자집",
        "to": "pizza place",
        "pos": "NNG"
      }
    ],
    "mixed_k": 1,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 4.1,
    "sim_b_vs_b_org": 0.9506388902664185
  },
  {
    "id": "pair_00005",
    "sentence_a": "예정된 스케쥴이 모레 몇 시에 잡혀있는지요?",
    "sentence_b": "엄마 schedule이 며칠에 비는지 알려줄 수 있나요?",
    "sentence_b_org": "엄마 일정이 며칠에 비는지 알려줄 수 있나요?",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "일정",
        "to": "schedule",
        "pos": "NNG"
      }
    ],
    "mixed_k": 1,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 0.7,
    "sim_b_vs_b_org": 0.9811253547668457
  },
  {
    "id": "pair_00006",
    "sentence_a": "마치 단독 주택에 사는 느낌이라고나 할까요.",
    "sentence_b": "오랜만에 만난 relative's house에 가는 느낌이었습니다.",
    "sentence_b_org": "오랜만에 만난 친척집에 가는 느낌이었습니다.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "친척집",
        "to": "relative's house",
        "pos": "NNG"
      }
    ],
    "mixed_k": 1,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 0.2,
    "sim_b_vs_b_org": 0.9205096364021301
  },
  {
    "id": "pair_00007",
    "sentence_a": "올해 생산한 백신을 대상으로 안정성 시험을 시행한 결과 모든 제품들은 25℃에서 24시간 동안 품질이 유지됨을 확인했다.",
    "sentence_b": "그 result 강원 산불은 완진까지 13시간이 걸렸다.",
    "sentence_b_org": "그 결과 강원 산불은 완진까지 13시간이 걸렸다.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "결과",
        "to": "result",
        "pos": "NNG"
      }
    ],
    "mixed_k": 1,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 0.0,
    "sim_b_vs_b_org": 0.9735699892044067
  },
  {
    "id": "pair_00008",
    "sentence_a": "불쾌지수가 높은 곳이 대구와 홍천 중 어디야?",
    "sentence_b": "대구와 홍천 중 discomfort index가 높은 곳을 알려줘.",
    "sentence_b_org": "대구와 홍천 중 불쾌지수가 높은 곳을 알려줘.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "불쾌지수",
        "to": "discomfort index",
        "pos": "NNG"
      }
    ],
    "mixed_k": 1,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 3.8,
    "sim_b_vs_b_org": 0.963638186454773
  },
  {
    "id": "pair_00009",
    "sentence_a": "숙소는 위치 청결 등 여러모로 편리했어요",
    "sentence_b": "accommodation은 장소와 청결함 등 여러 가지 면에서 편리했습니다.",
    "sentence_b_org": "숙소는 장소와 청결함 등 여러 가지 면에서 편리했습니다.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "숙소",
        "to": "accommodation",
        "pos": "NNG"
      }
    ],
    "mixed_k": 1,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 4.0,
    "sim_b_vs_b_org": 0.9481816291809082
  },
  {
    "id": "pair_00010",
    "sentence_a": "어느 일정이 내일 일정 중에 수정해도 되는 일정인가요?",
    "sentence_b": "어느 걸 내일 schedule 중 수정해도 되나요?",
    "sentence_b_org": "어느 걸 내일 일정 중 수정해도 되나요?",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "일정",
        "to": "schedule",
        "pos": "NNG"
      }
    ],
    "mixed_k": 1,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 3.9,
    "sim_b_vs_b_org": 0.9568977952003479
  },
  {
    "id": "pair_00014",
    "sentence_a": "쇼파베드는 키크신 분들 에게는 좀 작을 수 있을 것 같아요",
    "sentence_b": "제 생각에 sofa bed는 키가 큰 사람들에게는 조금 작을 수 있을 것 같아요.",
    "sentence_b_org": "제 생각에 소파 침대는 키가 큰 사람들에게는 조금 작을 수 있을 것 같아요.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "소파 침대",
        "to": "sofa bed",
        "pos": "NNG"
      }
    ],
    "mixed_k": 1,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 3.7,
    "sim_b_vs_b_org": 0.9728264212608337
  },
  {
    "id": "pair_00015",
    "sentence_a": "옆 집에서 노래 부르는 소리, 같은 층의 다른 집에서 문 여닫는 소리는 들렸어요.",
    "sentence_b": "사진에서의 모습보다는 약간 작은 size의 스튜디오 였어요.",
    "sentence_b_org": "사진에서의 모습보다는 약간 작은 규모의 스튜디오 였어요.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "규모",
        "to": "size",
        "pos": "NNG"
      }
    ],
    "mixed_k": 1,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 0.0,
    "sim_b_vs_b_org": 0.9726301431655884
  },
  {
    "id": "pair_00019",
    "sentence_a": "다른 메일은 그대로 두고 학회 홍보메일만 모두 삭제해줘.",
    "sentence_b": "모든 mail을 남겨두지 말고 학회 홍보 mail은 지워.",
    "sentence_b_org": "모든 메일을 남겨두지 말고 학회 홍보메일은 지워.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "메일",
        "to": "mail",
        "pos": "NNG"
      }
    ],
    "mixed_k": 1,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 3.2,
    "sim_b_vs_b_org": 0.9840031862258911
  },
  {
    "id": "pair_00020",
    "sentence_a": "나리타 공항에서 오시면 게이세이본선 종점이고요.",
    "sentence_b": "쇠네펠트 airport에서 10분이면 도착합니다.",
    "sentence_b_org": "쇠네펠트 공항에서 10분이면 도착합니다.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "공항",
        "to": "airport",
        "pos": "NNG"
      }
    ],
    "mixed_k": 1,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 0.1,
    "sim_b_vs_b_org": 0.9851851463317871
  },
  {
    "id": "pair_00001",
    "sentence_a": "신축 매입약정은 대기 사업자도 많고, 비주택 공실 리모델링은 기존 상가·오피스 외에도 다양한 비주택 공실을 매입함으로써 물량 확보가 가능할 것으로 판단",
    "sentence_b": "신규 건설 contract을 위한 대기 사업자가 많으며, 기존 점포와 office 외에 다양한 비주택 공실 구매로 비주택 공실 개조가 가능합니다.",
    "sentence_b_org": "신규 건설 계약을 위한 대기 사업자가 많으며, 기존 점포와 사무실 외에 다양한 비주택 공실 구매로 비주택 공실 개조가 가능합니다.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "계약",
        "to": "contract",
        "pos": "NNG"
      },
      {
        "from": "사무실",
        "to": "office",
        "pos": "NNG"
      }
    ],
    "mixed_k": 2,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 2.7,
    "sim_b_vs_b_org": 0.9763810634613037
  },
  {
    "id": "pair_00002",
    "sentence_a": "아쉬웠던 점은 우선 역에서는 조금 멀기 때문에 버스를 타야한다.",
    "sentence_b": "슬픈 것은 station에서 조금 멀기 때문에 bus를 타야 한다는 것입니다.",
    "sentence_b_org": "슬픈 것은 역에서 조금 멀기 때문에 버스를 타야 한다는 것입니다.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "역",
        "to": "station",
        "pos": "NNG"
      },
      {
        "from": "버스",
        "to": "bus",
        "pos": "NNG"
      }
    ],
    "mixed_k": 2,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 3.6,
    "sim_b_vs_b_org": 0.968813419342041
  },
  {
    "id": "pair_00011",
    "sentence_a": "간단한 빵과 과일 커피 정도의 조식이 제공되구요.",
    "sentence_b": "간단한 bread와 fruit coffee breakfast가 제공됩니다.",
    "sentence_b_org": "간단한 빵과 과일 커피 아침식사가 제공됩니다.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "빵",
        "to": "bread",
        "pos": "NNG"
      },
      {
        "from": "과일 커피 아침식사",
        "to": "fruit coffee breakfast",
        "pos": "NNG"
      }
    ],
    "mixed_k": 2,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 4.5,
    "sim_b_vs_b_org": 0.9500389695167542
  },
  {
    "id": "pair_00013",
    "sentence_a": "현재 민간 의료기관에서 사용 가능한 상용화된 신종 코로나바이러스 검사법이 없어, 질병관리본부와 18개 시·도 보건환경연구원에서만 신고된 환자들을 중심으로 검사 진행 중입니다.",
    "sentence_b": "현재 민간 의료기관에서는 상용화된 신종 코로나 virus 검사방법이 없으며, 질병관리본부와 18개 시·도 보건환경연구소에서 신고한 patient만을 대상으로 검사가 진행되고 있습니다.",
    "sentence_b_org": "현재 민간 의료기관에서는 상용화된 신종 코로나 바이러스 검사방법이 없으며, 질병관리본부와 18개 시·도 보건환경연구소에서 신고한 환자만을 대상으로 검사가 진행되고 있습니다.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "바이러스",
        "to": "virus",
        "pos": "NNG"
      },
      {
        "from": "환자",
        "to": "patient",
        "pos": "NNG"
      }
    ],
    "mixed_k": 2,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 4.8,
    "sim_b_vs_b_org": 0.9778841733932495
  },
  {
    "id": "pair_00016",
    "sentence_a": "시간 여유가 더 없으신 주말은 이번주말과 다음 주말 중 언제이십니까?",
    "sentence_b": "산책 plan이 morning에 있어, afternoon에 있어?",
    "sentence_b_org": "산책 계획이 아침에 있어, 오후에 있어?",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "아침",
        "to": "morning",
        "pos": "NNG"
      },
      {
        "from": "오후",
        "to": "afternoon",
        "pos": "NNG"
      }
    ],
    "mixed_k": 2,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 0.5,
    "sim_b_vs_b_org": 0.9568150043487549
  },
  {
    "id": "pair_00018",
    "sentence_a": "한편 12일 0시부터 특별입국절차 적용지역에 홍콩과 마카오가 포함된 이후 이틀간 특별입국절차 인원은 12일 5427명에서 13일 4936명으로 감소했다.",
    "sentence_b": "한편, 홍콩과 마카오 이후 이틀간 special immigration process은 12일 midnight부터 13일 4,936건까지 special immigration process 대상에 포함됐습니다.",
    "sentence_b_org": "한편, 홍콩과 마카오 이후 이틀간 특별 출입국 수속은 12일 자정부터 13일 4,936건까지 특별 출입국 수속 대상에 포함됐습니다.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "특별 출입국 수속",
        "to": "special immigration process",
        "pos": "NNG"
      },
      {
        "from": "자정",
        "to": "midnight",
        "pos": "NNG"
      }
    ],
    "mixed_k": 2,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 2.3,
    "sim_b_vs_b_org": 0.8966934680938721
  },
  {
    "id": "pair_00021",
    "sentence_a": "집 바로 옆에 슈퍼가 있고 무엇보다 집이 조용해요.",
    "sentence_b": "우리 house 바로 옆에 supermarket이 있는데, 무엇보다도 조용해요.",
    "sentence_b_org": "우리 집 바로 옆에 슈퍼마켓이 있는데, 무엇보다도 조용해요.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "집",
        "to": "house",
        "pos": "NNG"
      },
      {
        "from": "슈퍼마켓",
        "to": "supermarket",
        "pos": "NNG"
      }
    ],
    "mixed_k": 2,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 3.7,
    "sim_b_vs_b_org": 0.953402042388916
  },
  {
    "id": "pair_00022",
    "sentence_a": "에어컨 바람은 직접 쐬지 마세요",
    "sentence_b": "bathroom과 현관 중 너가 켜길 원하는 light은 어느 곳이야?",
    "sentence_b_org": "화장실과 현관 중 너가 켜길 원하는 조명은 어느 곳이야?",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "화장실",
        "to": "bathroom",
        "pos": "NNG"
      },
      {
        "from": "조명",
        "to": "light",
        "pos": "NNG"
      }
    ],
    "mixed_k": 2,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 0.0,
    "sim_b_vs_b_org": 0.9380857348442078
  },
  {
    "id": "pair_00024",
    "sentence_a": "컴업 2020의 특별행사로는 ▲인공지능(AI)챔피언십 ▲청소년비즈쿨페스티벌 ▲도전! K-스타트업왕중왕전 등 7개 행사가 진행됐다.",
    "sentence_b": "▲ AI(인공지능) championship ▲ Youth Biz Cool Festival ▲ 도전! K-startup 킹 오브 킹을 포함한 7개의 행사가 열렸습니다.",
    "sentence_b_org": "▲ AI(인공지능) 챔피언십 ▲ Youth Biz Cool Festival ▲ 도전! K-스타트업 킹 오브 킹을 포함한 7개의 행사가 열렸습니다.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "챔피언십",
        "to": "championship",
        "pos": "NNG"
      },
      {
        "from": "스타트업",
        "to": "startup",
        "pos": "NNG"
      }
    ],
    "mixed_k": 2,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 3.7,
    "sim_b_vs_b_org": 0.9863049983978271
  },
  {
    "id": "pair_00025",
    "sentence_a": "서재말고 안방 조명은 밝게 유지하자",
    "sentence_b": "summer 중엔 보일러 켜지 말고 fan을 켜.",
    "sentence_b_org": "여름 중엔 보일러 켜지 말고 선풍기를 켜.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "여름",
        "to": "summer",
        "pos": "NNG"
      },
      {
        "from": "선풍기",
        "to": "fan",
        "pos": "NNG"
      }
    ],
    "mixed_k": 2,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 0.0,
    "sim_b_vs_b_org": 0.930152952671051
  },
  {
    "id": "pair_00028",
    "sentence_a": "적절한 위치와 깔끔한 숙소가 여행자를 기분 좋게 한다.",
    "sentence_b": "친절한 host와 깨끗한 accommodation이 너무 좋았어요.",
    "sentence_b_org": "친절한 호스트와 깨끗한 숙소가 너무 좋았어요.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "호스트",
        "to": "host",
        "pos": "NNG"
      },
      {
        "from": "숙소",
        "to": "accommodation",
        "pos": "NNG"
      }
    ],
    "mixed_k": 2,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 3.0,
    "sim_b_vs_b_org": 0.94685959815979
  },
  {
    "id": "pair_00032",
    "sentence_a": "브뤼셀에선 비슷한 가격대의 개인실도 찾기 힘들었기 때문에 여러모로 아주 만족했다.",
    "sentence_b": "브뤼셀에서는 비슷한 price range의 private room을 찾기 어려웠기 때문에 여러모로 만족스러웠습니다.",
    "sentence_b_org": "브뤼셀에서는 비슷한 가격대의 개인 객실을 찾기 어려웠기 때문에 여러모로 만족스러웠습니다.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "가격대",
        "to": "price range",
        "pos": "NNG"
      },
      {
        "from": "개인 객실",
        "to": "private room",
        "pos": "NNG"
      }
    ],
    "mixed_k": 2,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 4.1,
    "sim_b_vs_b_org": 0.9595624804496765
  },
  {
    "id": "pair_00037",
    "sentence_a": "물 내려가는소리뿐만아니라 소변보는소리, 드라이기 쓰는소리도 다 들려요.",
    "sentence_b": "room이 좋을 뿐 아니라 host도 최고입니다.",
    "sentence_b_org": "방이 좋을 뿐 아니라 호스트도 최고입니다.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "방",
        "to": "room",
        "pos": "NNG"
      },
      {
        "from": "호스트",
        "to": "host",
        "pos": "NNG"
      }
    ],
    "mixed_k": 2,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 0.0,
    "sim_b_vs_b_org": 0.973638653755188
  },
  {
    "id": "pair_00012",
    "sentence_a": "방역당국과 의료진의 헌신, 수많은 자원봉사자들의 자발적 참여, 연대와 협력의 정신을 유감없이 발휘해준 국민의 힘입니다.",
    "sentence_b": "그것은 solidarity, 협력의 spirit, 검역당국과 의료진의 dedication, 수많은 자원봉사자들의 자발적인 참여를 보여준 사람들의 힘입니다.",
    "sentence_b_org": "그것은 연대, 협력의 정신, 검역당국과 의료진의 헌신, 수많은 자원봉사자들의 자발적인 참여를 보여준 사람들의 힘입니다.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "연대",
        "to": "solidarity",
        "pos": "NNG"
      },
      {
        "from": "정신",
        "to": "spirit",
        "pos": "NNG"
      },
      {
        "from": "헌신",
        "to": "dedication",
        "pos": "NNG"
      }
    ],
    "mixed_k": 3,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 3.4,
    "sim_b_vs_b_org": 0.935584306716919
  },
  {
    "id": "pair_00017",
    "sentence_a": "처음 예약할 때 일부러 숙소를 바티칸 근처로 잡았는데요,",
    "sentence_b": "제가 처음 booking을 했을 때, 저는 일부러 Vatican 근처에 제 accommodation을 정했습니다.",
    "sentence_b_org": "제가 처음 예약을 했을 때, 저는 일부러 바티칸 근처에 제 숙소를 정했습니다.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "예약",
        "to": "booking",
        "pos": "NNG"
      },
      {
        "from": "바티칸",
        "to": "Vatican",
        "pos": "NNP"
      },
      {
        "from": "숙소",
        "to": "accommodation",
        "pos": "NNG"
      }
    ],
    "mixed_k": 3,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 3.7,
    "sim_b_vs_b_org": 0.9427686929702759
  },
  {
    "id": "pair_00023",
    "sentence_a": "아울러 고령자 스스로 운전면허를 자진 반납할 유인을 제공하기 위한 지원사업을 계속하면서 ‘원스톱 시스템’ 전국 확산을 함께 추진한다.",
    "sentence_b": "또한, government는 노인들이 운전면허증을 자발적으로 반납할 수 있도록 incentive를 제공하고 \"one-stop system\"의 전국 확산을 추진하기 위한 지원 사업을 계속할 것입니다.",
    "sentence_b_org": "또한, 정부는 노인들이 운전면허증을 자발적으로 반납할 수 있도록 인센티브를 제공하고 \"원스톱 시스템\"의 전국 확산을 추진하기 위한 지원 사업을 계속할 것입니다.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "정부",
        "to": "government",
        "pos": "NNG"
      },
      {
        "from": "인센티브",
        "to": "incentive",
        "pos": "NNG"
      },
      {
        "from": "원스톱 시스템",
        "to": "one-stop system",
        "pos": "NNG"
      }
    ],
    "mixed_k": 3,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 3.4,
    "sim_b_vs_b_org": 0.9750737547874451
  },
  {
    "id": "pair_00027",
    "sentence_a": "늦어도 구월말고 시월 되기 전에 꼭 보일러 점검 해야해",
    "sentence_b": "boiler 점검은 September 말고 October 전에 하자.",
    "sentence_b_org": "보일러 점검은 구월말고 시월 전에 하자.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "보일러",
        "to": "boiler",
        "pos": "NNG"
      },
      {
        "from": "구월",
        "to": "September",
        "pos": "NNG"
      },
      {
        "from": "시월",
        "to": "October",
        "pos": "NNG"
      }
    ],
    "mixed_k": 3,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 3.6,
    "sim_b_vs_b_org": 0.9262915849685669
  },
  {
    "id": "pair_00033",
    "sentence_a": "야 지금 거실 난방 이십오도로 설정되어있는데, 그대로 둘까 아니면 삼십도로 올려줄까?",
    "sentence_b": "야 living room temperature 이십오도랑 삼십도 중에 몇으로 설정할까?",
    "sentence_b_org": "야 거실 온도 이십오도랑 삼십도 중에 몇으로 설정할까?",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "야",
        "to": "Hey",
        "pos": "IC"
      },
      {
        "from": "거실",
        "to": "living room",
        "pos": "NNG"
      },
      {
        "from": "온도",
        "to": "temperature",
        "pos": "NNG"
      }
    ],
    "mixed_k": 3,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 3.5,
    "sim_b_vs_b_org": 0.9608032703399658
  },
  {
    "id": "pair_00044",
    "sentence_a": "임상경험과 전문지식을 바탕으로 국민들과 의료 현장에 정확한 정보와 조언을 주고 계신 분들입니다.",
    "sentence_b": "함께 이룬 만큼 함께 잘사는 것이고, fairness와 freedom, equality를 바탕으로 함께 번영하는 것입니다.",
    "sentence_b_org": "함께 이룬 만큼 함께 잘사는 것이고, 공정과 자유, 평등을 바탕으로 함께 번영하는 것입니다.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "공정",
        "to": "fairness",
        "pos": "NNG"
      },
      {
        "from": "자유",
        "to": "freedom",
        "pos": "NNG"
      },
      {
        "from": "평등",
        "to": "equality",
        "pos": "NNG"
      }
    ],
    "mixed_k": 3,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 0.0,
    "sim_b_vs_b_org": 0.9400728940963745
  },
  {
    "id": "pair_00054",
    "sentence_a": "요리에 쓸 기름이나 여러 음식은 없지만 두 사람이 묵기에는 적당했던 숙소입니다.",
    "sentence_b": "dish에는 oil이나 다른 food은 없지만, 두 사람에게 좋은 숙박시설이었습니다.",
    "sentence_b_org": "요리에는 기름이나 다른 음식은 없지만, 두 사람에게 좋은 숙박시설이었습니다.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "요리",
        "to": "dish",
        "pos": "NNG"
      },
      {
        "from": "기름",
        "to": "oil",
        "pos": "NNG"
      },
      {
        "from": "음식",
        "to": "food",
        "pos": "NNG"
      }
    ],
    "mixed_k": 3,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 4.0,
    "sim_b_vs_b_org": 0.9220794439315796
  },
  {
    "id": "pair_00067",
    "sentence_a": "숙소는 일단 시내 완전 중심지에 있습니다.",
    "sentence_b": "그 accommodation은 city의 center에 있습니다.",
    "sentence_b_org": "그 숙소는 도시의 중심부에 있습니다.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "숙소",
        "to": "accommodation",
        "pos": "NNG"
      },
      {
        "from": "도시",
        "to": "city",
        "pos": "NNG"
      },
      {
        "from": "중심부",
        "to": "center",
        "pos": "NNG"
      }
    ],
    "mixed_k": 3,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 4.0,
    "sim_b_vs_b_org": 0.8935369849205017
  },
  {
    "id": "pair_00079",
    "sentence_a": "다음에 또 베를린을 간다면 역시 번잡한 시내보다는 조용한 이곳을 선택할 것입니다!",
    "sentence_b": "다음에 Berlin에 가면, 바쁜 city보다는 조용한 place를 선택할 거예요!",
    "sentence_b_org": "다음에 베를린에 가면, 바쁜 도시보다는 조용한 장소를 선택할 거예요!",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "베를린",
        "to": "Berlin",
        "pos": "NNP"
      },
      {
        "from": "도시",
        "to": "city",
        "pos": "NNG"
      },
      {
        "from": "장소",
        "to": "place",
        "pos": "NNG"
      }
    ],
    "mixed_k": 3,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 3.7,
    "sim_b_vs_b_org": 0.9761717319488525
  },
  {
    "id": "pair_00091",
    "sentence_a": "수건과 칫솔, 면도기 등은 본인이 준비해야합니다.",
    "sentence_b": "여러분은 towel, toothbrush, shaver를 직접 준비해야 합니다.",
    "sentence_b_org": "여러분은 수건, 칫솔, 면도기를 직접 준비해야 합니다.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "수건",
        "to": "towel",
        "pos": "NNG"
      },
      {
        "from": "칫솔",
        "to": "toothbrush",
        "pos": "NNG"
      },
      {
        "from": "면도기",
        "to": "shaver",
        "pos": "NNG"
      }
    ],
    "mixed_k": 3,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 4.2,
    "sim_b_vs_b_org": 0.9410355091094971
  },
  {
    "id": "pair_00096",
    "sentence_a": "운동을 잘 하고 싶으면 운동 스케줄 미루지 마.",
    "sentence_b": "이번 주 vendor가 schedule로 잡았던 time이 언제인가요?",
    "sentence_b_org": "이번 주 업체가 일정으로 잡았던 시간이 언제인가요?",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "업체",
        "to": "vendor",
        "pos": "NNG"
      },
      {
        "from": "일정",
        "to": "schedule",
        "pos": "NNG"
      },
      {
        "from": "시간",
        "to": "time",
        "pos": "NNG"
      }
    ],
    "mixed_k": 3,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 0.1,
    "sim_b_vs_b_org": 0.8981501460075378
  },
  {
    "id": "pair_00098",
    "sentence_a": "가격대비 숙소 디자인이나 청결도 모두 너무 만족스러웠습니다.",
    "sentence_b": "가격에 맞는 accommodation의 design과 청결함 또한 very 만족스러웠습니다.",
    "sentence_b_org": "가격에 맞는 숙박시설의 디자인과 청결함 또한 매우 만족스러웠습니다.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "숙박시설",
        "to": "accommodation",
        "pos": "NNG"
      },
      {
        "from": "디자인",
        "to": "design",
        "pos": "NNG"
      },
      {
        "from": "매우",
        "to": "very",
        "pos": "MAG"
      }
    ],
    "mixed_k": 3,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 4.4,
    "sim_b_vs_b_org": 0.9067714214324951
  },
  {
    "id": "pair_00109",
    "sentence_a": "우수기업연구소 중 대표적으로 이번 지정서 수여식이 개최된 에이텍티앤은 RFID 기반의 대중교통요금 결제기술로 국내외 교통카드 시장에서 높은 기술력을 인정받는 기업이다.",
    "sentence_b": "K-EV 100 캠페인이란 enterprise가 자발적으로 2030년까지 보유·임차 vehicle 100%를 미래차로 전환할 것을 선언하는 campaign이다.",
    "sentence_b_org": "K-EV 100 캠페인이란 기업이 자발적으로 2030년까지 보유·임차 차량 100%를 미래차로 전환할 것을 선언하는 캠페인이다.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "기업",
        "to": "enterprise",
        "pos": "NNG"
      },
      {
        "from": "임차 차량",
        "to": "vehicle",
        "pos": "NNG"
      },
      {
        "from": "캠페인",
        "to": "campaign",
        "pos": "NNG"
      }
    ],
    "mixed_k": 3,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 0.0,
    "sim_b_vs_b_org": 0.9607279300689697
  },
  {
    "id": "pair_00090",
    "sentence_a": "질병관리본부 국립보건연구원이 코로나19 진단제·치료제 및 백신 등 개발을 위해 긴급 연구 과제를 공모한다.",
    "sentence_b": "이와 함께 video 및 음성 분석을 위해 kiosk 내 camera, microphone, speaker module 등을 탑재한다.",
    "sentence_b_org": "이와 함께 영상 및 음성 분석을 위해 키오스크 내 카메라, 마이크, 스피커 모듈 등을 탑재한다.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "영상",
        "to": "video",
        "pos": "NNG"
      },
      {
        "from": "키오스크",
        "to": "kiosk",
        "pos": "NNG"
      },
      {
        "from": "카메라",
        "to": "camera",
        "pos": "NNG"
      },
      {
        "from": "마이크",
        "to": "microphone",
        "pos": "NNG"
      }
    ],
    "mixed_k": 4,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 0.0,
    "sim_b_vs_b_org": 0.95139080286026
  },
  {
    "id": "pair_00099",
    "sentence_a": "한 집에 방은 3개 있고 화장실과 샤워실은 공동 사용입니다.",
    "sentence_b": "한 house에는 room이 세 개 있고, bathroom과 shower room은 함께 있습니다.",
    "sentence_b_org": "한 집에는 방이 세 개 있고, 욕실과 샤워실은 함께 있습니다.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "집",
        "to": "house",
        "pos": "NNG"
      },
      {
        "from": "방",
        "to": "room",
        "pos": "NNG"
      },
      {
        "from": "욕실",
        "to": "bathroom",
        "pos": "NNG"
      },
      {
        "from": "샤워실",
        "to": "shower room",
        "pos": "NNG"
      }
    ],
    "mixed_k": 4,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 3.6,
    "sim_b_vs_b_org": 0.9261477589607239
  },
  {
    "id": "pair_00117",
    "sentence_a": "친절한 주인고 모든 것을 잘 갖춘 곳입니다.",
    "sentence_b": "하지만 그걸 감안하더라도 photo보다 더 넓은 space, 깨끗한 house, 모든 것을 갖춘 house입니다.",
    "sentence_b_org": "하지만 그걸 감안하더라도 사진보다 더 넓은 공간, 깨끗한 집, 모든 것을 갖춘 집입니다.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "하지만",
        "to": "But",
        "pos": "MAJ"
      },
      {
        "from": "사진",
        "to": "photo",
        "pos": "NNG"
      },
      {
        "from": "공간",
        "to": "space",
        "pos": "NNG"
      },
      {
        "from": "집",
        "to": "house",
        "pos": "NNG"
      }
    ],
    "mixed_k": 4,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 1.7,
    "sim_b_vs_b_org": 0.9556891322135925
  },
  {
    "id": "pair_00142",
    "sentence_a": "위치, 시설, 조용함, 청결 등 모든면에서 나에게는  대단히 좋았었습니다.",
    "sentence_b": "station과 가까운 location, restaurant과 market 정보 제공, 숙소의 cleanliness 등 모든 면에서 좋았습니다",
    "sentence_b_org": "역과 가까운 위치, 식당과 마켓 정보 제공, 숙소의 청결 등 모든 면에서 좋았습니다",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "역",
        "to": "station",
        "pos": "NNG"
      },
      {
        "from": "위치",
        "to": "location",
        "pos": "NNG"
      },
      {
        "from": "식당",
        "to": "restaurant",
        "pos": "NNG"
      },
      {
        "from": "마켓",
        "to": "market",
        "pos": "NNG"
      }
    ],
    "mixed_k": 4,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 2.3,
    "sim_b_vs_b_org": 0.9409726858139038
  },
  {
    "id": "pair_00195",
    "sentence_a": "또한 7일부터 신종코로나 진단 검사기관을 질병관리본부의 평가 인증을 받은 50여개 민간 기관(수탁검사기관 포함)으로 확대 시행할 예정이다.",
    "sentence_b": "또한 질병관리본부로부터 evaluation 및 certification을 받은 50여 개 private institution(위탁시험기관 포함)으로 7일부터 새로운 코로나 diagnosis test institution을 확대합니다.",
    "sentence_b_org": "또한 질병관리본부로부터 평가 및 인증을 받은 50여 개 민간기관(위탁시험기관 포함)으로 7일부터 새로운 코로나 진단검사기관을 확대합니다.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "평가",
        "to": "evaluation",
        "pos": "NNG"
      },
      {
        "from": "인증",
        "to": "certification",
        "pos": "NNG"
      },
      {
        "from": "민간기관",
        "to": "private institution",
        "pos": "NNG"
      },
      {
        "from": "진단검사기관",
        "to": "diagnosis test institution",
        "pos": "NNG"
      }
    ],
    "mixed_k": 4,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 3.9,
    "sim_b_vs_b_org": 0.9257214069366455
  },
  {
    "id": "pair_00228",
    "sentence_a": "화장실, 복도, 방 모두 퀄리티가 좋았습니다.",
    "sentence_b": "bathroom, hallway, room 모두 quality가 좋았습니다.",
    "sentence_b_org": "욕실, 복도, 방 모두 질이 좋았습니다.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "욕실",
        "to": "bathroom",
        "pos": "NNG"
      },
      {
        "from": "복도",
        "to": "hallway",
        "pos": "NNG"
      },
      {
        "from": "방",
        "to": "room",
        "pos": "NNG"
      },
      {
        "from": "질",
        "to": "quality",
        "pos": "NNG"
      }
    ],
    "mixed_k": 4,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 4.2,
    "sim_b_vs_b_org": 0.9231976270675659
  },
  {
    "id": "pair_00263",
    "sentence_a": "그래도 숙소는 비용대비 이용할만 하고 주인분도 친절하세요.",
    "sentence_b": "accommodation이 really 깨끗하고 host분께서 very 친절하세요!",
    "sentence_b_org": "숙소가 정말 깨끗하고 주인분께서 굉장히 친절하세요!",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "숙소",
        "to": "accommodation",
        "pos": "NNG"
      },
      {
        "from": "정말",
        "to": "really",
        "pos": "MAG"
      },
      {
        "from": "주인",
        "to": "host",
        "pos": "NNG"
      },
      {
        "from": "굉장히",
        "to": "very",
        "pos": "MAG"
      }
    ],
    "mixed_k": 4,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 2.8,
    "sim_b_vs_b_org": 0.9335684776306152
  },
  {
    "id": "pair_00410",
    "sentence_a": "시내 주요지점에 모두 갈 수 있는 지하철 4호선역과 가까워서 교통이 편리합니다.",
    "sentence_b": "city의 모든 주요 지점으로 갈 수 있는 subway 4호선 station과 가깝기 때문에 traffic이 편리합니다.",
    "sentence_b_org": "도시의 모든 주요 지점으로 갈 수 있는 지하철 4호선 역과 가깝기 때문에 교통이 편리합니다.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "도시",
        "to": "city",
        "pos": "NNG"
      },
      {
        "from": "지하철",
        "to": "subway",
        "pos": "NNG"
      },
      {
        "from": "역",
        "to": "station",
        "pos": "NNG"
      },
      {
        "from": "교통",
        "to": "traffic",
        "pos": "NNG"
      }
    ],
    "mixed_k": 4,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 4.0,
    "sim_b_vs_b_org": 0.9358785152435303
  },
  {
    "id": "pair_00458",
    "sentence_a": "호주에서 제일 좋았던 추억은 어느 관광지도 아닌 이 집이였습니다",
    "sentence_b": "Australia의 best memory는 tourist spot이 아닌 이 집이었습니다.",
    "sentence_b_org": "호주의 최고의 기억은 관광지가 아닌 이 집이었습니다.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "호주",
        "to": "Australia",
        "pos": "NNP"
      },
      {
        "from": "최고",
        "to": "best",
        "pos": "NNG"
      },
      {
        "from": "기억",
        "to": "memory",
        "pos": "NNG"
      },
      {
        "from": "관광지",
        "to": "tourist spot",
        "pos": "NNG"
      }
    ],
    "mixed_k": 4,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 4.0,
    "sim_b_vs_b_org": 0.948508620262146
  },
  {
    "id": "pair_00460",
    "sentence_a": "수입선 다변화, 소재·부품·장비 산업 육성, 신시장 개척 등에 더욱 박차를 가해 주기 바랍니다.",
    "sentence_b": "수입 vessel의 다양화, material, part 및 equipment industry의 발전, 새로운 market의 발전을 가속화해 주십시오.",
    "sentence_b_org": "수입 선박의 다양화, 자재, 부품 및 장비 산업의 발전, 새로운 시장의 발전을 가속화해 주십시오.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "선박",
        "to": "vessel",
        "pos": "NNG"
      },
      {
        "from": "자재",
        "to": "material",
        "pos": "NNG"
      },
      {
        "from": "부품",
        "to": "part",
        "pos": "NNG"
      },
      {
        "from": "장비 산업",
        "to": "equipment industry",
        "pos": "NNG"
      }
    ],
    "mixed_k": 4,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 4.0,
    "sim_b_vs_b_org": 0.9487462043762207
  },
  {
    "id": "pair_00534",
    "sentence_a": "추운 날씨에도 집 전체가 다 따뜻했고 온수도 완전 잘나와요.",
    "sentence_b": "추운 weather에도 house 전체가 따뜻했고 hot water가 really 잘 나왔어요.",
    "sentence_b_org": "추운 날씨에도 집 전체가 따뜻했고 뜨거운 물이 정말 잘 나왔어요.",
    "sentence_mixed_from": "b",
    "mixed_list": [
      {
        "from": "날씨",
        "to": "weather",
        "pos": "NNG"
      },
      {
        "from": "집",
        "to": "house",
        "pos": "NNG"
      },
      {
        "from": "물",
        "to": "water",
        "pos": "NNG"
      },
      {
        "from": "정말",
        "to": "really",
        "pos": "MAG"
      }
    ],
    "mixed_k": 4,
    "min_k": 1,
    "max_k": 5,
    "source": "KLUE-STS",
    "score_org": 4.4,
    "sim_b_vs_b_org": 0.9597086906433105
  }
];

// Transform to expected format
const datasetSamples = SAMPLES_RAW_DATA.map((item, index) => ({
    id: index + 1,
    level: `k=${item.mixed_k}`,
    label: item.mixed_k === 1 ? 'Light Mix' :
           item.mixed_k === 2 ? 'Medium Mix' :
           item.mixed_k === 3 ? 'Heavy Mix' : 'Very Heavy Mix',
    original_a: item.sentence_a,
    original_b: item.sentence_b_org,
    mixed_b: item.sentence_b,
    similarity: item.sim_b_vs_b_org || 0.95,
    klue_score: item.score_org || 0
}));

console.log('Dataset samples loaded:', datasetSamples.length);

// Function to get samples by page
function getSamplesByPage(page = 1, itemsPerPage = 6) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return datasetSamples.slice(startIndex, endIndex);
}

// Function to get samples by k-level
function getSamplesByLevel(level) {
    return datasetSamples.filter(sample => sample.level === level);
}

// Function to get total pages
function getTotalPages(itemsPerPage = 6) {
    return Math.ceil(datasetSamples.length / itemsPerPage);
}

// Function to search samples
function searchSamples(query) {
    const lowerQuery = query.toLowerCase();
    return datasetSamples.filter(sample =>
        sample.original_a.toLowerCase().includes(lowerQuery) ||
        sample.original_b.toLowerCase().includes(lowerQuery) ||
        sample.mixed_b.toLowerCase().includes(lowerQuery)
    );
}

// No async loading needed - data is already available
function loadSamplesData() {
    console.log('Data already loaded (embedded):', datasetSamples.length);
    return Promise.resolve(datasetSamples);
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        datasetSamples,
        loadSamplesData,
        getSamplesByPage,
        getSamplesByLevel,
        getTotalPages,
        searchSamples
    };
}
