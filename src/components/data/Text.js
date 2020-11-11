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

        },
        Methodology: {
            Headings: {
                Recording: "Recording Preferences",
                Calculations: "Calculations"
            },
            Paragraphs: {
                Recording1: "A user’s answers are recorded as preferences in a JSON object. A summary object keeps track of the number of preferences and the average of all preferences. Each preference object is recorded with its raw values, and the summary object is averaged to represent each preference over the total number of preferences. For display purposes, preferences are normalized and represented as a value between 0 and 1.",
                Recording2: "Individual Preference Object: { “more”: 2, “less”: 4, “action”: 18, “inaction”: 2, “known”: 2, “unknown”: 6, “pedestrians”: 4, “passengers”: 4 }",
                Recording3: "Normalized Individual Preference Object: { “more”: 2 / 6, “less”: 4 / 6, “action”: 18 / 20, “inaction”: 2 / 20, “known”: 2 / 8, “unknown”: 6 / 8, “pedestrians”: 4 / 8, “passengers”: 4 / 8 }",
                Recording4: "Summary Object: { “total”: 10, “more”: 2.7, “less”: 3, “action”: 11.1, “inaction”: 7.7, “known”: 3.3, “unknown”: 4.4, “pedestrians”: 3.1, “passengers”: 3.4 }",
                Calculations1: "Normalizing preferences: (raw preference score) / (total preference score in that category)",
                Calculations2: "Ranking preferences: A user’s preferences are ranked by their deviation from the average results.",
                Calculations3: "Deviation: [(normalized user preference) - (normalized average preference)] / (normalized average preference)"
            }
        },
        Quiz: {

        },
        Results: {

        }
    }
}