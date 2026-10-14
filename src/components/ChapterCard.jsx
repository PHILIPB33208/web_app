function ChapterCard({chapter}) {


    let cardStyles = {
        border: '1px solid black',
        padding: '10px',
        width: "90%",
        backgroundColor: "rgb(203, 283, 238)",
        marginTop: "10px"
    }

    return (
        <div style={cardStyles} >
            <h2>{chapter.chapterName}</h2>
            <p>{chapter.description}</p>
        </div>
    );
}

export default ChapterCard;