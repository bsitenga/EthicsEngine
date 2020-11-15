module.exports = {
    English: {
        Navigation: {
            Home: "Home",
            Quiz: "Quiz",
            About: "About",
            Methodology: "Methodology"
        },
        About: {
            Headings: {
                EthicsEngine: "Ethics Engine",
                Motivation: "Motivation",
                Development: "Development",
                AboutMe: "About Me"
            },
            Paragraphs: {
                EthicsEngine: "In the modern era, machines are being given more and more autonomy over the decisions we make. Soon, truly autonomous cars could be making hundreds, if not thousands of decisions for each of us as part of our daily commute. It’s especially humbling to realize that many of these simple decisions could mean the difference between carefree travel or a tragic loss of life. It’s up to the public to hold a high standard for machine intelligence that makes these decisions, and more importantly to define what that standard should be. This platform was developed to tackle that issue and help us gain a better understanding of how we want autonomous cars to act.",
                Motivation: "Ethics Engine was created as a response to the publication of Moral Machine, a platform developed in 2016 by the Scalable Cooperation at MIT Media Lab. Moral Machine was a pioneer in gathering public opinion of autonomous driving and saw massive success, receiving over 70,000 submissions. However, Moral Machine’s experiment was more focused on exploring how different cultures value certain demographic groups. For example, one of Moral Machine’s dilemma’s might investigate the decision between hitting one doctor or two criminals. The results were interesting, but they have little place in determining public policy. I developed Ethics Engine to address these issues and answer more practical ethical questions related to autonomous driving.",
                Development: "Ethics Engine was created primarily with the web technologies React, Express, and Node.js. All survey answers are stored and fetched from MongoDB, a secure global cloud database. The backend is hosted on Heroku, a major cloud platform, and the frontend is deployed on AWS Amplify.",
                Frontend: "Frontend Technologies: Bootstrap, Chart.js, CSS, HTML, React, React Router",
                Backend: "Backend Technologies: Axios, Express.js, MongoDB, Mongoose, Node.js",
                AboutMe: "Hi! My name is Brian and I’m a web developer and student at the University of Southern California. I created Ethics Engine to gather and share data about ethical decision making in response to the rise of autonomous driving. On a broader level, I made this website because I’m concerned with the pace of technological advancement especially when compared to the slow pace of public policy. I believe that developers have a growing responsibility to set the standard for new technology that we create in the absence of government regulation. In some way, I hope to contribute to this culture of responsible development by making websites that question and explore the ethical ramifications of new technology. To stay true to my development philosophy, the Ethics Engine frontend is completely open-source under the MIT License. If you see any way to make this site more accessible, inclusive, or user-friendly, I urge you to contact me or contribute to the repository linked below.",
                Repository: "Repository"
            }
        },
        Home: {
            Headings: {
                main: "Shape the way autonomous vehicles are designed",
                sub: "Ethics Engine is a platform designed to measure public opinion of autonomous driving and the moral challenges it faces."
            },
            Paragraphs: {
                main: "The quiz will show you a series of moral dilemmas involving an autonomous vehicle. You will choose how the autonomous vehicle should act in each situation. Afterwards, you'll be shown your responses compared to the average of all others."
            },
            Buttons: {
                start: "Start Quiz"
            }
        },
        Methodology: {
            Headings: {
                Recording: "Recording Preferences",
                Calculations: "Calculations"
            },
            Paragraphs: {
                Recording1: "A user’s answers are recorded as preferences in a JSON object. A summary object keeps track of the number of preferences and the average of all preferences. Each preference object is recorded with its raw values, and the summary object is averaged to represent each preference over the total number of preferences. For display purposes, preferences are normalized and represented as a value between 0 and 1.",
                Recording2: "Individual Preference Object:",
                Recording3: "Normalized Individual Preference Object:",
                Recording4: "Summary Object:",
                Calculations1: "Normalizing preferences:",
                Calculations2: "Ranking preferences:",
                Calculations3: "Deviation:"
            }
        },
        Quiz: {
            Headings: {
                scenario: "Scenario",
                instructions: "Instructions",
                measured: "What's Being Measured?",
                question: "Question",
                info: "Scenario Info"
            },
            Paragraphs: {
                scenario: "Suppose that an autonomous vehicle (AV) is driving in heavy rain when the AV suddenly detects two groups of pedestrians in its path. Sadly, it's unable to stop in time due to the low visibility and slippery roads. It must make a choice between staying its course or swerving into the other group of pedestrians. The scenario may also involve choosing between saving the pedestrians or the passengers. Either way, the AV must decide between two unfortunate outcomes. The purpose of this quiz is to gather your opinion on which outcomes the AV should choose.",
                instructions: "You will first answer each question as an impartial judge. Imagine the scenario as if you're watching safely from a nearby sidewalk, and can control what decision the car will make. Next, you'll indicate whether or not your decision would change if you were a passenger of the car. After answering ten questions, you'll receive an analytics report that compares your decisions to those of all other participants.",
                measured1: "Action vs. Inaction - It's important to make the distinction between staying the course and swerving. By swerving, you're taking action by driving into the other pedestrians. By staying in your lane, you're choosing inaction by driving into the pedestrians already in your way.",
                measured2: "Saving More vs. Saving Less - This will measure how heavily you prefer saving more lives over all else.",
                measured3: "Pedestrians vs. Passengers - Some scenarios will feature a choice between hitting a group of pedestrians or sacrificing the passengers by hitting a barrier. These scenarios will measure your preference for which group you'd rather save.",
                measured4: "Known vs. Unknown - Other scenarios will feature a choice between hitting a known number of pedestrians, or moving into an opposite lane with an unknown number of pedestrians, if any.",
                impartial: "As an impartial observer, should the car",
                passenger: "As a passenger, should the car",
                or: "or",
                error: "Please answer both questions.",
                sceneInfo: "Imagine an autonomous car is driving down the road in heavy rain. The visibility is low, and it detects pedestrian(s), a barricade, or an unidentifiable object in its way far too late to brake. To avoid this, it determines that the only course of action is to swerve left into the adjacent lane, but similarly detects pedestrians, a barricade, or an unidentifiable object in that lane. You must choose how you want this and all other autonomous cars to act in this scenario, first as an innocent bystander, and second as a passenger of the car. Assume the car is a five-seater with an average of three passengers.",
            },
            Buttons: {
                start: "Start Quiz",
                next: "Next",
                results: "See Results",
                close: "Close"
            }
        },
        Results: {
            Headings: {
                Matters: "Issues that Mattered Most to you",
                AVFacts: "AV Facts",
                Closing: "Closing",
            },
            Paragraphs: {
                AVFacts1: "The US Department of Transportation estimates that full adoption of autonomous vehicles could reduce traffic fatalities by up to 94 percent.",
                AVFacts2: "The market demand for autonomous vehicles is expected to rise exponentially at an average growth rate of 63.4% for the next ten years.",
                Closing: "This website isn’t meant to discourage you from buying or supporting the growth of autonomous vehicles. In fact, public adoption of AVs could save many lives every year. Instead, this website was intended to spark discussion and further research about the ethical consequences of letting AI make our decisions for us. All survey answers are anonymous, and no personal data was collected or used in this study.",
            }
        },
        Radar: {
            Headings: {
                you: "You",
                average: "Global Average"
            },
            Labels: {
                more: "Saving More",
                less: "Saving Less",
                action: "Action",
                inaction: "Inaction",
                known: "Known",
                unknown: "Unknown",
                pedestrians: "Pedestrians",
                passengers: "Passengers"
            }
        }
    },
    Korean: {
        Navigation: {
            Home: "집",
            Quiz: "퀴즈",
            About: "대해",
            Methodology: "방법론"
        },
        About: {
            Headings: {
                EthicsEngine: "Ethics Engine",
                Motivation: "자극",
                Development: "소프트웨어 개발",
                AboutMe: "나에 대해서"
            },
            Paragraphs: {
                EthicsEngine: "현대 시대에 기계는 우리가 내리는 결정에 대해 점점 더 많은 자율성을 부여 받고 있습니다. 머지 않아 진정한 자율 주행 자동차는 매일 출퇴근 할 때 우리 각자를 위해 수천 건은 아니더라도 수백 건의 결정을 내릴 수 있습니다. 이러한 간단한 결정 중 많은 부분이 평온한 여행이나 비극적 인 인명 손실의 차이를 의미 할 수 있다는 사실을 깨닫는 것은 특히 겸손합니다. 이러한 결정을 내리는 머신 인텔리전스에 대한 높은 표준을 유지하고 그 표준이 무엇인지 정의하는 것은 대중의 몫입니다. 이 플랫폼은 이러한 문제를 해결하고 자율 주행 차가 어떻게 행동하기를 원하는지 더 잘 이해할 수 있도록 개발되었습니다.",
                Motivation: "Ethics Engine은 2016 년 MIT Media Lab의 Scalable Cooperation에서 개발 한 플랫폼 인 Moral Machine의 게시에 대한 응답으로 만들어졌습니다. Moral Machine은 자율 주행에 대한 여론을 모으는 선구자였으며 7 만 건 이상의 제출을 받아 엄청난 성공을 거두었습니다. 그러나 Moral Machine의 실험은 서로 다른 문화가 특정 인구 통계 그룹에 가치를 부여하는 방식을 탐구하는 데 더 중점을 두었습니다. 예를 들어, Moral Machine의 딜레마 중 하나는 의사 한 명 또는 두 명의 범죄자를 때리는 결정을 조사 할 수 있습니다. 결과는 흥미로 웠지만 공공 정책을 결정하는 데는 거의 영향을 미치지 않았습니다. 저는 이러한 문제를 해결하고 자율 주행과 관련된보다 실용적인 윤리적 질문에 답하기 위해 Ethics Engine을 개발했습니다.",
                Development: "Ethics Engine은 주로 웹 기술인 React, Express 및 Node.js로 만들어졌습니다. 모든 설문 조사 답변은 안전한 글로벌 클라우드 데이터베이스 인 MongoDB에서 저장 및 가져옵니다. 백엔드는 주요 클라우드 플랫폼 인 Heroku에서 호스팅되고 프런트 엔드는 AWS Amplify에 배포됩니다.",
                Frontend: "프론트 엔드 기술 : Bootstrap, Chart.js, CSS, HTML, React, React Router",
                Backend: "백엔드 기술 : Axios, Express.js, MongoDB, Mongoose, Node.js",
                AboutMe: "안녕하세요! 제 이름은 Brian이고 University of Southern California의 웹 개발자이자 학생입니다. 자율 주행의 부상에 대응하여 윤리적 의사 결정에 대한 데이터를 수집하고 공유하기 위해 Ethics Engine을 만들었습니다. 더 넓은 차원에서 저는 특히 느린 속도의 공공 정책과 비교할 때 기술 발전 속도에 관심이 있기 때문에이 웹 사이트를 만들었습니다. 저는 개발자들이 정부 규제없이 우리가 만드는 신기술의 표준을 설정해야 할 책임이 커지고 있다고 생각합니다. 어떤면에서 저는 신기술의 윤리적 파급 효과에 대해 질문하고 탐구하는 웹 사이트를 만들어 책임있는 개발 문화에 기여하고자합니다. 제 개발 철학에 충실하기 위해 Ethics Engine 프런트 엔드는 MIT 라이선스에 따라 완전히 오픈 소스입니다. 이 사이트를보다 접근 가능하고 포괄적이거나 사용자 친화적으로 만드는 방법을 찾으면 저에게 연락하거나 아래 링크 된 저장소에 기여할 것을 촉구합니다.",
                Repository: "저장소",
            }
        },
        Home: {
            Headings: {
                main: "자율 주행 차 설계 방식 변경",
                sub: "Ethics Engine은 자율 주행에 대한 여론과 그에 따른 도덕적 도전을 측정하도록 설계된 플랫폼입니다."
            },
            Paragraphs: {
                main: "퀴즈는 자율 주행 차량과 관련된 일련의 도덕적 딜레마를 보여줍니다. 자율 주행 차가 각 상황에서 어떻게 행동해야하는지 선택합니다. 그 후에 다른 모든 평균과 비교하여 귀하의 응답이 표시됩니다."
            },
            Buttons: {
                start: "퀴즈 시작"
            }
        },
        Methodology: {
            Headings: {
                Recording: "녹음 기본 설정",
                Calculations: "계산 방법"
            },
            Paragraphs: {
                Recording1: "사용자의 답변은 JSON 개체의 환경 설정으로 기록됩니다. 요약 개체는 기본 설정 수와 모든 기본 설정의 평균을 추적합니다. 각 기본 설정 개체는 원시 값과 함께 기록되고 요약 개체는 총 기본 설정 수에 대한 각 기본 설정을 나타내도록 평균화됩니다. 표시를 위해 기본 설정은 정규화되고 0과 1 사이의 값으로 표시됩니다.",
                Recording2: "개별 선호 개체:",
                Recording3: "정규화 된 개별 선호 개체:",
                Recording4: "요약 개체:",
                Calculations1: "기본 설정 표준화:",
                Calculations2: "순위 선호도:",
                Calculations3: "일탈:",
            }
        },
        Quiz: {
            Headings: {
                scenario: "대본",
                instructions: "명령",
                measured: "무엇을 측정하고 있습니까?",
                question: "질문",
                info: "시나리오 정보",
            },
            Paragraphs: {
                scenario: "자율 주행 차 (AV)가 폭우 속에서 운전 중일 때 AV가 경로에서 갑자기 두 그룹의 보행자를 감지한다고 가정 해 보겠습니다. 안타깝게도 시야가 낮고 도로가 미끄러 워 제 시간에 멈출 수 없습니다. 경로를 유지하거나 다른 보행자 그룹으로 방향을 바꾸는 것 중에서 선택해야합니다. 시나리오는 또한 보행자 또는 승객을 구하는 것 중에서 선택하는 것을 포함 할 수 있습니다. 어느 쪽이든 AV는 두 가지 불행한 결과 중에서 결정해야합니다. 이 퀴즈의 목적은 AV가 어떤 결과를 선택해야하는지에 대한 의견을 수집하는 것입니다.",
                instructions: "먼저 공정한 판사로서 각 질문에 답할 것입니다. 당신이 근처의 보도에서 안전하게 지켜보고있는 것처럼 시나리오를 상상하고 자동차가 내릴 결정을 제어 할 수 있습니다. 다음으로, 당신이 자동차의 승객이라면 당신의 결정이 바뀔지 여부를 표시 할 것입니다. 10 개의 질문에 답하면 다른 모든 참가자의 결정과 비교 한 분석 보고서를 받게됩니다.",
                measured1: "행동 또는 행동하지 않음: 코스를 유지하는 것과 방향을 바꾸는 것 사이를 구분하는 것이 중요합니다. 방향을 바꾸면 다른 보행자를 향해 운전하여 조치를 취하는 것입니다. 차선에 머무르는 것은 이미 지나가고있는 보행자를 향해 운전하여 무 활동을 선택하는 것입니다.",
                measured2: "더 많이 절약하거나 더 적게 절약: 이것은 당신이 다른 모든 것보다 더 많은 생명을 구하는 것을 얼마나 선호하는지 측정합니다.",
                measured3: "보행자 또는 승객: 일부 시나리오에서는 보행자 그룹을 때리거나 장벽을 쳐 승객을 희생하는 것 중에서 선택하는 것이 특징입니다. 이러한 시나리오는 저장하려는 그룹에 대한 선호도를 측정합니다.",
                measured4: "알려진 또는 알 수 없음: 다른 시나리오에서는 알려진 수의 보행자를 치는 것 또는 알 수없는 수의 보행자가있는 반대 차선으로 이동하는 것 중에서 선택할 수 있습니다.",
                impartial: "공정한 관찰자로서 차는 무엇을해야합니까?",
                passenger: "승객으로서 자동차는 무엇을해야합니까?",
                or: "또는",
                error: "두 가지 질문에 모두 답하십시오.",
                sceneInfo: "폭우 속에서 자율 주행 차가 도로를 주행한다고 상상해보십시오. 시야가 낮고 보행자, 바리케이드 또는 식별 할 수없는 물체가 너무 늦게 제동 할 수없는 것을 감지합니다. 이를 방지하기 위해 유일한 조치는 인접한 차선으로 좌회전하는 것이라고 판단하지만, 마찬가지로 보행자, 바리케이드 또는 해당 차선에서 식별 할 수없는 물체를 감지합니다. 이 시나리오에서이 시나리오와 다른 모든 자율 주행 자동차가 어떻게 행동 할지를 선택해야합니다. 먼저 무고한 방관자, 두 번째는 자동차 승객으로 행동해야합니다.",
            },
            Buttons: {
                start: "퀴즈 시작",
                next: "다음",
                results: "결과보기",
                close: "닫기"
            }
        },
        Results: {
            Headings: {
                Matters: "가장 중요한 문제",
                AVFacts: "AV 사실",
                Closing: "폐쇄",
            },
            Paragraphs: {
                AVFacts1: "미국 교통부는 자율 주행 차량을 완전히 채택하면 교통 사고 사망자를 최대 94 %까지 줄일 수 있다고 추정합니다.",
                AVFacts2: "자율 주행 차에 대한 시장 수요는 향후 10 년 동안 평균 63.4 % 성장률로 기하 급수적으로 증가 할 것으로 예상됩니다.",
                Closing: "이 웹 사이트는 자율 주행 자동차의 성장을 지원하거나 구매하지 못하도록 막기위한 것이 아닙니다. 실제로 AV의 공개 채택은 매년 많은 생명을 구할 수 있습니다. 대신이 웹 사이트는 AI가 우리를 위해 결정을 내리는 데 따른 윤리적 결과에 대한 토론과 추가 연구를 촉발하기위한 것입니다. 모든 설문 조사 답변은 익명이며 본 연구에서는 개인 데이터가 수집되거나 사용되지 않았습니다.",
            }
        },
        Radar: {
            Headings: {
                you: "너의 점수",
                average: "국제 평균"
            },
            Labels: {
                more: "더 많이 절약",
                less: "덜 절약",
                action: "동작",
                inaction: "활동하지 않음",
                known: "알려진",
                unknown: "알 수 없는",
                pedestrians: "보행자",
                passengers: "승객"
            }
        }
    }
}