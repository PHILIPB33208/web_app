import ChapterCard from "./ChapterCard";


function ChapterCards() {


    let ourChapters = [
        {
            chapterName: "CYBERSECURITY",
            description: "This is a very good chapter that is about cybersecurity fundamentals."
        },
        {
            chapterName: "GAMING AND VIRTUAL REALITY",
            description: "This is a very good chapter that is about game engineering fundamentals."
        },
        {
            chapterName: "SOFTWARE ENGINEERING",
            description: "This is a very good chapter that is about software engineering fundamentals."
        },
        {
            chapterName: "ROBOTICS",
            description: "This is a very good chapter that is about robotics engineering fundamentals."
        },

    ]

    return (
        <div>
            {ourChapters.map((chapter) => {
                return (
                  <ChapterCard chapter ={chapter}/>
                )
            })}

        </div>

    );

}

export default ChapterCards;