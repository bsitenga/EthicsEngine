module.exports = {
    English: {
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
                measured: "What's Being Measured?"
            },
            Paragraphs: {
                scenario: "Suppose that an autonomous vehicle (AV) is driving in heavy rain when the AV suddenly detects two groups of pedestrians in its path. Sadly, it's unable to stop in time due to the low visibility and slippery roads. It must make a choice between staying its course or swerving into the other group of pedestrians. The scenario may also involve choosing between saving the pedestrians or the passengers. Either way, the AV must decide between two unfortunate outcomes. The purpose of this quiz is to gather your opinion on which outcomes the AV should choose.",
                instructions: "You will first answer each question as an impartial judge. Imagine the scenario as if you're watching safely from a nearby sidewalk, and can control what decision the car will make. Next, you'll indicate whether or not your decision would change if you were a passenger of the car. After answering ten questions, you'll receive an analytics report that compares your decisions to those of all other participants.",
                measured1: "Action vs. Inaction - It's important to make the distinction between staying the course and swerving. By swerving, you're taking action by driving into the other pedestrians. By staying in your lane, you're choosing inaction by driving into the pedestrians already in your way.",
                measured2: "Saving More vs. Saving Less - This will measure how heavily you prefer saving more lives over all else.",
                measured3: "Pedestrians vs. Passengers - Some scenarios will feature a choice between hitting a group of pedestrians or sacrificing the passengers by hitting a barrier. These scenarios will measure your preference for which group you'd rather save.",
                measured4: "Known vs. Unknown - Other scenarios will feature a choice between hitting a known number of pedestrians, or moving into an opposite lane with an unknown number of pedestrians, if any.",
            },
            Buttons: {
                start: "Start Quiz"
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
    }
}